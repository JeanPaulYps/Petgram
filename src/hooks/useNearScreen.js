import { useEffect, useState, useRef } from 'react';

function useNearScreen () {
  const [show, setShow] = useState(false);
  const element = useRef(null);
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      Promise.resolve(
        typeof window.IntersectionObserver !== 'undefined'
          ? window.IntersectionObserver
          : import('intersection-observer')
      ).then(() => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
    });

    observer.observe(element.current);
  }, [element]);

  return [show, element];
}

export { useNearScreen };
