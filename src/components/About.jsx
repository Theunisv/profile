import React from 'react';
import useElementInView from '../hooks/InView';
import { useEffect } from 'react';

const About = () => {
    const [aboutRef, aboutIsInView] = useElementInView({ threshold: 1 });

    useEffect(() => {
        if (aboutIsInView) {
          const id = 'about';
          const navItem = document.querySelector(`#${id}Nav`);
          const navItems = document.querySelectorAll('nav a');
    
          navItems.forEach(item => item.classList.remove('active'));
          if (navItem) {
            navItem.classList.add('active');
          }
        }
      }, [aboutIsInView]);

    return (
        <section ref={aboutRef}  id="about" className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label="About Me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0b122a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div>
                <p className="mb-4">My programming career started at a very young age, as I displayed a keen interest in computers and video games. I started learning how to code in early primary school and was encouraged to constantly challenge myself through chess tournaments and educational games that my parents would buy me.</p>
                <p className="mb-4">However, it wasn't till after high school that I decided to pursue a career in programming. I started with a <strong className='text-white'>Bachelors in Computer and Information Systems</strong> from the <strong className='text-white'>Institute of International Education's</strong> local University, <a href='https://www.vegaschool.com/full-time/bachelor-of-computer-and-information-science-in-game-design-and-development-degree' target='_blank'>VEGA</a>, which is situated in the beautiful CBD of Cape Town.</p>
                <p className="mb-4">
                Here, I truly fell in love with the art of programming, and I started to learn as much as I could about the different languages and frameworks that were available to me. Our course started us off learning <strong className='text-white'>C#</strong>, and soon we moved on to incorporating that into our <strong className='text-white'>Unity</strong> projects. I was fascinated by the idea of creating something from nothing, and I was hooked.
                </p>
                <p className="mb-4">
                My peers took note of my programming proficiency, and I was soon the number one student to go to for any programming-related questions. I was even asked to tutor some of the students who were struggling with the course material, and I was more than happy to help them out.
                </p>
            </div>
        </section>
    );
}
export default About;