import { useEffect } from 'react';

// 副作用钩子
export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = 'Graphic';
    };
  }, [title]);
}
