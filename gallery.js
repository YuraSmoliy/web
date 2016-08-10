var x =[];
var y =[",","my","My","and","like","you","old"];
var change=0;
var ChamgeElem=-1;
function add(){
	
    var y= document.getElementById('name').value;
	var z= document.getElementById('cost').value;
    var p= document.getElementById('picture').value;
	var text= document.getElementById('key').value;

	 if(ChamgeElem!==-1){					
		x[ChamgeElem][0]=y;
		x[ChamgeElem][1]=z;
		x[ChamgeElem][2]=p;
		x[ChamgeElem][3]=text;
		update();
		ChamgeElem=-1;	
		return;		
	}
	
	x.push([y,z,p,mySplit(text)]);
	createElement([y,z,p,mySplit(text)]);
	
	
};

function showAll(k=0){
	if(k<x.length && k>=0){
		document.getElementById('nameS1').innerHTML=x[k][0];
		document.getElementById('costS1').innerHTML=x[k][1];
		document.getElementById('pictureS1').src="images/"+ x[k][2];
		document.getElementById('textS1').innerHTML=x[k][3];
	}
	else{
		document.getElementById('nameS1').innerHTML="Name";
		document.getElementById('costS1').innerHTML="Cost";
		document.getElementById('pictureS1').src="";
		document.getElementById('textS1').innerHTML="Describe";
	}
	if(k+1<x.length && k>=0){
		document.getElementById('nameS2').innerHTML=x[k+1][0];
		document.getElementById('costS2').innerHTML=x[k+1][1];
		document.getElementById('pictureS2').src="images/"+ x[k+1][2];
		document.getElementById('textS2').innerHTML=x[k+1][3];
	}
	else{
		document.getElementById('nameS2').innerHTML="Name";
		document.getElementById('costS2').innerHTML="Cost";
		document.getElementById('pictureS2').src="";
		document.getElementById('textS2').innerHTML="Describe";
	}
		
	if(k+2<x.length && k>=0){
		document.getElementById('nameS3').innerHTML=x[k+2][0];
		document.getElementById('costS3').innerHTML=x[k+2][1];
		document.getElementById('pictureS3').src="images/"+ x[k+2][2];
		document.getElementById('textS3').innerHTML=x[k+2][3];
	}
	else{
		document.getElementById('nameS3').innerHTML="Name";
		document.getElementById('costS3').innerHTML="Cost";
		document.getElementById('pictureS3').src="";
		document.getElementById('textS3').innerHTML="Describe";
	}
	if(k+3<x.length && k>=0){
		document.getElementById('nameS4').innerHTML=x[k+3][0];
		document.getElementById('costS4').innerHTML=x[k+3][1];
		document.getElementById('pictureS4').src="images/"+ x[k+3][2];
		document.getElementById('textS4').innerHTML=x[k+3][3];
	}
	else{
		document.getElementById('nameS4').innerHTML="Name";
		document.getElementById('costS4').innerHTML="Cost";
		document.getElementById('pictureS4').src="";
		document.getElementById('textS4').innerHTML="Describe";
	}
}

function mySplit(text){
	var arr=text.split(" ");
	arr= arr.filter(myFilter);
	return arr;
}
function myFilter(x){
	if(y.every(function(a){return a!==x;}))return x;
//	if(x!=="My"&&x!==","&&x!=="and"&&x!=="new"&&x!=="prezent"&&x!=="like"&&x!=="you"&&x!=="old")
//	return x;
};

function next(){
	
	change=parseInt(document.getElementById("page").textContent);
	if(change*4<x.length){
		document.getElementById("page").innerHTML=parseInt(document.getElementById("page").textContent)+1;
		if(change==1){
			showAll(4);
		}	
		showAll(change*4);
	}
}
function previos(){
	if(parseInt(document.getElementById("page").textContent)>1){
	var t =parseInt(document.getElementById("page").textContent)-1;
	document.getElementById("page").innerHTML=parseInt(document.getElementById("page").textContent)-1;
	change=t*4-4;
	showAll(change);	
	}
}
function update(){
	change=parseInt(document.getElementById("page").textContent);
	change-=1;
	showAll(change*4);
	document.getElementById('gallery').innerHTML="";
	createGallery();
}

function removeMy(name){
	
	var k =document.getElementById(name).textContent;
	
	for(elem of x){
		
		if(elem[0]==k){
			var k= x.indexOf(elem);
		    x.splice(k,1);
			update();
		}
	}
	document.getElementById('gallery').innerHTML="";
	createGallery();
}
var f=0;
//function changeElement(){
//	
//	for(var i = 1;i<5;i++){
//	
//	if(f>=x.length){f=0;}
//	if(f<x.length)var p=document.getElementById("picture"+i).src="image/"+x[f][2];
//	if(f<x.length)var l=document.getElementById("name"+i).innerHTML=x[f][0];
//	if(f<x.length)var m=document.getElementById("cost"+i).innerHTML=x[f][1];
//	if(f<x.length)var n=document.getElementById("text"+i).innerHTML=x[f][3];
//	f++;
//	}
//			
//}

function createElement(obj){
	var elem=document.getElementById('gallery');
	var section=document.createElement("section");
	section.className="section";
	
	var img=document.createElement("img");
	img.className="image";
	img.src="images/"+obj[2];
	
	var div0=document.createElement("div");
	div0.className="pole2";
	var p0=document.createElement("p");
	p0.innerHTML=obj[0];
	
	var div1=document.createElement("div");
	div1.className="pole2";
	var p1=document.createElement("p");
	p1.innerHTML=obj[1];
	
	var div2=document.createElement("div");
	div2.className="pole2";
	var p2=document.createElement("p");
	var text=obj[3];
	 p2.innerHTML=text;
	
	div0.appendChild(p0);
	div1.appendChild(p1);
	div2.appendChild(p2);
	
	section.appendChild(img);
	section.appendChild(div0);
	section.appendChild(div1);
	section.appendChild(div2);
	elem.appendChild(section);
}
function createGallery(){
	
	for(var i=0;i<x.length;i++){
		createElement(x[i])
	}
}

