"use client";
import { useEffect, useRef } from "react";

export default function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 星をランダムに生成
    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2,
      opacity: Math.random(),
    }));

    // 流れ星（最初は存在しない）
    let shootingStar: null | {
      x: number;
      y: number;
      length: number;
      speed: number;
    } = null;

    let nextShootingTime = Date.now() + 20000 + Math.random() * 5000;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 星の描画
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(203, 191, 161, ${star.opacity})`;
        ctx.fill();
      }

      // 流れ星の処理
      if (shootingStar) {
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(
          shootingStar.x - shootingStar.length,
          shootingStar.y + shootingStar.length / 3
        );
        ctx.strokeStyle = "rgba(239, 241, 214, 0.8)";
        ctx.lineWidth = 0.3;
        ctx.stroke();

        shootingStar.x -= shootingStar.speed;
        shootingStar.y += shootingStar.speed / 3;

        if (
          shootingStar.x < -shootingStar.length ||
          shootingStar.y > height + shootingStar.length
        ) {
          shootingStar = null;
          nextShootingTime = Date.now() + 20000 + Math.random() * 5000;
        }
      } else {
        if (Date.now() > nextShootingTime) {
          shootingStar = {
            x: width + Math.random() * 300,
            y: (Math.random() * height) / 2,
            length: 250,
            speed: 30,
          };
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    // resize対応
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-[-1] pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
