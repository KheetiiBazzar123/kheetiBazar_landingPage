import { Header, Footer } from './components/layout';
import { HeroPage } from './components/sections';
import './assets/css/style.css';
import AcomplishmentPage from './components/sections/AcomplishmentPage';
function App() {
	return (
		<>
			<Header />
			<HeroPage />
			<AcomplishmentPage />
			<Footer />
		</>
	);
}

export default App;
