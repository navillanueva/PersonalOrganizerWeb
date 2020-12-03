/*Parte del calendario*/
class Calendar {

    constructor() {
        this.monthDiv = document.querySelector('.cal-month__current')
        this.headDivs = document.querySelectorAll('.cal-head__day')
        this.bodyDivs = document.querySelectorAll('.cal-body__day')
        this.nextDiv = document.querySelector('.cal-month__next')
        this.prevDiv = document.querySelector('.cal-month__previous')
    }

    //Inicializacion del calendario con la fecha actual
    init() {
        moment.lang('es', {
            months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
            weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')}
        )

        this.month = moment()
        this.today = this.selected = this.month.clone()
        this.weekDays = moment.weekdaysMin(true)

        this.headDivs.forEach((day, index) => {
            day.innerText = this.weekDays[index]
        })

        this.nextDiv.addEventListener('click', _ => { this.addMonth() })
        this.prevDiv.addEventListener('click', _ => { this.removeMonth() })

        this.bodyDivs.forEach(day => {
            day.addEventListener('click', e => {
                const date = +e.target.innerHTML < 10 ? `0${e.target.innerHTML}` : e.target.innerHTML

                if (e.target.classList.contains('cal-day__month--next')) {
                    this.selected = moment(`${this.month.add(1, 'month').format('YYYY-MM')}-${date}`)
                } else if (e.target.classList.contains('cal-day__month--previous')) {
                    this.selected = moment(`${this.month.subtract(1, 'month').format('YYYY-MM')}-${date}`)
                } else {
                    this.selected = moment(`${this.month.format('YYYY-MM')}-${date}`)
                }

                this.update()
            })
        })

        this.update()

    }

    //Actualizacion de mes y dias del calendario
    update() {
        this.calendarDays = {
            first: this.month.clone().startOf('month').startOf('week').date(),
            last: this.month.clone().endOf('month').date()
        }

        this.monthDays = {
            lastPrevious: this.month.clone().subtract(1, 'months').endOf('month').date(),
            lastCurrent: this.month.clone().endOf('month').date()
        }

        this.monthString = this.month.clone().format('MMMM YYYY')

        this.draw()
    }

    //Añadir un mes
    addMonth() {
        this.month.add(1, 'month')

        this.update()
    }

    //Quitar un mes
    removeMonth() {
        this.month.subtract(1, 'month')

        this.update()
    }

    //Relleno del calendario
    draw() {
        this.monthDiv.innerText = this.monthString

        let index = 0

        if (this.calendarDays.first > 1) {
            for (let day = this.calendarDays.first; day <= this.monthDays.lastPrevious; index++) {
                this.bodyDivs[index].innerText = day++

                this.cleanCssClasses(false, index)

                this.bodyDivs[index].classList.add('cal-day__month--previous')
            }
        }

        let isNextMonth = false
        for (let day = 1; index <= this.bodyDivs.length - 1; index++) {
            if (day > this.monthDays.lastCurrent) {
                day = 1
                isNextMonth = true
            }

            this.cleanCssClasses(true, index)

            if (!isNextMonth) {
                if (day === this.today.date() && this.today.isSame(this.month, 'day')) {
                    this.bodyDivs[index].classList.add('cal-day__day--today')
                }

                if (day === this.selected.date() && this.selected.isSame(this.month, 'month')) {
                    this.bodyDivs[index].classList.add('cal-day__day--selected')
                }

                this.bodyDivs[index].classList.add('cal-day__month--current')
            } else {
                this.bodyDivs[index].classList.add('cal-day__month--next')
            }

            this.bodyDivs[index].innerText = day++
        }

    }

    //Deja vacio el calendario
    cleanCssClasses(selected, index) {
        this.bodyDivs[index].classList.contains('cal-day__month--next') &&
            this.bodyDivs[index].classList.remove('cal-day__month--next')
        this.bodyDivs[index].classList.contains('cal-day__month--previous') &&
            this.bodyDivs[index].classList.remove('cal-day__month--previous')
        this.bodyDivs[index].classList.contains('cal-day__month--current') &&
            this.bodyDivs[index].classList.remove('cal-day__month--current')
        this.bodyDivs[index].classList.contains('cal-day__day--today') &&
            this.bodyDivs[index].classList.remove('cal-day__day--today')
        if (selected) {
            this.bodyDivs[index].classList.contains('cal-day__day--selected') &&
                this.bodyDivs[index].classList.remove('cal-day__day--selected')
        }
    }
}

//Variable para realizar la comprobacion de los meses
var months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'May',
    'Junio', 'Julio', ' Agosto', 'Septiembre' ,
    'Octubre', 'Noviembre', 'Diciembre'
];

//Obtencion del numero de mes a partir del nombre de este
function monthNameToNum(monthname) {
    var month = months.indexOf(monthname);
    return month ? month + 1 : 0;
}

//Si se realiza doble click sobre un dia da la opción de crear evento
$(".cal-body__day").dblclick(function(){
    closeCalendario();
    openAddEvento();
    var day = document.getElementsByClassName("cal-day__day--selected")[0].innerHTML;
    var mounthYear = document.getElementsByClassName("cal-month__current")[0].innerHTML.split(' ');
    var mounth = monthNameToNum(mounthYear[0]);
    var year = mounthYear[1];
    var time = moment();
    document.getElementsByName("fechaInicio")[0].value = day + "/" + mounth + "/" + year + " " + time.format('HH:mm');
});

//Parte de los eventos
function abrirCalendarioEventos(){
    const cal = new Calendar();
    cal.init();
    //Inicializar la seccion de eventos
    var eventosDiv = document.getElementsByClassName("eventos");

    for (var i = 1; i < contadorTarea; i++) {
        if(document.getElementById("idTarea"+i)!=null){
        var nombreEvento = document.getElementById("idNombreTarea" + i).innerHTML;
        var fechaInicio = document.getElementById("idFechaInicio" + i).innerHTML;
        var fechafin = document.getElementById("idFechaFin" + i).innerHTML;
        var evento = document.createElement("div");
        evento.classList.add("evento");
        evento.setAttribute("id", "idEvento" + i);
        evento.innerHTML =
            `<div class="evento">
                    <div class="eventoTarea">
                        <p>`+ nombreEvento + `</p>
                    </div>
                    <div class="eventoFechas">
                        <div class="eventoInicio">
                            <p>`+ fechaInicio + `</p>
                        </div>
                        <div class="eventoFin">
                            <p>`+ fechafin + `</p> 
                        </div>
                    </div>
                </div>`
        eventosDiv[0].appendChild(evento);
        }else{
            contadorTarea++;
        }
    }

    document.getElementById("idcalendarioEventos").style.display = "block";
}

//Cierre del calendario y los eventos
function closeCalendario(){
    document.getElementById("idcalendarioEventos").style.display = "none";
    var save = $('#eventosDiv .cabeceraEventos').detach();
    $('#eventosDiv').empty().append(save);
}    
