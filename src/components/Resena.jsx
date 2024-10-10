import { useEffect } from 'react';

export const Resena = () => {
  useEffect(() => {
    if (window && window.ELFSIGHT) {
      window.ELFSIGHT.reload();
    }
  }, []);

  return (
    <div className="elfsight-app-e94cc5b9-75e0-40d5-ae10-6324b80c6d61" data-elfsight-app-lazy></div>
  );
};


