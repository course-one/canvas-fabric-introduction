document.addEventListener( 'DOMContentLoaded', function() {
    
    /** @type { import("fabric/fabric-impl") } */
    const fabric = window.fabric;

    // create `Canvas` object using `<canvas>` DOM node
    const canvas = new fabric.StaticCanvas( 'canvas' )

    /*--------------*/

    // create a `Rect` object
    const rect = new fabric.Rect( {
        width: 200,
        height: 200,
        top: 100,
        left: 100,
        fill: '#03A87C'
    } );

    // add `rect` to the canvas
    canvas.add( rect );
} );