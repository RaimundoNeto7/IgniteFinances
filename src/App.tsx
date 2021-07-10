import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";

Modal.setAppElement("#root")

export function App() {
    const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)

    function handleOpenTransactionModal() {
        setIsTransactionModalOpen(true)
    }

    function handleCloseTransactionModal() {
        setIsTransactionModalOpen(false)
    }

    return (
        <>
            <GlobalStyle />
            <Header onOpenTransactionModal={handleOpenTransactionModal}/>
            <Dashboard />
            <Modal
                isOpen={isTransactionModalOpen}
                onRequestClose={handleCloseTransactionModal}
            >
                <h2>Cadastrar transação</h2>
            </Modal>
        </>
    );
}
