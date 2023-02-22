import React from "react";
import { Footer } from "@/components/sections/footer";
import { Landing } from '@/components/sections/landing';
import { About } from '@/components/sections/about';

export const Home = () => {
    return (
        <div>
            <Landing />
            <About />
            <Footer />
        </div>
    );
}
