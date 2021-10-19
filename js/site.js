jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  });

  document.getElementById("subbutton").addEventListener("click", function(submitted) {

    if(inputs()&&checks()){

    }
    inputs(){
        fname=document.getElementById("fname").value;
        lname=document.getElementById("lname").value;
        email=document.getElementById("email").value;
        dob=document.getElementById("dob").value;


        if(!fname||!lname||!email||!dob){
            alert("Please fill in all the fields.");
        }

    }

    checks(){
        

    }

  }