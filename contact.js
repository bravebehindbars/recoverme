//This is a message when form is submitted

function subForm(){
   
   var element = document.getElementById('on-submission');
   element.innerHTML = "Thank you! Your information has been submitted.";
   document.getElementById('contactForm').remove();
}



//This is the toggle for contact page

var my_image = document.getElementById('imgContact');

console.log(my_image)


var hide_form = document.getElementById("contactForm")

console.log(hide_form)

var displayToggle = ''


    hide_form.style.display = 'none'


displayToggle = 'off'

function toggleForm() {

if(displayToggle == 'off') {
    
      hide_form.style.display = 'block'
    

    displayToggle = 'on'  
  }

  else if(displayToggle == 'on') {
    
      hide_form.style.display = 'none'    
    

    displayToggle = 'off'
  }
}
my_image.addEventListener("click", toggleForm)


