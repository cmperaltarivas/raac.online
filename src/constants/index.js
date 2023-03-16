import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "Especialidades",
	},
	{
		id: "work",
		title: "Logros",
	},
	{
		id: "contact",
		title: "Escríbenos",
	},
];

const services = [
	{
		title: "Administración",
		icon: web,
	},
	{
		title: "Contabilidad",
		icon: mobile,
	},
	{
		title: "Conectividad y redes",
		icon: backend,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "React.js Developer",
		company_name: "Starbucks",
		icon: starbucks,
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo tortor pulvinar arcu sagittis efficitur.",
			"Proin sagittis pretium sagittis. Phasellus euismod lacinia mollis",
			"Nulla non sagittis nunc, vitae tempor felis. Ut sit amet tellus ante.",
			"Pellentesque dictum, purus non eleifend maximus, diam arcu ornare sapien, nec lobortis ante enim eget sem.",
		],
	},
	{
		title: "React Native Developer",
		company_name: "Tesla",
		icon: tesla,
		iconBg: "#E6DEDD",
		date: "Jan 2021 - Feb 2022",
		points: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo tortor pulvinar arcu sagittis efficitur.",
			"Proin sagittis pretium sagittis. Phasellus euismod lacinia mollis",
			"Nulla non sagittis nunc, vitae tempor felis. Ut sit amet tellus ante.",
			"Pellentesque dictum, purus non eleifend maximus, diam arcu ornare sapien, nec lobortis ante enim eget sem.",
		],
	},
	{
		title: "Web Developer",
		company_name: "Shopify",
		icon: shopify,
		iconBg: "#383E56",
		date: "Jan 2022 - Jan 2023",
		points: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo tortor pulvinar arcu sagittis efficitur.",
			"Proin sagittis pretium sagittis. Phasellus euismod lacinia mollis",
			"Nulla non sagittis nunc, vitae tempor felis. Ut sit amet tellus ante.",
			"Pellentesque dictum, purus non eleifend maximus, diam arcu ornare sapien, nec lobortis ante enim eget sem.",
		],
	},
	{
		title: "Full stack Developer",
		company_name: "Meta",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Present",
		points: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo tortor pulvinar arcu sagittis efficitur.",
			"Proin sagittis pretium sagittis. Phasellus euismod lacinia mollis",
			"Nulla non sagittis nunc, vitae tempor felis. Ut sit amet tellus ante.",
			"Pellentesque dictum, purus non eleifend maximus, diam arcu ornare sapien, nec lobortis ante enim eget sem.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"Ahora tengo las herramientas necesarias para administrar mi propio negocio y tomar decisiones financieras inteligentes.",
		name: "Juan Pérez",
		designation: "Egresado",
		company: "Administración",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/a/ad/Arc%C3%A1ngel_%22La_Entrevista%22_-_A_solas_con_Tony_Dandrades.jpg",
	},
	{
		testimonial:
			"Gracias a esta especialidad, pude comenzar mi carrera en contabilidad de inmediato después de graduarme y me ha permitido crecer profesionalmente.",
		name: "Marcos González",
		designation: "Egresado",
		company: "Contabilidad",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"Esta especialidad me preparó para mi trabajo actual como administrador de redes en una empresa de tecnología y estoy agradecida por los conocimientos y habilidades adquiridos.",
		name: "Anita Miranda",
		designation: "Egresada",
		company: "Conectividad y redes",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Administración",
		description:
			"La especialidad de Administración en nuestro liceo técnico profesional se enfoca en proporcionar a los estudiantes las habilidades y conocimientos necesarios para tener éxito en el mundo empresarial.",
		tags: [
			{
				name: "Liderasgo",
				color: "yellow-text-gradient",
			},
			{
				name: "Marketing",
				color: "green-text-gradient",
			},
			{
				name: "Planificación",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Contabilidad",
		description:
			"La especialidad de Contabilidad en nuestro liceo técnico profesional se enfoca en proporcionar a los estudiantes las habilidades y conocimientos necesarios para tener éxito en el mundo financiero y contable.",
		tags: [
			{
				name: "I.V.A.",
				color: "blue-text-gradient",
			},
			{
				name: "Finanzas",
				color: "green-text-gradient",
			},
			{
				name: "Auditoría",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Conectividad y redes",
		description:
			"Prepara a los estudiantes para tener éxito en el mundo de las tecnologias de la información y las comunicaciones, brindándoles habilidades y conocimientos necesarios en este campo.",
		tags: [
			{
				name: "Ensamblado",
				color: "blue-text-gradient",
			},
			{
				name: "Conexión",
				color: "green-text-gradient",
			},
			{
				name: "Redes",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];

export { services, technologies, experiences, testimonials, projects };
