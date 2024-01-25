// This code is wrapped in a jQuery document ready function to ensure it runs after the DOM is fully loaded.
$(function(){

  // Create an array of any text you enter, you can add more or remove some. 
  // For the example, it's set to numbers.
  var splashes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  // Pick a random one from the array and replace whatever you specify in your HTML. 
  // In the example, it's replacing the content of an element with the ID 'subtitle'.
  document.getElementById('subtitle').innerHTML = splashes[Math.floor(Math.random()*splashes.length)];
});

// Function to find an object by name in the document.
function MM_findObj(n, d) { //v4.01
  var p,i,x;  
  if(!d) d=document; 
  if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; 
    n=n.substring(0,p);
  }
  if(!(x=d[n])&&d.all) x=d.all[n]; 
  for (i=0;!x&&i<d.forms.length;i++) 
    x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) 
    x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) 
    x=d.getElementById(n); 
  return x;
}