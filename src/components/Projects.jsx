import React from 'react';
import useElementInView from '../hooks/InView';
import { useEffect } from 'react';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient("https://xseibevdmgyznivmadmn.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzZWliZXZkbWd5em5pdm1hZG1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1OTIwMjYsImV4cCI6MjAzODE2ODAyNn0.ifmLApWJlnjinvN10mjaPlm1s1t6Zmsy5NwnGZ8242A");

const Projects = () => {

    const [projectsRef, projectsIsInView] = useElementInView({ threshold: 0.2 });

    useEffect(() => {
        if (projectsIsInView) {
          const id = 'projects';
          const navItem = document.querySelector(`#${id}Nav`);
          const navItems = document.querySelectorAll('nav a');
    
          navItems.forEach(item => item.classList.remove('active'));
          if (navItem) {
            navItem.classList.add('active');
          }
        }
      }, [projectsIsInView]);

      const [projects, setProjects] = useState([]);

      useEffect(() => {
        getProjects();
      }, []);
    
      async function getProjects() {
        const { data , error } = await supabase.from("projects").select();
        if(error) {
            console.log(error);
            return;
        }
        setProjects(data);
      }
      
    return (
        <section ref={projectsRef} id="projects" className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label="About Me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0b122a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>
            <div>
            {projects.map((project) => {
            const projectImageSrc = project.image_link;
            const techStack = project.tech_stack;
            

            return (
             <div key={project.id} className='flex flex-row gap-5 mt-10'>
                <div className='w-1/3'>
                    <img src={projectImageSrc} alt={project.title} className=' max-w-full h-auto rounded-lg shadow-inner shadow-emerald-300'/>
                </div>
                <div className='w-2/3'>
                    <span className='!text-bold text-white group inline-block hover:text-secondary hover:cursor-pointer' onClick={() => { if (project.url_link !== "Privacy") window.open(project.url_link, '_blank'); }}>{project.title}<svg xmlns="http://www.w3.org/2000/svg" width={15} className='align-middle mb-1 ml-3 inline hover:fill-secondary group-hover:animate-bounce' fill='currentColor' viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg></span>
                    <div className='text-sm'></div>
                    <div className='text-sm'>{project.description}</div>
                    <ul className="mt-2 flex flex-wrap">
                        {techStack.map((tech) => {
                            return (
                                <li key={tech} className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    {tech}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <div className='w-1/4 text-sm'></div>

                </div>
             </div>
            );
          })}
                
            </div>
        </section>
    )
}
export default Projects;