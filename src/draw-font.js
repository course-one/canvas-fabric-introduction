document.addEventListener( 'DOMContentLoaded', function() {
    /** @type { HTMLCanvasElement } */
    const canvas = document.getElementById( 'canvas' );
    const ctx = canvas.getContext( '2d' );

    /*--------------*/
    
    // set font properties
    ctx.font = 'italic 50px sans-serif';

    // set fill and stroke style
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'red';

    // fill text at (50,50)
    ctx.fillText( 'Hello World!', 50, 50 );

    // set max width to 150px (compress text)
    ctx.fillText( 'Hello World!', 50, 100, 150 );

    // set max width to 500px (no effect)
    ctx.fillText( 'Hello World!', 50, 150, 500 );

    // stroke text (with 2px stroke width)
    ctx.lineWidth = 2;
    ctx.strokeText( 'Hello World!', 50, 200 );

    // start text from right to left
    ctx.textAlign = 'right';
    ctx.fillText( 'Hello World!', 50, 250 );

} );