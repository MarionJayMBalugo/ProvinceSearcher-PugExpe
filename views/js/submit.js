$(document).ready(function() {
    
    $("#1").on('click', function() {
        transfer("1");
    });

    $("#2").on('click', function() {
        transfer("2");
    });

    $("#3").on('click', function() {
        transfer("3");
    });

    $("#4").on('click', function() {
        transfer("4");
    });

    $("#5").on('click', function() {
        transfer("5");
    });
});
function transfer(x) {
    
    $.ajax({
        url: '/rate',
        crossDomain: 'true',
        data: JSON.stringify({
            shortname:$("#h1").html(),
            rate: x,
        }),
        type: 'POST'
    })
}