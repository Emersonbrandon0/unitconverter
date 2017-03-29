
var submitButtonVolume=document.getElementById("submitButtonVolume");

submitButtonVolume.addEventListener('click',convertVolume);

function convertVolume(e){
	var fromVolumeUnit=document.getElementById("fromVolumeUnit").value;
	var toVolumeUnit=document.getElementById("toVolumeUnit").value;
	var fromVolume=document.getElementById("fromVolume").value;
	var results=document.getElementById("results");
	var finalValue;

	if(!validateInput(fromVolume)){
		e.preventDefault()
		return false;
	}

	if(fromVolumeUnit==="liters" && toVolumeUnit==="gallons"){
		finalValue=parseInt(fromVolume)/3.785412;
		finalValue=Math.round(finalValue*100)/100;
		results.innerHTML="<h2>Your value is "+finalValue+" "+toVolumeUnit+"</h2>";
	} else if (fromVolumeUnit==="gallons" && toVolumeUnit==="liters"){
		finalValue=parseInt(fromVolume)*3.785412;
		finalValue=Math.round(finalValue*100)/100;
		results.innerHTML="<h2>Your value is "+finalValue+" "+toVolumeUnit+"</h2>";
	}
	console.log(finalValue)
	e.preventDefault();

}

function validateInput(fromVolume){
	if(fromVolume===""){
		alert("Form cannot be empty");
		return false;
	}

	var expression=/^-?\d*(\.\d+)?$/;
	var regEx= new RegExp(expression);

	if(!fromVolume.match(regEx)){
		alert("You have entered an invalid input");
		return false;
	}
	return true;
}