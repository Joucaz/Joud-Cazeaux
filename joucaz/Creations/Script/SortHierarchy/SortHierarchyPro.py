bl_info = {
    "name": "Object Sorting in Collections",
    "description": "Automatically sorts objects into collections based on various criteria.",
    "author": "Joucaz",
    "version": (1, 0, 0),
    "blender": (3, 90, 0),
    "location": "View3D > Object -> Sort Objects",
    "category": "Object",
}

import bpy

class OBJECT_OT_sort_objects(bpy.types.Operator):
    """Sort objects into collections based on chosen criteria"""
    bl_idname = "object.sort_objects"
    bl_label = "Sort Objects"
    bl_options = {'REGISTER', 'UNDO'}

    sort_by: bpy.props.EnumProperty(
        name="Sort by",
        description="Choose the sorting criterion",
        items=[
            ('TYPE', "Object Type", "Sort objects by object type"),
            ('MATERIAL', "Material", "Sort objects by material"),
            ('DISTANCE', "Distance to Camera", "Sort objects by distance to the active camera"),
        ],
        default='TYPE',
    )
    
    collection_name: bpy.props.EnumProperty(
        name="Collection",
        description="Choose a collection to sort",
        items=lambda self, context: [
            (" ", " ", "Select a collection")
        ] + [
            ("scene_collection", "Scene Collection", "The main collection of the scene")
        ] + [
            (col.name, col.name, "") for col in bpy.data.collections if col.name != bpy.context.scene.collection.name
        ],
    )

    def execute(self, context):
        if self.collection_name != ' ':
            if self.sort_by == 'MATERIAL':
                sort_objects_by_material(self.collection_name)
            elif self.sort_by == 'TYPE':
                sort_objects_by_type(self.collection_name)
            elif self.sort_by == 'DISTANCE':
                sort_objects_by_distance(self.collection_name)
            
            sort_collections_alphabetically()
        
        return {'FINISHED'}

def sort_objects_by_material(collection_name):
    if collection_name == "scene_collection":
        target_collection = bpy.context.scene.objects
    else:
        target_collection = bpy.data.collections.get(collection_name).objects
    
    material_collections = {}

    for obj in target_collection:
        if obj.type == 'MESH' and obj.active_material:
            mat = obj.active_material
            if mat not in material_collections:
                material_collections[mat] = bpy.data.collections.new(mat.name)
                bpy.context.scene.collection.children.link(material_collections[mat])
            
            target_collection = material_collections[mat]
            
            for col in obj.users_collection:
                col.objects.unlink(obj)

            target_collection.objects.link(obj)

def sort_objects_by_type(collection_name):
    if collection_name == "scene_collection":
        target_collection = bpy.context.scene.objects
    else:
        target_collection = bpy.data.collections.get(collection_name).objects
    
    type_collections = {}

    for obj in target_collection:
        obj_type = obj.type
        if obj_type not in type_collections:
            type_collections[obj_type] = bpy.data.collections.new(obj_type)
            bpy.context.scene.collection.children.link(type_collections[obj_type])

        target_collection = type_collections[obj_type]

        for col in obj.users_collection:
            col.objects.unlink(obj)
            
        target_collection.objects.link(obj)

def sort_objects_by_distance(collection_name):
    camera = bpy.context.scene.camera
    if not camera:
        print("No active camera in the scene.")
        return

    distance_collections = {
        "Foreground": bpy.data.collections.new("Foreground"),
        "Midground": bpy.data.collections.new("Midground"),
        "Background": bpy.data.collections.new("Background"),
    }

    for col in distance_collections.values():
        bpy.context.scene.collection.children.link(col)
        
    if collection_name == "scene_collection":
        target_collection = bpy.context.scene.objects
    else:
        target_collection = bpy.data.collections.get(collection_name).objects

    for obj in target_collection:
        if obj.type == 'MESH':
            distance = (camera.location - obj.location).length

            if distance < 10:
                collection_name = "Foreground"
            elif distance < 30:
                collection_name = "Midground"
            else:
                collection_name = "Background"
                
            target_collection = distance_collections[collection_name]

            for col in obj.users_collection:
                col.objects.unlink(obj)
                
            target_collection.objects.link(obj)

def sort_collections_alphabetically():
    collections = bpy.context.scene.collection.children
    sorted_collections = sorted(collections, key=lambda col: col.name)

    for col in collections:
        bpy.context.scene.collection.children.unlink(col)
    for col in sorted_collections:
        bpy.context.scene.collection.children.link(col)

def menu_func(self, context):        
    self.layout.operator(OBJECT_OT_sort_objects.bl_idname)

def register():
    bpy.utils.register_class(OBJECT_OT_sort_objects)
    bpy.types.VIEW3D_MT_object.append(menu_func)

def unregister():
    bpy.types.VIEW3D_MT_object.remove(menu_func)
    bpy.utils.unregister_class(OBJECT_OT_sort_objects)

if __name__ == "__main__":
    try:
        unregister()
    except:
        pass
    register()
