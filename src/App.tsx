import "./css.css";

import { useState } from "react";

// import { modalDevitoria } from "./exibirVitoria";
import { ModalDevitoria } from "./modalDevitoria";

function App() {
  const tabuleiroVazio = ["", "", "", "", "", "", "", "", ""];
  const [tabuleiro, setTabuleiro] = useState(tabuleiroVazio);
  const [jogada, setJogada] = useState("X");
  const [resultado, setResultado] = useState("");
  const [exibirVitoria, setexibirVitoria] = useState(false);

  function jogar(lugar: any) {
    const tabuleiroAnterior = tabuleiro;

    if(exibirVitoria === true){
      return 0
    }

    if (jogada === "X") {
      if (tabuleiroAnterior[lugar] === "") {
        tabuleiroAnterior[lugar] = "X";
        setTabuleiro(tabuleiroAnterior);
        checarVitoria(tabuleiroAnterior);
        setJogada("O");
      }
      return 0;
    }

    if (jogada === "O") {
      if (tabuleiroAnterior[lugar] === "") {
        tabuleiroAnterior[lugar] = "O";
        setTabuleiro(tabuleiroAnterior);
        checarVitoria(tabuleiroAnterior);
        setJogada("X");
      }
      return 0;
    }
  }

  function checarVitoria(tabuleiro: any) {
    checarEmpate(tabuleiro);
    // vitoria lateral superior
    if (tabuleiro[0] === "X" && tabuleiro[1] === "X" && tabuleiro[2] === "X") {
      setResultado("X")
      finalizarPartida()
    }

    if (tabuleiro[0] === "O" && tabuleiro[1] === "O" && tabuleiro[2] === "O") {
      setResultado("O")
      finalizarPartida()
    }
    // vitoria lateral meio
    if (tabuleiro[3] === "X" && tabuleiro[4] === "X" && tabuleiro[5] === "X") {
      setResultado("X")
      finalizarPartida()
    }

    if (tabuleiro[3] === "O" && tabuleiro[4] === "O" && tabuleiro[5] === "O") {
      setResultado("O")
      finalizarPartida()
    }
    // vitoria lateral inferior
    if (tabuleiro[6] === "X" && tabuleiro[7] === "X" && tabuleiro[8] === "X") {
      setResultado("X")
      finalizarPartida()
    }

    if (tabuleiro[6] === "O" && tabuleiro[7] === "O" && tabuleiro[8] === "O") {
      setResultado("O")
      finalizarPartida()
    }
    // vitoria vertical 1 linha
    if (tabuleiro[0] === "X" && tabuleiro[3] === "X" && tabuleiro[6] === "X") {
      setResultado("X")
      finalizarPartida()
    }

    if (tabuleiro[0] === "O" && tabuleiro[3] === "O" && tabuleiro[6] === "O") {
      setResultado("O")
      finalizarPartida()
    }
    // vitoria vertical 2 linha
    if (tabuleiro[1] === "X" && tabuleiro[4] === "X" && tabuleiro[7] === "X") {
      setResultado("X")
      finalizarPartida()
    }

    if (tabuleiro[1] === "O" && tabuleiro[4] === "O" && tabuleiro[7] === "O") {
      setResultado("O")
      finalizarPartida()
    }
    // vitoria vertical 3 linha
    if (tabuleiro[2] === "X" && tabuleiro[5] === "X" && tabuleiro[8] === "X") {
      setResultado("X")
      finalizarPartida()
    }

    if (tabuleiro[2] === "O" && tabuleiro[5] === "O" && tabuleiro[8] === "O") {
      setResultado("O")
      finalizarPartida()
    }
    // linha deitada 1
    if (tabuleiro[0] === "X" && tabuleiro[4] === "X" && tabuleiro[8] === "X") {
      setResultado("X")
      finalizarPartida()
    }

    if (tabuleiro[0] === "O" && tabuleiro[4] === "O" && tabuleiro[8] === "O") {
      setResultado("O")
      finalizarPartida()
    }
    // linha deitada 2
    if (tabuleiro[2] === "X" && tabuleiro[4] === "X" && tabuleiro[6] === "X") {
      setResultado("X")
      finalizarPartida()
    }

    if (tabuleiro[2] === "O" && tabuleiro[4] === "O" && tabuleiro[6] === "O") {
      setResultado("O")
      finalizarPartida()
    }
  }

  function checarEmpate(tabuleiro: any) {
    let arr = [];
    for (let i = 0; i < tabuleiro.length; i++) {
      if (tabuleiro[i] === "") {
        arr.push(tabuleiro[i]);
      }
    }
    if (arr.length === 0) {
      
      setResultado("E")
      finalizarPartida()
    }
  }

  function reiniciarPartida(){
    setTabuleiro(tabuleiroVazio)
    setexibirVitoria(false)
    setJogada("X")
  }

  function finalizarPartida(){
    setexibirVitoria(true)
  }

  return (
    <section>
      <div className="textAjusting1">
        <b className="titulo">Jogo Da Velha</b>
      </div>
      
      <main className="conteinerHeader">

        <div className="Header">
          {tabuleiro.map((iten, index) => (
            <div
              onClick={() => {
                jogar(index);
              }}
              key={index}
              className="box"
            >
              {/* <span className="">{index}</span> */}
              <span
                onClick={() => {
                  jogar(index);
                }}
                className={iten}
              >
                {iten}
              </span>
            </div>
          ))}
        </div>
      </main>
      {exibirVitoria && <ModalDevitoria resultado2={resultado}></ModalDevitoria> }
      <div className="textAjusting1">
        <button className="btnReiniciar" onClick={()=>{reiniciarPartida()}}>Reiniciar jogo</button>
      </div>

    </section>
  );
}

export default App;

// useEffect(() => {
//   console.log(tabuleiro)
// }, [tabuleiro]);
