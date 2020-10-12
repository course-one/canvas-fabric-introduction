document.addEventListener( 'DOMContentLoaded', function() {
    /** @type { HTMLCanvasElement } */
    const canvas = document.getElementById( 'canvas' );
    const ctx = canvas.getContext( '2d' );

    /*--------------*/
    
    // draw two rectangles (fill)
    ctx.beginPath();
    ctx.fillStyle = '#03A87C'; // fill color
    ctx.rect(100,100,200,200); // x:100, y:100, w:200, h:200
    ctx.rect(400,100,200,200); // x:400, y:100, w:200, h:200
    ctx.fill(); // fill previous shapes

    /*--------------*/

    // draw a rectangle (fill/transparent)
    ctx.beginPath();
    ctx.clearRect(150,150,100,100); // x:150, y:150, w:100, h:100

    /*--------------*/

    // draw a rectangle (stroke/transparent)
    ctx.fillStyle = 'rgb(216,67,21)'; // fill color
    ctx.fillRect(450,150,100,100); // x:450, y:150, w:100, h:100

} );