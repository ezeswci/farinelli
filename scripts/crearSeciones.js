// JavaScript Document
// Crear seciones nuevas
window.onload =crearSecion();
function crearSecion(){
	//alert("Entre a crear secion");
	var secion = window.sessionStorage.getItem("secion");// Ver si la secion existe
	//var usuario = window.sessionStorage.getItem("usuario");
	if(secion==null){
		// Si no se encunetra secion la crea
		var sec=nuevaSecion();
	}
}
function preguntarSecion(){	
	var secion = window.sessionStorage.getItem("secion");// Ver si la secion existe
	//alert("La secion es:"+ secion);
}
function nuevaSecion(){
	{
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
    value=parseInt(xmlhttp.responseText);
	window.sessionStorage.setItem("secion", value );
	//alert("valor de la secion: "+ value);
    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/secion.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("cod=seg123");
}
}
function buscarUsuario(){
	mail= document.getElementById("mail").value;
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
    value=parseInt(xmlhttp.responseText);
	//alert(xmlhttp.responseText);
	if(value!=0){
		completarForm(value);
	}
    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/usu_mail_buscar.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("usu_mail="+mail);
}
function altaUsuario(){
	mail= document.getElementById("mail").value;
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
    value=parseInt(xmlhttp.responseText);
	//alert(xmlhttp.responseText);
	if(value==0){
		crearNuevoUsuario();
	}
    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/usu_mail_buscar.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("usu_mail="+mail);
}
function crearNuevoUsuario(){
	//alert("entre");
	var mail= document.getElementById("mail").value;
	var usu= document.getElementById("nombre").value;
	var tel= document.getElementById("tel").value;
	var calle= document.getElementById("calle").value;
	var altura= document.getElementById("altura").value;
	var depto= document.getElementById("depto").value;
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
    value=parseInt(xmlhttp.responseText);
	return value;
    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/alta_usuarios.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("usu="+usu+"&meail="+mail+"&tel="+tel+"&calle="+calle+"&altura="+altura+"&depto="+depto);
}