import "./index.css";
import Card from "../Card";

function List({ listTransactions }) {
    return (
        <section className="campList">
            <div className="campTextList">
                <h1 id="textRes">Resumo Financeiro</h1>
                <div>
                    <button className="btnLista">Todos</button>
                    <button className="btnLista">Entradas</button>
                    <button className="btnLista">Despesas</button>
                </div>
            </div>
            <Card/>
            {/* listTransactions.map((transaction, index) =>
            <Card transaction={transaction} key={index} />) */}
        </section>
    );
}

export default List;
