import { useEffect, useState } from "react";
import startLogo from '../assets/startLogo.png'

export default function Splash({ onDone }) {
  const [hiding, setHiding] = useState(false);
  const FADE_MS = 500;

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setHiding(true);
      const endTimer = setTimeout(() => {
        onDone?.();
      }, FADE_MS);
      return () => clearTimeout(endTimer);
    }, 2300);

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <div className={`splash ${hiding ? "is-hide" : ""}`}>
      <img src={startLogo} alt="Logo" className="splash-logo" />
    </div>
  );
}
