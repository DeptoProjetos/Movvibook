import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.module.scss'

import PaginaInicial from './paginas/PaginaInicial';
import QuemEQuem from './paginas/QuemEQuem';
import Footer from './componentes/Footer';
import PaginaPadrão from './paginas/PaginaPadrão';
// import news from 'json/news.json'
import ScrollToTop from 'componentes/ScrollToTop';
import UserProvider from 'common/User';
import Login from 'paginas/Login';
import ApisProvider from 'common/Apis';
import Noticias from 'paginas/Noticias';
import Formularios from 'paginas/Formularios';



function AppRoute() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ApisProvider>

        <UserProvider>
          <Routes>

            <Route path='/' element={<PaginaPadrão />}>
              <Route index element={<PaginaInicial />} />
              <Route path='contatos' element={<QuemEQuem />} />
              <Route path='pessoas&cultura' element={<div>Pessoas & cultura</div>} />
              <Route path='quemsomos' element={<div>Quem somos</div>} />
              <Route path='news/:id' element={<div>Noticias</div>} />
            </Route>

            <Route path='/'>
              <Route path='login' element={<Login />} />
              <Route path='noticias' element={<Noticias titulo="Jornal Movvi"/>} />
              <Route path="novo/:id" element={<Formularios/>} />
              <Route path='*' element={<div>Pagina não encontrada</div>}/>
            </Route>

          </Routes>
        </UserProvider>
      </ApisProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoute;