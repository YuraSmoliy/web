
document.forms["contact"].addEventListener("mouseover",function(){
	document.getElementsByTagName("fieldset")[0].style.boxShadow="2px 2px 10px  #ff8300";
	document.getElementsByTagName("h2")[0].style.boxShadow="2px 2px 10px #ff8300";
});
document.forms["contact"].addEventListener("mouseout",function(){
	document.getElementsByTagName("fieldset")[0].style.boxShadow="none";
	document.getElementsByTagName("h2")[0].style.boxShadow="none";																 
});

document.getElementById("letterContent").addEventListener("mouseover",function(){
	document.getElementById("letterContent").style.boxShadow="2px 2px 10px  #ff8300";
	document.getElementsByTagName("h2")[1].style.boxShadow="2px 2px 10px  #ff8300";
});

document.getElementById("letterContent").addEventListener("mouseout",function(){
	document.getElementById("letterContent").style.boxShadow="none";
	document.getElementsByTagName("h2")[1].style.boxShadow="none";																 
})
document.getElementsByTagName("h1")[0].addEventListener("mouseover",function(){
	document.getElementsByTagName("h1")[0].style.textShadow="2px 2px 10px  #ff8300";
});

document.getElementsByTagName("h1")[0].addEventListener("mouseout",function(){
	document.getElementsByTagName("h1")[0].style.textShadow="none";
});

document.getElementsByTagName("h1")[1].addEventListener("mouseover",function(){
	document.getElementsByTagName("h1")[1].style.textShadow="2px 2px 10px  #ff8300";
});

document.getElementsByTagName("h1")[1].addEventListener("mouseout",function(){
	document.getElementsByTagName("h1")[1].style.textShadow="none";
});



document.getElementsByTagName("h1")[0].addEventListener("click",changeLetter);

function changeLetter(){
	document.getElementsByTagName("h1")[0].style.display="none";
	document.getElementsByTagName("h1")[1].style.display="block";
	document.getElementById("letter").style.display="none";
	document.getElementById("login").style.display='block';
};

document.getElementsByTagName("h1")[1].addEventListener("click",changeForm);

function changeForm(){
	document.getElementsByTagName("h1")[1].style.display="none";
	document.getElementsByTagName("h1")[0].style.display="block";
	document.getElementById("letter").style.display='block';
	document.getElementById("login").style.display="none";
	makeContent();
}

function makeContent(){
	var date=new Date();
	var arrayP=document.getElementsByTagName("p");
	arrayP[9].innerHTML="Dear "+document.forms["contact"]["name"].value;
	arrayP[10].innerHTML="You email is "+document.forms["contact"]["email"].value;
	arrayP[11].innerHTML="You are "+document.forms["contact"]["age"].value;
	arrayP[12].innerHTML="The date is "+date.toDateString();
    arrayP[13].innerHTML="Your massage: "+document.forms["contact"]["msg"].value;
}

document.forms["contact"]["name"].addEventListener("change",function (){
	var valueName=document.forms["contact"]["name"].value;
	valueName=valueName.trim();
	var patern2=/[\sa-zA-Z0-9]{1,}/g;
	if(patern2.test(valueName)!==true)
	{
		document.forms["contact"]["name"].value="Wrong name";
		document.forms["contact"]["name"].style.color="red";
		correctName= false;
	}
	else{
		document.forms["contact"]["name"].style.color="green";
		correctName= true;
	}
})

document.forms["contact"]["email"].addEventListener("change",function (){
	var inpObj=document.forms["contact"]["email"];
	 if (inpObj.checkValidity() == false) {
       document.forms["contact"]["email"].value = inpObj.validationMessage;
	   document.forms["contact"]["email"].style.color="red"; 
		 correctMail= false;
    }
	else{
		document.forms["contact"]["email"].style.color="green";
		correctMail= true;
	}
})

function validationSubmit(){
	if(correctMail===true&&correctMail===true)
		{}
	else {return false;}
}
