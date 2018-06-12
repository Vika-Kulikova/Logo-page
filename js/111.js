//
// $( element ).hover(function () {
//   window.initHandler = setTimeout( handler, 2000 );
//   var $this = this;
//   function handler() {
//     alert( $this ); // Используем выбранный jQuery-объект внутри другой функции
//    }
// }, function () {
//   clearTimeout( window.initHandler );
// });
//
//
//
//
// var initHandlers = [];
//
//
// window.initHandlers = [];
// $( collection ).each(function ( i ) {
//   $( this ).hover(function () {
//     window.initHandlers[i] = setTimeout( handler, 2000 );
//     var $this = this;
//     function handler() {
//       alert( $this ); // Используем выбранный jQuery-объект внутри другой функции
//     }
//   }, function () {
//     clearTimeout( window.initHandlers[i] );
//   });
// });


(function () {
  // class HoverWork {
  function hoverWork(cssSelector) {
    const elementHover = document.querySelector(cssSelector);
    const workElementHover = elementHover.querySelectorAll('.container-works');

    function swichElement() {
      workElementHover.forEach(function (domElement) {
        domElement.classList.remove("container-works-hover");
      })
    }

    function hendleEvents() {
      //перебираем массив
      workElementHover.forEach(function (domElement) {
        this.swichElement();//выключает все сразу элементы
        //каждому panel-title навешиваем класс
        domElement.classList.add("container-works-hover");
      })
    }

    function elementHover() {
      workElementHover.forEach(function (domElement) {
        domElement.addEventListener('hover', function () {

          this.hendleEvents();
        })
      })
    }

    this.elementHover();

  }

  hoverWork('.section-works');

})();
// const hoverWork = new HoverWork('.section-works');



// <script>
// //  var test = document.getElementById("test");
// //
// //
// ////  // this handler will be executed only once when the cursor moves over the unordered list
// ////  test.addEventListener("mouseenter", function( event ) {
// ////    // highlight the mouseenter target
// ////    event.target.style.color = "purple";
// ////
// ////    // reset the color after a short delay
// ////    setTimeout(function() {
// ////      event.target.style.color = "";
// ////    }, 500);
// ////  }, false);
// //
// //
// //  // this handler will be executed every time the cursor is moved over a different list item
// //  test.addEventListener("mouseover", function( event ) {
// //    // highlight the mouseover target
// //    event.target.style.color = "orange";
// //
// //    // reset the color after a short delay
// //    setTimeout(function() {
// //      event.target.style.color = "";
// //    }, 500);
// //  }, false);
//
// var container = document.getElementsByClassName('section-works');
// var selectedTd;
//
// container.onclick = function(event) {
//   var target = event.target;
//
//   while (target != container) {
//     if (target.tagName == 'IMG') {
//       workHover(target);
//       return;
//     }
//     target = target.parentNode;
//   }
// }
//
// function workHover(node) {
//   if (selectedTd) {
//     selectedTd.classList.remove('container-works-hover');
//   }
//   selectedTd = node;
//   selectedTd.classList.add('container-works-hover');
// }
//
//
// </script>