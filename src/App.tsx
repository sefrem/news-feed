import React, { createContext, useContext, useState } from "react";

import Router from "./Router";
import Header from "./components/Header";

import styles from "./App.module.css";
import Modal from "./components/Modal/Modal";
import AddMessage from "./components/AddMessage";

// export function createCtx<A>(defaultValue: A) {
//   type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultValue>>;
//   const defaultUpdate: UpdateType = () => defaultValue;
//   const ctx = React.createContext({
//     state: defaultValue,
//     update: defaultUpdate,
//   });
// }
//
// type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultValue>>;
// const defaultUpdate: UpdateType = () => defaultValue;
// const Context = React.createContext({
//   state: defaultValue,
//   update: defaultUpdate,
// });

export const Context = createContext<{
  isMessageModalOpen: boolean;
  setIsMessageModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}>({ isMessageModalOpen: false });

// export function createContext<A>(defaultState: A) {
//   type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultState>>;
//   const defaultUpdate: UpdateType = () => defaultState;
//   const Context = React.createContext({
//     state: defaultState,
//     update: defaultUpdate,
//   });
//
//   function Provider(props: React.PropsWithChildren<{}>) {
//     const [state, update] = React.useState(defaultState);
//     return <Context.Provider value={{ state, update }} {...props} />;
//   }
//
//   return [Context, Provider] as const;
// }

export const ModalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  return (
    <Context.Provider value={{ isMessageModalOpen, setIsMessageModalOpen }}>
      {children}
    </Context.Provider>
  );
};

function App() {
  // const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  // const [context] = createContext({
  //   isMessageModalOpen,
  //   setIsMessageModalOpen,
  // });
  const { isMessageModalOpen } = useContext(Context);

  return (
    <main>
      <Header />

      <div className={styles.main}>
        <Router />
        {isMessageModalOpen && (
          <Modal>
            <AddMessage />
          </Modal>
        )}
      </div>
    </main>
  );
}

export default App;
