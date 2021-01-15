import { useEffect, useState } from 'react';

// 获取svg容器鼠标坐标
export function useMouseEvent(ref: React.RefObject<SVGAElement>) {
  let [mouse, setMouse] = useState({});

  function handleMouseMove(event: MouseEvent) {
    setMouse({
      x: event.clientX,
      y: event.clientY,
    });
  }

  useEffect(() => {
    const svg = ref.current;
    svg?.addEventListener('mousemove', handleMouseMove);
    return () => {
      svg?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mouse;
}
