document.addEventListener( 'DOMContentLoaded', function() {
    
    /** @type { import("fabric/fabric-impl") } */
    const fabric = window.fabric;

    // create `Canvas` object using `<canvas>` DOM node
    const canvas = new fabric.Canvas( 'canvas' )

    /*--------------*/

    console.log( 'fabric ->', typeof fabric );
    console.log( 'fabric.Canvas ->', typeof fabric.Canvas );
    console.log( 'fabric.Rect ->', typeof fabric.Rect );
    console.log( 'canvas.add ->', typeof canvas.add );
} );