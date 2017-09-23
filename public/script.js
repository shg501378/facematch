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
        do{
        var rnd2 = Math.floor(Math.random() * data.length)+1;
            if (rnd2 === 0) {
                rnd2 = 1;
            }
        }while(rnd==rnd2)
        console.log(data[rnd]);
        console.log(data[rnd2]);
        var htmlCode = '<img id="one" class=\"who\" src=\"' + data[rnd] + '\" />';
        $('#onee').html(htmlCode);
        var htmlCode2 = '<img id="two" class=\"who\" src=\"' + data[rnd2] + '\" />';
        $('#twoo').html(htmlCode2);
    });
    $("#twoo").click(function () {
        var rnd = Math.floor(Math.random() * data.length);
        if (rnd === 0) {
            rnd = 1;
        }
        do{
        var rnd2 = Math.floor(Math.random() * data.length)+1;
            if (rnd2 === 0) {
                rnd2 = 1;
            }
        }while(rnd==rnd2)
        console.log(data[rnd]);
        console.log(data[rnd2]);
        var htmlCode = '<img id="one" class=\"who\" src=\"' + data[rnd] + '\" />';
        $('#onee').html(htmlCode);
        var htmlCode2 = '<img id="two" class=\"who\" src=\"' + data[rnd2] + '\" />';
        $('#twoo').html(htmlCode2);
    })
})