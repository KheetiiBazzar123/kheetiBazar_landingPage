import { Header, Footer } from './components/layout';
import { HeroPage } from './components/sections';
import './assets/css/style.css';
import AcomplishmentPage from './components/sections/AcomplishmentPage';
import CarouselPage from './components/sections/CarouselPage';

// WHEN WE CLICK ON GET IN TOUCH BUTTON IT SHOULD SCROLL TO THE CONTACT US FORM
// NEED TO ADD A REGISTER BUTTON IN THE HEADER WHEN WE CLICK ON THAT BUTTON MODAL SHOULD OPEN AND ASKED ABOUT USER FARMER OR BUYER THEN REGISTER NOW PAGE SHOULD OPEN ACCORDING TO THE USER
function App() {
	return (
		<>
			<Header />
			<HeroPage />
			<CarouselPage/>
			<AcomplishmentPage />
			{/* HERE WE NEED TO ADD A AUTO CAROUSAL */}
			{/* ABOUT US  */}
			{/* CONTACT US FORM */}
			{/* BLOG SECTION */}
			<Footer />
		</>
	);
}

export default App;
