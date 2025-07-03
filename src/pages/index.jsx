import {Sidebar} from "../components/Sidebar";
import {Hero} from "../components/Hero";
// import {About} from "../components/About";
// import {Skills} from "../components/Skills";
// import {Projects} from "../components/Projects";
// import {Contact} from "../components/Contact";
// import {Footer} from "../components/Footer";
function Index (){
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Sidebar */}
            <Sidebar />
            
            {/* Main Content */}
            <main className="ml-16 transition-all duration-300">
                <Hero />
{/*                 
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer /> */}
            </main>
        </div>
    )
}
export default Index;