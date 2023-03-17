document.addEventListener('DOMContentLoaded', function() {

	console.log("Hi, Welcome !");
  window.location.hash = 'presentation';
  
  
  test();
  typing();
  triPortfolio();
  hideMenuSocial();
  // currentPage();
  
  

})

//----------------------- Make on effect of typing on the text -----------------------

var iText1 = 0 ;
var iText2 = 0 ;
var iText3 = 0 ;

function typing(){

  var urlcourante = document.location.pathname;

  if (urlcourante.match('/en/')){
    var textQuoi1 = "Programmer"
    var textQuoi2 = "Profesionnal Athlete"
    var textQuoi3 = "3D Modeling - Animation - Motion Design"
  }
  else if (urlcourante.match('/fr/')){
    var textQuoi1 = "Développeur"
    var textQuoi2 = "Athlète Professionnel"
  }
  
  if (iText1<textQuoi1.length){
    document.getElementById("quoi").classList.add("fadeQuoi")
    document.getElementById("quoi").innerHTML += textQuoi1.charAt(iText1);
    iText1++;
    setTimeout(typing,100)
    
  }
  else if (iText2<textQuoi2.length){
    document.getElementById("quoi2").classList.add("fadeQuoi")
    document.getElementById("quoi2").innerHTML += textQuoi2.charAt(iText2);
    iText2++
    setTimeout(typing,100)
  }
  else if (iText3<textQuoi3.length){
    document.getElementById("quoi3").classList.add("fadeQuoi")
    document.getElementById("quoi3").innerHTML += textQuoi3.charAt(iText3);
    iText3++
    setTimeout(typing,100)
  }
  else{
    setTimeout(function(){
      document.getElementById("quoi").classList.remove("fadeQuoi")
      document.getElementById('quoi').innerHTML = ''
      iText1 = 0
      document.getElementById("quoi2").classList.remove("fadeQuoi")
      document.getElementById('quoi2').innerHTML = ''
      iText2 = 0
      setTimeout(typing,100)
    }, 1000)
  }
  

}

  var compteD = 0
  var compteM = 0


// ----------------------- Select the next element with a condition -----------------------

var getNextSibling = function (elem, selector) {

  var sibling = elem.nextElementSibling;

  while (sibling) {
    if (sibling.matches(selector)){
      return sibling;
    } 
    else{
          sibling = sibling.nextElementSibling
    }
  }

};

// ----------------------- Select the previous element with a condition -----------------------

var getPreviousSibling = function (elem, selector) {

  var sibling = elem.previousElementSibling;

  while (sibling) {
    if (sibling.matches(selector)){
      return sibling;
    } 
    else{
          sibling = sibling.previousElementSibling
    }
  }

}

// ----------------------- Go to the next div (page) when you make the event "mousewheel" -----------------------

document.addEventListener("wheel", function scroll(event) {
           
          var scroll = event.deltaY;
          var scrollDown = scroll > 0;
          var scrollUp = scroll < 0;        
  
          if (scrollDown) {
            compteD += 1
          } 
          else if (scrollUp) {
            compteM += 1
          }

          
      setTimeout(function(){
        compteD = 0 
        compteM = 0
      },1000)

      if (compteD >= 1){
        
        
        setTimeout(function(){
       
          scrollingNext(event)
          hideMenuSocial()
          currentPage()
          if (window.matchMedia("(min-width: 450px)").matches){
          scrollPercent()
          }

          
        },600)

      }
      else if (compteM >= 1){

        setTimeout(function(){
          
          scrollingPrevious(event)
          hideMenuSocial()
          currentPage()
          if (window.matchMedia("(min-width: 450px)").matches){
            scrollPercent()
            }


        },600)
      }
})

// ----------------------- Menu scroll -----------------

