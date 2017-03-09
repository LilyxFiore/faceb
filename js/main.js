var users = [{user: "user1@gmail.com", password: "user1"}, {user: "user2@gmail.com", password: "user2"},
              {user: "user3@gmail.com", password: "user3"}]


document.getElementById("btn").addEventListener("click", function(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var ok = 0;
  var id;

  if(/^\s+|\s+$/.test(email) || email ==""){
    document.getElementById("emailValidate").innerHTML ="El campo de usuario no puede estar en blanco";
  }
  else if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+(\w{2,4})+$/.test(email))) {
    document.getElementById("emailValidate").innerHTML  = "Correo no válido";
  }
  else{
    document.getElementById("emailValidate").innerHTML  = "";
    users.forEach(function(e,i){
      if(e.user== email){
        id=i;
      }
    })

    if(id!=undefined ){
      ok++;
      document.getElementById("emailValidate").innerHTML  = "";
    }
    else{
      document.getElementById("emailValidate").innerHTML  = "Usuario no registrado";
    }
  }

  if(password=="" || /^\s+|\s+$/.test(password)){
    document.getElementById("passwordValidate").innerHTML = "El campo de password no puede estar en blanco";
  }
  else{
    document.getElementById("passwordValidate").innerHTML ="";
    if(users[id].password == password){
          ok++;
    }
    else {
      document.getElementById("passwordValidate").innerHTML = "Password incorrecto";
    }
  }

  if(ok==2){
    localStorage.setItem("user",email);
    window.location="muro.html";
  }
})
