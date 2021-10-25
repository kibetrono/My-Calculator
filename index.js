try{
    
function showValue(val){

        document.getElementById("answer").value+=val;

}
function clearNow(){

     document.getElementById("answer").value="";

}
function Answer(){

     var ans=document.getElementById("answer").value;

    document.getElementById("answer").value=eval(ans);

}

}catch(err)
{

    document.getElementById("errors").innerHTML=err;

}