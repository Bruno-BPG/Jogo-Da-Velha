export function Modal({ setJogada,setTabuleiro,setModal, resultado }: any) {
  const tabuleiroVazio = ["", "", "", "", "", "", "", "", ""];
    
    function reiniciarPartida2(){
        setTabuleiro(tabuleiroVazio)
        setModal(false)
        setJogada("X")
      }

      if(resultado === "E"){
        return (
            <div>
              <div className="conteinerModal">
                <div className="">
                  <span className="textAjusting1">Empate</span>
                  <br />
                  <div className="textAjusting1">
                    <button onClick={()=>{reiniciarPartida2()}} className="btnReiniciar">reiniciar</button>
                  </div>
                </div>
              </div>
            </div>
          );
      }
  
    return (
    <div>
      <div className="conteinerModal">
        <div className="">
          <span className="textAjusting1">vencedor</span>
          <div className="textAjusting1">{resultado}</div>
          <div className="textAjusting1">
            <button onClick={()=>{reiniciarPartida2()}} className="btnReiniciar">reiniciar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
