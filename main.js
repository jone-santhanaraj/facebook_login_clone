signup_form_btn = document.getElementById('signup_form_btn');
signup_form_div = document.getElementById('signup_form_div');

signup_form_btn.addEventListener('click', function () {
  signup_form_div.classList.toggle('active');
});
