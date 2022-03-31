import "./index.css";
import Card from "../Card";
import { useState } from "react";

function List({ listTransactions, setIsFiltered, isFiltered, setListTransactions }) {
    const [filteredList, setFilteredList] = useState(listTransactions);

    function filterList(typeInput) {
        const filterTransactions = listTransactions.filter((transaction) => transaction.type === typeInput);
        setFilteredList(filterTransactions);
    }

    function removeTransaction(itemRemoved) {
        const currentTransactions = filteredList.filter((item) => {
            return item !== itemRemoved;
        });
        setFilteredList(currentTransactions);
        
        const totalTransactions = listTransactions.filter((item) => {
            return item !== itemRemoved;
        });
        setListTransactions(totalTransactions);
    }

    return (
        <section className="campList">
            <div className="campTextList">
                <h1 id="textRes">Resumo Financeiro</h1>
                <div>
                    <button
                        className="btnLista"
                        onClick={() => {
                            filterList();
                            setIsFiltered(false);
                        }}
                    >
                        Todos
                    </button>
                    <button
                        className="btnLista"
                        onClick={() => {
                            filterList("Entrada");
                            setIsFiltered(true);
                        }}
                    >
                        Entradas
                    </button>
                    <button
                        className="btnLista"
                        onClick={() => {
                            filterList("Saída");
                            setIsFiltered(true);
                        }}
                    >
                        Despesas
                    </button>
                </div>
            </div>
            <div>
                {isFiltered
                    ? filteredList.map((transaction, index) => (
                          <Card key={index} transaction={transaction} removeTransaction={removeTransaction} />
                      ))
                    : listTransactions.map((transaction, index) => (
                          <Card key={index} transaction={transaction} removeTransaction={removeTransaction} />
                      ))}
            </div>
        </section>
    );
}

export default List;
