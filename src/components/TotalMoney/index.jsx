import "./index.css";

function TotalMoney({listTransactions}) {
    const totalMoney = listTransactions.reduce((accumulator, current) => { return accumulator + current.value}, 0)
    
    return (
        <div className="campValorTotal">
            <div>
                <h1 id="textValorTotal">Valor Total:</h1>
                <p>O valor se refere as entradas</p>
            </div>
            <div>
                <h2>
                   R$ {totalMoney}
                </h2>
            </div>
        </div>
    );
}

export default TotalMoney;
