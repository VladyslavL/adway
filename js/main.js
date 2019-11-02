var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene, {
  onReady: function() {
    scene.classList.add("ready");
  }
});

$('#events__slider').slick({
  arrows: true,
  variableWidth: true,
  prevArrow: '.hero__events .events__slider-button.prev',
  nextArrow: '.hero__events .events__slider-button.next'
});

MicroModal.init({
  disableScroll: true,
  disableFocus: true,
  awaitOpenAnimation: true
});

document
  .getElementById("modal-sign-up-btn")
  .addEventListener("click", function(e) {
    MicroModal.close("modal-nav");
    MicroModal.show("modal", {
      disableScroll: true,
      disableFocus: false
    });
  });

document.getElementById("CTA").addEventListener("click", function(e) {
  MicroModal.show("modal", {
    disableScroll: true,
    disableFocus: false
  });
});

var Form = document.getElementById("form");
Form.onsubmit = function(event) {
  event.preventDefault();

  var request = new XMLHttpRequest();
  // POST to httpbin which returns the POST data as JSON
  request.open(
    "POST",
    "https://hooks.zapier.com/hooks/catch/5963677/ou04mda/",
    true
  );

  var formData = new FormData(document.getElementById("form"));

  request.onload = function() {
    if (request.status === 200) {
      Form.classList.add("success");
      console.log("success");
    } else {
      Form.classList.add("error");
      console.log("error");
    }
  };

  request.send(formData);

  Form.reset();
};
