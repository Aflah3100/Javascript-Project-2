function genimg(){
    image=document.createElement('img');
    image.setAttribute('src','http://thecatapi.com/api/images/get?format=src&type=gif');
    image.setAttribute('id','catimage');
    document.getElementById('catoutput').appendChild(image);
}
function clrimg(){
    document.getElementById('catimage').remove();
}
function resimg(){
    window.location.reload(true);
}