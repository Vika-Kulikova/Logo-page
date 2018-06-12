$(document).ready(function() {
  $(".nav").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top - 80;

    //анимируем переход на расстояние - top за 1000 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });



  $(document).on('scroll', function() {
    const posDoc = $(this).scrollTop();
// класс якорь пишем там где есть совпадение с nav
    $('.section-content').each(function(index, item) {
      const topHeader = $(this).offset().top - 80;
      const botHeader = topHeader + $(this).height();

      if (
        posDoc > topHeader &&
        posDoc < botHeader
      ) {
        $('.nav li').removeClass('nav-item-active');
        $('.nav li').eq(index).addClass('nav-item-active');
      }
    });
  });
});