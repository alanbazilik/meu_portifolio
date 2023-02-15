
import './home.css';
import React from 'react';
import {  Link } from "react-router-dom";
import cardimg from '../Homes/img/minhafoto.jpg';
import { Icon } from '@iconify/react';


function Home() {
  return (
    <div className="App">
         <div className="cx1">
         <ul>
          <li><Link className="link1" to="/">Home</Link></li>
          <li><Link className="link2" to="/">sobre</Link></li>
          <li><Link className="link3" to="/">projeto</Link></li>
          <li><Link className="link4" to="/">Habilidades</Link></li>  
        </ul>
        <div className='cards'>
          <img className="minhafoto" src={cardimg}></img>
        <a href="https://www.github.com/alanbazilik" target="_blank" rel="noreferrer"><img className="minhafoto1"
src="https://img.shields.io/github/followers/alanbazilik?logo=github&style=for-the-badge&color=0891b2&labelColor=1c1917" /></a>
       <h1 className='emails'> Você pode entrar em contato comigo através do <br></br> e-mail:&nbsp;alangoncalvesbazilio@gmail.com<Icon icon="ic:baseline-email" /></h1>
          <div className="listra">
         
          <div className="inst">meu instragam<a className="instragam" href=" https://www.instagram.com/alangoncalvesbazilio/"><Icon icon="gg:instagram" /></a></div>  
          <h1 className='telefone'>(17) 996158687<Icon icon="logos:whatsapp-icon" /></h1>    
            
            </div>    
        <h1 className='nome'>Oi 👋 Meu nome é Alan Gonçalves Bazilio</h1>
        </div>
        <div class="container">
         <div class="content">
            <h1 className="sobre1">
          Sou apaixonado por tudo que refere a tecnologia  e  informática , sempre me fascinou como a tecnologia  de computadores funcionavam ,
          foi quando conheci o curso de arduino na escola onde me abriu as portas para conhecimento na área. 
          <br/>
          Após terminar 2° grau , perguntei para aos meus pais que curso eu deveria seguir , 
          foi quando eles me disseram que eu deveria  fazer aquilo eu gostava , 
          portanto escolhi fazer o curso de análise e desenvolvimento de sistema .
          <br/>
          <br/>
          sou criador de jogos estilo rpg , criandor de jogos no editor Rpg maker mv dos jogos.
          </h1>
            </div>
          </div>
  <div class="flap"></div>
</div>
      </div>  
  );
}

export default Home;
