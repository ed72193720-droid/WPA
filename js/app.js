$(document).ready(function () {
    const API_URI = "https://api.chucknorris.io/jokes/";
    var categories = "";
    $.ajax({
        url: API_URI + 'categories',
        type: 'GET',
        success: function (res) {  // <-- aquí estaba mal escrito
            console.log("Respuesta recibida:", res);
            
            $.each(res, function(index, value){
                var category = "<div class='card'>";
                category += "<div class='card-body'>";
                category += "<h5 class='card-title'>" + value + "</h5>";
                category += "<a href='#' class='btn  btn-primary'> Go somewhrre</a>";
                category += "</div></div>";

                categories += category;

            })
            console.log(categories)
            $("#categoriesContainer").html(categories)

        }
    });
    
})