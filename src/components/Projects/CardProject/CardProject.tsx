'use client';

import Image from 'next/image';
import {Projects} from '~/interfaces/index';
import styles from './CardProject.module.css';
import '../../../app/globals.css';

interface Props {
	project: Projects;
}

export const CardProject = ({project}: Props) => {
	return (
		<div
			className={styles.cardProject}>
			<div className={styles.cardProject__head}>
				<div
					className={styles.cardProject__title}>
					{project.name}
				</div>
				<div
					className={styles.cardProject__description}>
					{project.description}
				</div>
			</div>
			<div className={styles.cardProject__body}>
				<a href={project.urlPreview} target="_blank">
					<Image
						alt={project.name}
						src={project.image}
						width={500}
						height={500}
					/>
				</a>
			</div>
		</div>
	);
};

