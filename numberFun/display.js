/**
 * getName pormpts the user for name
 * @returns user's name
 * 
 */

 function getName(){
     var name = prompt("What is your name?");
     return name;
 }

 /**
  * display4Ways displays the name 
  * @param - String - the name
  * outputs using alert, document.write, 
  * innerHTML, and console.log
  */

  function display4Ways(name){
      alert(name);
      document.write(name);
      document.getElementById("name").innerHTML=name;
      console.log(name);
  }