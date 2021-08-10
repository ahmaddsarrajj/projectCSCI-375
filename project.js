// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function calcal(){
  var radios = document.getElementsByName('gen'),
      tranW = document.getElementById("tranW"),
      weight = document.getElementById('weight'),
      height = document.getElementById('height'),
      age = document.getElementById('age'),
      activity = document.getElementById('activity'),
      goal = document.getElementById('goal'),
      equ1 = 0,
      equ2 = 0,
      equ3 = 0;
      w = 0,
      h = 0,  
      fat = 0,
      protein= 0,
      carb= 0;

     if( (w.value)  || (age.value) || (h.value) ){
 
      //trans lbs ---> kg  
  if(tranW.value == 2){
   
  w = weight.value * 0.45;
  console.log(w);
  }else {
       w = weight.value ;
      console.log(w);
  }


//trans feet  ---> cm


if(tranH.value == 5){

  h = height.value * 30.48;
 console.log(h);
 }else {
      h = height.value ;
     console.log(h);
 }



for (var i = 0, length = radios.length; i < length; i++) {
if (radios[0].checked) {

  equ1 = (w * 10) + ( 6.25 * h) + ( 5 * age.value ) + 5;

// only one radio can be logically checked, don't check the rest
break;
}else{
 equ1 = (w*10) + ( 6.25 * h) + ( 5 * age.value ) -161;
 
}
}
    
console.log(equ1) ;

//select the activity    

list = [1.2 , 1.375 , 1.55 , 1.75 , 1.9]
  if(activity.value == 6){
   equ2 = equ1 * 1.2;
    }else if(activity.value == 7){
      equ2 = equ1 *  1.375;
      }else if(activity.value == 8){
        equ2 = equ1 * 1.55;
        }else if(activity.value == 9){
          equ2 = equ1 * 1.725;
          }else {
            equ2 = equ1 * 1.9 ;
        }
        console.log(equ2)
        

//your goal

if (goal.value == 11) {
  equ3 = equ2 + 500;
  carb = equ3 * 50 /100;
  fat = equ3 * 20 /100;
  protein = equ3 * 30 /100;
}else if(goal.value == 12){
  equ3 = equ2 - 500;
  carb = equ3 * 20 /100;
  fat = equ3 * 30 /100;
  protein = equ3 * 50 /100;
}else{
  equ3 = equ2 ;
  carb = equ3 * 50 /100;
  fat = equ3 * 25 /100;
  protein = equ3 * 25 /100;
}

console.log(protein)

//the pie chart
  document.getElementById('calorie').value= equ3;
  document.getElementById('fat').value = fat;
  document.getElementById('carb').value = carb;
  document.getElementById('protein').value = protein;  
  
  document.getElementById('cal').innerHTML = Math.round(equ3);
  document.getElementById('dfat').innerHTML = Math.round(fat);
  document.getElementById('dprotein').innerHTML = Math.round(protein);
  document.getElementById('dcarb').innerHTML = Math.round(carb);
}
  else{
    
    alert("it should enter all information to continue!")
}
}


