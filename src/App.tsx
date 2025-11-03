import About from './sessions/About';
import Contact from './sessions/Contact';
import Header from './sessions/Header';
import Hero from './sessions/Hero';
import Projects from './sessions/Projects';
import Services from './sessions/Services';

function App() {
  return (
    <>
      <div className='mx-auto'>
        <Header/>
        <Hero/>
        <Services/>
        <Projects/>
        <About/>
        <Contact/>
      </div>
    </>
  )
}

export default App
