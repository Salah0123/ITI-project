let span = document.querySelector(".up");
// window.onscroll = function () {
//   if (this.scrolly >= 1000) {
//     span.classList.add("show");
//   }
//   else {
//     span.classList.remove("show");
//   }
// }
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// form
$(document).ready(function () {
  $('#submitForm').click(function () {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    if (!username.value.split(' ').join('') || !password.value.split(' ').join('')) {
      return
    }
    localStorage.setItem('loggedUSer', JSON.stringify({ username: username.value, password: password.value }));
    $('.formContainer').css('display', 'none');

    $('#login-form')[0].reset()
  })


  $('.logIn_btn').click(function () {
    $('.formContainer').css('display', 'flex')
  })

  $('.iconChat').click(function() {
    const chatIconDisplay = $('.box').css('display');

    if(chatIconDisplay === 'none') {
      $('.box').css('display', 'flex')
    } else {
      $('.box').css('display', 'none')
    }
    
  })
});
// /////////////////// slide ////////////////////////////////////////////////////////////////////
var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide11")[0].getElementsByTagName("img");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.opacity = "1";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
