import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import Expertise from '../components/sections/Expertise';
import Blog from '../components/sections/Blog';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <div className="flex flex-col">
            <section id="hero">
                <Hero />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="process">
                <Process />
            </section>
            <section id="expertise">
                <Expertise />
            </section>
            <section id="blog">
                <Blog />
            </section>
            <section id="faq">
                <FAQ />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
};

export default Home;
