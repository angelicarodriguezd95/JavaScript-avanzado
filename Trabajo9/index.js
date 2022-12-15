class empleado {
  codigo;
  nombre;
  apellido;
  correo;
  cargo;

  sueldoBruto() {
    let sueldoBruto = 0;
    if (this.cargo == "jefe") {
      sueldoBruto = 5000;

      return sueldoBruto;
    } else if (this.cargo == "analista") {
      sueldoBruto = 4000;
      return sueldoBruto;
    } else if (this.cargo == "programador") {
      sueldoBruto = 3000;
      return sueldoBruto;
    } else if (this.cargo == "soporte") {
      sueldoBruto = 2500;
      return sueldoBruto;
    } else if (this.cargo == "asistente") {
      sueldoBruto = 1500;
      return sueldoBruto;
    }
  }

  descuento() {
    let descuento = this.sueldoBruto() * 0.125;
    return descuento;
  }

  sueldoNeto() {
    let sueldoNeto = this.sueldoBruto() - this.descuento();

    return sueldoNeto;
  }

  nombres() {
    let nombre = this.nombre;
    let apellido = this.apellido;

    return nombre + " " + apellido;
  }

  getCargo() {
    let cargo = this.cargo;
    return cargo;
  }
}

let empleado1 = new empleado();

empleado1.nombre = prompt("Ingrese su nombre");
empleado1.apellido = prompt("Ingresa su apellido");
empleado1.correo = prompt("Ingresa su correo");
empleado1.cargo = prompt("Ingresa su cargo");

console.log(empleado1.sueldoBruto());
console.log(empleado1.sueldoNeto());
console.log(empleado1.descuento());

document.getElementById("nombres").innerHTML = "Hola, " + empleado1.nombres();

document.getElementById("cargo").innerHTML = empleado1.getCargo();

document.getElementById("sneto").innerHTML = "S/ " + empleado1.sueldoNeto();

document.getElementById("sbruto").innerHTML = "S/ " + empleado1.sueldoBruto();

document.getElementById("dcto").innerHTML = "S/ " + empleado1.descuento();
