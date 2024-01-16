var sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
  window.onscroll = function() {
    stickyNavbar();
  };


function studentValidate(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("gmail").value;
    let phone = document.getElementById("phone").value;
    let userStatus = mailStatus = phoneStatus = false;
    let userExp = /^[a-zA-z\s]+$/;
    let mailExp = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    let phoneExp = /^[0-9]+$/;

    // Name Validation
    if(username === ""){
        document.getElementById("nameNote").innerHTML = "Enter Your Name";
        userStatus = false;
    } else {
        if(username.match(userExp)){
          document.getElementById("nameNote").innerHTML = "";    
          userStatus = true;    
        } else {
          document.getElementById("nameNote").innerHTML = "Alphabets Only";
          userStatus = false;
        }
    }

    //Mail Validation
    if(email === ""){
        document.getElementById("mailNote").innerHTML = "Enter Mail";
        mailStatus = false;
    } else {
        if(email.match(mailExp)){
            document.getElementById("mailNote").innerHTML = "";
            mailStatus = true;
        } else {
            document.getElementById("mailNote").innerHTML = "Enter Valid Mail";
            mailStatus = false;
        }
    }

    //Number Validation
    if(phone === ""){
        document.getElementById("phoneNote").innerHTML = "Enter Mobile No";
        phoneStatus = false;
    } else {
        if(phone.match(phoneExp)){
            if(phone.length === 10){
                document.getElementById("phoneNote").innerHTML = "";
                phoneStatus = true;
            } else {
                document.getElementById("phoneNote").innerHTML = "10 digits Only";
                phoneStatus = false;
            }
        } else {
            document.getElementById("phoneNote").innerHTML = "Enter Valid No";
            phoneStatus = false;
        }
    }

    if(userStatus === true && mailStatus === true && phoneStatus === true){
        return true;
    } else {
        return false;
    }
}