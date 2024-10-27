document.addEventListener("DOMContentLoaded", function() {
    // Image gallery interactivity
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-img');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            mainImage.src = this.src;
        });
    });

    // Tab interactivity
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabContents.forEach(content => {
                content.style.display = 'none';
            });
            document.getElementById(button.getAttribute('data-tab')).style.display = 'block';
        });
    });

    // Set default active tab
    document.getElementById('description').style.display = 'block';
});