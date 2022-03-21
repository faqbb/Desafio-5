
class Mascota {
 constructor(nombre, edad, raza, horas, dueño) {
    this.nombre = nombre
    this.edad = edad
    this.raza = raza 
    this.horas = parseFloat(horas)
    this.dueño = dueño
 }
}
const mascota1 = new Mascota("Paco", 3, "Bulldog", 8, "Jose Luis")
const mascota2 = new Mascota("Lucia", 5, "Golden", 12, "Maria")
const mascota3 = new Mascota("Milo", 1, "Caniche", 6, "Franco")
const mascota4 = new Mascota("Keyla", 2, "Dalmata", 4, "Carlos")
const mascota5= new Mascota("Nono", 7, "Silvestre", 3, "Maximo")
function total (horas) {
    if (horas >= 8) {
        return horas * 100 + 200
    }
    else {
        return horas * 100
    }
}
const mascotas = [mascota1, mascota2, mascota3, mascota4, mascota5]

localStorage.setItem("mascotas", JSON.stringify(mascotas))
let transicionUser = document.getElementById('fila')
let transicionUserReg = document.getElementById('filaReg')
let loguearse = document.getElementById('login')
        loguearse.addEventListener('submit', (e) => {
            e.preventDefault()
            JSON.parse(localStorage.getItem("mascotas"))
            let nombreLog = document.getElementById('nameLog')
            let nombreMascotaLog = document.getElementById('petnameLog')
            let razaLog = document.getElementById('raceLog')
            let edadLog = document.getElementById('ageLog')
            let verLog = mascotas.find((el) => el.dueño == nombreLog.value && el.nombre == nombreMascotaLog.value)
            console.log(verLog)
                if (verLog == undefined) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ups...',
                        text: 'Verifique sus datos e intente nuevamente',
                        showConfirmButton: true,
                      })
                }               
                if (verLog.raza == razaLog.value && verLog.edad == edadLog.value) {
                    transicionUser.innerHTML = `
                    <div class="alert alert-success mt-5 text-center" role="alert">
                        Bienvenido
                    </div>
                    <div>  
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${nombreLog.value}</h5>
                                <p class="card-text">${razaLog.value} llamado/a ${nombreMascotaLog.value} de ${edadLog.value} años</p>
                            </div>
                        </div>
                    </div>`
                    if (!(verLog.horas === 0 )) {
                        transicionUser.innerHTML += `
                    <div class="alert alert-secondary mt-5 text-center" role="alert">
                        Su mascota ha estado ${verLog.horas} horas, por lo que usted debe ${total(verLog.horas)} pesos
                    </div>
                    </div>`
                    }
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ups...',
                        text: 'Verifique sus datos e intente nuevamente',
                        showConfirmButton: true,
                      })
                } 
            })
    
let registrarse = document.getElementById('register')

        registrarse.addEventListener('submit', (e) => {
            e.preventDefault()
            let nombre = document.getElementById('name')
            let nombreMascota = document.getElementById('petname')
            let raza = document.getElementById('race')
            let edad = document.getElementById('age')
            /*console.log(`${nombre.value} ${nombremascota.value} ${raza.value} ${edad.value}`)*/  
            if (nombre.value   == "" || nombreMascota.value  == "" || raza.value  == "" || edad.value  == "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Ups...',
                    text: 'Ha habido un error con sus datos',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
            else { 
                    let mascota = new Mascota(`${nombreMascota.value}`, `${edad.value}`, `${raza.value}`,0,`${nombre.value}`)
                    let filaReg= document.getElementById('filaReg')
                    mascotas.push(mascota)
                    localStorage.setItem("mascotas", JSON.stringify(mascotas)) 
                    filaReg.innerHTML= ""
                    Swal.fire({
                        icon: 'success',
                        title: 'Felicitaciones',
                        text: 'Se ha registrado exitosamente',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }  
        })
            
