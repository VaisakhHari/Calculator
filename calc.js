function displayNum(num){
   dis.value+=num
    
}
function allClear(){
    dis.value=""
}
function evaluateExp(){
    
    dis.value=eval(dis.value)
}
function back(){
    curExp=dis.value
    dis.value=curExp.slice(0,-1)
}