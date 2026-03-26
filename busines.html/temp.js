const input=document.getElementById('put')
const ch1=document.getElementById('tt')
const ch2=document.getElementById('td')
const ans=document.getElementById('ans')
const cl=document.getElementById('sb')
cl.onclick=
function conversion(){
if(ch1.checked){
ans.textContent="your"

}
else if(ch2.checked){
    ans.textContent='hel'

}
else{
 ans.textContent='no '
}

}