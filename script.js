
var btn = document.getElementById("fa-button");
btn.addEventListener('click', function () {
    document.getElementById('nav-items').classList.toggle('nav-items-show');
    btn.classList.toggle("fa-times");
});
