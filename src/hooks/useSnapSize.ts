import { useEffect, useState } from 'react';

type SnapSizeHookResult = { width: number; height: number };

function getSize(ref: React.RefObject<SVGAElement>) {
  const svg = ref.current;

  if (svg) {
    return {
      width: svg.clientWidth,
      height: svg.clientHeight,
    };
  }

  return null;
}

export function useSnapSize(
  ref: React.RefObject<SVGAElement>,
): SnapSizeHookResult | null {
  let [size, setSize] = useState<SnapSizeHookResult | null>(getSize(ref));

  function handleChange(e: Event) {
    setSize({
      width: 100,
      height: 199,
    });
  }

  useEffect(() => {
    const svg = ref.current;
    svg?.addEventListener('change', handleChange);

    return () => {
      svg?.removeEventListener('change', handleChange);
    };
  }, []);

  return size;
}
