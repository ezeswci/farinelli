// JavaScript Document
window.onload =mostrarPedido();
function mostrarPedido(){
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
    document.getElementById("menu").innerHTML=xmlhttp.responseText;
    }
  }
usu_id=window.sessionStorage.getItem("secion");
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/mostrar_pedido.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("cod=seg123&usu_id="+usu_id);
}
function quitarDelChanguito(id){
	//alert("entre quitar");
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
    document.getElementById("menu").innerHTML=xmlhttp.responseText;
    }
  }
usu_id=window.sessionStorage.getItem("secion");
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/quitar_del_carrito.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("pe_id="+id+"&cod=seg123&usu_id="+usu_id);
}