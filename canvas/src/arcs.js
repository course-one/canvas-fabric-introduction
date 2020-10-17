document.addEventListener( 'DOMContentLoaded', function() {
    /** @type { HTMLCanvasElement } */
    const canvas = document.getElementById( 'canvas' );
    const ctx = canvas.getContext( '2d' );

    /*--------------*/

    ctx.fillStyle = 'green'; // fill color
    ctx.strokeStyle = 'red'; // stroke color
    ctx.lineWidth = 3; // stroke width
    
    // circle (x:100, y:100, r:50, sa:0, ea:360, CW)
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI );
    ctx.fill(); // close paths and fill

    // semi-circle (x:300, y:100, r:50, sa:0, ea:180, CW)
    ctx.beginPath();
    ctx.arc(300, 100, 50, 0, Math.PI );
    ctx.fill(); // close paths and fill
    ctx.beginPath();

    // semi-circle (x:500, y:100, r:50, sa:0, ea:180, ACW)
    ctx.beginPath();
    ctx.arc(500, 100, 50, 0, Math.PI, true );
    ctx.stroke(); // stroke only
    
    // sector (x:500, y:100, r:50, sa:0, ea:270, CW)
    ctx.beginPath();
    ctx.arc(700, 100, 50, 0, (6/4) * Math.PI );
    ctx.closePath(); // close path
    ctx.stroke(); // stroke only
} );