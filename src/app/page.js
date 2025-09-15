"use client";

import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";   // ✅ TO‘G‘RI IMPORT

export default function Home() {
  const [text, setText] = useState("https://example.com");
  const canvasRef = useRef(null);

  const downloadQR = () => {
    const canvas = document.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "qr.png";
    a.click();
  };

  return (
    <main style={{ maxWidth: 800, margin: "30px auto", textAlign: "center" }}>
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
          onClick={() => navigator.clipboard.writeText(text)}
          style={{ padding: "10px 20px", marginLeft: 10 }}
        >
          Copy
        </button>
      </div>
      <p style={{ marginTop: 20 }}>
        Share your QR with friends — and support us by allowing ads.
      </p>

      {/* --- AD PLACEHOLDERS --- */}
      <div id="top-ad" style={{ marginTop: 30 }}>
        {/* top banner ad here */}
      </div>
      <div id="native-ad" style={{ marginTop: 20 }}>
        {/* native/ad widget here */}
      </div>
    </main>
  );
}
