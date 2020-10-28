document.addEventListener( 'DOMContentLoaded', function() {
    
    /** @type { import("fabric/fabric-impl") } */
    const fabric = window.fabric;

    // create `Canvas` object using `<canvas>` DOM node
    const canvas = new fabric.Canvas( 'canvas' )

    /*--------------*/

    // create a rectange
    const rect = new fabric.Rect( {
        top: 50, left: 50, width: 50, height: 50,
        fill: '#7E57C2', rx: 5, ry: 5
    } );

    // add objects to canvas
    canvas.add( rect );

    // function to update rectangle
    let startTime = null;
    function update( timestamp ) {
        startTime = startTime || timestamp; // initialize
        const progress = ( timestamp - startTime ) / 3000;

        // update top and left values
        rect.set( {
            top: 50 + ( progress * 60 ),
            left: 50 + ( progress * 60 ),
        } );

        // render all shapes
        canvas.renderAll();

        // queue next update
        if( progress < 1 ) {
            requestAnimationFrame( update );
        }
    };

    // queue first update
    requestAnimationFrame( update );
    
} );