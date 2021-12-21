canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image="nasa_mars_images_array[random_number];";
console.log("background_image = " + background_image); 
rover_image="rover.png"; 

function add()
{
background_imgTag=new Image(); 
background_imgTag.onload=uploadBackground(); 
background_imgTag.src=background_image(); 

rover_imgTag=new Image(); 
rover_imgTag.onload=uploadRover(); 
rover_imgTag.src=Rover_image();
}

function uploadBackground ()
{
    ctx.drawImage(background_imgTag , 0, 0, canvas.width, canvas.height);
}

function uploadRover ()
{
    ctx.drawImage(Rover_imgTag ,rover_x=10,rover_y=10, canvas.width, canvas.height);
}
window.addEventListener("keyDown", my_keyDown);

function my_keyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '38' ) {
up(); 
console.log("up");
}

if (keyPressed == '39' ) {
right(); 
console.log("right"); 
}

if (keyPressed == '40' ) {
down(); 
console.log("down");
}

if (keyPressed == '38' ) {
    left(); 
console.log("left");
}
}

function up()
{
    if (rover_y>=0) 
    {
        rover_y=rover_y-12;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadRover();

    }
}

function down()
{
    if (rover_y<=500) 
    {
        rover_y=rover_y+12;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadRover();

    }
}

function left()
{
    if (rover_x>=0) 
    {
        rover_x=rover_x-10;
        console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadRover();

    }
}

function right()
{
    if (rover_y>=0) 
    {
        rover_y=rover_y+10;
        console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadRover();

    }
}