document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.querySelector('.search-icon-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function () {
            searchBtn.style.transform = 'scale(0.9) rotate(-8deg)';
        });

        searchBtn.addEventListener('mousedown', function () {
            searchBtn.style.transform = 'scale(0.9) rotate(-8deg)';
            searchBtn.style.transition = 'transform 0.1s, box-shadow 0.2s';
            searchBtn.style.boxShadow = '0 2px 12px rgba(46, 138, 243, 1)';
        });
        searchBtn.addEventListener('mouseup', function () {
            searchBtn.style.transform = 'scale(1)';
            searchBtn.style.boxShadow = '';
        });
        searchBtn.addEventListener('mouseleave', function () {
            searchBtn.style.transform = 'scale(1)';
            searchBtn.style.boxShadow = '';
        });
        searchBtn.addEventListener('mouseenter', function () {
            searchBtn.style.boxShadow = '0 0 16px rgba(46, 138, 243, 1), 0 0 4px #fff';
            searchBtn.style.transition = 'box-shadow 0.2s';
        });
        searchBtn.addEventListener('mouseleave', function () {
            searchBtn.style.boxShadow = '';
        });
    }

    const loginBtn = document.querySelector('.get-started button');
    if (loginBtn) {
        loginBtn.addEventListener('click', function () {
            window.location.href = "login.html";
        });

        loginBtn.addEventListener('mousedown', function () {
            loginBtn.style.transform = 'scale(0.95) rotate(-2deg)';
            loginBtn.style.transition = 'transform 0.1s, box-shadow 0.2s';
            loginBtn.style.boxShadow = '0 2px 8px rgba(197,155,3,0.25)';
        });
        loginBtn.addEventListener('mouseup', function () {
            loginBtn.style.transform = 'scale(1)';
            loginBtn.style.boxShadow = '';
        });
        loginBtn.addEventListener('mouseleave', function () {
            loginBtn.style.transform = 'scale(1)';
            loginBtn.style.boxShadow = '';
        });
        loginBtn.addEventListener('mouseenter', function () {
            loginBtn.style.boxShadow = '0 0 12px rgba(46, 138, 243, 1), 0 0 2px #fff';
            loginBtn.style.transition = 'box-shadow 0.2s';
        });
        loginBtn.addEventListener('mouseleave', function () {
            loginBtn.style.boxShadow = '';
        });
    }

    const navLinks = document.querySelectorAll('.navbar a');
    function setActiveLink() {
        navLinks.forEach(link => {
            if (window.location.hash && link.getAttribute('href') === window.location.hash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    setActiveLink();
    window.addEventListener('hashchange', setActiveLink);

    navLinks.forEach(link => {
        link.addEventListener('mousedown', function () {
            link.style.transform = 'scale(0.95) rotate(-2deg)';
            link.style.transition = 'transform 0.1s, box-shadow 0.2s';
            link.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
        });
        link.addEventListener('mouseup', function () {
            link.style.transform = 'scale(1)';
            link.style.boxShadow = '';
        });
        link.addEventListener('mouseleave', function () {
            link.style.transform = 'scale(1)';
            link.style.boxShadow = '';
        });

        link.addEventListener('mouseenter', function () {
            link.style.textShadow = '0 0 20px rgba(46, 138, 243, 1), 0 0 2px #fff';
            link.style.transition = 'text-shadow 0.2s';
        });
        link.addEventListener('mouseleave', function () {
            link.style.textShadow = '';
        });
    });
});