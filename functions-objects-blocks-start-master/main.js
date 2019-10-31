// Blocks

// Setup Canvas & Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let block1 = {
    x: 100,
    y: 200,
    w: 100,
    h: 10,
    Xspeed: randomDec(-5, 5),
    Color: 'orange'
};

let block2 = {
    x: 300,
    y: 300,
    w: 75,
    h: 10,
    Xspeed: randomDec(-5, 5),
    Color: 'purple'
};

let block3 = {
    x: 500,
    y: 500,
    w: 120,
    h: 10,
    Xspeed: randomDec(-5, 5),
    Color: 'green'
};

// Animation Loop
requestAnimationFrame(animate);

function animate() {
    // UPDATE

    updateBlocks(block1);
    updateBlocks(block2);
    updateBlocks(block3);

    // DRAW
    
    // Clear Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw blocks
    drawBlocks(block1);
    drawBlocks(block2);
    drawBlocks(block3);

    // Request Another Animation Frame
    requestAnimationFrame(animate);
}

// Helper Functions
function randomDec(low, high) {
    return Math.random() * (high - low) + low;
}



function drawBlocks(aBlock) {
    //aBlock.Xspeed = randomDec(-5 , 5);
    ctx.fillStyle = aBlock.Color;
    ctx.fillRect (aBlock.x, aBlock.y, aBlock.w, aBlock.h);
}




function updateBlocks(aBlock) {
    aBlock.x+= aBlock.Xspeed;
    if (aBlock.x + aBlock.w> cnv.width || aBlock.x < 0) {
        aBlock.Xspeed = -aBlock.Xspeed;   
    }
}