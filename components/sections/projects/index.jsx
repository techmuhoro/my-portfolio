import React from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from './project-card';
import styles from './projects.module.css';
import Link from 'next/link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const Projects = () => {
    return (
        <section id="projects" className="mb-20">
            <div className="section-container">
                <p className="font-bold text-3xl mb-4">My Projects</p>
                <div className={styles['cards-container']}>
                    {React.Children.toArray(
                        projects.map((project) => (
                            <ProjectCard project={project} />
                        ))
                    )}
                </div>

                <div className="flex justify-center mt-5">
                    <Link
                        href="/projects"
                        className={`font-mono ${styles['projects-link']}`}
                    >
                        <span className='text-primary'>All projects</span>
                        <span className={`${styles['link-icon']} text-primary`}>
                            <ArrowRightAltIcon />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};
