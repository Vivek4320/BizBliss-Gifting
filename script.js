document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.querySelector('.search-icon-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function () {
            
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
            searchBtn.style.transform = 'scale(1.05)';
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
    }

    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('mousedown', function () {
            link.style.transform = 'scale(0.95) rotate(-2deg)';
            link.style.transition = 'transform 0.1s, box-shadow 0.2s, background 0.2s';
            link.style.boxShadow = '0 2px 8px rgba(46,138,243,0.15)';
            link.style.background = ' rgba(6, 118, 229, 0.22)';
        });
        link.addEventListener('mouseup', function () {
            link.style.transform = 'scale(1)';
            link.style.boxShadow = '';
            link.style.background = '';
        });
        link.addEventListener('mouseleave', function () {
            link.style.transform = 'scale(1)';
            link.style.boxShadow = '';
            link.style.background = '';
        });
        link.addEventListener('mouseenter', function () {
            link.style.textShadow = '0 0 20px rgba(46, 138, 243, 1)';
            link.style.transition = 'text-shadow 0.2s, background 0.2s';
            link.style.background = 'rgba(46, 138, 243, 0.04)';
            link.style.transform = 'scale(1.05)';
            link.style.textDecoration = 'double';
            link.style.textDecorationColor = '#764ba2';
            link.style.textDecorationThickness = '2px';
        });
        link.addEventListener('mouseleave', function () {
            link.style.textShadow = '';
            link.style.background = '';
            link.style.textDecoration = '';
        });
    });

    const cursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.x + 'px';
        cursor.style.top = e.y + 'px';
    });

    const exploreBtn = document.querySelector('.explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function () {
            window.location.href = "explore.html";
        });
    }
    exploreBtn.addEventListener('mousedown', function () {
        exploreBtn.style.transform = 'scale(0.95) rotate(-2deg)';
        exploreBtn.style.transition = 'transform 0.1s, box-shadow 0.2s';
        exploreBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
    });
    exploreBtn.addEventListener('mouseup', function () {
        exploreBtn.style.transform = 'scale(1)';
        exploreBtn.style.boxShadow = '';
    });
    exploreBtn.addEventListener('mouseleave', function () {
        exploreBtn.style.transform = 'scale(1)';
        exploreBtn.style.boxShadow = '';
    });
    exploreBtn.addEventListener('mouseenter', function () {
        exploreBtn.style.textShadow = '0 0 20px rgb(6, 85, 175), 0 0 2px #fff';
        exploreBtn.style.transition = 'text-shadow 0.2s';
    });
});