$("#datepicker").datepicker();
$("#datepicker").datepicker("option", "dateFormat", "d MM, yy");

function hideSecond(){
    $(".second").animate({
        opacity: "0"
    }, 700, "easeInOutSine");
    setTimeout(function () {
        $(".second").css("display", "none");
    }, 900);
}

function showSecond(){
    $(".second").toggle("slow", function () {
        $(".second").animate({
            opacity: "1"
        }, 700, "easeInOutSine");
    });
}

function controlSecond(trCurrent){

    var indexAtual = $(trCurrent).children("td.index").text();
    var index = $(".index-detail").text();

    var cor = $(trCurrent).children("td.index").css("color");
    var bgcor = $(trCurrent).children("td.index").css("background-color");

    if($(".second").is(":visible") && indexAtual == index){
        hideSecond();
    }
    else if(indexAtual != index){
        $(".index-detail").text($(trCurrent).children("td.index").text());
        $(".index-detail").css("color", cor);
        $(".index-detail").css("background-color", bgcor);
    }
    else{
        showSecond();

        $(".index-detail").text($(trCurrent).children("td.index").text());
        $(".index-detail").css("color", cor);
        $(".index-detail").css("background-color", bgcor);
    }
}

function setColorInIndex(){
    var indexs = $('.index');
    for(var i = 0; i < indexs.length; i++){
        if(i % 2 === 0)
            $(indexs[i]).addClass("product-index-par");
        else
            $(indexs[i]).addClass("product-index-impar");
    }
}

var dialog = $("#dialog-form").dialog({
    autoOpen: false,
    height: 400,
    width: 300,
    modal: true
});

$("#btnEditar").click(function(){
    dialog.dialog("open");
});

$("#btnAddProduct").click(function(){
    dialog.dialog("open");
    $("#formProduct")[0].reset();
});

function closeDialog(){
    dialog.dialog('close');
}