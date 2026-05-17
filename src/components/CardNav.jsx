export const CardNav = ({ goTo }) => {
  const cards = [
    { label: "About",    suit: "♥", section: "about",    rotate: "-2deg", primary: "#c25c2a", secondary: "#3d2c1e" },
    { label: "Projects", suit: "♠", section: "projects", rotate: "-1deg", primary: "#3d2c1e", secondary: "#c25c2a" },
    { label: "Skills",   suit: "♣", section: "skills",   rotate:  "1deg", primary: "#c25c2a", secondary: "#3d2c1e" },
    { label: "Contact",  suit: "♦", section: "contact",  rotate:  "2deg", primary: "#3d2c1e", secondary: "#c25c2a" },
  ];

  return (
    <section className="py-10 pb-28 flex flex-col items-center px-6">
      <h2
        className="mb-14 text-center font-bold"
        style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "3.5rem", color: "#2d1f14" }}
      >
        What's in the cards?
      </h2>

      <div className="relative w-full max-w-5xl">
        {/* Cards row */}
        <div className="flex items-end justify-between gap-4">
          {cards.map((card, i) => (
            <button
              key={i}
              onClick={() => goTo(card.section)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotate(0deg) translateY(-32px)";
                e.currentTarget.style.zIndex = "20";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${card.rotate})`;
                e.currentTarget.style.zIndex = "1";
              }}
              style={{
                position: "relative",
                flex: "1",
                maxWidth: "220px",
                height: "300px",
                background: "#fdf8ec",
                border: "1.5px solid #ddd3b8",
                borderRadius: "18px",
                transform: `rotate(${card.rotate})`,
                transition: "transform 0.3s ease",
                boxShadow: "4px 8px 24px rgba(0,0,0,0.4)",
                cursor: "pointer",
              }}
            >
              {/* Top-left corner */}
              <div style={{ position: "absolute", top: "12px", left: "14px", textAlign: "left", lineHeight: 1.2 }}>
                <div style={{ fontFamily: "monospace", fontSize: "16px", fontWeight: "bold", color: card.primary }}>A</div>
                <div style={{ fontSize: "14px", color: card.primary }}>{card.suit}</div>
              </div>

              {/* Sparkles */}
              <div style={{ position: "absolute", top: "40px", left: "38px", color: card.primary, fontSize: "14px" }}>✦</div>
              <div style={{ position: "absolute", top: "62px", left: "22px", color: card.primary, fontSize: "8px" }}>✦</div>
              <div style={{ position: "absolute", bottom: "40px", right: "38px", color: card.primary, fontSize: "14px" }}>✦</div>
              <div style={{ position: "absolute", bottom: "62px", right: "22px", color: card.primary, fontSize: "8px" }}>✦</div>

              {/* Center */}
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: "6px",
              }}>
                <span style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "2.1rem",
                  fontWeight: 700,
                  color: card.secondary,
                  lineHeight: 1.1,
                  textAlign: "center",
                }}>
                  {card.label}
                </span>
                <span style={{ fontSize: "2.8rem", color: card.primary, lineHeight: 1 }}>
                  {card.suit}
                </span>
              </div>

              {/* Bottom-right corner (flipped) */}
              <div style={{
                position: "absolute", bottom: "12px", right: "14px",
                textAlign: "left", lineHeight: 1.2,
              }}>
                <div style={{ fontFamily: "monospace", fontSize: "16px", fontWeight: "bold", color: card.primary }}>A</div>
                <div style={{ fontSize: "14px", color: card.primary }}>{card.suit}</div>
              </div>
            </button>
          ))}
        </div>

        {/* "pick a card" bottom-left */}
        <p
          className="mt-8 text-left"
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "1.9rem",
            color: "#6b7280",
          }}
        >
          pick a card
        </p>
      </div>
    </section>
  );
};
