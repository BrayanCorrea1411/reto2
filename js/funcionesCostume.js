function consultar() {

    $.ajax (
               {
                        url          : 'https://gf5002f9c97cc42-disfraz.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume',
                        type         : 'GET',
                        dataType     : 'json',
                        // success      :  function(json){
                        //                     $("#idDivConsulta").empty();
                        //                     for (i=0 ; i < json.items.length; i++){
                        //                         $("#idDivConsulta").append(json.items[i].codigo + json.items[i].nombre + " ");
                        //                     }
                        //                     console.log(json)
                        //                 },

                        success      :  function(json){

                            $("#idDivConsulta").empty();
                            
                            $("#idDivConsulta").append("<table>");
                            
                            $("#idDivConsulta").append("<caption><h3>Detalle de Disfraces</h3></caption>");
                            $("#idDivConsulta").append("<tr><th>Codigo </th><th>Marca</th><th>Modelo</th><th>Id Categoria</th><th>Nombre</th><th>Acciones</th></tr>");
                            for (i=0; i < json.items.length; i++){
                                $("#idDivConsulta").append("<tr>");
                                $("#idDivConsulta").append("<td>" + json.items[i].id + "</td>");
                                $("#idDivConsulta").append("<td>" + json.items[i].brand + "</td>");
                                $("#idDivConsulta").append("<td>" + json.items[i].model + "</td>");
                                $("#idDivConsulta").append("<td>" + json.items[i].category_id + "</td>");
                                $("#idDivConsulta").append("<td>" + json.items[i].name + "</td>");
                                $("#idDivConsulta").append('<td><button onclick="cargar('+json.items[i].id+')">Cargar en Formulario</button></td>');
                                $("#idDivConsulta").append("</tr>");
                            }
                            $("#idDivConsulta").append("</table>");

                            console.log(json)
                            },


                        error        :   function(xhr,status){
                                            console.log(xhr)
                                        }

               }

           );

}


function insertar() {
    var disfraz;

    disfraz = {
        id: $("#idDisfraz").val(),
        brand:$("#brandDisfraz").val(),
        model:$("#modelDisfraz").val(),
        category_id:$("#categoryIdDisfraz").val(),
        name:$("#nameDisfraz").val(),

                };

    $.ajax (
        {

            url          : 'https://gf5002f9c97cc42-disfraz.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume',
            type         : 'POST',
            data         :  disfraz,

            success      :  function(response){
                               console.log(response);
                               $("#idDisfraz").val("");
                               $("#brandDisfraz").val("");
                               $("#modelDisfraz").val("");
                               $("#categoryIdDisfraz").val("");
                               $("#nameDisfraz").val("");
                            },
            error       :   function(xhr,status){
                            console.log( xhr);

                            }


        }
    );



}


function borrar() {

    var disfraz,datosEnvio;

    disfraz      = {id: $("#idDisfraz").val()};
    datosEnvio   = JSON.stringify(disfraz);

    $.ajax (
        {

            url          : 'https://gf5002f9c97cc42-disfraz.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume',
            type         : 'DELETE',
            data         :  datosEnvio,
            contentType  : 'application/json',

            success      :  function(response){
                                console.log(response);

                            },
            error       :   function(xhr,status){
                                console.log(xhr);

                            }
        }
    );
}


function actualizar() {

    var disfraz,datosEnvio;

    disfraz = {
        id: $("#idDisfraz").val(),
        brand:$("#brandDisfraz").val(),
        model:$("#modelDisfraz").val(),
        category_id:$("#categoryIdDisfraz").val(),
        name:$("#nameDisfraz").val(),

                };
    datosEnvio   = JSON.stringify(disfraz);

    $.ajax (
        {

            url          : 'https://gf5002f9c97cc42-disfraz.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume',
            type         : 'PUT',
            data         :  datosEnvio,
            contentType  : 'application/json',

            success      :  function(response){
                                console.log(response);
                                $("#idDisfraz").val("");
                                $("#brandDisfraz").val("");
                                $("#modelDisfraz").val("");
                                $("#categoryIdDisfraz").val("");
                                $("#nameDisfraz").val("");


                            },
            error       :   function(xhr,status){
                                console.log(xhr);

                            }
        }
    );
}

                                        
function consultarId() {

    var codigo =$("#idConsulta").val();

    $.ajax (
                {

                    url          : 'https://gf5002f9c97cc42-disfraz.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume/' + codigo ,
                    type         : 'GET',
                    dataType     : 'json',

                    success      :  function(json){
                                        // $("#idDivConsulta").empty();
                                        // for (i=0; i < json.items.length; i++){
                                        //     $("#idDivConsulta").append(json.items[i].id + json.items[i].brand + " ");
                                        // }

                                        $("#idDivConsulta").empty();
                                        $("#idDivConsulta").append("<table>");
                                        $("#idDivConsulta").append("<caption><h3>Detalle de Disfraces</h3></caption>");
                                        $("#idDivConsulta").append("<tr><th>Codigo </th><th>Marca</th><th>Modelo</th><th>Id Categoria</th><th>Nombre</th><th>Acciones</th></tr>");
                                        for (i=0; i < json.items.length; i++){
                                            $("#idDivConsulta").append("<tr>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].id + "</td>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].brand + "</td>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].model + "</td>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].category_id + "</td>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].name + "</td>");
                                            //$("#idDivConsulta").append('<td><button onclick="borrar('+json.items[i].id+')">Borrar</button></td>');
                                            $("#idDivConsulta").append('<td><button onclick="cargar('+json.items[i].id+')">Cargar en Formulario</button></td>');
                                            $("#idDivConsulta").append("</tr>");
                                        }
                                        $("#idDivConsulta").append("</table>");
                                        
                                        console.log(json)
                                    },
                    error       :   function(xhr,status){
                                        console.log(xhr)
                                    },



                }
            );


}


function cargar(idSeleccionado) {

    $.ajax (
               {
                        url          : 'https://gf5002f9c97cc42-disfraz.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume/' + idSeleccionado,
                        type         : 'GET',
                        dataType     : 'json',

                        // success      :  function(json){
                        //                     $("#idDivConsulta").empty();
                        //                     for (i=0 ; i < json.items.length; i++){
                        //                         $("#idDivConsulta").append(json.items[i].codigo + json.items[i].nombre + " ");
                        //                     }
                        //                     console.log(json)
                        //                 },

                        success      :  function(json){

                            console.log(json)
                            var item = json.items[0];
                            $("#idDisfraz").val(item.id);
                            $("#brandDisfraz").val(item.brand);
                            $("#modelDisfraz").val(item.model);
                            $("#categoryIdDisfraz").val(item.category_id);
                            $("#nameDisfraz").val(item.name);

                            },


                        error        :   function(xhr,status){
                                            console.log(xhr)
                                        }

               }

           );

}
