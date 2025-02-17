export type Project = {
    name: string;
    slug: string;
    technologies: string[];
    description: string;
    content: string;
    collaborators: string[];
    images: string[];
    icon: string;
    href: string;
    url: string;
    featured: boolean;
    time: {year: number, semester: string};
    model: boolean;
};


const projects: Project[] = [
	{
		name: 'Scrumbs',
        slug: 'scrumbs',
		technologies: [ 'Angular', 'MongoDb', 'TypeScript', 'NodeJs', 'Express' ],
		description:
			'Scrumbs is an <span class="text-green-400">interactive web app</span> for project managment. It simulates a virtual Scrum board that teams (and stakeholders) can use to create, read, update, and delete tasks, as well as monitor the progression of the project. Scrumbs also features an admin panel for managing users and teams.',
        content: '',
        collaborators: ['dsm1015', 'lukemcelligott'],
        images: ['images/scrumbs5.png', 'images/scrumbs1.png', 'images/scrumbs2.png', 'images/scrumbs3.png', 'images/scrumbs4.png'],
        icon: "fa-solid fa-list-check",
        href: "/projects/scrumbs",
		url: 'https://github.com/dsm1015/scrumbs',
        featured: false,
        time: {year: 2022, semester: "Fall"},
        model: false
	},
	{
		name: 'Offerly',
        slug: 'offerly',
		technologies: ['Springboot', 'Maven', 'Java', 'Bootstrap', 'MySQL', 'JavaScript', 'Docker'],
		description:
			'Offerly was developed to be an online auction platform. Offerly provides users with a central platform for buying products secondhand',
        content: '',
        collaborators: ['dsm1015', 'lukemcelligott', 'tth1003'],
        images: ['images/offerly1.png', 'images/offerly2.png', 'images/offerly3.png'],
        icon: "fa-solid fa-cart-shopping",
        href: "/projects/offerly",
		url: 'https://github.com/dsm1015/Offerly',
        featured: true,
        time: {year: 2023, semester: "Fall"},
        model: false
	},
    {
		name: 'Traffic Sim',
        slug: 'trafficsim',
		technologies: ['Java', 'Maven'],
		description: 
            'An interactive traffic simulation project for urban grid systems. It incorporates zoning areas, road systems, and citizen movement.',
        content: '',
        collaborators: ['dsm1015'],
        images: ['images/trafficsim1.png', 'images/trafficsim2.png', 'images/trafficsim3.png'],
        icon: "fa-solid fa-diagram-project",
        href: "/projects/trafficsim",
		url: 'https://github.com/dsm1015/TrafficSim',
        featured: true,
        time: {year: 2023, semester: "Spring"},
        model: false
	},
    {
		name: 'SRU North Hall 3D Model',
        slug: 'northhall',
		technologies: ['Blender'],
		description: 
            'An very detailed rendering of my dorm hall at SRU. I just wanted to learn blender one day.',
        content: '',
        collaborators: ['dsm1015'],
        images: ['images/northhall-render-front.png'],
        icon: "fa-solid fa-cube",
        href: "/projects/northhall",
		url: '',
        featured: true,
        time: {year: 2023, semester: "Spring"},
        model: true
	},
    {
		name: 'Portfolio',
        slug: 'portfolio',
		technologies: ['TypeScript', 'SvelteKit', 'TailwindCSS', 'NodeJs'],
		description: 
            'My personal portfolio website for showcasing my projects and skills. Specifically, I wanted to learn <span class="text-green-400">SvelteKit</span> and <span class="text-green-400">TailwindCSS</span>.',
        content: '',
        collaborators: ['dsm1015'],
        images: ['favicon/faviconio-logo/logo.svg'],
        icon: "fa-solid fa-briefcase",
        href: "/projects/portfolio",
		url: 'https://github.com/dsm1015/portfolio',
        featured: false,
        time: {year: 2024, semester: "Spring"},
        model: false
	},
    {
		name: 'Sci-Fi Chatbot',
        slug: 'scifichatbot',
		technologies: ['OpenAI', 'Python', 'Flask', 'JavaScript'],
		description: 
            'A project for my ENGL411 Science Fiction class that allows users to chat with characters that we have read about.',
        content: '',
        collaborators: ['dsm1015'],
        images: ['videos/scifichatbot.gif'],
        icon: "fa-solid fa-robot",
        href: "/projects/scifichatbot",
		url: 'https://github.com/dsm1015/SciFiChatbot',
        featured: false,
        time: {year: 2023, semester: "Spring"},
        model: false
	},
    {
		name: 'Packet Sniffer',
        slug: 'packetsniffer',
		technologies: ['Python'],
		description: 
            'A python project for analyzing network traffic packets in Linux environments',
        content: '',
        collaborators: ['dsm1015', 'lukemcelligott'],
        images: ['images/packetsniffer.jpg'],
        icon: "fa-solid fa-wifi",
        href: "/projects/packetsniffer",
		url: 'https://github.com/lukemcelligott/packet_sniffer',
        featured: false,
        time: {year: 2022, semester: "Spring"},
        model: false
	},
];

projects.sort((a, b) => {
    // Compare years first
    if (a.time.year !== b.time.year) {
        return b.time.year - a.time.year;
    }

    // If years are the same, compare semesters
    const semesters = ["Spring", "Summer", "Fall"];
    return semesters.indexOf(b.time.semester) - semesters.indexOf(a.time.semester);
});

export { projects };