import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { TransactionModal } from "./components/TransactionModal";

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
            <Header onOpenTransactionModal={handleOpenTransactionModal} />
            <Dashboard />
            <TransactionModal
                isOpen={isTransactionModalOpen}
                onRequestClose={handleCloseTransactionModal}
            />
        </>
    );
}
