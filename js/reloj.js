window.onload = function()
{
  let width   = 100;
  let height  = 100;
  let centerX = Math.floor(width / 2);
  let centerY = Math.floor(height / 2);
  let canvas  = document.getElementById('reloj');
  let context = canvas.getContext('2d');

  setInterval(drawClock, 1000);
  drawClock();

  function drawClock() {

    let date   = new Date();
    let hour   = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    
    if((hour==20) && (minute==37) && (second==01)){alert('Nos vamos luciana');}
    // Color
    context.strokeStyle = '#666666';

    context.clearRect(0, 0, canvas.width, canvas.height);

    // Dial de dibujo
    context.beginPath();
    context.arc(centerX, centerY, centerX - 1, 0, Math.PI*2, false);
    context.stroke();

    context.save();
    context.translate(width/2, height/2);
    for(let i=0;i < 360; i+= 30){
      context.rotate( 30 * Math.PI / 180);
      context.beginPath();
      context.moveTo(0, centerY * 0.8);
      context.lineTo(0, centerY * 0.9);
      context.stroke();
    }
    context.translate(-width/2, -height/2);
    context.restore();

    context.strokeStyle = '#333333';

    drawHand(centerY * 0.5, hour * 30 + minute / 60 * 30);
    drawHand(centerY * 0.8, minute * 6 + second / 60 * 6);

    context.strokeStyle = '#EE0000';

    drawHand(centerY * 0.8, second * 6);
  }

  // Dibujamos una aguja
  function drawHand(length, angle){
    context.save();
    context.translate(centerX, centerY);
    context.rotate( angle * Math.PI / 180);
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -length);
    context.stroke();
    context.translate(-centerX, -centerY);
    context.restore();
  }
}