// TypeScript for interactivity - toggling the visibility of the Skills section
var toggleButton = document.getElementById('toggle-skills');
var skillsList = document.getElementById('skills-list');
// Check if both elements are available in the DOM
if (toggleButton && skillsList) {
    toggleButton.addEventListener('click', function () {
        if (skillsList.style.display === 'none') {
            skillsList.style.display = 'block';
        }
        else {
            skillsList.style.display = 'none';
        }
    });
}
