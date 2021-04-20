import React from 'react'
import logoTI from './images/logo.png'

import site_icon from './images/site_icon.png'
import whatsApp from './images/whats_icon.png'
import desbloqueio from './images/Desbloqueio.png'
import fatura from './images/fatura.png'
import cartao from './images/Cartão_crédito.png'
import veloc from './images/Velocímetro.png'
import sem_acesso from './images/sem_acesso.png'
import instagram from './images/Instagram.png'
import facebook from './images/Facebook.png'

import rodape from './images/rodapé.png'
import './App.css';

function App() {
  return (
    <div>
      <img className="logo" src={logoTI} />
      <div className="container">
        <ul>
          
          <li>
            <a href="https://ticonnecte.com.br/home/">
              <button type="button">
                <img src={site_icon} />Acesse nossos planos
              </button>
            </a>
          </li>

          <li>
            <a href="https://api.whatsapp.com/send?phone=5581996744046">
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


        </ul>
      </div>

      <div className="rodape">
        <img src={rodape} />
      </div>
    </div>
  );
}

export default App;
