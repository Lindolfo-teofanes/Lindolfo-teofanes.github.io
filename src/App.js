import logo from './logo.svg';
import mari from '../src/mari.png'
import './App.css';

function App() {
  return (
    <>
      <h1 className="tittle">OI MOÇA BONITA, TUDO BEM?</h1>
      <p className="tetxo">Bom, sei que seu dia foi bem puxado e talvez complicado, mas de alguma forma quero fazer algo pra você hehehe então pode se acostumar com essas coisas. <br/>(Eu amo essa foto kkk)</p>
      <div className="container"><img className="mari" src={mari} /></div>
      <p className="versi">"Muitas mulheres são exemplares, mas você a todas supera"<br/><b>Provérbios 31:29</b></p>
      <p className="final">Como o versículo acima fala você supera todas, inclusive é a mulher mais linda do mundo, te conheço faz pouco tempo mas sabe kkk te admiro muito, sua fé e amor por Cristo faz tudo ser perfeito. Obrigado por estar aqui e por existir, sou grato a Deus pela sua vida e espero que ele... vou orar kkk Amo Te S2. <br/> Obs: vou fazer bastante coisinhas pra vc, posso? </p>
      
    </>
  );
}

export default App;
