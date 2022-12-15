class Alumno {
  constructor(codigo, nombre, nota1, nota2, nota3, nota4) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.nota4 = nota4;
  }
  promedio() {
    let nota1 = this.nota1 * 0.15;
    let nota2 = this.nota2 * 0.2;
    let nota3 = this.nota3 * 0.25;
    let nota4 = this.nota4 * 0.4;
    let suma = nota1 + nota2 + nota3 + nota4;
    return suma;
  }
  condicional() {
    if (this.promedio() >= 12) {
      alert("Estas aprobado");
    } else {
      alert("Estas desaprobado");
    }
  }

  obsequio() {
    if (this.promedio() > 17) {
      alert("has ganado una Mochila");
    } else {
      alert("no califica");
    }
  }
}

const codigo = prompt("Ingrese su codigo de alumno");
const nombre = prompt("Ingresa su nombre");
const nota1 = prompt("Ingresa su primera nota");
const nota2 = prompt("Ingresa su segunda nota");
const nota3 = prompt("Ingresa su tercera nota");
const nota4 = prompt("Ingresa su cuarta nota");

let alum = new Alumno(codigo, nombre, nota1, nota2, nota3, nota4);
console.log(alum);

alum.promedio();
alum.condicional();
alum.obsequio();

document.getElementById("principal").innerHTML = "Su promedio es: " + alum.promedio();