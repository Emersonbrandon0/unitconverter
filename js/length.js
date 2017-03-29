
var submitButtonLength=document.getElementById("submitButtonLength");

submitButtonLength.addEventListener('click',convertLength);

function convertLength(e){
	var fromLengthUnit=document.getElementById("fromLengthUnit").value;
	var toLengthUnit=document.getElementById("toLengthUnit").value;
	var fromLength=document.getElementById("fromLength").value;
	var results=document.getElementById("results");
	var finalValue;

	if(!validateInput(fromLength)){
		e.preventDefault()
		return false;
	}

	if(fromLengthUnit==="feet" && toLengthUnit==="meters"){
		finalValue=parseInt(fromLength)*0.3048;
		finalValue=Math.round(finalValue*100)/100;
		results.innerHTML="<h2>Your value is "+finalValue+" "+toLengthUnit+"</h2>";
	} else if (fromLengthUnit==="meters" && toLengthUnit==="feet"){
		finalValue=parseInt(fromLength)/0.3048;
		finalValue=Math.round(finalValue*100)/100;
		results.innerHTML="<h2>Your value is "+finalValue+" "+toLengthUnit+"</h2>";
	}
	console.log(finalValue)
	e.preventDefault();

}

function validateInput(fromLength){
	if(fromLength===""){
		alert("Form cannot be empty");
		return false;
	}

	var expression=/^-?\d*(\.\d+)?$/;
	var regEx= new RegExp(expression);

	if(!fromLength.match(regEx)){
		alert("You have entered an invalid input");
		return false;
	}
	return true;
}