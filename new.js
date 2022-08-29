function Firstname(){
  let name = document.getElementById("na").value;
  console.log(name);
  if(name==""){
    document.getElementById("ferror").style.display="block";
  }
  else{
    document.getElementById("ferror").style.display="none";
  }
}

function emailId(e){
  if(e.keyCode==9){
   let name=document.getElementById("na").value;
    console.log(name);
        if(name==""){
          document.getElementById("ferror").style.display="block";
        }
  }
  let email = document.getElementById("pas").value;
  console.log(email);
  var pattern=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if(email.match(pattern) ){
    document.getElementById("eerror").style.display="none";
  }
  else
  {
    document.getElementById("eerror").style.display="block";
  }

  }

function PassWord(e){
    if(e.keyCode==9){
     let email = document.getElementById("pas").value;
    if(email==""){
      document.getElementById("eerror").style.display="block";
    }
  }
  let password=document.getElementById("pass").value;
  var pass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  if(password.match(pass)){
     
    document.getElementById("perror").style.display="none";
  }
  else{
    document.getElementById("perror").style.display="block";
  }
}

function valid(){ 
    let password=document.getElementById("pass").value;
    if(password=="Mohit@123"){
    window.location.href="mo.html";
    }
    else
    document.getElementById("perror").style.display="block"

}
