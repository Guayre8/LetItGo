document.addEventListener("DOMContentLoaded", function () {
    var articles = document.querySelectorAll("article");

    articles.forEach(function (article) {
        var imageText = article.querySelector(".image-text");

        article.addEventListener("click", function () {

            imageText.classList.toggle("show-text");
        });
    });
});