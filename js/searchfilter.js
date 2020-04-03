//Funcion activar filtro de acuerdo al precio seleccionado en el Slider
$('#BuscarCity').click(function(){
     var ciudad2 = $("#selectCiudad").val();
         selectTipo2 = $("#selectTipo").val();
         rangoPrecio2 = $("#rangoPrecio").val();
      datos2 = {'ciudad2':ciudad2, 'selectTipo2':selectTipo2,'rangoPrecio2':rangoPrecio2};


 //Funcion de llamada del filtro principal que realiza la busqueda en el archivo Json
 $.ajax({
     url: "phplib/filter1.php",  // Ruta en el directorio
     type: "POST",
     data: datos2,
   }).done(function(answer_me){
			console.log(JSON.stringify(answer_me));  // Convierte el objeto o valor de JavaScript en una cadena de texto JSON
     let data = JSON.parse(answer_me);
     var r = data.data;
     showResult2(r);
		});
   });

 //Funcion para agregar y renderizar los resultados en la pagina
  function showResult2(crb){
    $('.resultados').empty();
    for(let i=0; i<crb.length; i++){
        $('.resultados').append(`<div class="card horizontal">
            <div class="card-image place-wrapper">
                <img class="img-responsive place-image" src="img/${crb[i].Ciudad}.jpg">
            </div>
            <div class="card-stacked">
                <div class="card-content">
                    <p>
                        <b>Dirección: </b>${crb[i].Direccion}<br>
                        <b>Ciudad: </b>${crb[i].Ciudad}<br>
                        <b>Teléfono: </b>${crb[i].Telefono}<br>
                        <b>Código Postal: </b>${crb[i].Codigo_Postal}<br>
                        <b>Tipo: </b>${crb[i].Tipo}<br>
                        <span class="price"><b>Precio: </b>${crb[i].Precio}</span>
                    </p>
                </div>
                <div class="card-action">
                    <a>Ver mas</a>
                </div>
            </div>
        </div>`);
    }
}
