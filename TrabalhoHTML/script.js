


window.onload = function() {
    
    window.addEventListener('scroll', scrollFunction);
};


function scrollFunction() {
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

/*ler mais*/

document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const postContent = this.previousElementSibling;

            postContent.classList.toggle('collapsed');
            if (postContent.classList.contains('collapsed')) {
                this.textContent = 'Ler mais';
            } else {
                this.textContent = 'Mostrar menos';
            }
        });
    });
});



