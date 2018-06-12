$('.container-works').hover(function () {
    setTimeout(function () {
        $(".container-works").addClass("container-works-hover");
      },
      1000);
  },
  function () {
    setTimeout(function () {
        $(".container-works").removeClass('container-works-hover');
      },
      300); // 1 sek
  }
);


// $('.container-works').hover(function () {
//     setTimeout(function () {
//         $(this).addClass("container-works-hover");
//       },
//       1000);
//   },
//
//   function () {
//     setTimeout(function () {
//         $(this).removeClass("container-works-hover");
//
//       },
//       1000); // 1 sek
//   }
// );
