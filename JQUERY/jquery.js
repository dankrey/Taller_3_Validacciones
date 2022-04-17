
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

function editTema() {
  console.log("ahhhh");
  
    
    let user_select = FindId($("#id").val());
    $("#Result_Edit").html("");
    if ( user_select != null ) {
      $("#Result_Edit").append(`

      <br>
      <br>
      <br>
                <form id="updateTema" action="">
                    <label for="name">Nombre del Tema </label>
                    <input class="form-control"  name="Categoria" id="Tema_Id" placeholder="Tema a Colocar" value="${user_select.Categoria}" required>
                     <label for="Fecha_Mod">Fecha_Reg</label>
                    <textarea name="name" class="form-control" id="Descrip_Id"  required  > ${user_select.name}</textarea> 
                     <label for="Fecha_Mod">Fecha de Registro</label>
                    <input class="form-control" type="text" name="Fecha_Reg" id="Fecha_Id" value="${user_select.Fecha_Reg}"/>
                    <label for="Codigo">Fecha de Modificación </label>
                    <input   name="Fecha_Mod"  id="Fecha_Id"  value="${user_select.Fecha_Mod}"  required>  
                   
            `);
      $("#Result_Edit").append(`
                  <br>
                    <button type="button" type="submit" class="btn btn-1 btn-sep icon-Agregar boton_Centrar" onClick="updateTema(${user_select.id})">Guardar</button>
                  
              
                </form>
            `);
    };
       // <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
}

function FindId(id){
  console.log(id);
  for(let item of temas){
    console.log(item.id,id);
    if (item.id == id){
      return item;
    }

  }
    return null;
};




function deleteTema() {

 

  



  var msg = "¡Tema actualizado con éxito!";
  $("#userTable > tbody").html("");
  var id = $("#id_Elimnar").val();
  var  index =  -1;
  temas.forEach(function(user,i) {

    if (user.id == id) {
      index = i;
    }
  });

  if(index >= 0){

    //i es para  eleminar elementos primer parametro donde va eliminar y el segundo es la cantidad de elementos ah eleminar

      temas.splice(index,1)

     
      
  }

  temas.forEach(function(user,i) {
    agregarTemaTabla(temas[i])
  });

   

  // var action = confirm("¿Está seguro de que desea eliminar este tema?");
  // var msg = "¡Tema eliminado con éxito!";
  // temas.forEach(function(user, i) {
  //   if (user.id == id && action != false) {
  //     temas.splice(i, 1);
  //     $("#userTable #user-" + user.id).remove();
  //     Messaje_info(msg);
  //   }
  // });
}

function updateTema(id) {
  var msg = "¡Tema actualizado con éxito!";
  $("#userTable > tbody").html("");
  temas.forEach(function(user, i) {
    if (user.id == id) {
      temas[i] = {
      id: user.id,
      name: $('#Descrip_Id').val(),
      Categoria: $('#Tema_Id').val(),
      Fecha_Reg:user.Fecha_Reg,
      Fecha_Mod:$('#Fecha_Id').val()
    };
  }
    agregarTemaTabla(temas[i])

   });

}

function Messaje_info(msg) {
  $(".flashMsg").remove();
  $(".row").prepend(`
        <div class="col-sm-12"><div class="flashMsg alert alert-success alert-dismissible fade in" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <strong>${msg}</strong></div></div>
    `);
}

function agregarTemaTabla(user) {
  $("#userTable >").append(`

  
  <tr id="user-${user.id}">
  <td class="datosObjt" name="name">${user.name} </td>
  
        
    `);
}


       





{/* <tr id="user-${user.id}">
<td class="datosObjt" name="name">${user.name} <a class="Card_VerMas" href="Formulario_Agregar.html">Ver Más....</a></td>
'<td  class="datosObjt" name="Codigo">${user.Categoria}</td>
'<td class="datosObjt" type="date" name="Fecha_Reg">${user.Fecha_Reg}</td>
 <td  class="datosObjt" type="date" name="Fecha_Mod">${user.Fecha_Mod}</td>

</td>
</tr> */}







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