function getJSON(){
	var xmlhttp = new XMLHttpRequest();
	var url = "myTutorials.txt";

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var myArr = JSON.parse(xmlhttp.responseText);
			myFunction(myArr);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	function myFunction(arr) {

	    for(var i = 0; i < arr.length; i++) {
	        x.push([arr[i].name,arr[i].cost,arr[i].picture,arr[i].text]);
	    }
		createGallery();
		document.getElementById("conteiner1").style.display="none";
		document.getElementById("conteiner2").style.display="none";
	}
	checkCookies();
}

function mouseEnter(i){
	document.getElementById(i).style.borderColor="red";
	document.getElementById(i).style.boxShadow="0 0 10px red";
}
function mouseLeave(i){
	document.getElementById(i).style.borderColor="#ff8300";
	document.getElementById(i).style.boxShadow="0 0 10px #ff8300";
}
function updateProduct(name){
	var k =document.getElementById(name).textContent;
	for(elem of x){		
		if(elem[0]==k){
			document.getElementById('name').value=elem[0];
			document.getElementById('cost').value=elem[1];
			document.getElementById('picture').value=elem[2];
			document.getElementById('key').value=elem[3];
		    ChamgeElem=x.indexOf(elem);
			
		}
	}
}

function checName(){
	var valueName=document.getElementById("name").value;
	valueName=valueName.trim();
	var patern2=/^[A-Z]+[\sa-zA-Z0-9]{1,}$/g;
	if(patern2.test(valueName)!==true)
	{
		document.getElementById("name").value="Wrong name";
		document.getElementById("name").style.color="red";
	}
	else{
		document.getElementById("name").style.color="green";
	}
}
function checPrise(){
	var valuePrise=document.getElementById("cost").value;
	valuePrise=valuePrise.trim();
	var patern=/^[0-9]{1,}[\,\.]{0,1}[0-9]{0,}$/g;
	if(patern.test(valuePrise)!==true){
		document.getElementById("cost").value="Wrong prise";
		document.getElementById("cost").style.color="red";
	}
		else{
		document.getElementById("cost").style.color="green";
	}
}
function checPicture(){
	var valuePicture=document.getElementById("picture").value;
	valuePicture=valuePicture.trim();
	var patern3=/.[\.](png|jpeg)$/g;
	if(patern3.test(valuePicture)!==true){
		document.getElementById("picture").value="Wrong picture";
		document.getElementById("picture").style.color="red";
	}
		else{
		document.getElementById("picture").style.color="green";
	}
}
function addSelect(){
            var testdiv = document.getElementById('picture');
            var myselect = document.createElement('select');
            var myopt = document.createElement('options');
            myopt.innerText = 'Первый';
            myselect.appendChild(myopt);
            testdiv.appendChild(myselect);
        }

//function logIn(){
//	var conteiner1=document.getElementById("conteiner1");
//	var conteiner2=document.getElementById("conteiner2");
//	var logInForm=document.getElementById("logInForm");
//	if(conteiner1.style.display=="none")
//		{
//			conteiner1.style.display="block";
//			conteiner2.style.display="block";
//			logInForm.style.display="block";
//			
//		}
//	else{
//		    conteiner1.style.display="none";
//			conteiner2.style.display="none";
//	}
//}


function logIn(){
	var conteiner1=document.getElementById("conteiner1");
	var conteiner2=document.getElementById("conteiner2");
	var logInForm=document.getElementById("logInForm");
	if(document.cookie!=""){
		
		if(document.getElementById("logIn").textContent==="Log out"){
			
			logOut();	
			return;
		  }			
		conteiner1.style.display="block";
		conteiner2.style.display="block";
		document.getElementById("logIn").innerHTML="Log out";

	}
	else{
		conteiner1.style.display="none";
		conteiner2.style.display="none";
		logInForm.style.display="block";
	}
	     
}

function logOut(){
	document.cookie="name='';"+"password='';"+"expires=Thu, 01 Jan 1970 00:00:00 UTC";
	var conteiner1=document.getElementById("conteiner1");
	var conteiner2=document.getElementById("conteiner2");
	conteiner1.style.display="none";
	conteiner2.style.display="none";
	document.getElementById("logIn").innerHTML="logIn";
	document.getElementById("hello").innerHTML="";
	
}


function setUserCookie(){
	var userName =document.getElementById("userName").value;
	var userPassword=document.getElementById("password").value;
	document.cookie="name="+userName+";"+"password="+userPassword+";"+"expires=Thu, 01 Jan 2017 00:00:00 UTC";
	document.getElementById("logIn").innerHTML="Log out";
	var logInForm=document.getElementById("logInForm");
	logInForm.style.display="none";
	var conteiner1=document.getElementById("conteiner1");
	var conteiner2=document.getElementById("conteiner2");
	conteiner1.style.display="block";
	conteiner2.style.display="block";
	document.getElementById("hello").innerHTML="Hello "+userName;
	
	
}
function checkCookies(){
	if(document.cookie!="")
		{
			var name= document.cookie.split("=")[1];
			document.getElementById("hello").innerHTML="Hello "+name;
		}
}