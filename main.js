

menuSection()




document.addEventListener('DOMContentLoaded', function () { 
    console.log("Hi, Welcome !"); 
    // window.location.hash = 'presentation'; 
    // visible();

    isVisible();
    presentationBlur();
    portfolioCarousel(); 
    callTyping(); 
    triPortfolio(); 
    // changeSRC();
    

        

    
    
    

})

// document.addEventListener("wheel", animReseaux)

// function animReseaux(){
//   let network = document.getElementById("image-fixed")

//   // network.classList.add("animated")
        
//         setTimeout(function () { 
//           console.log("timeout")
//             network.classList.add("slideInTop") 
//         }, 300)
//         network.classList.remove("slideInTop")
//         console.log("not")
// }



function isVisible(){
    var observer = new IntersectionObserver(function(entries) {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if(entries[0].isIntersecting === true)
            console.log("true")
        }, { threshold: [0] });
    
        observer.observe(document.querySelector("#about-presentation"));
}


function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}


// create a one-time event
function onetime(node, type, callback) {

	// create event
	node.addEventListener(type, function(e) {
		// remove event
		e.target.removeEventListener(e.type, arguments.callee);
		// call handler
		return callback(e);
	});

}

function callTyping(){
    
    var jeSuis = document.querySelector("#jesuis")
    console.log(jesuis)

    onetime(jesuis, "mouseover", typing);
    
}


var iText1 = 0; 
var iText2 = 0; 

function typing() {


    var urlcourante = document.location.pathname; 
    
    
    if (urlcourante.match('/en/')) {
        var textQuoi1 = "Developer"
        var textQuoi2 = "Athlete"
    } 
    else if (urlcourante.match('/fr/')) {
        var textQuoi1 = "Développeur"
        var textQuoi2 = "Athlète"
    }
    
    
        if (iText1 < textQuoi1.length) {
            document.getElementById("quoi").classList.add("fadeQuoi")
            document.getElementById("quoi").innerHTML += textQuoi1.charAt(iText1); iText1++; 
            setTimeout(typing, 150)
        } 
        else if (iText2 < textQuoi2.length) {
            document.getElementById("quoi2").classList.add("fadeQuoi")
            document.getElementById("quoi2").innerHTML += textQuoi2.charAt(iText2); iText2++
            setTimeout(typing, 150)
        } 
        else {
            setTimeout(function () {
                document.getElementById("quoi").classList.remove("fadeQuoi")
                document.getElementById('quoi').innerHTML = ''
                iText1 = 0
                document.getElementById("quoi2").classList.remove("fadeQuoi")
                document.getElementById('quoi2').innerHTML = ''
                iText2 = 0
                setTimeout(typing, 150)
            }, 1000)
        }
    
    
}

