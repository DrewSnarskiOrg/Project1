document.getElementById("tandc").disabled = true;
document.getElementById("subbutton").addEventListener("click", function(submitted) {
    submitted.preventDefault();

    if(inputs()&&checks()){
        
    }
});
document.getElementById("terms").addEventListener("click", function(didread) {
    document.getElementById("tandc").disabled = false;
});
    function inputs(){
        fname=document.getElementById("fname").value;
        lname=document.getElementById("lname").value;
        email=document.getElementById("email").value;
        dob=document.getElementById("dob").value;


        if(!fname||!lname||!email||!dob){
            alert("Please fill in all the fields.");
            return false
        }
        return true
    }

    function checks(){
        if(!document.getElementById("tandc").checked){
            alert("Please read the terms and conditions");
            return false;
        }
        else if(!document.getElementById("age").checked){
            alert("Please check if you are over 16 years old");
            return false;
          }
          else{
            return true;
          }

    }

  