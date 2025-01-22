// Add a confirmation prompt before opening links
document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', event => {
                const confirmation = confirm(`Do you want to open ${link.textContent}?`);
                if (!confirmation) {
                        event.preventDefault(); // Stop the link from opening
                }
        });
});
