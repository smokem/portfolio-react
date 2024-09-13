import { useEffect } from 'react';
import './load.scss';
import gsap from 'gsap';

const Load = () => {
  useEffect(() => {
    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 1.5,
        delay: 3.5,
        onComplete: () => {
          document.querySelector('.loading-page').style.display = 'none';
        }
      }
    );
  
    // Animate the logo name entrance
    gsap.fromTo(
      ".logo-name",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className="loading-page">
      <svg viewBox="0 0 300 176" xmlns="http://www.w3.org/2000/svg" width="300" height="176" fill="none">
        <path fill="#F7A41D" d="M158.395 55.695H85.877V23.453h104.966L262.393 0 142.274 120.337h72.745v32.296H110.048l-71.55 22.655L158.395 55.695ZM0 120.288V23.453h71.746V55.75h-39.46v64.592H80.73l-32.296 32.297H0v-32.351Zm267.709-64.593h-48.45L251.555 23.4H300v129.18h-71.746v-32.296h39.504l-.049-64.588Z"/>
      </svg>
      <div className="name-container">
        <div className="logo-name">CZied</div>
      </div>
    </div>
  );
};

export default Load;
