import "./index.css";

function Card({ transaction, removeTransaction }) {
    return (
        <div className="divGeralCard">
            <div className={transaction.type ==="Entrada" ? "green" : "grey"}></div>
            <div className="campCard">
                <div>
                    <h1 id="descricao">{transaction.description}</h1>
                    <p id="tipo">{transaction.type}</p>
                </div>
                <div className="valorBtnExcluir">
                    <div>
                        <h3>R$ {transaction.value.toFixed(2)}</h3>
                    </div>
                    <button
                        id="btnExcluir"
                        onClick={() => {
                            removeTransaction(transaction);
                        }}
                    >
                        <svg width="9" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.361.722H6.07L5.88.378a.464.464 0 0 0-.402-.267H3.281a.464.464 0 0 0-.4.267l-.173.344H.417a.314.314 0 0 0-.306.306v.61c0 .173.134.306.306.306H8.36a.314.314 0 0 0 .306-.305v-.611A.329.329 0 0 0 8.36.722ZM1.123 9.03c.02.497.42.86.917.86h4.679c.496 0 .897-.363.916-.86l.42-6.473H.723l.401 6.473Z"
                                fill="#868E96"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
