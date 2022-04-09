
//Creamos la Funcion del acordeon
$(document).ready(function() {
  $(".Colocar > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".Acordion")
        .slideUp(200);
      $(".Colocar > a i")
        .removeClass("fa-menos")
        .addClass("fa-mas");
    } else {
      $(".Colocar > a i")
        .removeClass("fa-menos")
        .addClass("fa-mas");
      $(this)
        .find("i")
        .removeClass("fa-mas")
        .addClass("fa-menos");
      $(".Colocar > a").removeClass("active");
      $(this).addClass("active");
      $(".Acordion").slideUp(200);
      $(this)
        .siblings(".Acordion")
        .slideDown(200);
    }

   
  });
});



//Uso .serializeArray() para obtener los datos en formato array y luego convertirlos en un objeto:



$("#addTema").submit((ev) => {
  ev.preventDefault();

 
});







//dddddddddddddddddddddddddddddddddddddddddd


// function getFormData(formId){
//   $('#'+formId).serializeArray();
//   var Resultado=$('#'+ formId ).serialize();
//   $("#Prueba").text(Resultado);
//   }
  
var temas = [
  {
    id: 1,
    name: "Ciencias",
    Categoria: "Tema_1",
    Fecha_Reg:2022-04-04,
    Fecha_Mod:2022-04-22
  },
  {
    id: 2,
    name: "Sociales",
    Categoria: "Tema_2",
    Fecha_Reg:2022-04-22,
    Fecha_Mod:2022-04-23
  }
];

$.each(temas, function(i, user) {
  agregarTemaTabla(user);
});

$("form").submit(function(e) {
  e.preventDefault();
});

$("form#addTema").submit(function() {
  var user = {};
  var nameInput = $('textarea[name="name"]').val();
  var fechaRegInput = $('input[name="Fecha_Reg"]').val();
  var catInput = $('input[name="Categoria"]').val();
  var fechaModInput = $('input[name="Fecha_Mod"]').val();
  if (nameInput && fechaRegInput && catInput && fechaModInput) {
    $(this).serializeArray().map(function(data) {
      user[data.name] = data.value;
    });
    var lastUser = temas[Object.keys(temas).sort().pop()];
    user.id = lastUser.id + 1;

    addTema(user);
  } else {
    alert("Todos los campos deben tener un valor válido.");
  }
});

function addTema(user) {
  temas.push(user);
  agregarTemaTabla(user);
}

// .modal-body

function editTema(id) {
  temas.forEach(function(user, i) {
    if ($("#id") == id) {
      $("#Result_Edit").append(`
                <form id="updateTema" action="">
                    <label for="name">Name</label>
                    <input class="form-control" type="text" name="name" value="${user.name}"/>
                    <label for="Fecha_Mod">Fecha_Reg</label>
                    <input class="form-control" type="text" name="Fecha_Reg" value="${user.Fecha_Reg}"/>
                    <label for="Fecha_Mod">Fecha_Mod</label>
                    <input class="form-control" type="text" name="Fecha_Mod" value="${user.Fecha_Mod}"/>
                    <label for="Codigo">Codigo</label>
                    <input class="form-control" type="text" name="Codigo" value="${user.Categoria}"/>
            `);
      $("#Result_Edit").append(`
                    <button type="button" type="submit" class="btn btn-primary" onClick="updateTema(${id})">Guardar</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </form>
            `);
    }
  });
}

function deleteTema(id) {
  var action = confirm("¿Está seguro de que desea eliminar este tema?");
  var msg = "¡Tema eliminado con éxito!";
  temas.forEach(function(user, i) {
    if (user.id == id && action != false) {
      temas.splice(i, 1);
      $("#userTable #user-" + user.id).remove();
      Messaje_info(msg);
    }
  });
}

