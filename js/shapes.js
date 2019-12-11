window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;

}

const sayHello = function() {
    let mess = prompt("Message:");
    while (mess.length >= 50) {
        alert("Your message is too long. Please keep your message under 50 characters.");
        m = prompt("Message:")
    }

    const canvas = document.getElementById('student-canvas-1');
    const styling = canvas.getContext('2d');
    styling.font = '48px sans-serif';
    styling.clearRect(0, 0, canvas.width, canvas.height);
    styling.strokeText(mess, 30, 70, 994);
};

const drawRectangle = function() {
    const canvas = document.getElementById('student-canvas-2');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    do {
        var width = prompt("Width: ")
        if (width == null) {
            break;
        }
        var height = prompt("Height: ")
        if (height == null) {
            break;
        }
        var x = prompt("X: ")
        if (x == null) {
            break;
        }
        var y = prompt("Y: ")
        if (y == null) {
            break;
        }
        if (width > canvas.width || width < 1) {
            alert("Your width must be between 1 and 1024.")
        } else if (height > canvas.height || height < 1) {
            alert("Your height must be between 1 and 512.")
        } else if (x < 1 || x > 1024) {
            alert("Your x-coordinate must be between 1 and 1024.")
        } else if (y < 1 || y > 512) {
            alert("Your y-coordinate must be between 1 and 512.")
        } else if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
            alert("One of your values is not a number.")
        }
    } while (width > canvas.width || width < 1 || height > canvas.height || height < 1 || x < 1 || x > 1024 || y < 1 || y > 512 || isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y))

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(x, y, width, height);
};


/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    const canvas = document.getElementById('student-canvas-3');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    do {
        var color = (prompt("Color: "))
        if (color == null) {
            break;
        }
        color = String(color)
        var color_case = color.toLowerCase()
        if (color_case != "green" && color_case != "black" && color_case != "blue" && color_case != "orange" && color_case != "purple" && color_case != "red" && color_case != "yellow") {
            alert(color + " is not a supported color.")
        }
    } while (color_case != "green" && color_case != "black" && color_case != "blue" && color_case != "orange" && color_case != "purple" && color_case != "red" && color_case != "yellow")

    if (color != null) {
        ctx.fillStyle = color_case;
        ctx.fillRect(10, 10, 100, 50);
    }
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    const canvas = document.getElementById('student-canvas-4');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    do {
        var s1 = prompt("Side 1: ")
        var s2 = prompt("Side 2: ")
        var s3 = prompt("Side 3: ")

        var height = Math.min(s1, s2, s3)
        var hypo = Math.max(s1, s2, s3)
        var base = Math.sqrt(hypo * hypo - height * height)

        if (base == 0 && height == 0 && hypo == 0) {
            break;
        }
        s1 = Number(s1)
        s2 = Number(s2)
        s3 = Number(s3)
        if (base * base + height * height != hypo * hypo || base == 0 || height == 0 || hypo == 0 || s1 + s2 + s3 - hypo - height != base) {
            alert("That's not a valid right triangle.")
        }
        if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
            alert("One of your sides is not a number.")
        }
        if (base > 1024 || height > 512 || hypo > 1310720) {
            alert("Your triangle won't fit on the canvas.")
        }
    } while ((Math.floor(base) * Math.floor(base) + height * height != hypo * hypo) || isNaN(s1) || isNaN(s2) || isNaN(s3) || base > 1024 || height > 512 || hypo > 1310720 || base == 0 || height == 0 || hypo == 0)

    if ((base * base + height * height == hypo * hypo) && (base < 1024 && height < 512 && hypo < 1145) && (base != 0 && height != 0 && hypo != 0) && (base != null && height != null && hypo != null)) {
        height = height + 25
        base = base + 25
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(25, height);
        ctx.lineTo(base, height)
        ctx.lineTo(25, 25)
        ctx.stroke();
    };
}

/*
 * Exercise 5.
 */

const drawFace = function() {
    const canvas = document.getElementById('student-canvas-5');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    do {
        var radius = (prompt("Radius: "))
        if (radius == null) {
            break;
        }
        if (radius < 32) {
            alert("Your radius must be at least 32.")
        }
        if (isNaN(radius)) {
            alert("Your radius is not a number.")
        }
        if (radius > 256) {
            alert("Your smiley face won't fit on the canvas.")
        }
    } while (radius > 256 || isNaN(radius) || radius < 32)

    var reyes = 0.15 * radius
    var rmouth = 0.7 * radius


    ctx.beginPath();
    ctx.arc(512, 256, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(512, 256, rmouth, 0, Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(512 - 0.4 * radius, 256 - 0.4 * radius, reyes, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(512 + 0.4 * radius, 256 - 0.4 * radius, reyes, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