function Fecha_Validar() {
  // caso base
  let hoy             = new Date();
  // var fechaFormulario = $('#Fecha_RegVal').val();
  // var fechaFormulario = new Date('2016-11-10');

  let fechaFormulario = $('#Fecha_RegVal').val();
  let fecha              = new Date(fechaFormulario);



  
  
  // Comparamos solo las fechas => no las horas!!
  hoy.setHours(0,0,0,0);  // Lo iniciamos a 00:00 horas
  
  if (hoy <= fecha) {
    
     false;
  }
  else {
   true;

   alert("La Fecha Introducida es Pasada Introduce una del Dia Actual");
  //  $("#resultado_P").text("La Fecha Introducida es Pasada Introduce una del Dia Actual");
  
  }
};











function jmgModal(id, data, ok, cancel, input) {
	data=data || {};
	id="modal-"+id;
	if (document.getElementById(id)==null) {
		var d=document.createElement("div");
		d.className="jmgmodal";
		d.id=id;
		var p=document.createElement("div");
		p.className="panel";
		var t=document.createElement("div");
		t.className="title";
		var cl=document.createElement("div");
		cl.className="close";
		cl.innerHTML='&times;';
		cl.addEventListener('click',function(ev) {
			ev.preventDefault();
			var dTop=this.parentNode.parentNode;
			dTop.classList.remove("visible");
			dTop.querySelector(".panel .content").innerHTML='';
		});
		var ct=document.createElement("div");
		ct.className="content";
		var f=document.createElement("div");
		f.className="footer";
		p.appendChild(t);p.appendChild(cl);p.appendChild(ct);p.appendChild(f);
		d.appendChild(p);
		document.body.appendChild(d);
	}
	var mod=document.getElementById(id),
	p=mod.querySelector(".panel"),
	t=mod.querySelector(".panel .title"),
	ct=mod.querySelector(".panel .content"),
	f=mod.querySelector(".panel .footer");
	if (f==null) {
		mod.classList.remove("nofooter");
		var f=document.createElement("div");
		f.className="footer";
		p.appendChild(f);
	}
	t.innerHTML=data.title || '';
	ct.innerHTML=data.content || '';
	f.innerHTML='';
	if (!isNaN(data.width)) p.style.maxWidth=data.width+'px';
	if (!isNaN(data.height)) p.style.maxHeight=data.height+'vh';
	if (ok && ok.length>1) {
		var param={value:null};
		if (input && input.length>0) {
			var ph=document.createElement("p");
			ph.className="action";
			var txt=document.createElement("input");
			txt.className="action";
			txt.setAttribute("placeholder",input[0]);
			txt.addEventListener('keydown',function(ev) {
				if (ev.keyCode==13 || ev.key=="Enter") {
					ev.preventDefault();
					mod.classList.remove("visible");
					ok[1](param.value);
				}
			});
			ph.appendChild(txt); ct.appendChild(ph);
			param=ct.querySelector("p.action > input.action");
			setTimeout(function(){
				param.focus();
			},100);
		}
		var bOk=document.createElement("button");
		bOk.className="action";
		bOk.innerHTML=ok[0];
		bOk.addEventListener('click',function(ev) {
			ev.preventDefault();
			mod.classList.remove("visible");
			ok[1](param.value);
		});
		f.appendChild(bOk);
	}
	if (cancel && cancel.length>1) {
		var bCancel=document.createElement("button");
		bCancel.className="action";
		bCancel.innerHTML=cancel[0];
		bCancel.addEventListener('click',function(ev) {
			ev.preventDefault();
			mod.classList.remove("visible");
			cancel[1]();
		});
		f.appendChild(bCancel);
	}
	if (f.innerHTML=='') {
		p.removeChild(f);
		mod.classList.add("nofooter");
	}
	setTimeout(function(){
		mod.classList.add("visible");
	},50);
}



