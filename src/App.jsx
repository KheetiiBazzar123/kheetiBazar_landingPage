import './App.css';
import './assets/css/style.css';
import Header from './pages/header/Header';
import Main from './pages/main/Main';
import Footer from './pages/footer/Footer';
import About from './pages/about/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
}

export default App;
