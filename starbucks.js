function coffee1func(){
  document.querySelector('.starbucks').src = 'Gallery/coffee1.png';
  document.querySelector('.starbucks').style = "width: 600px;"
}
function coffee2func(){
  document.querySelector('.starbucks').src = 'Gallery/coffee2.png';
  document.querySelector('.starbucks').style = "width: 285px; margin-right: 60px;"
}
function coffee3func(){
  document.querySelector('.starbucks').src = 'Gallery/coffee3.png';
  document.querySelector('.starbucks').style = 'width: 250px; margin-right: 60px;'
}
function changeCircleColor(color){
  const circle= document.querySelector('.circle');
  circle.style.background = color;
}
function nextbutton(){
  if(document.getElementsByClassName('.imagebox').getAttribute(src)=='Gallery/coffee1.png')
    document.querySelector('.starbucks').src = 'Gallery/coffee2.png'
}