document.addEventListener( 'DOMContentLoaded', function() {
    /** @type { HTMLCanvasElement } */
    const canvas = document.getElementById( 'canvas' );
    const ctx = canvas.getContext( '2d' );

    /*--------------*/

    ctx.fillStyle = 'green'; // fill color
    ctx.strokeStyle = 'red'; // stroke color
    ctx.lineWidth = 3; // stroke width
    
    // quadratic (cpx:200, cpy:100)
    ctx.beginPath();
    ctx.moveTo(100, 200);
    ctx.quadraticCurveTo(200, 100, 300, 200);
    ctx.stroke(); // stroke

    // quadratic (cpx:500, cpy:100)
    ctx.beginPath();
    ctx.moveTo(400, 200);
    ctx.quadraticCurveTo(500, 100, 600, 200);
    ctx.closePath(); // close path
    ctx.stroke(); // stroke

    // cubic (cp1x:200, cp1y:300, cp2x:300, cp2y:300)
    ctx.beginPath();
    ctx.moveTo(100, 400);
    ctx.bezierCurveTo(200, 300, 300, 300, 300, 400);
    ctx.fill(); // fill (and close)
} );