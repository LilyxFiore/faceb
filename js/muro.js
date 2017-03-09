function post(tipo, contenido){
  this.tipo = tipo;
  this.contenido = contenido;
}

var arrayPost = [];
var cad = "";

document.getElementById("email").innerHTML = "Bienvenido " + localStorage.getItem("user");

document.getElementById("btn2").addEventListener("click",function(){
  var contenido = document.getElementById("principal").value;
  var tipo =document.getElementById("tipo").value;
  arrayPost.push(new post(tipo,contenido));

 document.getElementById("contenido").innerHTML += "<div><br>"+document.getElementById("principal").value +
                                                    "<br><a href=#>Editar</a><a href=#>Eliminar</a><br></div>";

})

document.getElementById("publico").addEventListener("click", function(){


  for(i = 0; i < arrayPost.length; i++){
      if(arrayPost[i].tipo == 1){
        document.getElementById("contenido").innerHTML = arrayPost[i].contenido;
      }

  }


})
