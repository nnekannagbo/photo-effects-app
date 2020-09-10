const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); //ctx is referenced every time we want to draw on the canvas

const img = new Image();
img.src = "bridge.jpg";
img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
}