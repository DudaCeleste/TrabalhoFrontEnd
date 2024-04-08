


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


//login


document.addEventListener("DOMContentLoaded", function() {
    
    var signupForm = document.getElementById("signup-form");
    var loginForm = document.getElementById("login-form");

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        var email = document.getElementById("user_email").value;
        var name = document.getElementById("user_name").value;
        var password = document.getElementById("signup_pass").value;
        
        window.location.href = "perfil.html";
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var emailOrUsername = document.getElementById("login_email").value;
        var password = document.getElementById("login_pass").value;
        
        
        window.location.href = "perfil.html";
    });

    var tabs = document.querySelectorAll(".tabs a");
    tabs.forEach(function(tab) {
        tab.addEventListener("click", function(event) {
            event.preventDefault();
            var tabContentId = this.getAttribute("href");
            var tabContent = document.querySelector(tabContentId);
            document.querySelectorAll(".tabs-content > div").forEach(function(content) {
                content.classList.remove("active");
            });
            document.querySelector(tabContentId).classList.add("active");
            document.querySelectorAll(".tabs a").forEach(function(tab) {
                tab.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});
