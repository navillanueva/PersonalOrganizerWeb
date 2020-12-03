var contadorCarpeta = 3; /*Numero de carpetas*/
var contadorTarea = 2; /*Numero de tareas*/

/*---------------------------------funciones Header---------------------------------*/

function abrirBuscador(){//Abre el buscador
        for(var i=0; i<contadorCarpeta; i++){
                if(document.getElementById('idListaTareas'+i+'').style.display == "block" || document.getElementById('idListaTareas'+i+'').style.display == ""){
                        
                        document.getElementById('idListaTareas'+i+'').style.display = "none";
                }
        } 
        var buscador = document.getElementById('idOpcionesBuscador');
        buscador.style.display = 'block';
        var buscador = document.getElementById('idCerrarBuscador');
        buscador.style.display = 'block';
        var busquedas = document.getElementById('busquedasRecientes');
        busquedas.style.display = "block";
}

function cerrarBuscador(){//Cierra el buscador
        var elem = document.getElementById('idListaTareas0');
        elem.style.display = "block";
        var buscador = document.getElementById('idOpcionesBuscador');
        buscador.style.display = "none";
        var cerrar = document.getElementById('idCerrarBuscador');
        cerrar.style.display = 'none';
        var busquedas = document.getElementById('busquedasRecientes');
        busquedas.style.display = "none";
}


function generarBusqueda(num){//Aparecen las búsquedas recientes
        var busquedaRec = document.getElementById('busquedasRecientes');
        if(num ==1){
                busquedaRec.innerHTML = '<div class="TituloBusquedas"><strong>Busquedas recientes</strong></div><div class="textoBuscador">Recoger a los niños</div><br><div class="textoBuscador">Medico</div>';
        }else if(num==2){
                busquedaRec.innerHTML = '<div class="TituloBusquedas"><strong>Busquedas recientes</strong></div><div class="textoBuscador">#Colegio</div><br><div class="textoBuscador">#Salud</div><br><div class="textoBuscador">#Trabajo</div>';
        }else if(num==3){
                busquedaRec.innerHTML = '<div class="TituloBusquedas"><strong>Busquedas recientes</strong></div><div class="textoBuscador">Lunes 24 de octubre</div><br><div class="textoBuscador">Octubre</div><br><div class="textoBuscador">Martes 15 de diciembre</div>';
        }else if(num==4){
                busquedaRec.innerHTML = '<div class="TituloBusquedas"><strong>Busquedas recientes</strong></div><div class="textoBuscador">Familia</div><br><div class="textoBuscador">#Salud</div><br><div class="textoBuscador">Trabajo</div>';
        }else{
                busquedaRec.innerHTML = '<div class="TituloBusquedas"><strong>Busquedas recientes</strong></div><div class="textoBuscador">Luis Hernandez</div><br><div class="textoBuscador">Saray Sánchez</div><br><div class="textoBuscador">Javier García</div>';
        }
}
function openAjustes() { //Abre el pop up de ajustes
        document.getElementById("PopUpAjustes").style.display = "block";
}
function closeAjustes() { //Cierra el pop up de ajustes
        document.getElementById("PopUpAjustes").style.display = "none";
}

var selecTema = 0;
function cambiarTema(){
        if(selecTema == 0){ /*Gris*/
                document.getElementById("idEncabezado").style.backgroundColor = "#e040fb";
                document.getElementById("idBody").style.backgroundColor = "#4B515D";
                document.getElementById("idMenu").style.backgroundColor = "#3E4551";
                document.getElementById("buttonFooter").style.border = "#aa66cc 12px solid";
                document.getElementById("container").style.background = "#aa66cc";
                selecTema++;
        }else if(selecTema == 1){/*Azul*/
                document.getElementById("idEncabezado").style.backgroundColor = "#222331";
                document.getElementById("idBody").style.backgroundColor = "#505D88";
                document.getElementById("idMenu").style.backgroundColor = "#2B2E3E";
                document.getElementById("buttonFooter").style.border = "#3f51b5 12px solid";
                document.getElementById("container").style.background = "#3f51b5";
                selecTema++;
        }else{/*Verde*/
                document.getElementById("idEncabezado").style.backgroundColor = "#009688";
                document.getElementById("idBody").style.backgroundColor = "#2E2E2E";
                document.getElementById("idMenu").style.backgroundColor = "#212121";
                document.getElementById("buttonFooter").style.border = "#00695c 12px solid";
                document.getElementById("container").style.background = "#00695c";
                selecTema = 0;
        }
        
}

