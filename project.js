const projects = [
    {
        title: "Online Bookstore Management System",
        description: "A web-based system to automate buying and selling of books.",
        technologies: "HTML, CSS, JavaScript, Java, MySQL",
        link: "#"
    },
    {
        title: "Currency Converter",
        description: "A simple currency conversion tool.",
        technologies: "HTML, CSS, JavaScript",
        link: "#"
    }
];

function renderProjects() {
    const projectContainer = document.getElementById('projects');
    projects.forEach(project => {
        projectContainer.innerHTML += `
            <div class="project">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>Technologies:</strong> ${project.technologies}</p>
                <a href="${project.link}">View Project</a>
            </div>`;
    });
}
window.onload = renderProjects;