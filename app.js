// aimate smooth scroll

$('#view-work').on('click', function () {
    const images = $('#works').postion().top;

    $('html, body').animate({
        scrollTop: images
    }, 600);
});


// javaScript
const work = document.querySelector('#works')
const tops = work.postion().top;


console.log(tops)