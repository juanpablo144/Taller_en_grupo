//Zona para obtener elementos
var txtref = document.getElementById("txt_ref");
var div_padre = document.getElementById("lista");
var btn_agregar = document.getElementById("btn_agregar");
var btn_eliminar = document.getElementById("btn_quitar");
var btn_comprar = document.getElementById("btn_comprar");
var find_p = document.getElementsByTagName("p");
var find_ref = document.getElementsByClassName("ref");
var precio1 = document.getElementById("precio1");
var prueba = document.getElementById("prueba");
var contador2;
var contador;
var precio;


function validarReferencia(e) {
    if(txtref.value == 0){
        alert("Ingrese una Referencia");
    }
    else{
        for ( contador2 = 0; contador2 < find_ref.length; contador2++) {
        
            if(txtref.value == find_ref[contador2].innerHTML){
                var txt = find_ref[contador2].innerHTML
                var txt_value = txtref.value
                agregar(txt,txt_value);  
                alert("Producto agregado con exito")
                
            }
            
           
        } 
    }
    e.preventDefault();
    
}

function validarReferencia2(e) {
    if(txtref.value == 0){
        alert("Ingrese una Referencia");
    }
    else{
        for ( contador2 = 0; contador2 < find_ref.length; contador2++) {
            
            if(txtref.value == find_ref[contador2].innerHTML){
                var txt_value = txtref.value
                eliminar(txt_value);
            }
        } 
    }
    e.preventDefault();
    
}

var activar_vali = function(e)
{
    validarReferencia(e);
}

var activar_vali2 = function(e)
{
    validarReferencia2(e);
}

var totalb = 0;
var totalg = 0;
var totalgua = 0;

function agregar(txt,txt_value) {
    if(txt_value == "crucero1")
    {
        precio = 5000;
        totalb++;
    }
    if(txt_value == "vegas1")
    {
        precio = 3000;
        totalg++;
    }
    if(txt_value == "guantes_01")
    {
        precio = 2000;
        totalgua++;
    }
    
    var elemento_p2 = document.createElement("p")
    var elemento_p = document.createElement("p")
    var espacio = document.createElement("br")
    espacio.setAttribute("class","salto");
    elemento_p.setAttribute("class","inline_block"+" "+txt_value)
    elemento_p2.setAttribute("class","inline_block"+" "+txt_value)
    var contenido = document.createTextNode(txt)
    var contenido2 = document.createTextNode(precio)
    elemento_p.appendChild(contenido);
    elemento_p2.appendChild(contenido2);
    div_padre.appendChild(elemento_p);
    div_padre.appendChild(elemento_p2);
    div_padre.appendChild(espacio);
} 
function eliminar(txt_value) {
     
    var x = document.getElementsByClassName(txt_value);
    var i=0;
      //  for (i = 0; i < x.length; i++) {
          if(x.length > 0){
            var tamano = x.length;
            var tamano2 = tamano /2;
            while (i<tamano2) {
                if(txt_value == "crucero1"){
                    totalb--;
                }
                if(txt_value == "vegas1")
                {
                    totalg--;
                }
                if(txt_value == "guantes_01")
                {
                    totalgua--;
                }
                i++;
            }
            var j=0;
            while (j<tamano){
                div_padre.removeChild(x[0]);
                j++;
            }
            
            alert("Producto Eliminado con Exito");
          }
          else{
              alert("No hay ningún producto que eliminar de este tipo");
          }
    }

function comprar(txt_value) {
        total1 = totalb * 5000;
        total2 = totalg * 3000;
        total3 = totalgua * 2000;
        total = total1 + total2 + total3;
        if (total == 0) {
            alert("No hay productos para comprar")
        }else{
            alert("valor total de la compra "+ total + " dolares")
        }
       
}


//Zona para agregar eventos
btn_eliminar.addEventListener("click",activar_vali2)
btn_agregar.addEventListener("click",activar_vali);
btn_comprar.addEventListener("click",comprar)


/* slider */
var slideInicio = 1;
        abrirSlide(slideInicio);

        function Slide(n) {
            abrirSlide(slideInicio += n);
        }

        function abrirSlide(n) {
            // seleccionamos todas las imagenes o (banners)
            var slides = document.getElementsByClassName("banner");
            // en caso de que llegue al ultimo vuelva al numero 1
            if (n > slides.length){slideInicio = 1}
            // en caso de que llegue al primero y quiera retroceder vaya al numero ultimo
            if (n < 1) {slideInicio = slides.length}
            // coloca todos los banner ocultos
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            // aca pone visible el que deseemos
            slides[slideInicio-1].style.display = "block";
        }