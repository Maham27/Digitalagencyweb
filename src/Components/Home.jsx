import Header from "./Header";
import Services from "./Services";
import Whychooseus from "./Whychooseus";
import Testimonials from "./Testimonials";
import ContactForm from "./Contact";
import Footer from "./Footer";
import Navbarpart from "./Navbarpart";

const Home = ()=> {
    return (
        <>
           <div>
            <Navbarpart/>
            <Header/>
            <Services/>
            <Whychooseus/>
            <Testimonials/>
            <ContactForm/>
            <Footer/>
        </div>

        </>
    )
    
};
export default Home;