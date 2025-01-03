import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer id="footer" className="footer">
      <div className="footer-bottom">
        <div className="container">
          <div className="flex-container">
            <div className="flex-item">
              <h1 className="footer-title">
                <a href="#">2019 &copy; React</a>
              </h1>
              <p>All Rights Reserved</p>
            </div>
          </div>
          <div className="flex-item">
            <div className="module-body">
              <ul className="list-unstyled">
                <li><a href="/sitemap/" tooltip="Карта сайта">Карта сайта</a></li>
                <li><a href="/sitemaps.xml" target="_blank" tooltip="Google sitemap">Google Sitemap</a></li>
              </ul>
            </div>
          </div>
          <div className="flex-item">
            <div className="module-body">
              <ul className="list-unstyled">
                <li><a href="/contact/" tooltip="Контакты">Контакты</a></li>
                <li><a href="/d">Гарантии</a></li>
                <li><a href="/s">О сервисе</a></li>
                <li><a href="/o">Условия возврата</a></li>
                <li><a href="/p">Соглашение об использовании сервиса</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-bar">
        <div className="flex-container">
          <div className="flex-item">
            <ul className="link"></ul>
          </div>
          <div className="clearfix payment-methods">
            <ul className="link"></ul>
            <img src="/skin/default/images/dummy.png" data-toggle="tooltip" data-placement="top" data-original-title="www.webmoney.ru" alt="" />
          </div>
        </div>
      </div>
    </footer>
    )
  }

}

export default Footer