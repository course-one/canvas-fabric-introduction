document.addEventListener( 'DOMContentLoaded', function() {
    
    /** @type { import("fabric/fabric-impl") } */
    const fabric = window.fabric;

    // create `Canvas` object using `<canvas>` DOM node
    const canvas = new fabric.StaticCanvas( 'canvas' )

    /*--------------*/

    // create a rectangle (default position)
    const rect = new fabric.Rect( {
        width: 100, height: 20,
        fill: '#F9A825',
    } ); 

    // create a rectangle (square)
    const square = new fabric.Rect( {
        width: 100, height: 100,
        top: 50, left: 50, // position
        fill: '#E91E63',
    } );

    // create a circle
    const circle = new fabric.Circle( {
        radius: 50,
        top: 50, left: 200, // position
        fill: '#9C27B0', backgroundColor: 'rgba(0,0,0,0.1)'
    } );

    // create a path
    const path = new fabric.Path( 'M107.694,6.772c0,0-4.822,16.94-5.429,16.581c-3.148-1.964-8.966-1.778-11.646-0.058c-0.414-0.947-4.055-16.642-4.055-16.642s-8.717,22.643-6.856,34.793c-0.362,3.547-0.563,11.542,0.186,13.661c-1.452-1.035-34.132-21.175-33.563-36.084c-31.058,2.563-93.861,123.345,15.326,168.648c-11.85-18.706-19.4-38.533-18.058-48.238c2.405,1.777,7.176,12.494,20.771,19.303c0-3.989,2.28-22.799,7.812-28.352c2.137,3.166,24.068,51.837,24.068,51.837l24.067-51.837c0,0,6.46,22.506,4.518,28.059c3.35-2.095,17.78-11.436,21.057-19.01c0.95,2.947,0.943,27.541-16.538,48.238c28.412-0.037,118.209-102.098,20.666-168.889c-1.93,8.242-31.548,36.139-37.229,36.139c0.061-1.272,0.834-8.607,0-13.476C113.679,39.441,110.763,19.344,107.694,6.772z', {
        top: 50, left: 350, // position
        fill: '#263238', backgroundColor: 'rgba(0,0,0,0.1)'
    } );

    // add objects to the canvas
    canvas.add( rect, square, circle, path );
} );