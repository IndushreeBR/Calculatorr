function addition(){
    var firstOp=document.getElementById('first').value;
    var secondOp=document.getElementById('second').value;
    var result=Number(firstOp)+Number(secondOp);
    alert("Addition :" +result);
}

function subtraction(){
    var firstOp=document.getElementById('first').value;
    var secondOp=document.getElementById('second').value;
    var result=Number(firstOp)-Number(secondOp);
    alert("Subtraction :" +result);
}

function multiplication(){
    var firstOp=document.getElementById('first').value;
    var secondOp=document.getElementById('second').value;
    var result=Number(firstOp)*Number(secondOp);
    alert("Mutiplication :" +result);
}

function division(){
    var firstOp=document.getElementById('first').value;
    var secondOp=document.getElementById('second').value;
    var result=Number(firstOp)/Number(secondOp);
    alert("Division :" +result);
}

function modulus(){
    var firstOp=document.getElementById('first').value;
    var secondOp=document.getElementById('second').value;
    var result=Number(firstOp)%Number(secondOp);
    alert("Modulus :" +result);
}