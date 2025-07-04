// This file contains JavaScript functionality for the CRM and Order Management System application.
// It handles user interactions, form submissions, and dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    // Initialize event listeners for navigation links
    const navLinks = document.querySelectorAll('a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href');
            loadPage(targetPage);
        });
    });

    function loadPage(page) {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                document.body.innerHTML = html;
                // Re-initialize event listeners for new content
                initializePage();
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    function initializePage() {
        // Additional initialization code can go here
    }
});