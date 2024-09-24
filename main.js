//GENERADOR DE CONTRASEÑAS

let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
//1. AGREGAR MAS CARACTERES ESPECIALES
const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,<.>/?";



//3. VALIDAR SI LA CONTRASEÑA ES FUERTE O DÉBIL
//Funcion para generar contraseñas

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado);


    if (!numeroDigitado )
    {
        alert("INGRESA UNA CANTIDAD PARA CONTINUAR");
    }
    else {

    if (numeroDigitado < 8)
        {
            alert("La cantidad de caracteres no es válido, debe ser mayor a 8");
            document.getElementById('resultado').innerHTML = " SU CONTRASEÑA SERÁ DÉBIL, debe ser mayor a 8 CARACTERES"; 
        }
        else {


            let password = '';
            for (let i=0; i < numeroDigitado; i++)
                {
                   let aleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
                   console.log(aleatorio);
                   password+=aleatorio;
                }
                //DEBE TENER 3 O MAS SI CUMPLE CON TODAS
                let mayusculas = 0;
                let minus = 0;
                let especial = 0;
                let numero = 0;
                
                for (let i = 0; i < password.length; i++) {
                    if (password[i] == password[i].toUpperCase() && isNaN(password[i])) {
                    mayusculas+=1;
                    }
                    if (password[i] == password[i].toLowerCase()) {
                        minus+=1;
                    }
                        let especiales = "!@#$%^&*()-_=+[]{}|;:,<.>/?";

                    if (especiales.includes(password[i])) {
                            especial+=1;
                    }

                    let numeros = "0123456789";

                    if (numeros.includes(password[i])) {
                            numero+=1;
                    }
                }
                

                //VER QUE TIPO DE CONTRASEÑA SE GENERO
                if(mayusculas != 0 && minus != 0 && especial != 0 && numero != 0)
                {
                    document.getElementById('resultado').innerHTML = " SU CONTRASEÑA ES FUERTE";  
                } 
                if (mayusculas == 0 || minus == 0 || especial == 0 || numero == 0 ){
                    document.getElementById('resultado').innerHTML = " SU CONTRASEÑA ES NO ES MUY FUERTE"; 
                }

                console.log('password generada =', password); //poner + concatenar
                contrasena.value = password;

                console.log(mayusculas);
                console.log(minus);
                console.log(especial);
        }
        //document.getElementById("resultado").value = ""; 
    } //fin if principal
        }//FIN FUNCION


//2. Botón de limpiar
function limpiar() {
    // Vaciar el campo de entrada de cantidad
    document.getElementById("cantidad").value = ""; // Usa .value para inputs
    // Vaciar el contenido de la contraseña generada
    document.getElementById("contrasena").value = ""; 
    document.getElementById("resultado").innerHTML = ""; 

}

/*console.log(cantidad)
cantidad.value //Es en la consola del server
*/



