import React, { useState } from "react";

export const useValidation = () => {
  const [error, setError] = useState("");

  const validate = React.useCallback((value: string): boolean => {
    if (value.length > 200) {
      setError("You have exceeded the maximum message size of 200 symbols");
      return false;
    }
    if (value.length === 0) {
      setError("Enter your message");
      return false;
    }
    setError("");
    return true;
  }, []);

  return { error, validate };
};
