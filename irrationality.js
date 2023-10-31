let bob1rad   = document.getElementById("number1");
let bob1speed = document.getElementById("number2");
let bob2rad   = document.getElementById("number3");
let bob2speed = document.getElementById("number4");
let time      = document.getElementById("number5");
let bob2angle1 = document.getElementById("number6");

let reset_drawing = false;

function apply_val(){
    bob1rad   = parseFloat(document.getElementById("number1").value);
    bob1speed = parseFloat(document.getElementById("number2").value);
    bob2rad   = parseFloat(document.getElementById("number3").value);
    bob2speed = parseFloat(document.getElementById("number4").value);
    time      = parseFloat(document.getElementById("number5").value);
    bob2angle1 = parseFloat(document.getElementById("number6").value);

    if(bob1rad <=0 || bob1rad >300){
        alert("Bob 1 Radius accepted values 0-300");
        var reset = document.getElementById("number1");
        bob1rad = 150
        reset.value = 150;
        reset_drawing = true;
        // drawRotatingLine();
    }
    else if(bob1speed <=0 || bob1speed >500){
        alert("Bob 1 Speed accepted values 0-500");
        var reset = document.getElementById("number2");
        bob1speed = 5
        reset.value = 5;
        drawRotatingLine();
    }
    else if(bob2rad <=0 || bob2rad >300){
        alert("Bob 2 Radius accepted values 0-300");
        var reset = document.getElementById("number3");
        bob2rad = 100
        reset.value = 100;
        drawRotatingLine();
    }
    else if(bob2speed <=0 || bob2speed >500){
        alert("Bob 2 Speed accepted values 0-500");
        var reset = document.getElementById("number4");
        bob2speed = 1
        reset.value = 1;
        drawRotatingLine();
    }
    else if(time <=-100 || time >100){
        alert("Time's accepted values (-100 - 100)");
        var reset = document.getElementById("number5");
        time = 1
        reset.value = 1;
        drawRotatingLine();
    }
    else if(bob2angle1 <=0 || bob2angle1 >360){
        alert("Bob 2 Radius accepted values 0-360");
        var reset = document.getElementById("number6");
        bob2angle1 = 100
        reset.value = 100;
        drawRotatingLine();
    }

}

function drawRotatingLine() {
    const canvas = document.getElementById('pendulumCanvas');
    const ctx = canvas.getContext('2d');

    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * devicePixelRatio;
    canvas.height = canvas.clientHeight * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    ctx.imageSmoothingEnabled = true;

    let angle1 = 0;
    let angle2 = 0 

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const endX = centerX + bob1rad * Math.cos(angle1);
        const endY = centerY + bob1rad * Math.sin(angle1);

        const endX2 = endX + bob2rad * Math.cos(angle2);
        const endY2 = endY + bob2rad * Math.sin(angle2);

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(endX, endY);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'white';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(endX, endY);
        ctx.lineTo(endX2, endY2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'white';
        ctx.stroke();

        angle1 += 0.005 * bob1speed;
        angle2 += 0.005 * bob2speed;

        if(angle1 >=359)
            angle1 =0;

        else if(angle2 >=359)
            angle2 =0;
        

        requestAnimationFrame(draw);
    }

    draw();
}


apply_val()
drawRotatingLine();






