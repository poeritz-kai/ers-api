window.addEventListener("load", startup, false);

function startup() {
    /* Den ID-Selector nutzen um auf das <div> Element
       mit der id=mapid Bezug zu nehmen.
    */
    const mapid = document.getElementById("mapid");

    /* Mit der ENTER Taste die Methode 'toggleFullScreen()' zum
       Vollbild-umschalten aufrufen.
    */
    document.addEventListener("keypress", function(e) {
        if (e.key === 'Enter') {
            toggleFullScreen(mapid);
        }
    }, false);
}

function toggleFullScreen(mapid) {
    if (!document.fullscreenElement) {
        /* Wenn das DOM-document nicht (!) im Vollbildmodus, dann
           aktiviere Vollbildmodus.
        */
        mapid.requestFullscreen();
    }
    else {
        // Andernfalls verlasse Vollbildmodus.
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