function menuSection() {
  
    // $("#ulMenu li a").on("click", function() {
    //     $("a").removeClass("activeMenu");
    //     $(this).addClass("activeMenu");
    // });
  
    document.addEventListener("mouseover", function(event){

    let ahomeMenu = document.getElementById('homeMenu')
    let aaboutMenu = document.getElementById('aboutMenu')
    let askillsMenu = document.getElementById('skillsMenu')
    let acareerMenu = document.getElementById('careerMenu')
    let aportfolioMenu = document.getElementById('portfolioMenu')
    let acontactMenu = document.getElementById('contactMenu')
    let network = document.getElementById("image-fixed")
    let instagram = document.getElementById("instagram")
    let facebook = document.getElementById("facebook")
    let linkedin = document.getElementById("linkedin")
    let mail = document.getElementById("mail")
      
      
    let j = event.target
    var k = j.closest(".page")
    // console.log(k);
    var e = "#" + k.id
    if(k.id == 'home'){ 
        aaboutMenu.classList.remove("activeMenu");
        askillsMenu.classList.remove("activeMenu");   
        acareerMenu.classList.remove("activeMenu"); 
        aportfolioMenu.classList.remove("activeMenu"); 
        acontactMenu.classList.remove("activeMenu");   
        ahomeMenu.classList.add("activeMenu");     
        instagram.src = "../images/Reseaux/instagramblanc.png"
        facebook.src = "../images/Reseaux/facebookblanc.png"
        linkedin.src = "../images/Reseaux/linkedinblanc.png"
        mail.src = "../images/Reseaux/mailblanc.png"
        github.src = "../images/Reseaux/github.png"
        // network.classList.add("animated")
        // network.classList.add("slideInTop")
        // setTimeout(function () { 
        //     network.classList.remove("slideInTop") 
        // }, 1550)

        
      }
      else if(k.id =='about'){
        ahomeMenu.classList.remove("activeMenu");
        askillsMenu.classList.remove("activeMenu");   
        acareerMenu.classList.remove("activeMenu"); 
        aportfolioMenu.classList.remove("activeMenu"); 
        acontactMenu.classList.remove("activeMenu");   
        aaboutMenu.classList.add("activeMenu");  
        // network.classList.add("animated")
        
        instagram.src = "../images/Reseaux/instagramnoir.png"
        facebook.src = "../images/Reseaux/facebooknoir.png"
        linkedin.src = "../images/Reseaux/linkedinnoir.png"
        mail.src = "../images/Reseaux/mailnoir.png"
        github.src = "../images/Reseaux/githubNoir.png"
        // network.style.display = "block"
        // network.classList.add("slideInTop")
        // setTimeout(function () { 
        //     network.classList.remove("slideInTop") 
        // }, 1550)
      }
      else if(k.id == 'skills'){
        aaboutMenu.classList.remove("activeMenu");
        ahomeMenu.classList.remove("activeMenu");   
        acareerMenu.classList.remove("activeMenu"); 
        aportfolioMenu.classList.remove("activeMenu"); 
        acontactMenu.classList.remove("activeMenu");   
        askillsMenu.classList.add("activeMenu");  
        instagram.src = "../images/Reseaux/instagramblanc.png"
        facebook.src = "../images/Reseaux/facebookblanc.png"
        linkedin.src = "../images/Reseaux/linkedinblanc.png"
        mail.src = "../images/Reseaux/mailblanc.png"
        github.src = "../images/Reseaux/github.png"
        
        // network.classList.add("slideInTop")
        // setTimeout(function () { 
        //     network.classList.remove("slideInTop") 
        // }, 1550)
      }
      else if(k.id == 'career'){
        aaboutMenu.classList.remove("activeMenu");
        askillsMenu.classList.remove("activeMenu");   
        ahomeMenu.classList.remove("activeMenu"); 
        aportfolioMenu.classList.remove("activeMenu"); 
        acontactMenu.classList.remove("activeMenu");   
        acareerMenu.classList.add("activeMenu");  
        instagram.src = "../images/Reseaux/instagramnoir.png"
        facebook.src = "../images/Reseaux/facebooknoir.png"
        linkedin.src = "../images/Reseaux/linkedinnoir.png"
        mail.src = "../images/Reseaux/mailnoir.png"
        github.src = "../images/Reseaux/githubNoir.png"
        
        // network.classList.add("slideInTop")
        // setTimeout(function () { 
        //     network.classList.remove("slideInTop") 
        // }, 1550)
        
      }
      else if(k.id == 'portfolio'){
        aaboutMenu.classList.remove("activeMenu");
        askillsMenu.classList.remove("activeMenu");   
        acareerMenu.classList.remove("activeMenu"); 
        ahomeMenu.classList.remove("activeMenu"); 
        acontactMenu.classList.remove("activeMenu");   
        aportfolioMenu.classList.add("activeMenu");  
        instagram.src = "../images/Reseaux/instagramblanc.png"
        facebook.src = "../images/Reseaux/facebookblanc.png"
        linkedin.src = "../images/Reseaux/linkedinblanc.png"
        mail.src = "../images/Reseaux/mailblanc.png"
        github.src = "../images/Reseaux/github.png"
        
        // network.classList.add("slideInTop")
        // setTimeout(function () { 
        //     network.classList.remove("slideInTop") 
        // }, 1550)
        
      }
      else if(k.id == 'contact'){
        aaboutMenu.classList.remove("activeMenu");
        askillsMenu.classList.remove("activeMenu");   
        acareerMenu.classList.remove("activeMenu"); 
        aportfolioMenu.classList.remove("activeMenu"); 
        ahomeMenu.classList.remove("activeMenu");   
        acontactMenu.classList.add("activeMenu");  
        instagram.src = "../images/Reseaux/instagramnoir.png"
        facebook.src = "../images/Reseaux/facebooknoir.png"
        linkedin.src = "../images/Reseaux/linkedinnoir.png"
        mail.src = "../images/Reseaux/mailnoir.png"
        github.src = "../images/Reseaux/githubNoir.png"
        
        // network.classList.add("slideInTop")
        // setTimeout(function () { 
        //     network.classList.remove("slideInTop") 
        // }, 1550)
        
      }
  
    })
    
  }

