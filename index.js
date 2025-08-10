const Mytextbox=document.getElementById("Mytextbox")
const Mybutton=document.getElementById("Mybutton")
const celsuis=document.getElementById("celsuis")
const farenheight=document.getElementById("farenheight")
const Myp=document.getElementById("Myp")


Mybutton.onclick= function convert(){
    text=Mytextbox.value
    text=Number(text)
    console.log(text)
    if(celsuis.checked){
        text=(text*9)/5 +32
        Myp.textContent=`${text}\u00B0C`
    }
    else if(farenheight.checked){
        text=(text-32)*5/9
        
        Myp.textContent=`${text}\u00B0F`
    }
    
    else{
        Myp.textContent="select a unitff"
    }



}