import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { AnimatePresence, motion } from 'framer-motion';

import Step1Method from './Step1Method';
import Step2Details from './Step2Details';
import Step3Amount from './Step3Amount';
import { CloseButton, ModalOverlay, ModalWrapper, TitleBlock } from './styles';

const WithdrawalModal = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [method, setMethod] = useState(null);
  const [amount, setAmount] = useState('');
  const [formData, setFormData] = useState({
    network: null,
    wallet: '',
    surname: '',
    name: '',
    patronymic: '',
    cardName: '',
    cardNumber: '',
  });

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    const handleEnter = (e) => {
      if (e.key === 'Enter') {
        if (step < 2) goNext();
      }
    };
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleEnter);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleEnter);
    };
  }, [step, onClose]);

  const goBack = () => setStep((prev) => prev - 1);
  const goNext = () => setStep((prev) => prev + 1);

  const handleWithdraw = () => {
    console.log('Submitting withdrawal:', { method, formData, amount });
    onClose();
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return <Step1Method method={method} setMethod={setMethod} onNext={goNext} />;
      case 1:
        return (
          <Step2Details
            method={method}
            formData={formData}
            setFormData={setFormData}
            onBack={goBack}
            onNext={goNext}
          />
        );
      case 2:
        return (
          <Step3Amount
            method={method}
            amount={amount}
            setAmount={setAmount}
            onBack={goBack}
            onSubmit={handleWithdraw}
          />
        );
      default:
        return null;
    }
  };

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalWrapper>
        <CloseButton onClick={onClose}>×</CloseButton>
        <TitleBlock>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>
        </TitleBlock>
      </ModalWrapper>
    </ModalOverlay>,
    document.getElementById('modal-root'),
  );
};

export default WithdrawalModal;
