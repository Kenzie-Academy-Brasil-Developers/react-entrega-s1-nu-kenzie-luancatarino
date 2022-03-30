import "./index.css";
import Card from "../Card";
import {useState} from "react"

function List({ listTransactions, setListTransactions }) {
    const [newFilter, setNewFilter] = useState([])

      function filter(typeInput) {
        const filterTransactions = listTransactions.filter((transaction) => {
          return transaction.type === typeInput;
        });
        setNewFilter(filterTransactions);
      }


    function removeTransaction(itemRemoved) {
        const currentTransactions = listTransactions.filter((item) => {
          return item !== itemRemoved;
        });
        setListTransactions(currentTransactions);
      }



    return (
        <section className="campList">
            <div className="campTextList">
                <h1 id="textRes">Resumo Financeiro</h1>
                <div>
                    <button className="btnLista" onClick={()=> filter()}>Todos</button>
                    <button className="btnLista" onClick={()=> filter("Entrada")}>Entradas</button>
                    <button className="btnLista" onClick={()=> filter("Saída")}>Despesas</button>
                </div>
            </div>
            <div>{newFilter.length > 0 ? newFilter.map((transaction,index) => (
                     <Card
                    remove={removeTransaction}
                    transaction={transaction}
                    key={index}
                    listTransactions={newFilter}
                    setListTransactions={setListTransactions}
                />
                )) :
                listTransactions.map((transaction, index) => (
                    <Card
                        remove={removeTransaction}
                        transaction={transaction}
                        key={index}
                        listTransactions={listTransactions}
                        setListTransactions={setListTransactions}
                    />
                ))}
            </div>
        </section>
    );
}

export default List;
