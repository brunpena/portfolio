import {Sidebar} from "../components/Sidebar";
import {Hero} from "../components/Hero";
import {About} from "../components/About";
import {Skills} from "../components/Skills";
import MobileMenu from "../components/MobileMenu"
import {Projects} from "../components/Projects";
import {Contact} from "../components/Contact";
import {Footer} from "../components/Footer";
function Index (){
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Sidebar */}
            <div className="hidden md:block">
                <Sidebar />
            </div>

            <MobileMenu />
            
            {/* Main Content */}
            <main class="md:ml-16 transition-all duration-300 w-aut max-w-full overflow-x-hidden">


                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer /> 
            </main>
        </div>
    )
}
export default Index;