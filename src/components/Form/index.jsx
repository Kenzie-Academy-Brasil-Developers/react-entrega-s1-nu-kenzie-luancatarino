import "./index.css";
import { useState } from "react";

function Form({ listTransactions, setListTransactions }) {
    const [valueInput, setValueInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [typeInput, setTypeInput] = useState("Entrada");

    function addTransition() {
        let newTransition = {
          description: descriptionInput,
          type: typeInput,
          value: typeInput === "Entrada" ? Number(valueInput) : Number(valueInput * -1),
        };
        setListTransactions([...listTransactions, newTransition]);
      }
    


    return (
        <form className="form" onSubmit={(event) => event.preventDefault()}>
            <div className="formContent">
                <label for="descricao">Descrição</label>
                <input
                    className="inputForm"
                    type="text"
                    placeholder="Digite aqui sua descrição"
                    value={descriptionInput}
                    onChange={(event) => setDescriptionInput(event.target.value)}
                />
                <p>Ex: Compra de roupas</p>
                <div className="campValue">
                    <div>
                        <label for="valor">Valor</label>
                        <input
                            id="btnValor"
                            className="inputForm"
                            type="text"
                            placeholder="R$"
                            value={valueInput}
                            onChange={(event) => setValueInput(event.target.value)}
                        />
                    </div>

                    <div>
                        <label for="select">Tipo de valor</label>
                        <select id="btnSelect" className="inputForm" onChange={(event) => setTypeInput(event.target.value)}>
                            <option value="Entrada">Entrada</option>
                            <option value="Saída">Saída</option>
                        </select>
                    </div>
                </div>
                <button id="btnInserirValor" onClick={ addTransition}>Inserir Valor</button>
            </div>
        </form>
    );
}

export default Form;
