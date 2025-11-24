document.addEventListener('DOMContentLoaded', function() {

    $("#ulMenu li a").on("click", function() {
      $("a").removeClass("active");
      $(this).addClass("active");
  });
      console.log("Hi, Welcome !");  
    // window.location.hash = 'presentation';
  scrollingNext();
    // typing();
  //  phonePlay();
    triPortfolio();
    currentPage();
    
     
    
  
  })
  
  
  function scrollingNext() {
    
    
    document.addEventListener("mouseover", function(event){
      var aPortfolio = document.getElementById('aPortfolio');
      var aHome = document.getElementById("aHome")
      var aContact=document.getElementById("aContact")
      
      let j = event.target
      var k = j.closest(".page")
      console.log(k);
      var e = "#" + k.id
      if(k.id == 'portfolio'){ 
        $(aContact).removeClass("active");
        $(aHome).removeClass("active");     
        $(aPortfolio).addClass("active");     
        // aContact.removeClass("active");
        // aHome.removeClass("active");
        // aPortfolio.addClass("active");
      }
      else if(k.id =='presentation'){
        $(aContact).removeClass("active");
        $(aPortfolio).removeClass("active");     
        $(aHome).addClass("active"); 
      }
      else if(k.id == 'contact'){
        $(aPortfolio).removeClass("active");
        $(aHome).removeClass("active");     
        $(aContact).addClass("active"); 
      }
  
    })
    
  }
    
  
  // document.addEventListener("mouseover", function(event){
  //     let j = event.target
      
  //     let k = j.closest('.page')
  //     let e = k.id
  //   let homeMenu = document.getElementById('homeMenu')
  //   let portfolioMenu = document.getElementById('portfolioMenu')
  //   let classesMenu = document.getElementById('classesMenu')
  //   let parametresMenu = document.getElementById('parametresMenu')
  //   let contactMenu = document.getElementById('contactMenu')
  
  //   if(e == "presentation"){
  //     homeMenu.classList.add("menuActive")
  //     portfolioMenu.classList.remove("menuActive")
  //     classesMenu.classList.remove("menuActive")
  //     parametresMenu.classList.remove("menuActive")
  //     contactMenu.classList.remove("menuActive")
  
  //   }
  //   else if(e == "portfolio"){
  //     homeMenu.classList.remove("menuActive")
  //     portfolioMenu.classList.add("menuActive")
  //     classesMenu.classList.remove("menuActive")
  //     parametresMenu.classList.remove("menuActive")
  //     contactMenu.classList.remove("menuActive")
   
  //   }
  //   else if(e == "classes"){
  //     homeMenu.classList.remove("menuActive")
  //     portfolioMenu.classList.remove("menuActive")
  //     classesMenu.classList.add("menuActive")
  //     parametresMenu.classList.remove("menuActive")
  //     contactMenu.classList.remove("menuActive")
   
  //   }
  //   else if(e == "parametres"){
  //     homeMenu.classList.remove("menuActive")
  //     portfolioMenu.classList.remove("menuActive")
  //     classesMenu.classList.remove("menuActive")
  //     parametresMenu.classList.add("menuActive")
  //     contactMenu.classList.remove("menuActive")
    
  //   }
  //   else if(e == "contact"){
  //     homeMenu.classList.remove("menuActive")
  //     portfolioMenu.classList.remove("menuActive")
  //     classesMenu.classList.remove("menuActive")
  //     parametresMenu.classList.remove("menuActive")
  //     contactMenu.classList.add("menuActive")
    
  //   }
  
  
  
  //   })
  
  
  // ----------------------- Menu scroll -----------------
  
  // document.addEventListener("scroll", function(){
  //   let winH = window.innerHeight
  //   let navmenu = document.getElementById('navmenu')
  //   let portfolioMenu = document.getElementById('liportfolioMenu')
  //   let classesMenu = document.getElementById('liclassesMenu')
  //   let parametresMenu = document.getElementById('liparametresMenu')
  //   let contactMenu = document.getElementById('licontactMenu')
   
  //   if(window.pageYOffset > winH / 1.5){
  
  //     navmenu.classList.add('menu-scroll')
  //     portfolioMenu.classList.add('portfoliomenu')
  //     classesMenu.classList.add('classesmenu')
  //     parametresMenu.classList.add('parametresmenu')
  //     contactMenu.classList.add('contactmenu')
  //   }
  //   else{
  //     navmenu.classList.remove('menu-scroll')
  //     portfolioMenu.classList.remove('portfoliomenu')
  //     classesMenu.classList.remove('classesmenu')
  //     parametresMenu.classList.remove('parametresmenu')
  //     contactMenu.classList.remove('contactmenu')
  //   }
  // });
  
  
    // ----------------------- Sort all my project of the portfolio-----------------------
  
  function triPortfolio(){
    var selectedClass = "";
    var btnFil = document.querySelectorAll(".button-filter")
    for(var i=0;i<btnFil.length;i++) {
      btnFil[i].addEventListener('click',function(){
        selectedClass = "."+this.dataset.rel; 
        var portfolio = document.querySelector("#items-portfolio");
        var portfolioDiv = document.querySelectorAll(".all");
        for(var j=0;j<portfolioDiv.length;j++) {
          portfolioDiv[j].style.display="none";
          var selectedDiv = portfolio.querySelectorAll(selectedClass)
          for (selDiv of selectedDiv){
            selDiv.style.display="block";
          } 
  
        }
      });
    }
  }
  
    // ----------------------- Make the effect of the first page good for phones -----------------------
  
  function presentationBlur(){
      if (window.matchMedia("(max-width: 450px)").matches){
        document.getElementById("joudPresentation").classList.add("h2hover")
        document.getElementById("image-presentation").classList.add("imghover")
    
        
      }
    }
  
  
  // ----------------------- Put the name of current page in orange when the user is on this one -----------------------
  
  function currentPage(){
    var menu = document.getElementsByClassName("menu")
    var i 
  
    for (i = 0; i < menu.length; i++) {
    menu[i].style.color = "white";  
    }
    // for (i = 0; i < langue.length; i++) {
    //   langue[i].style.color = "white";  
    //   }
  
    var urlcourante = document.location.href;           
    var urlcourante = urlcourante.replace(/\/$/, "");          
    queue_url = urlcourante.substring (urlcourante.lastIndexOf( "/" )+1 );
    queue = queue_url.replace("#","")
    queueReal = queue+"Menu"
    var hh = document.getElementById(queueReal)
    hh.style.color = "#e3b405";
  
  }
  
  
    // ----------------------- Change the color of the menu bar when we hover then to fit with each page -----------------------
  
    function hoverMenu(x){
  
      let portfolio = document.getElementById('portfolio')
      let classes = document.getElementById('classes')
      let parametres = document.getElementById('parametres')
      let contact = document.getElementById('contact')
      let portfolioMenu= document.getElementById('portfolioMenu')
  
      x.style.color = "#e3b405"
  
  
      // var urlcourante = document.location.href; 
      // var urlcourante = urlcourante.replace(/\/$/, "");
      // queue_url = urlcourante.substring (urlcourante.lastIndexOf( "/" )+1 );
      // queue = queue_url.replace("#","")
      // queueReal = queue+"Menu"
      // var hh = document.getElementById(queueReal)
      // if (x != hh)
      // {
      //   x.style.color = "#e3b405"
      // }
      
    }
  
    function hover(x){
      console.log(x)
      // let portfolio = document.getElementById('portfolio')
      // let classes = document.getElementById('classes')
      // let parametres = document.getElementById('parametres')
      // let contact = document.getElementById('contact')
      // let portfolioMenu= document.getElementById('portfolioMenu')
  
      // if(x = portfolio){
      //   portfolioMenu.style.color = "#e3b405"
      // }
    }
    
    // ----------------------- Change the color of the menu bar when we not hover then to fit with each page -----------------------
    
    function nothoverMenu(x){
    
      x.style.color = "white"
      // var urlcourante = document.location.href; 
      // var urlcourante = urlcourante.replace(/\/$/, "");
      // queue_url = urlcourante.substring (urlcourante.lastIndexOf( "/" )+1 );
      // queue = queue_url.replace("#","")
      // queueReal = queue+"Menu"
      // var hh = document.getElementById(queueReal)
      // if (x != hh)
      // {
      //   x.style.color = "white"
      // }
    }
    
    // ----------------------- Change the color of the menu bar when we click on then to fit with each page -----------------------
    
    function clickPage(){
      setTimeout(function(){
        currentPage()
        hideMenuSocial()
      },600)
    }
  
    var iText1 = 0 ;
  var iText2 = 0 ;
  
  
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
  
  
  // function phonePlay(){
    
        
  
  
  
  //   if (window.matchMedia("(min-device-width: 350px)").matches && window.matchMedia("(max-device-width: 767px)").matches){
      
  //     let phone = document.querySelectorAll('.videoCrea');
  //     phone.forEach(function(phones){
  //     phones.autoplay = true;
  //     phones.load();
  // });
  
  
  
  //   }
  // }
  
  
  
  // var figure = $(".video").hover(hoverVideo, hideVideo);
  
  // function hoverVideo(e) {
  //     $('video', this).get(0).play();
  // }
  
  // function hideVideo(e) {
  //     $('video', this).get(0).pause();
  // }