/*---------------------------------funciones Carpetas---------------------------------*/

function abrirCarpeta(num){ //Abre la carpeta y su correspondiente zona de trabajo
        if (document.getElementById('idOpcionesBuscador').style.display == "block"){
                document.getElementById('idOpcionesBuscador').style.display = "none";
                document.getElementById('idCerrarBuscador').style.display = "none";
                document.getElementById('busquedasRecientes').style.display = "none";
        }
        var newImagen = document.getElementById('imagenCarpeta'+ num +'');
        for(var i=0; i<contadorCarpeta; i++){
                if(i != num){
                        if(document.getElementById('idListaTareas'+i+'').style.display == "block" || document.getElementById('idListaTareas'+i+'').style.display == ""){
                                document.getElementById('idListaTareas'+i+'').style.display = "none";
                                if(i>0){
                                        document.getElementById('imagenCarpeta'+i+'').innerHTML = '<img id="idiconocarpeta" src="images/carpetacerrada.png">';
                                }
                                
                        }
                }else{
                        if(newImagen.innerHTML == `<img id="idiconocarpeta" src="images/carpetacerrada.png">`)  {
                                newImagen.innerHTML = '<img id="idiconocarpeta" src="images/carpetaabierta.png">';
                                document.getElementById('idListaTareas'+num+'').style.display = "block";  
                        }else{
                                newImagen.innerHTML = '<img id="idiconocarpeta" src="images/carpetacerrada.png">';
                                document.getElementById('idListaTareas0').style.display = "block";   
                        }
                }        
        }                       
}

