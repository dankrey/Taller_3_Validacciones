
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



$("#addUser").submit((ev) => {
  ev.preventDefault();

 
});







//dddddddddddddddddddddddddddddddddddddddddd


// function getFormData(formId){
//   $('#'+formId).serializeArray();
//   var Resultado=$('#'+ formId ).serialize();
//   $("#Prueba").text(Resultado);
//   }
  
var users = [
  {
    id: 1,
    name: "Bob",
    address: "Manila",
    age: 27,
    Fecha_Mod:12
  },
  {
    id: 2,
    name: "Harry",
    address: "Baguio",
    Fecha_Mod: 32
  }
];

$.each(users, function(i, user) {
  appendToUsrTable(user);
});

$("form").submit(function(e) {
  e.preventDefault();
});

$("form#addUser").submit(function() {
  var user = {};
  var nameInput = $('textarea[name="name"]').val();
  var addressInput = $('input[name="Fecha_Reg"]').val();
  var ageInput = $('input[name="age"]').val();
  var fechaInput = $('input[name="Fecha_Mod"]').val();
  if (nameInput && addressInput && ageInput && fechaInput) {
    $(this).serializeArray().map(function(data) {
      user[data.name] = data.value;
    });
    var lastUser = users[Object.keys(users).sort().pop()];
    user.id = lastUser.id + 1;

    addUser(user);
  } else {
    alert("All fields must have a valid value.");
  }
});

function addUser(user) {
  users.push(user);
  appendToUsrTable(user);
}

function editUser(id) {
  users.forEach(function(user, i) {
    if (user.id == id) {
      $(".modal-body").empty().append(`
                <form id="updateUser" action="">
                    <label for="name">Name</label>
                    <input class="form-control" type="text" name="name" value="${user.name}"/>
                    <label for="address">Address</label>
                    <input class="form-control" type="text" name="address" value="${user.address}"/>
                    <label for="age">Age</label>
                    <input class="form-control" type="number" name="age" value="${user.age}" min=10 max=100/>
            `);
      $(".modal-footer").empty().append(`
                    <button type="button" type="submit" class="btn btn-primary" onClick="updateUser(${id})">Save changes</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </form>
            `);
    }
  });
}

function deleteUser(id) {
  var action = confirm("Are you sure you want to delete this user?");
  var msg = "User deleted successfully!";
  users.forEach(function(user, i) {
    if (user.id == id && action != false) {
      users.splice(i, 1);
      $("#userTable #user-" + user.id).remove();
      flashMessage(msg);
    }
  });
}

function updateUser(id) {
  var msg = "User updated successfully!";
  var user = {};
  user.id = id;
  users.forEach(function(user, i) {
    if (user.id == id) {
      $("#updateUser").children("input").each(function() {
        var value = $(this).val();
        var attr = $(this).attr("name");
        if (attr == "name") {
          user.name = value;
        } else if (attr == "address") {
          user.address = value;
        } else if (attr == "age") {
          user.age = value;
        }
      });
      users.splice(i, 1);
      users.splice(user.id - 1, 0, user);
      $("#userTable #user-" + user.id).children(".userData").each(function() {
        var attr = $(this).attr("name");
        if (attr == "name") {
          $(this).text(user.name);
        } else if (attr == "address") {
          $(this).text(user.address);
        } else {
          $(this).text(user.age);
        }
      });
      $(".modal").modal("toggle");
      flashMessage(msg);
    }
  });
}

function flashMessage(msg) {
  $(".flashMsg").remove();
  $(".row").prepend(`
        <div class="col-sm-12"><div class="flashMsg alert alert-success alert-dismissible fade in" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <strong>${msg}</strong></div></div>
    `);
}

function appendToUsrTable(user) {
  $("#userTable > tbody:last-child").append(`
        <tr id="user-${user.id}">
            <td class="userData" name="name">${user.name}</td>
            
            '<td align="center">
                <button class="btn btn-success form-control" onClick="editUser(${user.id})" data-toggle="modal" data-target="#myModal")">EDIT</button>
            </td>
            <td align="center">
                <button class="btn btn-danger form-control" onClick="deleteUser(${user.id})">DELETE</button>
            </td>
        </tr>
    `);
}



// '<td class="userData" name="Fecha_Reg">${user.Fecha_Reg}</td>
//  '<td  class="userData" name="Codigo">${user.age}</td>
//  <td  class="userData" name="Fecha_Mod">${user.Fecha_Mod}</td>






