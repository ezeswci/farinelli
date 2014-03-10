// JavaScript Document
window.onload =verformPedir();
function verformPedir(){
var pe_id = window.sessionStorage.getItem("secion");
//var cl_id = window.sessionStorage.getItem("usuario");
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
    document.getElementById("step3").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/form_para_pedir.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("pe_id="+pe_id);
}
function completarForm(id){
var pe_id = window.sessionStorage.getItem("secion");
//var cl_id = window.sessionStorage.getItem("usuario");
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
    document.getElementById("step3").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/form_para_pedir.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("pe_id="+pe_id+"&cl_id="+id);
}
function formPedir(){
	
	var pe_id = window.sessionStorage.getItem("secion");
	var cl_id = document.getElementById("cl_id").value;
	var nombre= document.getElementById("nombre").value;
	var mail= document.getElementById("mail").value;
	var tel= document.getElementById("tel").value;
	var calle= document.getElementById("calle").value;
	var altura= document.getElementById("altura").value;
	var depto= document.getElementById("depto").value;
	var pago_efct= document.getElementById("pago_efct").value;
	var detalle= document.getElementById("detalle").value;
	var precio= document.getElementById("precio").value;
	var horario= document.getElementById("horario").value;
	// Dar de alta usuario si no existe
	//alert("submit");
	if(cl_id==0){
	var cl_id = altaUsuario();
	}
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
    document.getElementById("step3").innerHTML=xmlhttp.responseText;
	nuevaSecion();
	document.getElementsByClassName("step3 active").item(0).className="step3";
	document.getElementsByClassName("step4 ").item(0).className="step4 active";
    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/realiza_pedido.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("pe_id="+pe_id+"&cl_id="+cl_id+"&nombre="+nombre+"&meail="+mail+"&calle="+calle+"&altura="+altura+"&depto="+depto+"&tel="+tel+"&pago_efct="+pago_efct+"&detalle="+detalle+"&precio="+precio+"&horario="+horario);
}
function formSubmit(){	
	document.getElementById("pedido_form").submit();
}