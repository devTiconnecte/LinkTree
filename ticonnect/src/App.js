import React from 'react'
// import logoTI from './images/logo.png'
import logoTI2 from './images/Logo_preta.png'

import site_icon from './images/site_icon.png'
import whatsApp from './images/whats_icon.png'
import desbloqueio from './images/Desbloqueio.png'
import fatura from './images/fatura.png'
import cartao from './images/Cartão_crédito.png'
import pix from './images/pix.svg'
import veloc from './images/Velocímetro.png'
import sem_acesso from './images/sem_acesso.png'
import instagram from './images/Instagram.png'
import facebook from './images/Facebook.png'
import curso from './images/curso.png'
import google_play from './images/google_play.png'
import apple_store from './images/apple_store.png'


import rodape from './images/rodapé.png'
import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <img className="logo" src={logoTI2} />
        <ul>
          <li>
            <a href="https://ticonnecte.com.br/home/">
              <button type="button">
                <img src={site_icon} />Acesse nossos planos
              </button>
            </a>
          </li>

          <li>
            <a href="https://api.whatsapp.com/send?phone=5581996744046&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20link%20e%20gostaria%20de%20algumas%20informa%C3%A7%C3%B5es">
              <button type="button">
                <img src={whatsApp} /> Fale pelo WhatsApp
              </button>
            </a>
          </li>

          <li>
            <a href="https://ticonnecte.com.br/usando-app/faq.html#desbloqueioSite">
              <button type="button">
                <img src={desbloqueio} /> Desbloqueio de Confiança
              </button>
            </a>
          </li>

          <li>
            <a href="https://central.ticonnecte.com.br/central_assinante_web/faturas">
              <button type="button">
                <img src={fatura} /> Acesse sua fatura
              </button>
            </a>
          </li>

          <li>
            <a href="https://ticonnecte.com.br/usando-app/faq.html#pagamento-cartao-de-credito">
              <button type="button">
                <img src={cartao} /> Pague com cartão de crédito
              </button>
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/reel/CSRSYVIg0yS/?utm_medium=copy_link">
              <button type="button">
                <img src={pix} style={{ marginRight: "-10%" }} /> Pague com PIX
              </button>
            </a>
          </li>

          <li>
            <a href="https://www.speedtest.net/pt">
              <button type="button">
                <img src={veloc} /> Teste sua conexão
              </button>
            </a>
          </li>

          <li>
            <a href="https://www.youtube.com/watch?v=wlqzjjWjvgE">
              <button type="button">
                <img src={sem_acesso} /> Sem acesso, o que fazer?
              </button>
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/ticonnect/">
              <button type="button">
                <img src={instagram} /> Nos siga no Instagram
              </button>
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/ticonnect">
              <button type="button">
                <img src={facebook} /> Curta nosso Facebook
              </button>
            </a>
          </li>

          <li>
            <a href="https://app.qualifica.mobi/#/sign-in/partners/5874">
              <button type="button">
                <img src={curso} /> Cursos TI Connect
              </button>
            </a>
          </li>
        </ul>

        <div className="footer">
          <div>
            <h6>BAIXE NOSSO APP</h6>
          </div>

          <div className="footer-imgs">
            <a href="https://play.google.com/store/apps/details?id=com.ticonnect.centralassinante" >
              <img src={google_play} />
            </a>

            <a href="https://apps.apple.com/br/app/central-do-assinante-ticonnect/id1540757975">
              <img src={apple_store} />
            </a>
          </div>
        </div>

        <div className="rodape">
          <img src={rodape} />
        </div>
      </div>
    </div>

  );
}

export default App;