function crearCarpeta() {//Abre el PopUp de crear una carpeta
        document.getElementById("PopUpAddCarpeta").style.display = "block";
        document.getElementById('formularioAddCarpeta').reset();
}
function closeAddCarpeta() { //Cierra el PopUp de crear una carpeta
        document.getElementById("PopUpAddCarpeta").style.display = "none";
}
function AddCarpeta(elem) {//Crea una carpeta
        var nombre = document.formularioAddCarpeta.nombre.value;
        if(nombre ==""){

        }else{
         document.getElementById('PopUpAddCarpeta').style.display="none";
         var carpeta = document.createElement("div");
         carpeta.classList.add("carpeta");
         carpeta.setAttribute("id","carpeta"+contadorCarpeta+"");

         carpeta.innerHTML = `<button type="button" class="imagenCarpeta" id="imagenCarpeta`+ contadorCarpeta +`" onclick="abrirCarpeta('`+ contadorCarpeta +`')"><img id="idiconocarpeta" src="images/carpetacerrada.png" ></button>
         <div class="textoCarpeta" id="nombreCarpeta`+ contadorCarpeta +`">`+nombre+`</div>
         <div class="imagenOpciones" id="opciones`+ contadorCarpeta +`" onclick="desplegarMenu('`+ contadorCarpeta +`')"><img id="idiconoopciones" src="images/opciones.png">
                        <div id="subopciones`+ contadorCarpeta +`" class="subopciones">
                                <button type="button" class="botonOpciones" onclick="eliminarCarpeta('`+ contadorCarpeta +`')"><p>Eliminar</p></button>
                                <button type="button" class="botonOpciones" onclick="PopUprenombrar('`+ contadorCarpeta +`')"><p>Renombrar</p></button>
                        </div></div>`
         var botonAdd = document.getElementById("botonAñadirCarpeta");
         elem.parentElement.parentElement.parentElement.insertBefore(carpeta, botonAdd);
         

         var nuevoCuerpo = document.createElement("div");
         nuevoCuerpo.classList.add("listaTareas");
         nuevoCuerpo.setAttribute("id","idListaTareas"+contadorCarpeta+"");
         nuevoCuerpo.innerHTML =`<div id="divAddEvento`+contadorCarpeta+`">
                    <button type="button" class="addEventoBoton" id="addEventoBoton" onclick="openAddEvento()"><img id="idAñadirEvento" src="images/addEvento.png">Añadir evento</button>
                </div>`
         
         var trabajo = document.getElementById("idZonaTrabajo");
         trabajo.appendChild(nuevoCuerpo);
         contadorCarpeta++;
        }
}
function desplegarMenu(n) { //Abre y cierra las opciones que tiene cada carpeta
        if(document.getElementById('subopciones'+n+'').style.display=="block"){
                document.getElementById('subopciones'+n+'').style.display="none";
        }else{
                document.getElementById('subopciones'+n+'').style.display="block";
        }
}
function eliminarCarpeta(num) { //Elimina una carpeta y su zona de trabajo, además recoloca los números del resto de carpetas
        if (confirm("¿Estás seguro que quieres cerrar esta carpeta?")) {
                var elem = document.getElementById('carpeta'+num+'');
                var elem2 = document.getElementById('idListaTareas'+num+'');
                for(var i=num; i<contadorCarpeta; i++){
                        var cambioID = document.getElementById("carpeta"+i);
                        var cambioNombre = document.getElementById("nombreCarpeta"+i).innerHTML;
                        var j = i-1;
                        cambioID.setAttribute("id", "carpeta"+j);  
                        cambioID.innerHTML = `<button type="button" class="imagenCarpeta" id="imagenCarpeta`+j+`" onclick="abrirCarpeta('`+j+`')"><img id="idiconocarpeta" src="images/carpetacerrada.png" ></button>
                        <div class="textoCarpeta" id="nombreCarpeta`+j+`">`+cambioNombre+`</div>
                        <div class="imagenOpciones" id="opciones`+j+`" onclick="desplegarMenu('`+j+`')"><img id="idiconoopciones" src="images/opciones.png">
                        <div id="subopciones`+j+`" class="subopciones">
                            <button type="button" class="botonOpciones" onclick="eliminarCarpeta('`+j+`')"><p>Eliminar</p></button>
                            <button type="button" class="botonOpciones" onclick="PopUprenombrar('`+j+`')"><p>Renombrar</p></button>
                        </div></div>`;
                        var cambioID2 = document.getElementById("idListaTareas"+i);
                        cambioID2.setAttribute("id", "idListaTareas"+j);
                        var cambioID3 = document.getElementById("divAddEvento"+i);
                        cambioID3.setAttribute("id", "divAddEvento"+j);           
                }
                elem.parentNode.removeChild(elem);
                elem2.parentNode.removeChild(elem2);
                contadorCarpeta--;                 
        }
}

//abre el PopUp de renombrar una carpeta
function PopUprenombrar(num){
        document.getElementById("PopUpRenombrarCarpeta").style.display = "block";
        var numero = document.getElementById('idCambiarNombre');
        numero.setAttribute("onclick","renombrar("+num+")");
        document.getElementById('formularioAddCarpeta').reset();
}
//Cierra el PopUp de renombrar una carpeta
function closePopUprenombrar(num){
        document.getElementById("PopUpRenombrarCarpeta").style.display = "none";
}
function renombrar(num){//Renombra una carpeta
        var nombre = document.formularioRenombrarCarpeta.nombre.value;
        if(nombre ==""){

        }else{
                var carpeta = document.getElementById('nombreCarpeta'+num+'');
                carpeta.innerHTML = nombre;
                document.getElementById("PopUpRenombrarCarpeta").style.display = "none";
        }
}

