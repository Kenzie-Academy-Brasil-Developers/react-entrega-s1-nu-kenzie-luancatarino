import "./index.css";
import { useState } from "react";

function Form({ listTransactions, setListTransactions }) {
    const [valueInput, setValueInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");

    return (
        <div className="form">
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
                    <select id="btnSelect" className="inputForm">
                        <option value="entrada">Entrada</option>
                        <option value="saida">Saída</option>
                    </select>
                </div>
            </div>
            <button id="btnInserirValor">Inserir Valor</button>
            </div>
        </div>
    );
}

export default Form;
