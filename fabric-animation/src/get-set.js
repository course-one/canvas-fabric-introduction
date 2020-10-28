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

    // run interval every 500ms - 6 times
    let counter = 1;
    const intvl = setInterval( () => {
        
        // get top and left values
        const top = rect.get( 'top' );
        const left = rect.get( 'left' );

        // update top and left values by 10px 
        rect.set( 'top', top + 10 );
        rect.set( 'left', left + 10 );

        // render all shapes
        canvas.renderAll();

        // increment counter
        if( ++counter >  6 ) {
            clearInterval( intvl );
        }
    }, 500 );

} );