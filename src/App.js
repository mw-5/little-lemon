import './App.css';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import { Nav } from './components/Nav/Nav';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Nav className='nav-header' />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
