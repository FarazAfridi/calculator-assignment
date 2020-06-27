function getValue(num){
    var input = document.getElementById("input");
    input.value += num;
}

function clearValue(){
  var input = document.getElementById("input");
  input.value = ""
}

function ValueResult(){
  var input = document.getElementById("input");
  input.value = eval(input.value);
}

function removeLastChar(){
  var input = document.getElementById("input");
  var removeLastChar = input.value.substr(0, input.value.length - 1)
  input.value = removeLastChar;
}
function power(){
  var input = document.getElementById("input");
      input.value = input.value **2;
}
