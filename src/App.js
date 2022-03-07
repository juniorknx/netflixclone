import GlobalStyle from './styles/global';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../src/components/Header'
import { Home } from '../src/pages/Home';
import { FilmeDetail } from './pages/Filme';
import { Footer } from './components/Footer';
import { MovieDetail } from './pages/FilmeDetalhe';
import { ErrorPage } from './pages/404';

function App() {
  return (
      <> 
        <GlobalStyle />
        <BrowserRouter>
          <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path='/filme' element={<FilmeDetail />} />
              <Route exact path="/filme/:id" element={<MovieDetail />} />
              <Route exact path="*" element={<ErrorPage />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </>
  );
}

export default App;
