import React from "react";
import {projects} from '@/data/projects';
import { ProjectCard } from "./project-card";

export const Projects = () => {
    return (
        <section>
            <div>
                {React.Children.toArray(
                    projects.map(project => <ProjectCard project={project} />)
                )}
            </div>
        </section>
    );
}