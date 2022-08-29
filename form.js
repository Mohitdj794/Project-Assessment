function valid(){
 
  let name = document.getElementById("na").value;
   let email = document.getElementById("pas").value;
   let  password=document.getElementById("passwor").value;
   let form = document.getElementById("sa").value;
   let to = document.getElementById("to").value;

   var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
   var pass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

     a=document.getElementById("ferror").style;
     b=document.getElementById("serror").style;
     c=document.getElementById("terror").style;
     let a1=document.getElementById("eerror").style;
     let b1=document.getElementById("perror").style;
     
     let arr=[name,form,to];
     let arr2=[a,b,c];
     let arr6=[email,password];
     let arr4=[pattern,pass];
     let  arr5=[a1,b1];
     let count=0;
     let count1=0;

       for(i=0;i<arr.length;i++)
        {
           if(arr[i].length<3){
            arr2[i].display="block";
            count=1;
        } 
          else{
           arr2[i].display="none";
           count1=0;
       }
      }
      
      for(let i=0;i<arr6.length;i++){
  if(arr6[i].match(arr4[i])){

      arr5[i].display="none"
      count=0;
  }
  else{
  arr5[i].display="block";
  count=1;
  }
 }

 if((count==0) && (name!=="") && (email!=="") && (password!=="") && (form!=="") && (to!=="")){
  window.location.href="new2.html";
 }
 else
 {
  document.getElementById('berror').style.display="block";
 }
}
