const storedPassword = "LearnSmasher";

function passcheck() {
    const inputPassword = document.getElementById('pass1').value;

    if (inputPassword !== storedPassword) {
        alert('Wrong password, Try again!');
        return false; // Prevent form submission
    } else {
        alert('Correct password');
        window.location.href = 'index.html'; // Redirect to index.html
        return false; // Prevent form submission
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('pass1');
    const eyeIcon = document.getElementById('eye-icon');

    if (eyeIcon) {
        eyeIcon.onclick = function () {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                eyeIcon.src = "assets/eye-open.jpg";
            } else {
                passwordInput.type = "password";
                eyeIcon.src = "assets/eye-close.png";
            }
        };
    }

    const openPdfBtn = document.getElementById('openPdfBtn');
    if (openPdfBtn) {
        openPdfBtn.addEventListener('click', function() {
            var pdfUrl = 'Blue Simple Professional CV Resume.pdf';
            // Open the PDF in the same tab
            window.location.href = pdfUrl;
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    function hideAllTabs() {
        tabContents.forEach(content => content.classList.remove('active'));
    }

    function showTab(tabId) {
        document.getElementById(tabId).classList.add('active');
    }

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            hideAllTabs();
            const tabId = this.getAttribute('data-tab');
            showTab(tabId);
        });
    });

    // Show the first tab by default
    if (tabLinks.length > 0) {
        tabLinks[0].click();
    }
});
