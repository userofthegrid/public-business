$(document).ready(function() {
  // Main nav icon
  document.getElementById("icon").onclick = function() {
    myFunction();
  };
  function myFunction() {
    document.getElementById("myLinks").classList.toggle("show");
  }
  // AOS
  AOS.init({
    duration: 1000,
    disable: "mobile"
  });
  // Smooth Scroll
  $(document).ready(function() {
    $("a").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          1000,
          function() {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  // Contact form
  $(document).ready(function() {
    $("#submit").click(function(event) {
      console.log("Clicked button");

      var email = $("#email").val();
      var subject = $("#subject").val();
      var message = $("#message").val();

      if (email.length > 5 && email.includes("@") && email.includes(".")) {
        $("#email").css("border-color", "#4393fc34");
      } else {
        event.preventDefault();
        $("#email").css("border-color", "#f04c54ce");
      }
      if (subject.length >= 2) {
        $("#subject").css("border-color", "#4393fc34");
      } else {
        event.preventDefault();
        $("#subject").css("border-color", "#f04c54ce");
      }
      if (message.length >= 10) {
        $("#message").css("border-color", "#4393fc34");
      } else {
        event.preventDefault();
        $("#message").css("border-color", "#f04c54ce");
      }
    });
  });
  // Mobile devices restiction
  if (screen.width < 1100) {
    // Then no js from below
  } else {
    $(document).ready(function() {
      $("#flip").click(function() {
        $("#panel").slideToggle("slow");
      });
    });
    // Auto hide navbar
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-75px";
      }
      prevScrollpos = currentScrollPos;
    };
    // Show arrow up
    $(document).ready(function() {
      let scrollPos = 0;
      const nav = document.querySelector(".upYouGo");

      function checkPosition() {
        let windowY = window.scrollY;
        if (windowY < scrollPos) {
          nav.classList.add("is-hidden");
          nav.classList.remove("is-visible");
        } else {
          nav.classList.add("is-visible");
          nav.classList.remove("is-hidden");
        }
        scrollPos = windowY;
      }

      window.addEventListener("scroll", checkPosition);
    });

    // Particles header
    particlesJS.load("particles-js", "particles.json", function() {
      console.log("particles.json loaded...");
    });
    // Moving divs in main grid
    function moveBG() {
      var imageHeight = 00;
      var maxYPos = $("#outerDIV").height() - imageHeight;
      var headerHeight = document.getElementById("outerDIV").offsetTop;
      var bgTopPos = $(window).height() - headerHeight - imageHeight;
      if (bgTopPos < 1) {
        bgTopPos = 0;
      }
      var bgBottomPos =
        $(document).height() - $(window).height() - headerHeight;
      if (bgBottomPos > maxYPos) {
        bgBottomPos = maxYPos;
      }
      var scrollPercent =
        $(window).scrollTop() / ($(document).height() - $(window).height());
      var bgYPos = bgTopPos - 100 + Math.round(scrollPercent * 700);
      var bgYPos2 = bgTopPos + Math.round(scrollPercent * 900);
      var bgYPos3 = bgTopPos - 400 + Math.round(scrollPercent * 400);
      var bgYPos4 = bgTopPos - 350 + Math.round(scrollPercent * 650);
      var bgYPos5 = bgTopPos - 150 + Math.round(scrollPercent * 1100);
      var bgYPos6 = bgTopPos - 700 + Math.round(scrollPercent * 1000);
      document.getElementById("outerDIV").style.backgroundPositionX =
        bgYPos + "px";
      document.getElementById("outerDIV2").style.backgroundPositionX =
        -bgYPos2 + "px";
      document.getElementById("outerDIV3").style.backgroundPositionX =
        bgYPos3 + "px";
      document.getElementById("outerDIV4").style.backgroundPositionX =
        bgYPos4 + "px";
      document.getElementById("outerDIV5").style.backgroundPositionX =
        -bgYPos5 + "px";
      document.getElementById("outerDIV6").style.backgroundPositionX =
        bgYPos6 + "px";
    }
    $(document).ready(function() {
      moveBG();
    });
    $(window).scroll(function() {
      moveBG();
    });
  }
});
