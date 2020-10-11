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
    ctx.rect(250,250,100,100); // x:250, y:250, w:100, h:100
    ctx.fillStyle = 'rgba(251,192,45,0.75)'; // fill color
    ctx.fill(); // fill previous shapes

    /*--------------*/

    // draw a rectangle (stroke/transparent)
    ctx.beginPath();
    ctx.rect(550,250,100,100); // x:250, y:250, w:100, h:100
    ctx.strokeStyle = 'rgb(216,67,21)'; // fill color
    ctx.stroke(); // stroke previous shapes

} );