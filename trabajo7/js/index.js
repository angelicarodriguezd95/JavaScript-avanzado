$(document).ready(function() {
    /* nombre */
    const nombre = $("#txt_nombre");
    const salida_nombre = $("#salida_nombre");
    /* apellido*/
    const apellido = $("#txtapellido");
    const salida_apellido = $("#salida_apellido");

    /* Genero */
    const genero = $("#txtgenero");
    const salida_genero = $("#salida_genero");

    /* fecha nacimiento */
    const fecha= $("#txtfecha");
    const salida_fecha = $("#salida_fecha");

  


    const btnEnviar = $("#btnEnviar");
  
    btnEnviar.click(function(event){
        event.preventDefault();
      /* NOMBRE */
      let Value_nombre = nombre.val();
      salida_nombre.text("");
      let RegExp_nombre = /^[A-ZÑ]{1}[a-zñ]*([\s]?[A-ZÑ]{1}[a-zñ]*)*$/;

      /* apellido */
      let Value_apellido = apellido.val();
      salida_apellido.text("");
      let RegExp_apellido = /^[A-ZÑ]{1}[a-zñ]*([\s]?[A-ZÑ]{1}[a-zñ]*)*$/;

      /* GEnero */
      let Value_Genero = genero.val();
      salida_genero.text("");
      let RegExp_genero = /^[A-ZÑ]{1}[a-zñ]*([\s]?[A-ZÑ]{1}[a-zñ]*)*$/;
      /* fecha*/
      let Valuefecha = fecha.val();
      salida_fecha.text("");
      let RegExp_fecha = /^\d{4}-\d{2}-\d{2}$/;
  
      /* operación */
      if(!RegExp_nombre.test(Value_nombre)){
        salida_nombre.text(`No es válido. Por favor ingrese su nombre  `);
        return false;
      } else if (!RegExp_apellido.test(Value_apellido)){
        salida_apellido.text("No es válido");
        return false;
      } else if(!RegExp_genero.test(Value_genero)){
        salida_genero.text("No es válido");
        return false;
      } else if(!RegExp_fecha.test(Valuefecha)){
        salida_fecha.text("No es válido");
        return false;
      }else{
        alert("Datos ingresados correctamente");
        return true;
        
      }
    });
  });
  
let nombre = $("#txt_nombre").val();
let apellido = $("#txtapellido").val();
let genero = $("#txtgenero").val();
let fecha = $("#txtfecha").val();

alert("Los datos ingresados son: " + nombre + ", " + apellido + ", " + genero + ", " + fecha);