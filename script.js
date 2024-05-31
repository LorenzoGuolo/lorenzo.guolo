document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    container.style.opacity = 1;

    // Modal logic
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const profilePic = document.getElementById('profilePic');
    const closeBtn = document.getElementsByClassName('close')[0];

    if (profilePic) {
        profilePic.onclick = function () {
            modal.style.display = "block";
            modalImage.src = this.src;
        }
    }

    if (closeBtn) {
        closeBtn.onclick = function () {
            modal.style.display = "none";
        }
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Scroll-triggered animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.personal-description h2, .personal-description p').forEach(element => {
        observer.observe(element);
    });
});
