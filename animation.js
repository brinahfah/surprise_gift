document.addEventListener('DOMContentLoaded', () => {
  const petaleContainer = document.getElementById('petaleContainer');
  const fallingLeaves = document.querySelectorAll('.falling-leaf');

  if (petaleContainer && fallingLeaves.length > 0) {
    let viewportHeight = window.innerHeight;
    let viewportWidth = window.innerWidth;

    window.addEventListener('resize', () => {
      viewportHeight = window.innerHeight;
      viewportWidth = window.innerWidth;
    });

    fallingLeaves.forEach((leaf) => {
      const startX = Math.random() * 100;
      const driftX = Math.random() * 100 - 50;
      const rotateDeg = Math.random() * 360;
      const duration = Math.random() * 5000 + 5000; // entre 5s et 10s
      const delay = Math.random() * 3000;

      const leafKeyframes = [
        {
          transform: `translate(${startX}vw, -50px) rotate(${rotateDeg}deg)`,
          opacity: 0,
          offset: 0
        },
        {
          transform: `translate(${startX + driftX / 2}vw, ${viewportHeight * 0.5}px) rotate(${rotateDeg + 90}deg)`,
          opacity: 1,
          offset: 0.5
        },
        {
          transform: `translate(${startX + driftX}vw, ${viewportHeight + 50}px) rotate(${rotateDeg + 180}deg)`,
          opacity: 0,
          offset: 1
        }
      ];

      const timing = {
        duration: duration,
        iterations: Infinity,
        delay: delay,
        easing: 'ease-in-out'
      };

      leaf.animate(leafKeyframes, timing);
    });
  } else {
    console.error("Feuilles non trouvées ou conteneur manquant.");
  }
});
