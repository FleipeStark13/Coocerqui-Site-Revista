import { useState } from 'react';
import './App.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineGoogle } from 'react-icons/ai'

function App() {

  const images = []
  
  const [activeImage, setActiveImage] = useState(0);

  const appendImgs = (length_size ) => {
    for (let i = 1; i < length_size ; i++) {
      images.push(`./imgs/${i}.png`)
    }
  }
  appendImgs(35);

  console.log(images)

  function handleCarrousel (side) {
    const imager = document.getElementById('imager')

    imager.classList.remove('animate');

    void imager.offsetWidth;

    imager.classList.add('animate')

    if (side === 'l') {
      if ( activeImage === 0) {
        setActiveImage(images.length - 1);
      } else {
        setActiveImage((activeImage - 1));
      }
    } else {
      if (activeImage === (images.length - 1)) {
        setActiveImage(0)
      } else {
        setActiveImage((activeImage + 1))
      }
    }
  }

  return (
    <div className="App">
      <div>
        <figure id="logo">
          <img src="./imgs/logo_.png" alt="" />
        </figure>

        <div className="carroussel">
          <figure>
            <img id='imager' src={images[activeImage]} alt="" />
          </figure>

          <div className="footer-controls">          
            <div className="controls">
              <button onClick={() => { handleCarrousel('l') }}>
                <AiOutlineArrowLeft />
              </button>

              <div className="actived">
                <p>{activeImage + 1 } / {images.length}</p>
              </div>

              <button onClick={() => { handleCarrousel('r') }}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>

      <div className="text-content">
        <h1>Não fique só na vontade!</h1>
        <h2>Leve estes produtos já, comprando direto pelo nosso App ou Site!</h2>

        <div className="buy-but">
          <div className="digital-stores">
            <a href="https://play.google.com/store/apps/details?id=br.com.fidelidade.coocerqui&hl=pt_BR">
              <figure><img src="./imgs/disponivel-google-play-badge-1.png" alt="" /></figure>
            </a>
            <a href="https://apps.apple.com/br/app/clube-do-cooperado/id6497482327?l=en-GB">
              <figure><img src="./imgs/disponivel-na-app-store-botao-1600x474.png" alt="" /></figure>
            </a>
          </div>
          <a href="https://loja.coocerqui.com.br">
            <button>
              Comprar pela Loja
            </button>
          </a>
        </div>
      </div>

      </div>
    </div>
  );
}

export default App;
