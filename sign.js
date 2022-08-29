$(document).ready(function(){
    $( "#logo" ).draggable();

    $("#h1").click(function(){
         $("#h2").slideToggle("slow");
      });
      $( "#logo" ).click(function() {
        $(this).animate({
          left: "+=50",
          height: "toggle"
        }, 5000, function() {
          // Animation complete.
        });
      });
      
      $("#na").click(function(){
        $("#h2").show("slow");
     });

     $("#gu").click(function(){
      $("#cl").slideToggle("slow");
   });

    
   $.validator.setDefaults({
    submitHandler:function(){
        let sign={
            name:$("#na").val(),
            mail:$("#pas").val(),
            password:$("#pass").val()
        }
        if(!localStorage.getItem($("#pas").val())){
        localStorage.setItem($("#pas").val(),JSON.stringify(sign));
        window.location.href="new.html";
        }
        else{
            alert("User alredy Exist");
        }
    }
   });
   $.validator.addMethod('mypassword',function(value,element){
       return this.optional(element)||(value.match(/[a-zA-Z]/)&& value.match(/[0-9]/));

   })
   $(".form").validate({
      rules:{
        name:"required",
       
        email:{
            required:true,
            email:true
        },
        pass:{
            required:true,
            minlength:8,
            mypassword:true
        },
        Cpass:{
            required:true,
            equalTo:"#pass"
        }
      },
      
      messages:{
        name:"<br>please enter your name",
        email:{
            required:"<br>please Enter the Email id",
            email:"<br>please Enter the valid Email id"
        },
        pass:{
            required:"<br>please enter your password",
            minlength:"<br>password length must be minum 8 characters",
            mypassword:"<br>password must contain at at least one numeric ,one special character... "
        },
        Cpass:{
            required:"<br>please enter correct password",
            equalTo:"<br>Password mismatch"
        }
      }

   });

});