document.addEventListener("scroll", function(){
  let winH = window.innerHeight
  let navmenu = document.getElementById('navmenu')
  let lihomeMenu = document.getElementById('lihomeMenu')
  let liaboutMenu = document.getElementById('liaboutMenu')
  let liskillsMenu = document.getElementById('liskillsMenu')
  let licareerMenu = document.getElementById('licareerMenu')
  let liportfolioMenu = document.getElementById('liportfolioMenu')

  // let homeMenu = document.getElementById('homeMenu')
  // let aboutMenu = document.getElementById('aboutMenu')
  // let skillsMenu = document.getElementById('skillsMenu')
  // let careerMenu = document.getElementById('careerMenu')
  // let portfolioMenu = document.getElementById('portfolioMenu')
  // let contactMenu = document.getElementById('contactMenu')

  if(window.pageYOffset > winH / 1.5){

    navmenu.classList.add('menu-scroll')
    lihomeMenu.classList.add('homemenu')
    liaboutMenu.classList.add('aboutmenu')
    liskillsMenu.classList.add('skillsmenu')
    licareerMenu.classList.add('careermenu')
    liportfolioMenu.classList.add('portfoliomenu')

    // homeMenu.classList.add('aHover')
    // aboutMenu.classList.add('aHover')
    // skillsMenu.classList.add('aHover')
    // careerMenu.classList.add('aHover')
    // portfolioMenu.classList.add('aHover')
    // contactMenu.classList.add('aHover')
  }
  else{
    navmenu.classList.remove('menu-scroll')
    lihomeMenu.classList.remove('homemenu')
    liaboutMenu.classList.remove('aboutmenu')
    liskillsMenu.classList.remove('skillsmenu')
    licareerMenu.classList.remove('careermenu')
    liportfolioMenu.classList.remove('portfoliomenu')

    // homeMenu.classList.remove('aHover')
    // aboutMenu.classList.remove('aHover')
    // skillsMenu.classList.remove('aHover')
    // careerMenu.classList.remove('aHover')
    // portfolioMenu.classList.remove('aHover')
    // contactMenu.classList.remove('aHover')
  }
});
// ----------------------- Find the closest next div with the class 'page' -----------------------

function scrollingNext(event){
  let j = event.target
  var k = j.closest(".page")
  var nextStop = getNextSibling(k, '.page');
  var e = "#"+nextStop.id
  location.href = "#";
  location.href = e;
}

// ----------------------- Find the closest previous div with the class 'page' -----------------------

function scrollingPrevious(event){
  let j = event.target
  var k = j.closest(".page")
  var previousStop = getPreviousSibling(k, '.page');
  var e = "#"+previousStop.id
  location.href = "#";
  location.href = e;
}

// ----------------------- Calculate the scroll percentage of the page and make appear element with a transition -----------------------

// function scrollPercent(){

//   var scrollTop = document.scrollingElement.scrollTop,
//   windowHeight = window.innerHeight,
//   scrollheight = document.body.scrollHeight;
//   let scrollPercentage = (scrollTop / (scrollheight - windowHeight) * 100);
  
//   if (scrollPercentage < 15){
//     document.getElementById("jesuis").classList.add("fadeIn")
//   }
//   else if (scrollPercentage >= 15 && scrollPercentage < 30){
//     document.getElementById("about-presentation").classList.add("fadeIn")
//   }
//   else if (scrollPercentage >= 30 && scrollPercentage < 45){
//     document.getElementById("image-fixed").classList.remove("slideInTop")
//     var progress = document.querySelectorAll(".progress, .progressP")
//       progress.forEach(progressElement => progressElement.classList.add("skillsAnim"));

//     document.getElementById("container-personalSkills").classList.add("fadeIn")
//   }
//   else if(scrollPercentage >=45 && scrollPercentage < 60){
//     var careerLeft = document.querySelectorAll(".career-left")
//       careerLeft.forEach(careerLeftElement => careerLeftElement.classList.add("slideInLeft"))
//     var careerRight = document.querySelectorAll(".career-right")
//       careerRight.forEach(careerRightElement => careerRightElement.classList.add("slideInRight"))
//   }
//   else if(scrollPercentage >=60 && scrollPercentage < 75){
//     document.getElementById("items-portfolio").classList.add("slideInDown")
//     document.getElementById("button-portfolio").classList.add("fadeIn")
//   }
//   else if(scrollPercentage >= 75 && scrollPercentage < 90){
//     var imgRef = document.querySelectorAll(".img-reference")
//       imgRef.forEach(imgRefElement => imgRefElement.classList.add("slideInLeft"))
//     var textRef = document.querySelectorAll(".info-prof")
//       textRef.forEach(textRefElement => textRefElement.classList.add("fadeIn"))
//     var resContact = document.querySelectorAll(".reseauxContact")
//       resContact.forEach(resContactElement => resContactElement.classList.add("fadeIn"))
//     var otherInfo = document.querySelectorAll(".contact-oneInfo")
//       otherInfo.forEach(otherInfoElement => otherInfoElement.classList.add("fadeIn"))
//   }
// }

// ----------------------- Show the different pictures and go the next or the previous -----------------------

 var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
  var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) 
		{slideIndex = 1}    
	if (n < 1) 
		{slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
  }
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
}

