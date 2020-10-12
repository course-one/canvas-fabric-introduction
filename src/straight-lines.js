document.addEventListener( 'DOMContentLoaded', function() {
    /** @type { HTMLCanvasElement } */
    const canvas = document.getElementById( 'canvas' );
    const ctx = canvas.getContext( '2d' );

    /*--------------*/
    
    // draw rectangle
    ctx.fillStyle = 'green'; // fill color
    ctx.beginPath();
    ctx.moveTo(100,100); // move pen to x:100, y:100
    ctx.lineTo(300,100); // line to x:300, y:100
    ctx.lineTo(300,300); // line to x:300, y:300
    ctx.lineTo(100,300); // line to x:100, y:300
    ctx.lineTo(100,100); // line to x:100, y:100
    ctx.fill(); // fill previous paths

    // draw triangle
    ctx.fillStyle = 'red'; // fill color
    ctx.beginPath();
    ctx.moveTo(500,100); // move pen to x:500, y:100
    ctx.lineTo(400,200); // line to x:400, y:200
    ctx.lineTo(500,300); // line to x:500, y:300
    ctx.closePath(); // line to x:500, y:100
    ctx.fill(); // fill previous paths

    // draw triangle
    ctx.fillStyle = 'blue'; // fill color
    ctx.beginPath();
    ctx.moveTo(500,100); // move pen to x:500, y:100
    ctx.lineTo(600,200); // line to x:600, y:200
    ctx.lineTo(500,300); // line to x:500, y:300
    ctx.fill(); // fill previous paths (closes path)

    // draw angle
    ctx.lineWidth = 10; // line width in pixels
    ctx.lineCap = 'round'; // line width in pixels
    ctx.lineJoin = 'bevel'; // line width in pixels
    ctx.beginPath();
    ctx.moveTo(50,400); // move pen to x:50, y:400
    ctx.lineTo(50,450); // line to x:50, y:450
    ctx.lineTo(100,450); // line to x:100, y:450
    ctx.stroke(); // stroke previous paths
} );