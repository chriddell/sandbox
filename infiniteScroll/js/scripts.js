$(document).ready(function(){

  $('.scroll-gif').hide();
  $('li:nth-of-type(n+11)').hide();

  $(window).scroll(function () {
      var theWindow = $(window);       
      var theContainer = $('.container');  
      var tweak = 10;
      var timesRan = 0;

      var firstLot = $('li:nth-of-type(10), li:nth-of-type(11), li:nth-of-type(12), li:nth-of-type(13), li:nth-of-type(14)');
      var secondLot = $('li:nth-of-type(15), li:nth-of-type(14), li:nth-of-type(15), li:nth-of-type(16), li:nth-of-type(17)');
      var thirdLot = $('li:nth-of-type(18), li:nth-of-type(19), li:nth-of-type(20), li:nth-of-type(21), li:nth-of-type(22)');
      var fourthLot = $('li:nth-of-type(23), li:nth-of-type(24), li:nth-of-type(25), li:nth-of-type(26), li:nth-of-type(27)');
      var fifthLot = $('li:nth-of-type(28), li:nth-of-type(29), li:nth-of-type(30), li:nth-of-type(31), li:nth-of-type(32)');

      var loadingGif = $('.scroll-gif');
      
      if ( theWindow.scrollTop() >= theContainer.height() - theWindow.height() - tweak && timesRan == 0) {
          firstLot.show();
          var timesRan = 1;
      }

      if ( theWindow.scrollTop() >= theContainer.height() - theWindow.height() - tweak && timesRan == 1) {
          secondLot.show();
          var timesRan = 2; 
      }

      if ( theWindow.scrollTop() >= theContainer.height() - theWindow.height() - tweak && timesRan == 2) {
          thirdLot.show();
          var timesRan = 3;
      }

      if ( theWindow.scrollTop() >= theContainer.height() - theWindow.height() - tweak && timesRan == 3) {
          fourthLot.show();
          var timesRan = 4;
      }

      if ( theWindow.scrollTop() >= theContainer.height() - theWindow.height() - tweak && timesRan == 4) {
          fifthLot.show();
          var timesRan = 5;
      }
    });
});