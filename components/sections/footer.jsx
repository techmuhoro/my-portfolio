import React, { useState } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import GithubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const Footer = () => {
    const [year] = useState(new Date().getFullYear());

    const liClasses = 'flex items-center gap-x-2';
    return (
        <section className="">
            <div className="text-center">
                <p className="text-2xl text-primary font-semibold mb-2">
                    James Muhoro
                </p>
                <ul className="flex justify-center gap-x-2 mb-3">
                    <li className={`${liClasses}`}>
                        <span>Excellence</span>
                        <DotIcon />
                    </li>
                    <li className={`${liClasses}`}>
                        <span>Passion</span>
                        <DotIcon />
                    </li>
                    <li className={`${liClasses}`}>
                        <span>Integrity</span>
                        <DotIcon />
                    </li>
                    <li>Collaboration</li>
                </ul>
                <div className="flex justify-center gap-x-4 mb-4">
                    <p>
                        <TwitterIcon />
                    </p>
                    <p>
                        <GithubIcon />
                    </p>
                    <p>
                        <InstagramIcon />
                    </p>
                    <p>
                        <MailIcon />
                    </p>
                </div>
                <p className='text-gray-600'>&copy; {year} - James Muhoro .  All Rights Reserved</p>
            </div>
        </section>
    );
};

function DotIcon() {
    return (
        <span className="w-1.5 h-1.5 bg-primary inline-block rounded-full"></span>
    );
}
