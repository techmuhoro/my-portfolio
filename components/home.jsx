import React from 'react';
import { Footer } from '@/components/sections/footer';
import { Landing } from '@/components/sections/landing';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Contact } from '@/components/sections/contact';

export const Home = () => {
    return (
        <div>
            <Landing />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};
