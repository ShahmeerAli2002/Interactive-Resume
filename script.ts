// TypeScript for interactivity - toggling the visibility of the Skills section
const toggleButton = document.getElementById('toggle-skills');
const skillsList = document.getElementById('skills-list');

// Check if both elements are available in the DOM
if (toggleButton && skillsList) {
    toggleButton.addEventListener('click', () => {
        if (skillsList.style.display === 'none') {
            skillsList.style.display = 'block';
        } else {
            skillsList.style.display = 'none';
        }
    });
}
