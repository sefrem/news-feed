import React, { createContext, useCallback, useState } from "react";

export const ModalContext = createContext<{
  isMessageModalOpen: boolean;
  closeModal: () => void;
  openModal?: () => void;
}>({ isMessageModalOpen: false, closeModal: () => null });

export const ModalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsMessageModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsMessageModalOpen(false);
  }, []);

  return (
    <ModalContext.Provider
      value={{ isMessageModalOpen, closeModal, openModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
