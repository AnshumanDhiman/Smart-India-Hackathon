import Nav from '../Components/Navbar/Navbar.js';
import Desc from '../Components/DescLine/DescLine.js';
import Carousel from '../Components/Carousel/Carousel.js';
import Cards from '../Components/Cards/Cards.js';
import Newsletter from '../Components/Newsletter/Newsletter.js';
import Footer from '../Components/Footer/Footer.js';

const Page1 = () => {
return (
    <>
    <Nav />
    <Desc />
    <Carousel />
    <Cards/>
    <Newsletter/>
    <Footer/>
    </>
)
}

export default Page1;