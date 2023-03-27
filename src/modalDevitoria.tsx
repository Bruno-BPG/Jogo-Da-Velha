export function ModalDevitoria({ resultado2 }: any) {
  
  if(resultado2 === "E"){
    return (
      <div className="textAjusting1">
        <span>Enpate</span>
      </div>
    );

  }
  
    return (
    <div className="textAjusting1">
      <span>Vencedor {resultado2}</span>
    </div>
  );
}
