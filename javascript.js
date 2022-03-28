!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {

   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');


   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){

      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener('click', function(e) {

         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
         e.preventDefault();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
         modalElem.classList.add('active');
         overlay.classList.add('active');
      }); // end click

   }); // end foreach


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });




}); // end ready
























/*$.fn.animate_Text = function() {
  var string = this.text();
  return this.each(function(){
   var $this = $(this);
   $this.html(string.replace(/./g, '<span class="new">$&</span>'));
   $this.find('span.new').each(function(i, el){
    setTimeout(function(){ $(el).addClass('div_opacity'); }, 20 * i);
   });
  });
 };
 $('#example').show();
 $('#example').animate_Text();

 

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 300);


*/






 /*
$(function() {

  function getScrollBarWidth () { 
    var inner = document.createElement('p'); 
    inner.style.width = "100%"; 
    inner.style.height = "200px"; 

    var outer = document.createElement('div'); 
    outer.style.position = "absolute"; 
    outer.style.top = "0px"; 
    outer.style.left = "0px"; 
    outer.style.visibility = "hidden"; 
    outer.style.width = "200px"; 
    outer.style.height = "150px"; 
    outer.style.overflow = "hidden"; 
    outer.appendChild (inner); 

    document.body.appendChild (outer); 
    var w1 = inner.offsetWidth; 
    outer.style.overflow = 'scroll'; 
    var w2 = inner.offsetWidth; 
    if (w1 == w2) w2 = outer.clientWidth; 

    document.body.removeChild (outer); 

    return (w1 - w2); 
  };

  var scrollBarWidth = getScrollBarWidth()




  var toggleModale = document.getElementById('toggle-modale')

  function _closeModale(){
      document.body.classList.remove('open-modal')
      toggleModale.style.marginRight = ''
  }
  function _openModale(){
      document.body.classList.add('open-modal')
      toggleModale.style.marginRight = scrollBarWidth + 'px'
  }

  
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);

      _closeModale()

      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


  toggleModale.addEventListener('click', function(){
    if(document.body.classList.contains('open-modal')){
        _closeModale()
    } else {
        _openModale()
    }
  })



  
});

const animItems = document.querySelectorAll('.anim-items');

if(animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(){
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;


      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if(animItemHeight > window.innerHeight){
       animItemPoint = window.innerHeight - window.innerHeight/animStart;
      } 

      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('active');
      }else{
        if(!animItem.classList.contains('anim-no-hide')){
           animItem.classList.remove('active');
        }
      }
    }
  }

function offset(el){
  const rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return{top: rect.top + scrollTop, left: rect.left + scrollLeft}
}
setTimeout(() => {
  animOnScroll();
}, 300)


}





  }*/