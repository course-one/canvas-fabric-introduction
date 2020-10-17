document.addEventListener( 'DOMContentLoaded', function() {
    /** @type { HTMLCanvasElement } */
    const canvas = document.getElementById( 'canvas' );
    const ctx = canvas.getContext( '2d' );

    /*--------------*/

    // define a 45deg linear RGB gradient
    const gradient = ctx.createLinearGradient(100,100,300,300);
    gradient.addColorStop( 0, 'red' );
    gradient.addColorStop( 0.5, 'green' );
    gradient.addColorStop( 1, 'blue' );

    // set fill and stroke colors
    ctx.fillStyle = gradient; // fill color
    ctx.strokeStyle = gradient; // stroke color
    ctx.lineWidth = 20; // stroke width
    
    // diagonal rectanges
    ctx.fillRect( 0, 0, 100, 100 );
    ctx.fillRect( 50, 50, 100, 100 );
    ctx.fillRect( 100, 100, 100, 100 );
    ctx.fillRect( 150, 150, 100, 100 );
    ctx.fillRect( 200, 200, 100, 100 );
    ctx.fillRect( 250, 250, 100, 100 );
    ctx.fillRect( 300, 300, 100, 100 );
    ctx.fillRect( 350, 350, 100, 100 );
    ctx.fillRect( 400, 400, 100, 100 );

    // side rectangles
    ctx.strokeRect( 300, 100, 100, 100 );
    ctx.fillRect( 100, 300, 100, 100 );

    // right corner rectangles
    ctx.fillRect( 650, 50, 100, 100 );
    ctx.strokeRect( 650, 350, 100, 100 );
} );