function openEditarEvento(num){ //Abre el formulario de editar evento
        var nombreEvento = document.getElementById("idNombreTarea"+num+"").innerHTML;

        var fechaInicio = document.getElementById("idFechaInicio"+num+"").innerHTML;
        var fechaFin = document.getElementById("idFechaFin"+num+"").innerHTML;

        var PopUpEditar = document.createElement("div");
        PopUpEditar.classList.add("formaPopUpAddEvento");
        PopUpEditar.setAttribute("id","PopUpEditarEvento");
        PopUpEditar.innerHTML = `<form action="/action_page.php" class="contenidoPopUpAddEvento" id="formularioEditarEvento" name="formularioEditarEvento">
        <button type="button" class="cerrarAddEvento" onclick="closeEditarEvento()">X</button>
          <div class="tituloAddEventoPopUp">Edita tu evento</div><br>

          <label for="descripcion" class="textoAddEventoPopUp">Nombre del evento</label>
          <input placeholder="`+nombreEvento+`" name="nombreEvento" required>

          <div class="textoAddEventoPopUp"><img id="idIconosAddEventoPopUp" src="images/iconoCrono.png">Fecha y hora de inicio</div>
          <input placeholder="`+fechaInicio+`" name="fechaInicio" type="datetime-local" required><br>

          <div class="textoAddEventoPopUp"><img id="idIconosAddEventoPopUp" src="images/cronoOut.png">Fecha y hora de fin</div>
          <input placeholder="`+fechaFin+`" name="fechaFin" type="datetime-local" required><br>

          <div class="textoAddEventoPopUp"><img id="idIconosAddEventoPopUp" src="images/mapita.png">Selecciona la ubicación</div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.442161583973!2d-3.767505784295627!3d40.332536368678994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41898b1cc06b5b%3A0xaf0cadd098b516f8!2sUniversidad%20Carlos%20III%20de%20Madrid%3A%20Campus%20de%20Legan%C3%A9s!5e0!3m2!1ses!2ses!4v1575220718486!5m2!1ses!2ses" width="350" height="250" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          <br>
          <div class="textoAddEventoPopUp"><img id="idIconosAddEventoPopUp" src="images/addUser.png">Añade personas al evento</div>

          <div class="textoAlarmaPopUp"><img id="idIconosAddEventoPopUp" src="images/alarma01.png">Añade una alarma</div><br>

          <label for="prioridad" class="textoAddEventoPopUp">Selecciona una prioridad</label>
                    <select name="prioridadEvento" class="textoAddEventoPopUp">
                            <option value="1" selected>Urgente</option>
                            <option value="2">Importante</option>
                            <option value="3">Sin importancia</option>
          </select><br><br>
      
          <input type="button" class="boton" value="Confirmar cambios" onclick="editarEvento(`+num+`)">
          <button type="button" class="boton Rojo" onclick="eliminarTarea(`+num+`)">Borrar</button>
        </form>`;

        var elem = document.getElementById("idBody");
        elem.appendChild(PopUpEditar);
        document.getElementById("PopUpEditarEvento").style.display = "block";
        document.getElementById('formularioEditarEvento').reset();
}

/*---------------------------------funciones Tareas---------------------------------*/

function verificarTarea(num){ //Marca la casilla de la tarea seleccionada
        var elem = document.getElementById('idVerificar'+num+'');

        if(elem.style.display == "none" || elem.style.display == "" ){
                elem.style.display = "block";
        }else{
                elem.style.display = "none";
        }
}


