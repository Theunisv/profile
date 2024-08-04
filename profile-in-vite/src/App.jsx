import './App.css'
import About from './components/About';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Projects from './components/Projects';


const App = () => {
  return (
    <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        
          <Navbar />     
          <main id="content" className='pt-24 lg:w-1/2 lg:py-24'>
            <About />
            <Experience />
            <Projects />
            <p className='text-white text-bold text-center text-xl'>This project was made using <a href='https://vitejs.dev/' target='_blank'>React Vite</a> with trusty <a href='https://tailwindcss.com/' target='_blank'>Tailwind</a>, note that some of the content is loaded in from <a href='https://supabase.com/' target='_blank'>Supabase</a>.</p>
          </main>
      </div>
    </div>
  );
}

export default App;
