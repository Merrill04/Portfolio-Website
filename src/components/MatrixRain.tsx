import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface MatrixRainProps {
  onClose: () => void;
}

export default function MatrixRain({ onClose }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]=$#@!%';
    const alphabet = katakana + latin;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const rainDrops: number[] = Array(columns).fill(1);

    const render = () => {
      ctx.fillStyle = 'rgba(5, 7, 12, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const interval = setInterval(render, 30);

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[150] pointer-events-auto">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[160] px-4 py-2 rounded-xl bg-black/80 border border-green-500/50 text-green-400 font-mono text-xs font-bold hover:bg-green-950/80 transition flex items-center gap-2 shadow-2xl"
      >
        <span>Exit Matrix Mode</span>
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
