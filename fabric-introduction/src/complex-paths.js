document.addEventListener( 'DOMContentLoaded', function() {
    
    /** @type { import("fabric/fabric-impl") } */
    const fabric = window.fabric;

    // create `Canvas` object using `<canvas>` DOM node
    const canvas = new fabric.StaticCanvas( 'canvas' )

    /*--------------*/

    // create a rectangle
    const path1 = new fabric.Path(
        'M 10 0 H 100 V 90 H 0 Z',
        {
            top: 50, left: 50, fill: '#03A87C'
        }
    );

    // create a sine curve
    const path2 = new fabric.Path(
        'M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80',
        {
            top: 150, left: 50,
            fill: null, strokeWidth: 5, stroke: '#37474F',
            backgroundColor: 'rgba(69,90,100,0.1)'
        }
    );

    // create a heart shape
    const path3 = new fabric.Path(
        'M10,6 Q10,0 15,0 T20,6 Q20,10 15,14 T10,20 Q10,18 5,14 T0,6 Q0,0 5,0 T10,6 Z',
        {
            top: 150, left: 250,
            fill: '#D81B60', scaleX: 5, scaleY: 5
        }
    );

    // add objects to the canvas
    canvas.add( path1, path2, path3 );
} );