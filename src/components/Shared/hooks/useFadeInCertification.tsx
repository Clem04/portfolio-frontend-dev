import { useEffect, useState } from 'react';

export const useFadeInCertification = (animate?: boolean) => {
  const [fadeInCertification, setFadeInCertification] = useState(false);

  const handleAnimationFinish = () => {
    setFadeInCertification(true);
  };

  useEffect(() => {
    if (animate) {
      setFadeInCertification(true);
    }
  }, [animate]);

  return { fadeInCertification, handleAnimationFinish };
};