function formValidation() {
  const name = $("#name").val();
  const email = $("#email").val();
  const message = $("#message").val();
  var countInput = 0;
  if (name == "") {
    setErrorMessage(".input-name", "Please enter your name");
    countInput++;
  } else {
    $(".input-name > .form-response").detach();
  }
  if (email == "") {
    setErrorMessage(".input-email", "Please enter your email");
    countInput++;
  } else {
    $(".input-email > .form-response").detach();
  }
  if (message == "") {
    setErrorMessage(".input-message", "Please enter your message");
    countInput++;
  } else {
    $(".input-message > .form-response").detach();
  }
  return countInput;
}

function setErrorMessage(input, message) {
  if ($(input).find(".form-response").length === 0) {
    $(input).append(`<div class="form-response"><span class="px-1">` + message + `</span></div>`);
  }
}

function animateSkillsBar() {
  $(".bar-fill").each(function (index) {
    var that = this;
    var t = setTimeout(function () {
      $(that).animate(
        {
          width: $(that).attr("aria-value") + "%",
        },
        1300
      );
    }, 250 * index);
  });
}
animateSkillsBar();

// Initialize AOS
AOS.init({
  duration: 1000,
  disable: "phone",
});

// Initialize fullpage
var myFullpage = new fullpage("#fullpage", {
  anchors: ["home", "about", "portfolio", "contact"],
  menu: "#menu",
  scrollingSpeed: 1100,
  lazyLoad: true,
  responsiveWidth: 1100,
  afterResponsive: function (isResponsive) {
    setTimeout(function () {
      animateSkillsBar();
    }, 1300);
  },
  onLeave: function () {
    // $('.section [data-aos]').removeClass("aos-animate");
  },
  onSlideLeave: function () {
    // $('.slide [data-aos]').removeClass("aos-animate");
  },
  afterSlideLoad: function () {
    $(".slide.active [data-aos]").addClass("aos-animate");
  },
  afterLoad: function () {
    $(".section.active [data-aos]").addClass("aos-animate");
  },
});

// Initialize swiper
var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

// CONTACT
(function () {
  emailjs.init("user_Be0VTAA2k1HGHzX7ZGRqM");
})();
function sendMail() {
  var contactContent = {
    from_name: $("#name").val(),
    from_email: $("#email").val(),
    message: $("#message").val(),
  };

  if (emailjs.send("service_1emppvu", "template_ndaj2dh", contactContent));
  {
    return true;
  }
}

$(document).ready(function () {
  if (window.location.hash == "#about") {
    setTimeout(function () {
      animateSkillsBar();
    }, 1300);
  }

  $(window).on("hashchange", function () {
    if (window.location.hash == "#about") {
      setTimeout(function () {
        animateSkillsBar();
      }, 1300);
    }
    swiper.slideTo(0, 1300);
  });

  $(document).on("click", ".close", function () {
    $(".success-msg").hide();
  });

  $(document).on("focusout", "#name", function () {
    var name = $("#name").val() == "" ? setErrorMessage(".input-name", "Please enter your name") : $(".input-name > .form-response").detach();
  });
  $(document).on("focusout", "#email", function () {
    var email = $("#email").val() == "" ? setErrorMessage(".input-email", "Please enter your name") : $(".input-email > .form-response").detach();
  });
  $(document).on("focusout", "#message", function () {
    var msg = $("#message").val() == "" ? setErrorMessage(".input-message", "Please enter your name") : $(".input-message > .form-response").detach();
  });

  $(document).on("click", ".btn-submit", function () {
    if (formValidation() == 0) {
      if (sendMail()) {
        $(".success-msg").fadeIn();
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
      }
    }
  });
});
