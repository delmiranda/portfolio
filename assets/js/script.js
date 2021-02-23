  AOS.init();
  
  var myFullpage = new fullpage('#fullpage', 
  {
    sectionsColor: ['#000', '#ececeb', '#ececeb', '#ececeb', '#ececeb'],
    anchors: ['home', 'professional', 'portfolio', 'about', 'goals'],
    menu: '#menu',
    lazyLoad: true,
    onLeave: function()
    {
      $('.section [data-aos]').removeClass("aos-animate");
    },
    onSlideLeave: function()
    {
        $('.slide [data-aos]').removeClass("aos-animate");
    },
    afterSlideLoad: function()
    {
      $('.slide.active [data-aos]').addClass("aos-animate");
      $('.navbar').addClass('affix');
    },
    afterLoad: function()
    {
        $('.section.active [data-aos]').addClass("aos-animate");
    }
    
  });

  VANTA.FOG({
    el: "#intro",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0xf9A828,
    midtoneColor: 0x07617D,
    lowlightColor: 0xececeb,
    baseColor: 0xf9A828,
    blurFactor: 0.50,
    zoom: 1.50
  })

    $(document).ready(function()
    {
      
      // $(".nav-link").click(function(e) 
      // {
      //   $('html, body').animate(
      //   {
      //     scrollTop: $($(this).attr('data-target')).offset().top - $(".navbar").height()
      //   }, 100, 'linear')

      //   $('.navbar li a').removeClass('active');
      //   $(this).addClass('active');
      // });
    });

    

    $(window).scroll(function() 
    {
      // var windowScroll = $(window).scrollTop();
      // var $win = $(window);
      // var winH = $win.height();   // Get the window height.
      
      // /* affix after scrolling 100view height */
      // if (windowScroll > (winH - 100)) 
      // {
      //   $('.navbar').addClass('affix');
      // } 
      // else 
      // {
      //   $('.navbar').removeClass('affix');
      // }

      // if (windowScroll >= 100) 
      // {
      //   $('.nav-section').each(function(i) 
      //   {
      //     // The number at the end of the next line is how pany pixels you from the top you want it to activate.
      //     if (($(this).position().top - 150) <= windowScroll) 
      //     {
      //       $('nav li a.active').removeClass('active');
      //       $('nav li a').eq(i).addClass('active');
          
      //     }
      //   });
      // } 
      // else 
      // {
      //   $('nav li a.active').removeClass('active');
      //   $('nav li a:first').addClass('active');
      // }
    });