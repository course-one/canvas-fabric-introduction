document.addEventListener( 'DOMContentLoaded', function() {
    /** @type { HTMLCanvasElement } */
    const canvas = document.getElementById( 'canvas' );
    const ctx = canvas.getContext( '2d' );

    /*--------------*/

    // image url (w: 360px, h:360px)
    const url = "https://github.com/course-one/canvas-fabric-introduction/raw/main/assets/lenna.png";

    // create HTMLImageElement object
    const img = new Image();

    // listen to image load complete
    img.addEventListener( 'load', function() {

        // draw entire image (x:40, y:40)
        ctx.drawImage( this, // this === img
            40, 40, // draw from this point on the canvas
        );

        // draw 1/2 scaled image (w:180, h:180)
        ctx.drawImage( this, 
            360, 40, // draw from this point on the canvas
            180, 180, // width/height of the drawn image
        );

        // draw a portion of image (w:180, h:180)
        ctx.drawImage( this, 
            60, 100,  // crop from this point on the image
            200, 200, // width/height of the crop
            360, 240, // draw from this point on the canvas
            100, 100, // width/height of the drawn image
        );

    } );

    // start image fetch
    img.src = url;

} );