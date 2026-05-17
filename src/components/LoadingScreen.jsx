import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => { onComplete(); }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center" style={{ background: "#faf7f2" }}>
      <div className="mb-4 text-4xl font-mono font-bold" style={{ color: "#2d1f14" }}>
        {text}
        <span className="animate-blink ml-1" style={{ color: "#c25c2a" }}>|</span>
      </div>
      <div className="w-[200px] h-[2px] rounded relative overflow-hidden" style={{ background: "#e8dcc8" }}>
        <div className="w-[40%] h-full animate-loading-bar" style={{ background: "#c25c2a" }}></div>
      </div>
    </div>
  );
};
