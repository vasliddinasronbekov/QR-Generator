"use client";

import { useState, useRef, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function Home() {
  const [text, setText] = useState("https://example.com");
  const canvasRef = useRef(null);

  const downloadQR = () => {
    window.open("https://otieu.com/4/9880154", "_blank"); // Direct link ad
    const canvas = document.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "qr.png";
    a.click();
  };

  const copyQR = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied!");
    });
  };

  // ✅ Chap va o‘ng reklama scriptlarini joylashtirish
  useEffect(() => {
    // Chap panel uchun
    const leftScript = document.createElement("script");
    leftScript.innerHTML = `(function(s){s.dataset.zone='9880253',s.src='https://groleegni.net/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`;
    document.getElementById("left-ad").appendChild(leftScript);

    // O‘ng panel uchun
    const rightScript = document.createElement("script");
    rightScript.innerHTML = `(function(s){s.dataset.zone='9880245',s.src='https://groleegni.net/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`;
    document.getElementById("right-ad").appendChild(rightScript);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px auto",
        maxWidth: 1200,
      }}
    >
      {/* --- LEFT AD --- */}
      <aside
        style={{
          width: 160,
          marginRight: 20,
          position: "sticky",
          top: 20,
          height: "100%",
        }}
      >
        <div id="left-ad"></div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main style={{ flex: 1, maxWidth: 800, textAlign: "center" }}>
        <h1>Fast QR Generator</h1>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: "80%", padding: "10px", fontSize: 16 }}
        />
        <div
          style={{
            marginTop: 20,
            background: "#fff",
            display: "inline-block",
            padding: 20,
          }}
        >
          <QRCodeCanvas value={text} size={256} level="H" includeMargin={true} />
        </div>
        <div style={{ marginTop: 20 }}>
          <button onClick={downloadQR} style={{ padding: "10px 20px" }}>
            Download PNG
          </button>
          <button
            onClick={copyQR}
            style={{ padding: "10px 20px", marginLeft: 10 }}
          >
            Copy
          </button>
        </div>
      </main>

      {/* --- RIGHT AD --- */}
      <aside
        style={{
          width: 160,
          marginLeft: 20,
          position: "sticky",
          top: 20,
          height: "100%",
        }}
      >
        <div id="right-ad"></div>
      </aside>
    </div>
  );
}
