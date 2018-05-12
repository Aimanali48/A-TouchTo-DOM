
/*function book() {
   var inputvalue = document.getElementById("url").value;  
   var li = document.createElement("li");
   var a = document.createElement("a");
   var text = document.createTextNode(inputvalue);
   a.href = inputvalue
   a.style.color = 'white'
   a.style.textDecoration = 'none'
   a.appendChild(text)
   li.appendChild(a);*/

   function book() { 
    var url = document.getElementById("url").value;
    var li = document.createElement("li");
    var a= document.createElement("a");
    var anchorText = document.createTextNode(url); 
    a.appendChild(anchorText);
    a.href = url;
    a.style.color = 'white'
    a.style.textDecoration = 'none'
   // a.target='blank'
   li.appendChild(a);
    url === '' ?  
        alert("You must write something!") 
    :
        document.getElementById("results").appendChild(li) ;
           
document.getElementById("url").value = "";
 document.getElementById("site").value = ""; 
}

/*if (inputvalue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("results").appendChild(li);
  }

  // for vanishing the last input text .. 
  document.getElementById("url").value = "";
  document.getElementById("site").value = "";*/


  






