document.addEventListener( 'DOMContentLoaded', function() {
    
    /** @type { import("fabric/fabric-impl") } */
    const fabric = window.fabric;

    // create `Canvas` object using `<canvas>` DOM node
    const canvas = new fabric.StaticCanvas( 'canvas' )

    /*--------------*/

    // default `fill` color
    const s1 = new fabric.Circle( { radius: 50, top: 50, left: 50 } );

    // custom `stroke` color and width
    const s2 = new fabric.Circle( { radius: 50, top: 50, left: 200, stroke: 'rgb(25,118,210)', strokeWidth: 20 } );

    // custom `background` color
    const s3 = new fabric.Circle( { radius: 50, top: 50, left: 350, fill: '#F4511E', backgroundColor: 'rgba(0,0,0,0.3)' } );

    // custom `opacity` value
    const s4 = new fabric.Circle( { radius: 50, top: 50, left: 500, fill: '#F4511E', backgroundColor: '#AB47BC', opacity: 0.5 } );

    // use `fabric.Color` value
    const s5 = new fabric.Circle( { radius: 50, top: 200, left: 50, fill: new fabric.Color('#00ACC1').toRgba() } );

    // use `fabric.Gradient` value
    const s6 = new fabric.Circle( { radius: 50, top: 200, left: 200, fill: new fabric.Gradient( {
        type: "linear",
        coords: { x1: 0, y1: 0, x2: 0, y2: 50 },
        colorStops: [
            { offset: 0, color: "#7CB342", opacity: 1 },
            { offset: 1, color: "#FBC02D", opacity: 1 }
        ]
    } ) } );

    // add objects to the canvas
    canvas.add( s1, s2, s3, s4, s5, s6 );
} );