function updateTema(id) {
  var msg = "¡Tema actualizado con éxito!";
  var user = {};
  user.id = id;
  temas.forEach(function(user, i) {
    if (user.id == id) {
      $("#updateTema").children("input").each(function() {
        var value = $(this).val();
        var attr = $(this).attr("name");
        if (attr == "name") {
          user.name = value;
        } else if (attr == "Categoria") {
          user.Fecha_Mod = value;
        } else if (attr == "Codigo") {
          user.Codigo = value;
        }
      });
      temas.splice(i, 1);
      temas.splice(user.id - 1, 0, user);
      $("#userTable #user-" + user.id).children(".datosObjt").each(function() {
        var attr = $(this).attr("name");
        if (attr == "name") {
          $(this).text(user.name);
        } else if (attr == "Fecha_Mod") {
          $(this).text(user.Fecha_Mod);
        } else {
          $(this).text(user.Codigo);
        }
      });
      $(".modal").modal("toggle");
      Messaje_info(msg);
    }
  });
}

function Messaje_info(msg) {
  $(".flashMsg").remove();
  $(".row").prepend(`
        <div class="col-sm-12"><div class="flashMsg alert alert-success alert-dismissible fade in" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <strong>${msg}</strong></div></div>
    `);
}

function agregarTemaTabla(user) {
  $("#userTable > tbody:last-child").append(`
        <tr id="user-${user.id}">
            <td class="datosObjt" name="name">${user.name} <a class="Card_VerMas" href="Formulario_Agregar.html">Ver Más....</a></td>
            '<td  class="datosObjt" name="Codigo">${user.Categoria}</td>
            '<td class="datosObjt" type="date" name="Fecha_Reg">${user.Fecha_Reg}</td>
             <td  class="datosObjt" type="date" name="Fecha_Mod">${user.Fecha_Mod}</td>
           
            </td>
        </tr>
    `);
}







function ButtonActivaccion()
{
    var nameInput = $('#Tema_Val').val();
    var catInput = $('#Descrip_Val').val();
    var fechaRegInput= $('#Fecha_RegVal').val();
    var fechaModInput = $('#Fecha_ModVal').val();

    

    if (nameInput && catInput && fechaRegInput && fechaModInput) {
        $('#submitButton').attr('disabled', false);
    } else {
        $('#submitButton').attr('disabled', true);
    }
}





function ParImpar(Fecha) {
  // caso base
  var hoy             = new Date();
  // var fechaFormulario = $('#Fecha_RegVal').val();
  // var fechaFormulario = new Date('2016-11-10');

  let fechaFormulario = $('#Fecha_RegVal').val().trim();


  
  
  // Comparamos solo las fechas => no las horas!!
  hoy.setHours(0,0,0,0);  // Lo iniciamos a 00:00 horas
  
  if (hoy <= fechaFormulario) {
    
     alert("Fecha a partir de hoy");
  }
  else {
   
    alert("La Fecha Introducida es Pasada Introduce una del Dia Actual");
  }
}

// $("#addTema").submit((ev) => {
//   ev.preventDefault();
//   let Fecha = $("#Fecha_RegVal").val();
//   let resultado_P = ParImpar(Fecha);

   
  
//   $("#resultado_P").val = resultado_P;



// });

// $(document).ready(() => {
//   $('.error').hide();

//   $('#addTema').submit(function(evento) {
//       evento.preventDefault();
//       $('.error').hide();
//       var hoy             = new Date();
  
  
//       hoy.setHours(0,0,0,0);  // Lo iniciamos a 00:00 horas

//       let fecha = $('#Fecha_RegVal').val().trim();

//       if (!fecha.length) {
//           $('#obligatorio').show();
//           return;
//       }

//       if (hoy <= !fecha.length) {
  
//             alert("Fecha a partir de hoy");
//           }

          
      

      

//       $('#resultado').text(`La fecha es: ${Fecha_RegVal}`);
//   });
// });

// function fechaValida(Fecha_RegVal) {
 
//   let patron             = new Date();
  
  
//   return patron.test(Fecha_RegVal);
// }