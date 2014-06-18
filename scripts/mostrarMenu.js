// JavaScript Document
window.onload =mostrarMenu();
function mostrarMenu(){
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
    document.getElementById("step2").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("POST","http://farinelli.com.ar/farapp/server/includes/menu.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("cod=seg123");
}
function agregarAlChanguito(id){
var ses_id = window.sessionStorage.getItem("secion");
var cant = document.getElementById("pr_"+id).value;
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
    //document.getElementById("Accordion1").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("POST","http://farinelli.com.ar/farapp/server/includes/agregar_al_carrito.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("pr_id="+id+"&ses_id="+ses_id+"&cant="+cant);
}
function compraMinima(){
var xmlhttp;
var ses_id = window.sessionStorage.getItem("secion");
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
	textoRespuesta=xmlhttp.responseText;
    chequeo=Number(textoRespuesta.substring(0,2));// 1 esta ok, 0 no alcanza al minimo
	texto=textoRespuesta.substring(2);
	//alert("chequeo: "+chequeo+"-- text resp: "+texto);
	if(chequeo==1){
		window.location.href = 'envio.html';
		}
	else{
		alert(texto);
	}
	
    }
  }
xmlhttp.open("POST","http://farinelli.com.ar/farapp/server/includes/chequear_minimo.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("pe_id="+ses_id);
}