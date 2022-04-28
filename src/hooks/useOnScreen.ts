import React, { useEffect, useRef, useState } from "react";

function useOnScreen(): [React.MutableRefObject<null>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const current = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    current && observer.observe(current);
    return () => {
      current && observer.unobserve(current);
    };
  });

  return [ref, isVisible];
}

export default useOnScreen;
