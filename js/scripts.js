function actReloj(){
    var fecha = new Date();
    document.getElementById("reloj").innerHTML= " ";
    document.getElementById("reloj").innerHTML= fecha;
    
}
function validar(){

    var formulario = document.getElementsByName("formulario")[0];

    var namev=false;
    var lastnamev= false;
    var phonev=false;
    var datev=false;

    if(!/^([a-zA-Z])*$/.test((formulario.name.value).split(" ").join(""))||!/^[^]+$/.test(formulario.name.value)){
        alert("Ingrese solo valores de la A a la Z, en el campo de nombre, el campo no puede estar vacio");
    }
    else{
        namev=true;
    }
    if(!/^([a-zA-Z])*$/.test((formulario.lastname.value.split(" ")).join(""))||!/^[^]+$/.test(formulario.lastname.value)){
        alert("Ingresa solo valores de la A a la Z, en el campo de apellidos, el campo no puede estar vacio");
    }else{
        lastnamev=true;
    }
    if(!/^([0-9])*$/.test(formulario.phone.value)||!/^[^]+$/.test(formulario.phone.value)){
        alert("Ingrese solo valores numericos, en el campo del telefono, el campo no puede estar vacio");
    }else{
        phonev=true;
    }
    //validacion de fecha de nacimiento
    var ing_fecha = (formulario.birthday.value).split("-");
    var act_fecha = new Date();
    if(ing_fecha[0]!=""){
    var year = (act_fecha.getFullYear() - ing_fecha[0])-1;
    var mes = (act_fecha.getMonth())+(12-(ing_fecha[1]));
    var dia = ing_fecha[2] - act_fecha.getDate();
    var dias_mes = [31,31,28,31,30,31,30,31,31,30,31,30];
        if(dia!=0){
            dia = dias_mes[act_fecha.getMonth()+1]-dia;
        }else{
            dia=0;
            mes=mes+1;
        }
        if(dia> dias_mes[act_fecha.getMonth()+1]){
            dia = dia - dias_mes[act_fecha.getMonth()+1];
            mes=mes+1;
        }
        if(mes==12||mes>12){
            if(mes==12){
                mes=0;
                year = year+1;
            }else{
                mes=mes-12;
                year=year+1;
            }
        }
        if(year>=18){
            datev=true;
        }else{
            alert("eres menor de 18 años, no puedes ingresar")
        }
    }else{
        alert("ingresa el campo de la fecha");
    }
        
        if(namev==true&&lastnamev==true&&phonev==true&&datev==true){
            document.cookie ="nombre="+formulario.name.value;
            document.cookie="apellido="+formulario.lastname.value;
            document.cookie = "edad="+year;
            document.cookie="telefono="+formulario.phone.value;
            
            alert("bienvenido");
            window.close("index.html");
            window.open("shop.html");
        }
}