// function changeSRC(){
//   var img = document.querySelector("#image-fixed img"),
//   changer = new MutationObserver((changes) => {
//   changes.forEach(change => {
//     if(change.attributeName.includes('src')){
//       console.log('trop cool')
//     }
//     });
//   });
//   changer.observe(img, {attributes : true});
// }

var slideIndex = 1; showSlides(slideIndex); function plusSlides(n) { showSlides(slideIndex += n) }

function currentSlide(n) { 
    showSlides(slideIndex = n) 
}

function showSlides(n) {
    var i; var slides = document.getElementsByClassName("mySlides"); var dots = document.getElementsByClassName("dot"); if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) { slides[i].style.display = "none" }
    for (i = 0; i < dots.length; i++) { dots[i].className = dots[i].className.replace(" active", "") }
    slides[slideIndex - 1].style.display = "block"; dots[slideIndex - 1].className += " active"
}

function triPortfolio() {
    var selectedClass = ""; var btnFil = document.querySelectorAll(".button-filter")
    for (var i = 0; i < btnFil.length; i++) {
        btnFil[i].addEventListener('click', function () {
            selectedClass = "." + this.dataset.rel; 
            var portfolio = document.querySelector("#items-portfolio"); 
            var portfolioDiv = document.querySelectorAll(".all"); 
            for (var j = 0; j < portfolioDiv.length; j++) {
                portfolioDiv[j].style.display = "none"; 
                var selectedDiv = portfolio.querySelectorAll(selectedClass)
                for (selDiv of selectedDiv) { 
                    selDiv.style.display = "block"
                }
            }
        })
    }
}

function presentationBlur() {
    if (window.matchMedia("(max-width: 450px)").matches) {
        typing();
    }
}

function portfolioCarousel() {
    const gap = 16; 
    const carousel = document.getElementById("carousel"), 
    content = document.getElementById("content"), 
    next = document.getElementById("next"), 
    prev = document.getElementById("prev"); 
    next.addEventListener("click", e => {
        console.log(width)
        carousel.scrollBy(width + gap, 0); 
            if (carousel.scrollWidth !== 0) { 
                prev.style.display = "flex" 
            }
            if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) { 
                next.style.display = "none" 
            }
    }); 
    prev.addEventListener("click", e => {
        carousel.scrollBy(-(width + gap), 0); 
            if (carousel.scrollLeft - width - gap <= 0) { 
                prev.style.display = "none" 
            }
            if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) { 
                next.style.display = "flex" 
            }
    }); 
    let width = carousel.offsetWidth; 
    window.addEventListener("resize", e => (width = carousel.offsetWidth))
}

// var compteD = 0
// var compteM = 0

// var getNextSibling = function (elem, selector) { 
//     var sibling = elem.nextElementSibling; 
//     while (sibling) { 
//         if (sibling.matches(selector)) { 
//             return sibling 
//         } 
//         else { 
//             sibling = sibling.nextElementSibling 
//         } 
//     } 
// }; 

// var getPreviousSibling = function (elem, selector) { 
//     var sibling = elem.previousElementSibling; 
//     while (sibling) { 
//         if (sibling.matches(selector)) { 
//             return sibling 
//         } 
//         else { 
//             sibling = sibling.previousElementSibling 
//         } 
//     } 
// }

