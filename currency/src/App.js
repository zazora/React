import React from 'react'
import './App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Rate from './Rate/Rate'
import About from './About/About'
import {Routes, Route, BrowserRouter} from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='site'>
        <Header />
        <div className="container">
          <main>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Rate/>} />
                <Route path="/about" element={<About/>} />
              </Routes>   
            </BrowserRouter>
            
          </main>
        </div>
        <div className="container" id="cookie-info">
          <div className="site-content">
            <div className="well">
              На нашем сайте мы срользуем cookie для сбора информации технического характера<br />В частности для персонифицированной работы сайта мы обрабатываем IP-адрес региона Вашего местоположения&nbsp;
              <button className="btn btn-primary btn-sm">OK</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
