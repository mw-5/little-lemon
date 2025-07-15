import './App.css';
import { Footer } from './features/Footer/Footer';
import { Main } from './features/Main/Main';
import { Nav } from './features/Nav/Nav';
import { Header } from './features/Header/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <Nav className='nav-header' />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
