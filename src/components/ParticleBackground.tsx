import React, { useEffect, useRef, useState } from 'react';

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;

  constructor(x: number, y: number, isMobile: boolean) {
    this.x = x;
    this.y = y;
    this.size = isMobile ? Math.random() * 2 + 1 : Math.random() * 2 + 1;
    this.speedX = (Math.random() * 0.8 - 0.4) * (isMobile ? 0.7 : 1);
    this.speedY = (Math.random() * 0.8 - 0.4) * (isMobile ? 0.7 : 1);
    this.opacity = Math.random() * 0.4 + 0.3;
  }

  update(width: number, height: number) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(147, 51, 234, ${this.opacity})`;
    ctx.fill();
  }
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Enable hardware acceleration
    ctx.imageSmoothingEnabled = false;

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio, 2);

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(pixelRatio, pixelRatio);
      setIsMobile(width <= 768);
    };

    const createParticles = () => {
      const numberOfParticles = isMobile ? 50 : 80;
      particlesRef.current = [];
      
      const gridSize = Math.ceil(Math.sqrt(numberOfParticles));
      const cellWidth = canvas.width / gridSize;
      const cellHeight = canvas.height / gridSize;

      for (let i = 0; i < numberOfParticles; i++) {
        const col = i % gridSize;
        const row = Math.floor(i / gridSize);
        const x = (col * cellWidth) + (Math.random() * cellWidth);
        const y = (row * cellHeight) + (Math.random() * cellHeight);
        
        particlesRef.current.push(new Particle(x, y, isMobile));
      }
    };

    const drawParticles = () => {
      ctx.fillStyle = '#0A0A1F';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      const maxDistance = isMobile ? 80 : 100;
      const maxDistanceSquared = maxDistance * maxDistance;

      for (let i = 0; i < particlesRef.current.length; i++) {
        const particle1 = particlesRef.current[i];
        
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const particle2 = particlesRef.current[j];
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < maxDistanceSquared) {
            const opacity = (1 - Math.sqrt(distanceSquared) / maxDistance) * 0.5;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(drawParticles);
    };

    const debouncedResize = debounce(() => {
      resizeCanvas();
      createParticles();
    }, 250);

    resizeCanvas();
    createParticles();
    drawParticles();

    window.addEventListener('resize', debouncedResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', debouncedResize);
    };
  }, [isMobile]);

  // Debounce function
  function debounce(func: Function, wait: number) {
    let timeout: ReturnType<typeof setTimeout>;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  return (
    <div className="fixed inset-0 isolate">
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          background: '#0A0A1F',
          transform: 'translate3d(0,0,0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
      />
      <div 
        className="fixed inset-0 z-[2] pointer-events-none bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10"
        style={{
          backgroundBlendMode: 'overlay',
          transform: 'translate3d(0,0,0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
      />
    </div>
  );
};

export default ParticleBackground; 