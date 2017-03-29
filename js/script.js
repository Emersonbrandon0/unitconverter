var submitButton=document.getElementById("submitButton");

submitButton.addEventListener('click',convertTemperature);

function convertTemperature(e){
	var unitFrom=document.getElementById("from").value;
	var unitTo=document.getElementById("to").value;
	var fromValue=document.getElementById("fromValue").value;
	var results=document.getElementById("results");
	var finalValue;

	if(!validateInput(fromValue)){
		e.preventDefault()
		return false;
	}

	if(unitFrom==="Fahrenheit" && unitTo==="Celsius"){
		var finalValue=(fromValue-32)*(5/9);
		var finalValue=Math.round(finalValue * 100) / 100;
		results.innerHTML="<h2>Your converted value is "+finalValue+" degrees Celsius</h2>";			
	} else if(unitFrom==="Celsius" && unitTo==="Fahrenheit"){
		var finalValue=(fromValue*(9/5))+32;
		var finalValue=Math.round(finalValue * 100) / 100;
		results.innerHTML="<h2>Your converted value is "+finalValue+" degrees Fahrenheit</h2>";
	} else if(unitFrom==="Fahrenheit" && unitTo==="Kelvin"){
		var finalValue=(fromValue-32)*(5/9)+273.15;
		var finalValue=Math.round(finalValue * 100) / 100;
		results.innerHTML="<h2>Your converted value is "+finalValue+" K</h2>";
	} else if(unitFrom==="Celsius" && unitTo==="Kelvin"){
		var finalValue=parseInt(fromValue)+273.15;
		var finalValue=Math.round(finalValue * 100) / 100;
		results.innerHTML="<h2>Your converted value is "+finalValue+" K</h2>";
	} else if(unitFrom==="Kelvin" && unitTo==="Celsius"){
		var finalValue=parseInt(fromValue)-273.15;
		var finalValue=Math.round(finalValue * 100) / 100;
		results.innerHTML="<h2>Your converted value is "+finalValue+" degrees Celsius</h2>";
	} else if(unitFrom==="Kelvin" && unitTo==="Fahrenheit"){
		var finalValue=1.8(parseInt(fromValue)-273.15)+32;
		var finalValue=Math.round(finalValue * 100) / 100;
		results.innerHTML="<h2>Your converted value is "+finalValue+" degrees Fahrenheit</h2>";
	} else if (unitFrom===unitTo){
		var finalValue=fromValue;
		if(unitFrom=="Kelvin"){
			results.innerHTML="<h2>Your value is "+finalValue+" "+unitFrom+" </h2>";
		}
		else{
			results.innerHTML="<h2>Your value is "+finalValue+" degrees "+unitFrom+" </h2>";
		}
	}
	e.preventDefault();
}
function validateInput(fromValue){
	if(fromValue===""){
		alert("Form cannot be empty");
		return false;
	}

	var expression=/^-?\d*(\.\d+)?$/;
	var regEx= new RegExp(expression);

	if(!fromValue.match(regEx)){
		alert("You have entered an invalid input");
		return false;
	}
	return true;
}