function showProject(projectId) {
    var modal = document.getElementById('project-details');
    var projectContent = document.getElementById('project-content');

    // Customize these sections based on your projects
    var projects = {
        'project1': '<h2>Energy Drink Brand</h2><p>This project involved creating an engaging website for the energy drink brand Zestle. It features a vibrant design with interactive elements, including a product showcase and user engagement features.</p>',
        'project2': '<h2>Restaurant Menu</h2><p>A dynamic and interactive menu for a restaurant, designed to enhance user experience with modern UI features and easy navigation.</p>',
        'project3': '<h2>Sales Dashboard</h2><p>An interactive dashboard designed for visualizing sales data. Includes various charts and data representations to assist with data analysis and decision making.</p>'
    };

    projectContent.innerHTML = projects[projectId] || '<p>Project details not found.</p>';
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('project-details');
    modal.style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById('project-details');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
