var result = document.getElementById("inputbox");

function keys(num){
   
     result.value += num;
    //  result.value = eval(result.value);
    
}

function clearresult(){
    result.value = "";
}

var result = document.getElementById("inputbox");
function valuation(){
    result.value = eval(result.value);
}