import React, { useRef } from "react";

const useDialog = (): [
  React.RefObject<HTMLDialogElement>,
  () => void,
  () => void,
  React.RefObject<HTMLTextAreaElement>
] => {
  const ref = useRef<HTMLDialogElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const open = () => {
    if (ref.current) {
      ref.current.showModal();
    }
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const close = () => {
    if (ref.current) {
      ref.current.close();
    }
  };

  return [ref, open, close, textareaRef];
};

export default useDialog;
