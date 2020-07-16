var sp=document.getElementById("sp");
var spdiv=sp.children;
for(var div of spdiv){
	div.onclick=function(){
		window.location.href="detail.html";
	}
}
