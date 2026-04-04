const projectsData = [
    {
        title: "AAMC Discord",
        description: "AngelAuraMC is an organization behind Amethyst, a launcher that allows you to play Minecraft: Java Edition on your Android and iOS devices.",
        involvement: "Administrator and Community Manager.",
        link: "https://discord.angelauramc.dev"
    },
    {
        title: "AAMC Wiki",
        description: "Wiki documenting how to use Amethyst.",
        involvement: "Wiki maintainer.",
        link: "https://wiki.angelauramc.dev"
    },
    {
        title: "My own CSS framework",
        description: "A custom CSS framework created from scratch for fun, I need to rewrite it ughhh.",
        involvement: "Creator.",
        link: "https://github.com/Dev1ss0/My-CSS-framework"
    },
    {
        title: "Simple @media query",
        description: "A fun little project that changes color depending on your device.",
        involvement: "Creator.",
        link: "https://github.com/Dev1ss0/Simple-Media-Query"
    }
];

function openProjectModal(index) {
    const project = projectsData[index];
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalInvolvement').textContent = project.involvement;
    document.getElementById('modalLink').href = project.link;
    
    document.getElementById('projectModal').classList.add('active');
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjectModal();
    }
});
