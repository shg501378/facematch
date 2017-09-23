var previousPhoto1 = document.createElement("img") ;
previousPhoto1.src = "screenshots/2014A1PS356H";
var previousPhoto2 = document.createElement("img") ;
previousPhoto2.src = "screenshots/2014A1PS508H";
$(document).ready(function () {
    var data;
    $.post("http://localhost:8080/data/", function (dataa) {
        data = dataa;
    });

    $("#onee").click(function () {
        do{
            var rnd = Math.floor(Math.random() * data.length);
            if (rnd === 0) {
                rnd = 1;
            }
        }while(previousPhoto1==data[rnd])
        do{
            do{
            var rnd2 = Math.floor(Math.random() * data.length)+1;
            if (rnd2 === 0) {
                rnd2 = 1;
            }
        }while(rnd==rnd2)
    }while(previousPhoto2==data[rnd2])
    previousPhoto1 = data[rnd];
    previousPhoto2 = data[rnd2];
        console.log(data[rnd]);
        console.log(data[rnd2]);
        var htmlCode = '<img id="one" class=\"who\" src=\"' + data[rnd] + '\" />';
        $('#onee').html(htmlCode);
        var htmlCode2 = '<img id="two" class=\"who\" src=\"' + data[rnd2] + '\" />';
        $('#twoo').html(htmlCode2);
    });
    $("#twoo").click(function () {
        do{
            var rnd = Math.floor(Math.random() * data.length);
            if (rnd === 0) {
                rnd = 1;
            }
        }while(previousPhoto1==data[rnd])
        do{
            do{
            var rnd2 = Math.floor(Math.random() * data.length)+1;
            if (rnd2 === 0) {
                rnd2 = 1;
            }
        }while(rnd==rnd2)
    }while(previousPhoto2==data[rnd2])
    previousPhoto1 = data[rnd];
    previousPhoto2 = data[rnd2];
        console.log(data[rnd]);
        console.log(data[rnd2]);
        var htmlCode = '<img id="one" class=\"who\" src=\"' + data[rnd] + '\" />';
        $('#onee').html(htmlCode);
        var htmlCode2 = '<img id="two" class=\"who\" src=\"' + data[rnd2] + '\" />';
        $('#twoo').html(htmlCode2);
    })
})
previousPhoto1 = rnd;
previousPhoto2 = rnd2;