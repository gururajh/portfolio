import Hero from './components/Hero/page';
import Expertise from './components/Expertise/page';
import TechStack from './components/TechStack/page';
import Experience from './components/Experience/page';
import Contact from './components/Contact/page';

export default function Home() {
    return (
        <>
            <Hero />
            <Expertise />
            <TechStack />
            <Experience />
            <Contact />
        </>
    );
}
