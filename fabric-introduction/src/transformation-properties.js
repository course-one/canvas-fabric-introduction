document.addEventListener( 'DOMContentLoaded', function() {
    
    /** @type { import("fabric/fabric-impl") } */
    const fabric = window.fabric;

    // create `Canvas` object using `<canvas>` DOM node
    const canvas = new fabric.StaticCanvas( 'canvas' )

    /*--------------*/

    // draw a simple rectangle
    const r1 = new fabric.Rect( { top: 50, left: 50, width: 100, height: 100 } );

    // translate objects using `top` and `left` properties
    const r2 = new fabric.Rect( { top: 50, left: 200, width: 100, height: 100 } );

    // rotate objects using `angle`
    const r3 = new fabric.Rect( { top: 50, left: 350, width: 100, height: 100, angle: 10 } );
    const r4 = new fabric.Rect( { top: 50, left: 500, width: 100, height: 100, angle: -10 } );

    // skew objects using `skewX` and `skewY` properties
    const r5 = new fabric.Rect( { top: 200, left: 50, width: 100, height: 100, skewX: 10 } );
    const r6 = new fabric.Rect( { top: 200, left: 200, width: 100, height: 100, skewY: 10 } );

    // scale objects using `scaleX` and `scaleY` properties
    const r7 = new fabric.Rect( { top: 200, left: 350, width: 100, height: 100, scaleX: 1.2 } );
    const r8 = new fabric.Rect( { top: 200, left: 500, width: 100, height: 100, scaleY: 1.2 } );

    // flip objects using `flipX` and `flipY` properties 
    const t1 = new fabric.Triangle( { top: 350, left: 50, width: 100, height: 100 } );
    const t2 = new fabric.Triangle( { top: 350, left: 200, width: 100, height: 100, flipY: true } );

    // add objects to the canvas
    canvas.add( r1, r2, r3, r4, r5, r6, r7, r8, t1, t2 );
} );