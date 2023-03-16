import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
}) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[230px]">
					<img
						src={image}
						alt="project_image"
						className="w-full h-full object-cover rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<div
							onClick={() => window.open(source_code_link, "_blank")}
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={github}
								alt="source code"
								className="w-1/2 h-1/2 object-contain"
							/>
						</div>
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px] justify-center">
						{name}
					</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} `}>Área TP</p>
				<h2 className={`${styles.sectionHeadText}`}>Especialidades.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					En nuestra Área técnico profesional ofrecemos tres especialidades:
					Administración, Contabilidad y Conectividad y Redes. Cada especialidad
					brinda habilidades y conocimientos específicos en su área
					correspondiente: gestión de empresas, contabilidad y finanzas, y
					configuración y administración de redes. Los estudiantes obtienen una
					base sólida de conocimientos y habilidades prácticas para destacar en
					su campo de elección.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7 text-center ">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "");
