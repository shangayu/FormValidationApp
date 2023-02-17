function myfunc() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let zcode = document.getElementById("zcode").value;
  let phone = document.getElementById("phone").value;


  if (/^[a-zA-Z]/.test(name)) {
      document.getElementById("first").innerHTML = " "
  } else {
      document.getElementById("first").innerHTML = "charecter should be letter";
    
  }


  if (/[a-z0-9A-Z]{1,20}@[a-z0-9A-Z]{1,10}\.[a-z]{2,}/gim.test(email)) {
      document.getElementById("second").innerHTML = " "
  } else {
      document.getElementById("second").innerHTML = "invalid email";

  }
  if (/^\[10000-90000]/.test(zcode)) {
      document.getElementById("third").innerHTML = " "
  } else {
      document.getElementById("third").innerHTML = "invalid Zipcode";

  }

  if (/^\d{10}$/.test(phone)) {
      document.getElementById("fourth").innerHTML = " "
  } else {
      document.getElementById("fourth").innerHTML = "phone number should be 10.";
      return false;
  }


};
