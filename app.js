const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');


const point = {
    x: 300,
    y: 300
}



// setInterval(() =>{
    
//     const randomX = (Math.random()*2) -1;
//     const randomY= (Math.random()*2) -1;

  
//     ctx.fillStyle = 'red'
//     ctx.fillRect(point.x, point.y, 2,2)
//     point.x += randomX;
//     point.y += randomY;
// },1)


for(let i = 0; i < 100; i++){
    const point = {
        x: 300,
        y: 300
    }
    
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const alpha = Math.random();

    point.color= `rgba(${red},${green},${blue}, ${alpha})`

    
setInterval(() =>{
    
    const randomX = (Math.random()*2) -1;
    const randomY= (Math.random()*2) -1;

  
    ctx.fillStyle = point.color
    ctx.fillRect(point.x, point.y, 2,2)
    point.x += randomX;
    point.y += randomY;
},1)
}