var photo, body, cont;

function onPhotoClick (event0) {
  var widePage = document.documentElement.clientWidth >= 1200;

  if (widePage) {
        event0.preventDefault();
      
        var div = document.createElement('div');
        div.classList.add('newPhoto');
        cont.classList.add('newBG');
        var img = document.createElement('img');
        img.classList.add('newImg');
        img.src = event0.target.src;
        div.appendChild(img);
        body.appendChild(div);

        var close = document.createElement('div');
        close.classList.add('close');
        body.appendChild(close);


        close.addEventListener('click', function() {
          var newPhoto = document.querySelector('.newPhoto');

          newPhoto.parentNode.removeChild(newPhoto);
          close.parentNode.removeChild(close);
          cont.classList.remove('newBG');
        });
   }

}

var t;
function scrollUp(e) {
  if (e !== undefined) {
    e.preventDefault();      
  }
  var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if (top > 0) {
    window.scrollBy(0, -70);
    t = setTimeout('scrollUp()', 20);
  } else {
    clearTimeout(t);
  }
  return true;
}


document.addEventListener("DOMContentLoaded", function(event) {
  photo = document.querySelectorAll('.thumbnail');
  body = document.querySelector('body');
  cont = document.querySelector('.container');

  for (var i = 0; i < photo.length; i++) {
    photo[i].addEventListener('click', onPhotoClick);  
  }

  var up = document.querySelector('.up');
  up.addEventListener('click', scrollUp);

});


$(document).ready(function() {
  $('a[rel="relativeanchor"]').click(function(e){
    if (e !== undefined) {
    e.preventDefault();      
    }
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 800);
      return false;
  }); 
});

