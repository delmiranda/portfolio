    $(window).scroll(function() 
    {
      var windowScroll = $(window).scrollTop();
      var $win = $(window);
      var winH = $win.height();   // Get the window height.
      /* affix after scrolling 100view height */
      if (windowScroll > (winH - 100)) 
      {
        $('.navbar').addClass('affix');
      } 
      else 
      {
        $('.navbar').removeClass('affix');
      }

      if (windowScroll >= 100) 
      {
        $('.nav-section').each(function(i) 
        {
          // The number at the end of the next line is how pany pixels you from the top you want it to activate.
          if (($(this).position().top - 150) <= windowScroll) 
          {
            $('nav li a.active').removeClass('active');
            $('nav li a').eq(i).addClass('active');
          
          }
        });
      } 
      else 
      {
        $('nav li a.active').removeClass('active');
        $('nav li a:first').addClass('active');
      }
    });

    $(document).ready(function()
    {
      $(".nav-link").click(function(e) 
      {
        $('html, body').animate(
        {
          scrollTop: $($(this).attr('data-target')).offset().top - $(".navbar").height()
        }, 100, 'linear')

        $('.navbar li a').removeClass('active');
        $(this).addClass('active');
      });
    });

    AOS.init();