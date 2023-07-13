$(document).ready(function() {
    $('#formulario').validate({
      rules: {
        nombre: {
          required: true
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        nombre: {
          required: "Por favor ingrese su nombre"
        },
        email: {
          required: "Por favor ingrese su correo electrónico",
          email: "Por favor ingrese un correo electrónico válido"
        }
      },
      submitHandler: function(form) {
        
      
        alert('El formulario se envió correctamente');
      }
    });
    
    $('form').submit(function(event) {
      // previene que el formulario se envíe mediante el método HTTP POST
      event.preventDefault();
  
      // objeto con los datos del formulario
      var datadelformulario = {
        'nombre-completo': $('#nombre-completo').val(),
        email: $('#email').val(),
   
      };
  
      // hace una petición HTTP POST utilizando jQuery.ajax()
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'POST',
        data: JSON.stringify(datadelformulario),
        contentType: 'application/json',
        success: function(response) {
          
          console.log(response);
          $('form')[0].reset(); //borra formulario al enviar
        },
        error: function(xhr, status, error) {
          
          console.error(status + ': ' + error);
        }
      });
    });
  });
 
//imagen brand
$(document).ready(function() {
    $('.imageninicio').hover(
      function() {
        $(this).find('.asomamause').fadeIn(500);
      },
      function() {
        $(this).find('.asomamause').fadeOut(500);
      }
    );
  });

