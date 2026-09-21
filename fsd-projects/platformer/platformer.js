$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 630, 50, 290, "black");
createPlatform(700, 630, 50, 290, "purple");
createPlatform(900, 630, 50, 290, "blue");
createPlatform(1100, 630, 50, 290, "pink");
createPlatform(1300, 630, 50, 290, "red");

    // TODO 3 - Create Collectables
createCollectable("kennedi", 1270, 700);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("steve", 550, 90, 1, 0.5);


    
    // TODO 4 - Create Cannons
createCannon("top", 300, 700);
createCannon("top", 650, 700);
createCannon("top", 930, 700);
createCannon("right", 650, 2500); 
createCannon("right", 450, 2500);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