function openAddEvento() { //Abre el formulario de añadir tarea
        document.getElementById('formularioAddEvento').reset();
        
        var lista = document.getElementById("idListaTematicas");
        lista.innerHTML = '<option value="0" selected>Inicio</option>';
        for(var i=1; i<contadorCarpeta; i++){
                var comprobar = document.getElementById("nombreCarpeta"+i+""); //Comprueba que la carpeta exista
                if(comprobar=="" || comprobar==null){

                }else{
                var nuevaOpcion = document.createElement("option");
                nuevaOpcion.setAttribute("value",i);
                nuevaOpcion.innerHTML = document.getElementById("nombreCarpeta"+i+"").innerHTML;
                lista.appendChild(nuevaOpcion);
                }
        }
        document.getElementById("PopUpAddEvento").style.display = "block";      
}
function closeAddEvento() { //Cierra el formulario de añadir evento
        document.getElementById("PopUpAddEvento").style.display = "none";
}
function crearEvento() { //Crea la tarea
        var evento = document.formularioAddEvento.nombreEvento.value;
        var carpeta = document.formularioAddEvento.tematicaEvento.value;
        var descripcion = document.formularioAddEvento.descripcionEvento.value;
        var fechaInicio = document.formularioAddEvento.fechaInicio.value;
        var fechaFin = document.formularioAddEvento.fechaFin.value;
        var prioridad = document.formularioAddEvento.prioridadEvento.value;
        var etiquetas = document.formularioAddEvento.etiquetaEvento.value;

        if(evento=="" || carpeta=="" || descripcion==""|| fechaInicio==""|| fechaFin ==""|| prioridad==""|| etiquetas==""){

        }else{
        event.preventDefault();
        document.getElementById("PopUpAddEvento").style.display = "none";
        var elem = document.getElementById('idListaTareas'+carpeta+'');
        var borrar = document.getElementById('divAddEvento'+carpeta+'');
        elem.removeChild(borrar);

        var nuevaTarea = document.createElement("div");
        nuevaTarea.classList.add("tarea");
        nuevaTarea.setAttribute("id", "idTarea"+contadorTarea+"");

        nuevaTarea.innerHTML = 
        `<button type="button" class="casillaTarea" onclick="verificarTarea('`+contadorTarea+`')">
                        <div class="tareaCompleta" id="idVerificar`+contadorTarea+`">
                            <img id="idVerificacion" src="images/verificar.png">
                        </div>
                    </button>
        <div class="cuerpoTarea">
            <div class="tituloTarea"id="idNombreTarea`+contadorTarea+`">`+evento+`</div>
            <div class="ajustesTarea"><button type="button" class="editarTarea" onclick="openEditarEvento(`+contadorTarea+`)"><img id="idAjustesTarea" src="images/llave.png"></button></div>
            <div class="imagenTarea">
            <img id="idimagenUbicacion" src="images/imagenUbicacion.png">
                <div class="datosTarea">
                    <div>
                        <div class="iconoDatosTarea"><img id="idiconoUbicacion" src="images/iconoCrono.png"></div>
                        <div class="textoDatos" id="idFechaInicio`+contadorTarea+`">`+fechaInicio+`</div>
                    </div>
                    <div>
                        <div class="iconoDatosTarea"><img id="idiconoCal" src="images/cronoOut.png"></div>
                        <div class="textoDatos" id="idFechaFin`+contadorTarea+`">`+fechaFin+`</div>
                    </div>
                </div>
                <div class="prioridadTarea" id="idPrioridadTarea`+contadorTarea+`">
                    <div class="textoPrioridad"><strong>Prioridad</strong></div>
                    <img id="idiconoPrioridad" src="images/prioridad`+prioridad+`.png">
                </div>
            </div>   
        </div>`
        contadorTarea++;
        elem.appendChild(nuevaTarea);

        var nuevoAddEvento = document.createElement("div");
        nuevoAddEvento.setAttribute("id","divAddEvento"+carpeta+"");
        nuevoAddEvento.innerHTML = 
        `<button type="button" class="addEventoBoton" id="addEventoBoton" onclick="openAddEvento()"><img id="idAñadirEvento" src="images/addEvento.png">Añadir evento</button>`
        elem.appendChild(nuevoAddEvento);
        }
        
}

function closeEditarEvento() { //Cierra el formulario de editar evento
        document.getElementById("PopUpEditarEvento").style.display = "none";
}
function editarEvento(num){ //Edita una tarea
        var evento = document.formularioEditarEvento.nombreEvento.value;
        var fechaInicio = document.formularioEditarEvento.fechaInicio.value;
        var fechaFin = document.formularioEditarEvento.fechaFin.value;
        var prioridad = document.formularioEditarEvento.prioridadEvento.value;

        if(evento=="" || fechaInicio==""|| fechaFin ==""|| prioridad==""){

        }else{
        event.preventDefault();
        document.getElementById("PopUpEditarEvento").style.display = "none";
        document.getElementById("idNombreTarea"+num).innerHTML = evento;
        document.getElementById("idFechaInicio"+num).innerHTML = fechaInicio;
        document.getElementById("idFechaFin"+num).innerHTML = fechaFin;
        document.getElementById("idPrioridadTarea"+num).innerHTML = `<div class="textoPrioridad"><strong>Prioridad</strong></div>
        <img id="idiconoPrioridad" src="images/prioridad`+prioridad+`.png">`;
        }
}


function eliminarTarea(num){
        var tarea = document.getElementById('idTarea'+num+'');
        tarea.remove();
        document.getElementById("PopUpEditarEvento").style.display = "none";
        contadorTarea--;
}

/*---------------------------------funciones Footer---------------------------------*/

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

