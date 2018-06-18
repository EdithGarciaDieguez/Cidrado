// ENCRIPTAR
const encrypt = () =>
 {
let toEncrypt = document.getElementById("toEncrypt").value;
let offset = document.getElementById("offset").value;

let cipher = "";
let ascii = 0;
console.log(toEncrypt);

for(let i = 0 ; i <toEncrypt.length; i++){
  if (toEncrypt.charCodeAt(i) < 97 ) {
  ascii= (toEncrypt.charCodeAt(i) - 65 + parseInt(offset))% 26 + 65;
  
} else {
  ascii = (toEncrypt.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
}
if (toEncrypt.charCodeAt(i)=== 32){
  ascii= 32;
}
let palEncrypt = String.fromCharCode(ascii);
cipher+= palEncrypt;
}
return document.getElementById("toDesencrypt").value = cipher;
 }
 //Desencriptar

 const desencrypt = () => {
   let toDesencrypt = document.getElementById("toDesencrypt").value;
   let offset =document.getElementById("offset").value;
   let palDesencrypt = "";
   let ascii = 0;

   for(let i=0; i<toDesencrypt.length; i++){
     if(toDesencrypt.charCodeAt(i) < 97 ){
       ascii = (toDesencrypt.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
} else {
  ascci = (toDesencrypt.charCodeAt(i) + 97 + parseInt(offset)) % 26 + 97;
  }
  if (toDesencrypt.charCodeAt(i)=== 32) {
    ascci= 32;
  }
  
  palDesencrypt += String.fromCharCode(ascii); 
   }
 
   return document.getElementById("toEncrypt").value = palDesencrypt;
 }
