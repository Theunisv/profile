import React from 'react';
import useElementInView from '../hooks/InView';
import { useEffect } from 'react';
const Experience = () => {

    const [experienceRef, experienceIsInView] = useElementInView({ threshold: 0.5 });

    useEffect(() => {
        if (experienceIsInView) {
          const id = 'experience';
          const navItem = document.querySelector(`#${id}Nav`);
          const navItems = document.querySelectorAll('nav a');
    
          navItems.forEach(item => item.classList.remove('active'));
          if (navItem) {
            navItem.classList.add('active');
          }
        }
      }, [experienceIsInView]);

    return (
        <section ref={experienceRef}  id="experience" className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label="About Me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>
            <div className='flex flex-row'>
                <p className='w-1/4 text-sm'>2022 - Present</p>
                <div className='w-3/4 mt-0 pt-0'>
                   <span className='!text-bold text-white group inline-block hover:text-secondary hover:cursor-pointer'   onClick={() => window.open('https://www.bcx.co.za/our-offices/namibia/', '_blank')}>Junior Software Developer · BCX Namibia<svg xmlns="http://www.w3.org/2000/svg" width={15} className='align-middle mb-1 ml-3 inline hover:fill-secondary group-hover:animate-bounce' fill='currentColor' viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg></span>

                   <p className='text-sm mt-3'>Work closely with the Azure Cloud department to provide web solutions using the Microsoft Suite. As a small group of developers, we lean on each other for knowledge transfer and general assistance.<br/><br/>This includes:</p>
                   <ul className='text-sm tracking-tight list-disc list-inside'>
                        <li>Developing and maintaining custom SharePoint solutions using JS, CSS, and HTML</li>
                        <li>Minor SPFX development using React</li>
                        <li>Creating and maintaining Power Automate flows</li>
                        <li>Creating and maintaining Power Apps</li>
                        <li>Creating and maintaining Static Web Apps running pure JS, CSS, and HTML</li>
                        <li>Initializing and maintaining Azure SQL databases</li>
                        <li>Creating and maintaining Azure Blob storage</li>
                        <li>Heading the entire development process, from the initial client meeting till the final product handover</li>
                        <li>API development and integration</li>
                    </ul>
                    <ul className="mt-2 flex flex-wrap">
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                JavaScript
                            </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                React
                            </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                Figma
                            </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                Microsoft Sharepoint
                            </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                MSSQL
                            </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                Express JS
                            </div>
                        </li>
                    </ul>

                </div>             
            </div> <div className='flex flex-row mt-10'>
                <p className='w-1/4 text-sm'>2018 - 2021</p>
                <div className='w-3/4 mt-0 pt-0'>
                   <span className='!text-bold text-white group inline-block hover:text-secondary hover:cursor-pointer'   onClick={() => window.open('http://www.seafo.org', '_blank')}>Part-Time Data Manager · SEAFO<svg xmlns="http://www.w3.org/2000/svg" width={15} className='align-middle mb-1 ml-3 inline hover:fill-secondary group-hover:animate-bounce' fill='currentColor' viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg></span>

                   <p className='text-sm mt-3'>
                   As the data manager, I am responsible for the entire data management process, from the initial data collection to the final data analysis. <br /><br />
                     
                     Some of my responsibilities included Visual Basic for Applications (VBA) development (Excel scripts for data conversion), Access Database Management, GIS data management and mapping, AWS resource management, and maintaining their current website, which has an ASP.NET backend.
                   </p>
                    <ul className="mt-2 flex flex-wrap">
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                ArcGIS
                            </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                Access
                            </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                Visual Basic
                            </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                Excel
                            </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                AWS
                            </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                Composite C1 CMS
                            </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                ASP .net
                            </div>
                        </li>
                    </ul>

                </div>             
            </div>
        </section>
    )
}

export default Experience;