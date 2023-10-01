function ejecutarMenu() {
    var respuesta = Number(prompt(
      "Bienvenido al Menú Principal:\n" +
      "1. Contar números pares e impares\n" +
      "2. Calcular el factorial\n" +
      "3. Validar contraseña\n" +
      "4. Generar tabla de multiplicar\n" +
      "5. Adivina el número\n" +
      "6. Salir"
    ));
  
    switch (respuesta) {
      case 1:
        contarNumerosParesImpares();
        break;
      case 2:
        calcularFactorial();
        break;
      case 3:
        validarContraseña();
        break;
      case 4:
        generarTablaDeMultiplicar();
        break;
      case 5:
        jugarAdivinaElNúmero();
        break;
      case 6:
        salirDelPrograma();
        break;
      default:
        alert("Opción no válida. Por favor, inténtelo de nuevo.");
    }
  }
  
  function contarNumerosParesImpares() {
    let numero = Number(prompt("Ingrese un número: "));
    
    console.log("Números pares:");
    for (let i = 0; i <= numero; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
    
    console.log("Números impares:");
    for (let i = 0; i <= numero; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  
  function calcularFactorial() {
    let numero = Number(prompt("Ingrese un número: "));
    let factorial = 1;
  
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
  
    console.log("El factorial de " + numero + " es: " + factorial);
  }
  
  function validarContraseña() {
    let contraseña = prompt("Ingrese su contraseña: ");
  
    if (contraseña === "secreto123") {
      console.log("Acceso concedido");
    } else {
      console.log("Acceso denegado");
    }
  }
  
  function generarTablaDeMultiplicar() {
    let numero = Number(prompt("Ingrese un número: "));
  
    for (let i = 1; i <= 10; i++) {
      let multiplicacion = numero * i;
      console.log(numero + " * " + i + " = " + multiplicacion);
    }
  }
  
  function jugarAdivinaElNúmero() {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
  
    while (intentos < 5) {
      let intento = Number(prompt("Adivine el número (1-100): "));
      intentos++;
  
      if (intento === numeroAleatorio) {
        console.log("¡Felicidades! Adivinó el número en " + intentos + " intentos.");
        return;
      } else if (intento < numeroAleatorio) {
        console.log("Muy bajo. Inténtelo de nuevo.");
      } else {
        console.log("Muy alto. Inténtelo de nuevo.");
      }
    }
  
    console.log("Lo siento, no pudo adivinar el número. Era " + numeroAleatorio + ".");
  }
  
  function salirDelPrograma() {
    alert("Ha salido del programa.");
  }
  
  ejecutarMenu();