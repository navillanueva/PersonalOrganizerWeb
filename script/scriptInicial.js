function registrarse() {
        var usuario = document.formularioRegistrarse.nombreUsuario.value;
        var contraseña = document.formularioRegistrarse.contraseña.value;
        var nombre = document.formularioRegistrarse.nombreApellidos.value;
        var email = document.formularioRegistrarse.email.value;
        var nacimiento = document.formularioRegistrarse.fechaNacimiento.value;
        var genero = document.formularioRegistrarse.genero.value;
    
        if(usuario=="" | contraseña=="" | nombre=="" | nacimiento=="" | email=="" | genero==""){ 
    
        }else{ 
                event.preventDefault();
                var prueba = document.cookie.split(";");
                var emailComprobante="";
                var pararFor = 0;
                for(var i=0; i<prueba.length && pararFor==0;i++){ //Recorre las cookies existentes para comprobar que no haya una cuenta con el email introducido
                        var c = prueba[i];
                        var j=0;
                        var parar= 0;
                        while(j<c.length && parar==0){ //Saca el email de la cookie recorrida
                                if (c.charAt(j) == ":"){
                                        emailComprobante = c.substr(j+1, email.length); 
                                        parar=1;
                                }else{
                                        j++;
                                }
                        }
                        if(email == emailComprobante){ //Comprueba que el email introducido no esté usado
                                alert("Ya existe una cuenta con este correo");
                                pararFor = 1;
                        }
                }
                if (email != emailComprobante){
                            document.cookie = "email:" +email+ "=" +usuario + "*" +contraseña + "-" +nombre+ "-" +nacimiento; //Crea la cookie
                            var lista = document.cookie; 
                            document.getElementById("PopUpRegistrarse").style.display = "none";
                }
        }
    
    }
    
    function openRegistrarse() { //Abre el formulario de Registro
        document.getElementById("PopUpRegistrarse").style.display = "block";
        document.getElementById('formularioRegistro').reset();
    
    }
    function closeRegistrarse() { //Cierra el formulario de Registro
        document.getElementById("PopUpRegistrarse").style.display = "none";
    }
    
    function iniciarSesion() {
        var email = document.formularioIniciarSesion.email.value;
        var contraseña = document.formularioIniciarSesion.contraseña.value;
    
        if(email=="" | contraseña==""){
    
        }else{
                event.preventDefault();
                var prueba = document.cookie.split(";");
                var emailComprobante="";
                var contraseñaComprobante="";
                var closeFor =0;
                for(var i=0; i<prueba.length && closeFor == 0;i++){ //Recorre las cookies almacenadas
                        var c = prueba[i];
                        var j=0;
                        var parar= 0;
                        while(j<c.length && parar==0){
                                if (c.charAt(j) == ":"){
                                        emailComprobante = c.substr(j+1, email.length); //Si encuentra ":" significa que lo siguiente es un email, luego comprueba que sea igual que el introducido
                                        parar=1;
                                }else{
                                        j++;
                                }
                        }
                        parar = 0;
                        j = 0;
                        while(j<c.length && parar==0){
                                if (c.charAt(j) == "*"){
                                        var asterisco = j+1;
                                        j++;
                                }else if(c.charAt(j) == "-"){
                                        var guion = j+1;
                                        parar=1;
                                }else{
                                        j++;
                                }
                        }
                        contraseñaComprobante = c.substr(asterisco, (guion-asterisco)-1); //Si encuentra "*" significa que lo siguiente es una contraseña, luego coge el string hasta el guion, lo cual sera la contraseña de la cookie
                        if(contraseña == contraseñaComprobante && email == emailComprobante){  //Si el email y la contraseña son correctos, inicia sesión
                                document.getElementById("PopUpIniciarSesion").style.display = "none";
                                location.href= 'principal.html';
                                closeFor = 1;
                                alert("Sesión iniciada");
                        }
                }
        }
                
    
    }
    
    function openIniciarSesion() { //Abre el formulario de Inicio de Sesión
        document.getElementById("PopUpIniciarSesion").style.display = "block";
        document.getElementById('formularioInicio').reset();
    }
    function closeIniciarSesion() { //Cierra el formulario de Inicio de Sesión
        document.getElementById("PopUpIniciarSesion").style.display = "none";
    }

    function openAyuda() { //Abre la ayuda
        document.getElementById("PopUpAyuda").style.display = "block";
    
    }
    function closeAyuda() { //Cierra la ayuda
        document.getElementById("PopUpAyuda").style.display = "none";
    }

    function openNosotros() { //Abre la informacion sobre la empresa
        document.getElementById("PopUpNosotros").style.display = "block";
    
    }
    function closeNosotros() { //Cierra la informacion sobre nosotros
        document.getElementById("PopUpNosotros").style.display = "none";
    }

    function openPrivacidad() { //Abre la informacion sobre la Privacidad
        document.getElementById("PopUpPrivacidad").style.display = "block";
    
    }
    function closePrivacidad() { //Cierra la informacion sobre Privacidad
        document.getElementById("PopUpPrivacidad").style.display = "none";
    }

    function openMore() { //Abre la informacion sobre mas
        document.getElementById("PopUpMore").style.display = "block";
    
    }
    function closeMore() { //Cierra la informacion sobre mas
        document.getElementById("PopUpMore").style.display = "none";
    }