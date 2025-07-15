import './App.css';
import { Footer } from './features/Footer/Footer';
import { Main } from './features/Main/Main';
import { Nav } from './features/Nav/Nav';
import { Header } from './features/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
