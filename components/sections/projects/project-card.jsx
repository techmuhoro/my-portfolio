import React from 'react';
import styles from '@/components/utils/utils.module.css';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FolderIcon from '@mui/icons-material/Folder';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Link from 'next/link';

export const ProjectCard = () => (
    <div className="w-[380px] bg-[#ececec] py-4 px-3">
        <div className="w-full h-[150px] mb-4 relative border border-red-500">
            {/* <Image src={project.cover} layout='fill' alt='project cover' /> */}
        </div>
        <div>
            <p className="font-mono font-bold text-xl mb-2">Doctor website</p>
            <p className="tracking-[0.03rem] mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
                mi, velit mauris porttitor vitae id. Eu eu adipiscing eget
                laoreet non.
            </p>
            <div className="text-[12.9px] font-mono flex gap-x-3 mb-6">
                Typescript CSS HTML React
            </div>

            <div className="flex text-[2rem]">
                <p className="text-primary">
                    <FolderOpenIcon fontSize='inherit' />
                </p>
                <div className="ml-auto flex mr-4">
                    <p className="mr-6 cursor-pointer transition-all hover:text-primary hover:-translate-y-0.5">
                        <Link href={'https://www.google.com'} passHref>
                            <GitHubIcon fontSize='inherit' />
                        </Link>
                    </p>
                    <p className="cursor-pointer transition-all hover:text-primary hover:-translate-y-0.5 ">
                        <Link href={'https://www.google.com'} passHref>
                            <LaunchIcon fontSize='inherit' />
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
);
