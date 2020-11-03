var checkbox = document.querySelector("input[name=checkbox]");
var body = document.body;
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
var doc = document.querySelector(".top");
var card = document.getElementById("shown");
var innercontent = document.getElementById("hidden");
var original = card.innerHTML;
var systemInMobileView = window.matchMedia("(max-width: 768px)");

function monitorTheme(){
  if(prefersDarkScheme.matches){
    document.getElementById("myCheck").checked = false;
    doc.classList.add("dark-theme");
    body.classList.add("dark-theme");
    doc.classList.remove("light-theme"); 
    body.classList.remove("light-theme");   
     }else {
      document.getElementById("myCheck").checked = true;
      doc.classList.add("light-theme");
      body.classList.add("light-theme");
      doc.classList.remove("dark-theme");
      body.classList.remove("dark-theme");
     }
}
// this function dynamically changes the content of card and its innercontent
function myFunction(x) {
  if (x.matches) { // If media query matches
    card.innerHTML=original.slice(0,2);
    innercontent.innerHTML=original.slice(2);
  } else {
   card.innerHTML = card.innerHTML + innercontent.innerHTML;
   innercontent.innerHTML = "";
  }
}

myFunction(systemInMobileView) // Call listener function at run time
systemInMobileView.addEventListener("change",myFunction) // Attach listener function on state changes

prefersDarkScheme.addEventListener('change',monitorTheme)

// window.addEventListener('load', (event) => {
window.onload = function() { 
   if(!prefersDarkScheme.matches){
    document.getElementById("myCheck").checked = true;
     };
  };

// slider add or remove EventListener
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
             // ...then apply the .light-theme class to override those styles
            doc.classList.add("light-theme");
            body.classList.add("light-theme");
            doc.classList.remove("dark-theme");
            body.classList.remove("dark-theme");
                    
            // Otherwise...
          } else {
            // ...apply the .dark-theme class to override the default light styles
          doc.classList.add("dark-theme");
          body.classList.add("dark-theme");
          doc.classList.remove("light-theme"); 
          body.classList.remove("light-theme");     
          }
 })   
    
    