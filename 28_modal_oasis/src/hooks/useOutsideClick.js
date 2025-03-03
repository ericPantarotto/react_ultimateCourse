import { useEffect, useRef } from 'react';

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        // NOTE: ref.current is the Modal windowed element and e.target is the clicked element
        if (ref.current && !ref.current.contains(e.target)) {
          // console.log('clicked outside');
          e.stopPropagation(); //HACK: for self-closing menu when clicking on the same menu button
          handler();
        }
      }

      document.addEventListener('click', handleClick, listenCapturing);

      return () =>
        document.removeEventListener('click', handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
