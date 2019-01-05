function cambiaColor(elementPrueba){


    var elemento3 = window.frames['idObjCargaIndex2'].contentDocument.getElementById('idPruebaIndex2');
    if (elemento3 != null){
       elemento3.className += " text-color-green";
    }

    var elemento2 = elementPrueba.getElementById("idPruebaIndex2");
    if (elemento2 != null){
       elemento2.className += " text-color-green";
    }

    var elemento  = elementPrueba.getElementsByClassName("text-muted");
    for(var i = 0; i < elemento.length; i++)
        elemento[i].className += " text-color-green";
}

function pruebacolor(){

    var elementMiCuentaDigi = document.getElementById("idMiCuentaDigi");
    elementMiCuentaDigi.onload = cambiaColor(elementMiCuentaDigi.contentWindow.document);
}

function pruebacolorIndex2(){

    var elementPrueba = document.getElementById("idObjCargaIndex2");
    elementPrueba.onload = cambiaColor(elementPrueba.contentDocument);

}

