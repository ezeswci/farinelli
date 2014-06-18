// JavaScript Document
window.onload =loadInicio();
function loadInicio(){
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("entrada").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("POST","http://farinelli.com.ar/farapp/server/includes/mostrar_inicio.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("cod=seg123");
}