 /* .js files add interaction to your website */

var factList = [
  "8 million pieces of plastic pollution find their way into our ocean daily. In fact, only 9% of all plastic produced is recycled. "];/*3*/

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}/* .js files add interaction to your website */
  
