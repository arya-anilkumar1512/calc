function displayNum(n){
result.value+=n //input type is text,so its taking as a string.so we can concantinate 
}

function allClear(){
    result.value=''
}

function evalExpr(){
    // expr=result.value
    // out=eval(result.value)
    // result.value=out
    result.value=eval(result.value)
}

function backSpace(){
    curr_str=result.value
    result.value=curr_str.slice(0,-1)
}