// function disable() {
//     console.log("disable")
//     document.removeEventListener('mousewheel', scrollTesla);
//     document.removeEventListener('DOMMouseScroll', scrollTesla);
//     }
    
//     function enable() {
//     document.addEventListener('mousewheel', scrollTesla);
//     document.addEventListener('DOMMouseScroll', scrollTesla);
//     }


//     scrollTesla();
//     function scrollTesla(){


// document.addEventListener("wheel", function(event){
//     console.log(event.target)
//     disable() ; 
    // setTimeout(() => {
    //     enable();
    // }, 3000);

//     var scroll = event.deltaY; 
//     var scrollDown = scroll > 0; 
//     var scrollUp = scroll < 0; 
//     console.log(event.target)
//     if (scrollDown) { 
//         compteD += 1 
//     } 
//     if (scrollUp) { 
//         compteM += 1 
//     }

//     if (compteD = 1) {
      
//         setTimeout(function () {

//             scrollingNext(event)
//             hideMenuSocial()
//             currentPage()
            
//         }
//         , 500)
//     } 

//     if (compteM >= 1) {
//             setTimeout(function () {
//             scrollingPrevious(event)
//             hideMenuSocial()
//             currentPage()
//         }, 600)
//     }
//     setTimeout(function () {
//         compteD = 0
//         compteM = 0
//     }, 100)
    
// },)
// }



/*
document.addEventListener("wheel", function scroll(event) {
    var scroll = event.deltaY; 
    var scrollDown = scroll > 0; 
    var scrollUp = scroll < 0; 

    // console.log(scrollDown)
    console.log(event.target)
    
    if (scrollDown) { 
        compteD += 1 
        // compteM = 0 
    } 
    if (scrollUp) { 
        compteM += 1 
        // compteD = 0
    }

   

    console.log(compteD)
    // console.log(compteM)

    if (compteD = 1) {
      
        setTimeout(function () {

            scrollingNext(event)
            hideMenuSocial()
            currentPage()
            

            // if (window.matchMedia("(min-width: 450px)").matches) { 
            //     scrollPercent() 
            // }
        }
        , 500)
    } 

    if (compteM >= 1) {
            setTimeout(function () {
            scrollingPrevious(event)
            hideMenuSocial()
            currentPage()

            // if (window.matchMedia("(min-width: 450px)").matches) { 
            //     scrollPercent() 
            // }
        }, 600)
    }
    setTimeout(function () {
        compteD = 0
        compteM = 0
    }, 100)
})

*/


// function scrollingNext(event) {

    
//     let j = event.target
//     var k = j.closest(".page")
//     var nextStop = getNextSibling(k, '.page'); 
//     var e = "#" + nextStop.id
//     location.href = "#"; 
//     location.href = e;
    
    

// }

// function scrollingPrevious(event) {
//     let j = event.target
//     var k = j.closest(".page")
//     var previousStop = getPreviousSibling(k, '.page'); 
//     var e = "#" + previousStop.id
//     location.href = "#"; 
//     location.href = e
// }


// document.addEventListener("scroll", function () {
//     let winH = window.innerHeight
//     let navmenu = document.getElementById('navmenu')
//     let lihomeMenu = document.getElementById('lihomeMenu')
//     let liaboutMenu = document.getElementById('liaboutMenu')
//     let liskillsMenu = document.getElementById('liskillsMenu')
//     let licareerMenu = document.getElementById('licareerMenu')
//     let liportfolioMenu = document.getElementById('liportfolioMenu')
//     if (window.pageYOffset > winH / 1.5) {
//         navmenu.classList.add('menu-scroll')
//         lihomeMenu.classList.add('homemenu')
//         liaboutMenu.classList.add('aboutmenu')
//         liskillsMenu.classList.add('skillsmenu')
//         licareerMenu.classList.add('careermenu')
//         liportfolioMenu.classList.add('portfoliomenu')
//     } else {
//         navmenu.classList.remove('menu-scroll')
//         lihomeMenu.classList.remove('homemenu')
//         liaboutMenu.classList.remove('aboutmenu')
//         liskillsMenu.classList.remove('skillsmenu')
//         licareerMenu.classList.remove('careermenu')
//         liportfolioMenu.classList.remove('portfoliomenu')
//     }
// }); 




