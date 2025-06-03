import React, { useState } from "react";
import TechQuote from "./TechQuote";

const Navbar = () => {


    const handleNavClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        const navItems = document.querySelectorAll('nav a');    
        navItems.forEach(item => item.classList.remove('active'));
        if (targetElement) 
            targetElement.classList.add('active');
        
    };

    const [imgSrc, setImgSrc] = useState("bulboff.png");


    const handleImgClick = () => {
        setImgSrc((prevSrc) => (prevSrc === "bulboff.png" ? "bulbon.png" : "bulboff.png"));
        
       const light = document.getElementById("light");  
        if (imgSrc === "bulboff.png") 
            light.classList.add("glow");
        else
            light.classList.remove("glow");

       const drawString = document.getElementById("drawString");       
       drawString.classList.remove("moveDown");
       drawString.offsetWidth;
       drawString.classList.add("moveDown");
       
    };




    return (
        
        <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
            <div className='top-0 float-right lg:float-none lg:sticky mt-[-100px] lg:pb-4  flex-row lg:ml-[120px] flex'>
                <img id="light" src={imgSrc} className='h-[200px] lg:mt-[-80px]'/>
                <img id="drawString" onClick={handleImgClick} src="drawstring.png" className='cursor-pointer h-[200px] ml-14 mt-[-50px] lg:mt-[-120px]' draggable="false"/>
            </div>
            <div>
                <h1 className="text-4xl !font-bold tracking-tight roboto text-slate-200 sm:text-5xl">Theunus Voges</h1>
                <h2 className="mt-3 text-lg !font-bold tracking-tight roboto text-slate-200 sm:text-xl">Software Developer</h2>
                <p className="mt-4 max-w-xs leading-normal">Striving to put the pragmatic back into programming.</p>

                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        <li>
                            <a onClick={(e) => handleNavClick(e, 'about')} className="group flex items-center py-3 active" href="#about" id="aboutNav">
                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                            </a>
                        </li>
                        <li>
                            <a className="group flex items-center py-3" href="#experience" id="experienceNav" onClick={(e) => handleNavClick(e, 'experience')}>
                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={(e) => handleNavClick(e, 'projects')} className="group flex items-center py-3 " href="#projects" id="projectsNav">
                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 text-xs shrink-0">
                    <a className="block hover:text-slate-200" href="https://github.com/Theunisv" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                        <span className="sr-only">GitHub</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                    </a>
                </li>
                <li className="mr-5 text-xs shrink-0">
                    <a className="block hover:text-slate-200" href="mailto:theunisvoges@gmail.com" rel="noreferrer noopener" aria-label="Mail Me (opens our default mail engine)" title="Mail Me">
                        <span className="sr-only">Mail Me!</span>
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" aria-hidden="true">
                            <path  fill-rule="evenodd" clip-rule="evenodd" d="M16 8H8C7.45 8 7.005 8.45 7.005 9L7 15C7 15.55 7.45 16 8 16H16C16.55 16 17 15.55 17 15V9C17 8.45 16.55 8 16 8ZM8.00001 9.99997L12 12.5L16 9.99997V15H8.00001V9.99997ZM8.00001 9.00001L12 11.5L16 9.00001H8.00001Z" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"/>
                        </svg>

                    </a>
                </li>
            </ul>
            
            
            <div className="lg:w-3/5">
            <p className="text-center block text-primary rounded-lg mb-4">
                P.S. Click the light-string!
            </p>
                <a href="https://github.com/PerryPal21/Techy-API" target="_blank" className="block text-center mt-2 leading-tight font-semibold roboto tracking-tight">Nonsensical quote of the day:</a>
                <TechQuote />
            </div>
        </header>
    );
}

export default Navbar;