// ----------------------- Put the name of current page in orange when the user is on this one -----------------------

function currentPage(){
          var menu = document.getElementsByClassName("menu")
          var i 

          for (i = 0; i < menu.length; i++) {
          menu[i].style.color = "white";  
          }
          for (i = 0; i < langue.length; i++) {
            langue[i].style.color = "white";  
            }

          var urlcourante = document.location.href;           
          var urlcourante = urlcourante.replace(/\/$/, "");          
          queue_url = urlcourante.substring (urlcourante.lastIndexOf( "/" )+1 );
          queue = queue_url.replace("#","")
          queueReal = queue+"Menu"
          var hh = document.getElementById(queueReal)
          hh.style.color = "#e3b405";

}

// ----------------------- Hide or change the color of the menu bar and social networks to fit with each page -----------------------

function hideMenuSocial(){
  var urlcourante = document.location.href; 
  var urlcourante = urlcourante.replace(/\/$/, "");
  queue_url = urlcourante.substring (urlcourante.lastIndexOf( "/" )+1 );
  
  let navmenu = document.getElementById("navmenu")
  let langue = document.getElementById("langue")
  let network = document.getElementById("image-fixed")

  let instagram = document.getElementById("instagram")
  let facebook = document.getElementById("facebook")
  let linkedin = document.getElementById("linkedin")
  let mail = document.getElementById("mail")
  
  if(queue_url == "#presentation" && window.matchMedia("(min-device-width: 350px)").matches && window.matchMedia("(max-device-width: 767px)").matches){
    langue.style.display = "block"
    navmenu.style.display = "none"
    network.style.display = "block"
  }
  else if(queue_url == "#presentation")
  {
    // navmenu.style.display = "block"
    network.style.display = "block"
    // langue.style.display = "block"

    
  }
  else if(window.matchMedia("(max-width: 450px)").matches){
    navmenu.style.display = "none"
    network.style.display = "none"
  }
  else if (queue_url == "#career" || queue_url == "#about"){
    console.log("a")
    network.classList.add("slideInTop")
    setTimeout(function(){
    network.classList.remove("slideInTop")
    },1550)
    instagram.src = "../images/Reseaux/instagramnoir.png"
    facebook.src = "../images/Reseaux/facebooknoir.png"
    linkedin.src = "../images/Reseaux/linkedinnoir.png"
    mail.src = "../images/Reseaux/mailnoir.png"
    // navmenu.style.display = "block"
    network.style.display = "block"
    // langue.style.display = "block"
  }
  else if (queue_url == "#contact"){
    //  navmenu.style.display = "block"
     network.style.display = "none"
    //  langue.style.display = "block"
  }
  else {
    network.classList.add("slideInTop")
    setTimeout(function(){
    network.classList.remove("slideInTop")
    },1550)
    instagram.src = "../images/Reseaux/instagramblanc.png"
    facebook.src = "../images/Reseaux/facebookblanc.png"
    linkedin.src = "../images/Reseaux/linkedinblanc.png"
    mail.src = "../images/Reseaux/mailblanc.png"
    navmenu.style.display = "block"
    network.style.display = "block"
    langue.style.display = "block"
  }
  
}

// ----------------------- Change the color of the menu bar when we hover then to fit with each page -----------------------

function hoverMenu(x){
  var urlcourante = document.location.href; 
  var urlcourante = urlcourante.replace(/\/$/, "");
  queue_url = urlcourante.substring (urlcourante.lastIndexOf( "/" )+1 );
  queue = queue_url.replace("#","")
  queueReal = queue+"Menu"
  var hh = document.getElementById(queueReal)
  if (x != hh)
  {
    x.style.color = "#e3b405"
  }
  
}

// ----------------------- Change the color of the menu bar when we not hover then to fit with each page -----------------------

function nothoverMenu(x){

  var urlcourante = document.location.href; 
  var urlcourante = urlcourante.replace(/\/$/, "");
  queue_url = urlcourante.substring (urlcourante.lastIndexOf( "/" )+1 );
  queue = queue_url.replace("#","")
  queueReal = queue+"Menu"
  var hh = document.getElementById(queueReal)
  if (x != hh)
  {
    x.style.color = "white"
  }
}

// ----------------------- Change the color of the menu bar when we click on then to fit with each page -----------------------

function clickPage(){
  setTimeout(function(){
    currentPage()
    hideMenuSocial()
  },600)
}

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

function test(){
  const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));

}