// function currentPage() {
//     var menu = document.getElementsByClassName("menu")
//     var i
//     for (i = 0; i < menu.length; i++) { 
//         menu[i].style.color = "white" 
//     }
//     for (i = 0; i < langue.length; i++) { langue[i].style.color = "white" }
//     var urlcourante = document.location.href; var urlcourante = urlcourante.replace(/\/$/, ""); queue_url = urlcourante.substring(urlcourante.lastIndexOf("/") + 1); queue = queue_url.replace("#", "")
//     queueReal = queue + "Menu"
//     var hh = document.getElementById(queueReal)
//     hh.style.color = "#e3b405"
// }

// function hideMenuSocial() {

//     var urlcourante = document.location.href; 
//     var urlcourante = urlcourante.replace(/\/$/, ""); 
//     queue_url = urlcourante.substring(urlcourante.lastIndexOf("/") + 1); 

//     let navmenu = document.getElementById("navmenu")
//     let langue = document.getElementById("langue")
//     let network = document.getElementById("image-fixed")
//     let instagram = document.getElementById("instagram")
//     let facebook = document.getElementById("facebook")
//     let linkedin = document.getElementById("linkedin")
//     let mail = document.getElementById("mail")

//     if (queue_url == "#presentation" && window.matchMedia("(min-device-width: 350px)").matches && window.matchMedia("(max-device-width: 767px)").matches) {
//         langue.style.display = "block"
//         navmenu.style.display = "none"
//         network.style.display = "block"
//     } 
//     else if (queue_url == "#presentation") { network.style.display = "block" } else if (window.matchMedia("(max-width: 450px)").matches) {
//         navmenu.style.display = "none"
//         network.style.display = "none"
//     } 
//     else if (queue_url == "#career" || queue_url == "#about") {
//         // console.log("a")
//         network.classList.add("slideInTop")
//         setTimeout(function () { network.classList.remove("slideInTop") }, 1550)
//         instagram.src = "../images/Reseaux/instagramnoir.png"
//         facebook.src = "../images/Reseaux/facebooknoir.png"
//         linkedin.src = "../images/Reseaux/linkedinnoir.png"
//         mail.src = "../images/Reseaux/mailnoir.png"
//         network.style.display = "block"
//     } 
//     else if (queue_url == "#contact") { network.style.display = "none" } else {
//         network.classList.add("slideInTop")
//         setTimeout(function () { network.classList.remove("slideInTop") }, 1550)
//         instagram.src = "../images/Reseaux/instagramblanc.png"
//         facebook.src = "../images/Reseaux/facebookblanc.png"
//         linkedin.src = "../images/Reseaux/linkedinblanc.png"
//         mail.src = "../images/Reseaux/mailblanc.png"
//         navmenu.style.display = "block"
//         network.style.display = "block"
//         langue.style.display = "block"
//     }
// }


    

// function hoverMenu(x) {
//     var urlcourante = document.location.href; var urlcourante = urlcourante.replace(/\/$/, ""); queue_url = urlcourante.substring(urlcourante.lastIndexOf("/") + 1); queue = queue_url.replace("#", "")
//     queueReal = queue + "Menu"
//     var hh = document.getElementById(queueReal)
//     if (x != hh) { x.style.color = "#e3b405" }
// }

// function nothoverMenu(x) {
//     var urlcourante = document.location.href; var urlcourante = urlcourante.replace(/\/$/, ""); queue_url = urlcourante.substring(urlcourante.lastIndexOf("/") + 1); queue = queue_url.replace("#", "")
//     queueReal = queue + "Menu"
//     var hh = document.getElementById(queueReal)
//     if (x != hh) { x.style.color = "white" }
// }

// function clickPage() {
//     setTimeout(function () {
//         currentPage()
//         hideMenuSocial()
//     }, 600)
// }


