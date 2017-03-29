var submitButtonWeight=document.getElementById("submitButtonWeight");

submitButtonWeight.addEventListener('click',convertWeight);

function convertWeight(e){
	var fromWeightUnit=document.getElementById("fromWeightUnit").value;
	var toWeightUnit=document.getElementById("toWeightUnit").value;
	var fromWeight=document.getElementById("fromWeight").value;
	var results=document.getElementById("results");
	var finalValue;

	if(!validateInput(fromWeight)){
		e.preventDefault()
		return false;
	}

	if(fromWeightUnit==="kg" && toWeightUnit==="lbs"){
		finalValue=parseInt(fromWeight)*2.2;
		finalValue=Math.round(finalValue*100)/100;
		results.innerHTML="<h2>Your value is "+finalValue+" "+toWeightUnit+"</h2>";
	} else if (fromWeightUnit==="lbs" && toWeightUnit==="kg"){
		finalValue=parseInt(fromWeight)/2.2;
		finalValue=Math.round(finalValue*100)/100;
		results.innerHTML="<h2>Your value is "+finalValue+" "+toWeightUnit+"</h2>";
	}
	console.log(finalValue)
	e.preventDefault();

}

function validateInput(fromWeight){
	if(fromWeight===""){
		alert("Form cannot be empty");
		return false;
	}

	var expression=/^-?\d*(\.\d+)?$/;
	var regEx= new RegExp(expression);

	if(!fromWeight.match(regEx)){
		alert("You have entered an invalid input");
		return false;
	}
	return true;
}