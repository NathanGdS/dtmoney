import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

//div dentro da div do html
Modal.setAppElement('#root');

export function App() {
      // por padrao, modal esta fechado
      const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

      function handleOpenNewTransactionmodal() {
          setIsNewTransactionModalOpen(true);
      }
  
      function handleCloseNewTransactionModal() {
          setIsNewTransactionModalOpen(false);
      }

  return (
    <TransactionsProvider>

      <Header onOpenNewTransactionModal={handleOpenNewTransactionmodal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />

    </TransactionsProvider>
  );
}