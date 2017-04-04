
function agregarElemento(){
      ulNuevo = document.getElementById("ulNueva")
      var item2 = document.createElement("li")
      var entradaTexto = document.getElementById("textLista").value
      var textoItem2 = document.createTextNode(entradaTexto)
      var contador1=document.getElementById("textLista")
      // textLista.addEventListener("keydown", contador);

      item2.appendChild(textoItem2)
      ulNuevo.appendChild(item2)
    
     //   var letra=0;
     //  function contador1(){
     //   while(letra<= 140){
     //   letra++;}
     //   console.log(letra);

     }
            
      var mensajes = document.getElementById("mensajes");

      var h3Nuevo = document.createElement("h3")
     var h3Texto = document.createTextNode("")

      var pNuevo = document.createElement("p")
      var pText = document.createTextNode("Tweet")

      var ulNuevo = document.createElement("ul")
      ulNuevo.id = "ulNueva"

      var liNuevo =document.createElement("li")
      var liText = document.createTextNode("")

      liNuevo.appendChild(liText)

      ulNuevo.appendChild(liNuevo)

      pNuevo.appendChild(pText)

      h3Nuevo.appendChild(h3Texto)

      contenedor.appendChild(h3Nuevo)

      contenedor.appendChild(pNuevo)

      contenedor.appendChild(ulNuevo)