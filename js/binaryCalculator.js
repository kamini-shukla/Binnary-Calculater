 var btn1= document.getElementById("btn1");
 var btn0= document.getElementById("btn0");
 var btnclr= document.getElementById("btnClr");
 var btneql= document.getElementById("btnEql");
 var btnsum= document.getElementById("btnSum");
 var btnsub= document.getElementById("btnSub");
 var btnmul= document.getElementById("btnMul");
 var btndiv= document.getElementById("btnDiv");

 var res= document.getElementById("res");

 btn1.onclick= function(){
     res.innerHTML=res.innerHTML+"1";
 }
 btn0.onclick= function(){
     res.innerHTML=res.innerHTML+"0";
 }
btnsum.onclick= function(){
     res.innerHTML=res.innerHTML+"+";
 }
btnsub.onclick= function(){
     res.innerHTML=res.innerHTML+"-";
 }
btnmul.onclick= function(){
     res.innerHTML=res.innerHTML+"*";
 }
 
btndiv.onclick= function(){
     res.innerHTML=res.innerHTML+"/";
 }

btnclr.onclick= function(){
     res.innerHTML="";
 }

function convertDecimal(s){
    var ans=0;
    var i=s.length-1;
    var e=0;
    while(i>=0){
        ans = ans+Math.pow(2,e)*Number(s.charAt(i));
        i--;
        e++;
    }
    
    return ans;
}

function convertBinnary(n){
    var ans="";
    while(n>=1){
        if(n%2==0){
            ans+="0";
        }else{
            ans+="1";
        }
        
        n=n/2;
    }
    var arr=ans.split("");
     arr.reverse();
     return arr.join("");

}



btneql.onclick= function(){
    var s=res.innerText;
    var operants;
    
    var op;
    var i=0;
    while(s.charAt(i)==='1' ||  s.charAt(i)==='0'){
        
        i=i+1;
    }
    op=s.charAt(i);
    operants=s.split(op);
    var op1=convertDecimal(operants[0]);
    var op2=convertDecimal(operants[1]);
    var result;
    if(op=='+'){
        result=op1+op2;
    }else if(op=='-'){
        result=op1-op2;
    }else if(op=='*'){
        result=op1*op2;
    }else{
        result=Math.floor(op1/op2);
    }
    
    res.innerHTML=convertBinnary(result);
    // res.innerHTML=result;
 }