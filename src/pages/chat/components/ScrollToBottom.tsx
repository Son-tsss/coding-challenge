import React, {useEffect, useRef} from 'react'

const useScrollToBottom = (deps: any[]) => {
  const lastElementRef = useRef(null);

  const scrollToBottom = () => {
    lastElementRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [...deps]);

  return (
      <div ref={lastElementRef} />
  );
};

export default useScrollToBottom;