import Modal from 'react-modal'
import { Container, TransactionTypeContainer, TransactionTypeButton } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'

Modal.setAppElement("#root")

interface TransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TransactionModal({ isOpen, onRequestClose }: TransactionModalProps) {
    const [title, setTitle] = useState("")
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState("")
    const [transactionType, setTransactionType] = useState("deposit")

    function handleCreateTransaction(event: FormEvent) {
        event.preventDefault()

        const data = {
            title,
            value,
            category,
            transactionType
        }

        api.post("transactions", data)
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close">
                <img src={closeImg} alt="Fechar modal"/>
            </button>
            <Container onSubmit={handleCreateTransaction}>
                <h2>Cadastrar transação</h2>

                <input placeholder="Título" value={title} onChange={(event) => setTitle(event.target.value)}/>

                <input type="number" value={value} placeholder="Valor" onChange={(event) => setValue(Number(event.target.value))}/>

                <TransactionTypeContainer>
                    <TransactionTypeButton type="button" onClick={() => { setTransactionType("deposit") }} isActive={transactionType === "deposit"} activeColor="#b6ffe4">
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </TransactionTypeButton>

                    <TransactionTypeButton type="button" onClick={() => { setTransactionType("withdraw") }} isActive={transactionType === "withdraw"} activeColor="#ffbcc7">
                        <img src={outcomeImg} alt="Saída"/>
                        <span>Saída</span>
                    </TransactionTypeButton>
                </TransactionTypeContainer>

                <input placeholder="Categoria" value={category} onChange={(event) => setCategory(event.target.value)}/>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}