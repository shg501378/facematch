$(document).ready(function () {
    var data;

    $.post("http://localhost:8080/data/", function (dataa) {
        data = dataa;
    });

    $("#onee").click(function () {
        var rnd = Math.floor(Math.random() * data.length);
        if (rnd === 0) {
            rnd = 1;
        }
        console.log(data[rnd]);
        var htmlCode = '<img id="one" class=\"who\" src=\"' + data[rnd] + '\" />';
        $('#onee').html(htmlCode);
    });
    $("#twoo").click(function () {
        var rnd = Math.floor(Math.random() * data.length) + 1;
        if (rnd === 4) {
            rnd = 3;
        }
        var htmlCode = '<img id="two" class=\"who\" src=\"' + data[rnd] + '\" />';
        console.log(data[rnd]);
        $("#twoo").html(htmlCode);

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/rate/",
            contentType: 'application/json',
            data: JSON.stringify({
                id: 222
            }),
            success: function(r) {
                console.log('yo')
            }
        })
    })
})