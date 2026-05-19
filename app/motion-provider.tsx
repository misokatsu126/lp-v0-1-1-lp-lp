"use client";

import { useEffect } from "react";
import motion from "./motion.module.css";

/**
 * IntersectionObserverで`.reveal`クラスを持つ要素を監視し、
 * ビューポートに入ったら`.inView`を付与してフェードインさせる。
 * 1度トリガーされた要素は再観測しない（戻ってきても再アニメしない）。
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll<HTMLElement>(`.${motion.reveal}`);
    if (elements.length === 0) return;

    // IntersectionObserver未サポートのブラウザは即座に全部表示
    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => el.classList.add(motion.inView));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(motion.inView);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
