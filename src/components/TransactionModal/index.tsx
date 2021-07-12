import Modal from 'react-modal'
import { Container, TransactionTypeContainer, TransactionTypeButton } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react'

Modal.setAppElement("#root")

interface TransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TransactionModal({ isOpen, onRequestClose }: TransactionModalProps) {
    const [transactionType, setTransactionType] = useState("deposit")

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
            <Container>
                <h2>Cadastrar transação</h2>

                <input placeholder="Título"/>

                <input type="number" placeholder="Valor"/>

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

                <input placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}