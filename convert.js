window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   
   let cInput = document.getElementById("cInput");
   let fInput = document.getElementById("fInput");
   let convertButton = document.getElementById("convertButton");
   let errorMessage  = document.getElementById("errorMessage")

   cInput.addEventListener('input', function() {
      fInput.value = '';
      
  });
  
  fInput.addEventListener('input', function() {
      cInput.value = '';

  });


  
   convertButton.addEventListener("click",function(){

    let fahrenheitValue = parseFloat(fInput.value);
    let celsiusValue = parseFloat(cInput.value);

    if(fInput.value != '')
    {
        isNaN(fahrenheitValue = parseFloat(fInput.value)) ? errorMessage.innerHTML = fInput.value + " is not a number" : errorMessage.innerHTML='';
    }
    else
    {
        isNaN(celsiusValue = parseFloat(cInput.value)) ? errorMessage.innerHTML = cInput.value + " is not a number" : errorMessage.innerHTML='';
    }
    
      
      
      if (!isNaN(celsiusValue)) {
         fInput.value = convertCtoF(celsiusValue);
     }
     if (!isNaN(fahrenheitValue)) {
         cInput.value = convertFtoC(fahrenheitValue);   
     }

     let weatherIMG = document.getElementById("weatherImage");

     if(fInput.value > 50)
     {
      weatherIMG.src = "warm.png";
     }
     else if(fInput.value >= 32){
         weatherIMG.src = "cool.png";
     }
     else{
         weatherIMG.src = "cold.png";
     }
   })

   console.debug(fInput.value);
   console.debug(cInput.value);

}

function convertCtoF(degreesCelsius) {

   return degreesCelsius * 9/5 + 32

}

function convertFtoC(degreesFahrenheit) {

   return (degreesFahrenheit - 32) * 5/9
}
