document.addEventListener( 'DOMContentLoaded', function() {
    /** @type { HTMLCanvasElement } */
    const canvas = document.getElementById( 'canvas' );
    const ctx = canvas.getContext( '2d' );

    // fill style
    ctx.fillStyle = 'red';

    /*--------------*/
    
    // starting point
    let x = 0;
    const y = 200; // `y` (vertical) motion is disabled

    // create a draw function to draw each frame
    function draw() {

        // if `x` is greater than 500px, stop animation
        if( x > 500 ) {
            return; // return from the function
        }

        // fill rectangle of size `100x100` pixels
        ctx.fillRect( x, y, 100, 100 );

        // increase `x` value by `5px`
        x += 5;

        // register `draw()` call before next paint
        requestAnimationFrame( draw );
    }

    // register first `draw()` call
    requestAnimationFrame( draw );

} );