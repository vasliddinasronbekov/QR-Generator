// src/app/page.js
"use client";

import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function Home() {
  const [text, setText] = useState("https://example.com");

  // Load Interstitial (page-level ad)
  useEffect(() => {
    try {
      const s = document.createElement("script");
      s.dataset.zone = "9880191"; // interstitial zone
      s.src = "https://groleegni.net/vignette.min.js";
      s.async = true;
      document.body.appendChild(s);
      return () => {
        try {
          document.body.removeChild(s);
        } catch {}
      };
    } catch {}
  }, []);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("text");
    if (t) setText(t);
  }, []);
  // Direct ad link + QR download
  const downloadQR = () => {
    try {
      window.open("https://otieu.com/4/9880154", "_blank");
    } catch {}
    const svg = document.querySelector("#qr-code svg");
    if (svg) {
      const serializer = new XMLSerializer();
      const source = serializer.serializeToString(svg);
      const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "qr.svg";
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  // Copy text
  const copyQR = async () => {
    try {
      await navigator.clipboard.writeText(text);
      document.dispatchEvent(new Event("click"));
      alert("Copied to clipboard!");
    } catch {
      alert("Copy failed");
    }
  };

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>QR Generator</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste a link..."
        style={styles.input}
        aria-label="QR text"
      />

      <div id="qr-code" style={styles.qrBox}>
        <QRCodeSVG value={text} size={256} level="H" includeMargin={true} style={{ imageRendering: "crisp-edges" }}/>
      </div>

      <div style={styles.actions}>
        <button onClick={downloadQR} style={styles.button}>
          ⬇ Download
        </button>
        <button onClick={copyQR} style={{ ...styles.button, background: "#444" }}>
          📋 Copy
        </button>
      </div>

      <p style={styles.note}>
        Simple, fast & free — share your QR with friends!
      </p>
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0d1117",
    color: "#e6edf3",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "40px 20px",
    fontFamily: "system-ui, sans-serif",
  },
  title: {
    fontSize: "2rem",
    marginBottom: 20,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    maxWidth: 480,
    padding: "12px 14px",
    fontSize: "1rem",
    borderRadius: 8,
    border: "1px solid #30363d",
    background: "#161b22",
    color: "#e6edf3",
    marginBottom: 28,
  },
  qrBox: {
    background: "#161b22",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
    marginBottom: 24,
  },
  actions: {
    display: "flex",
    gap: "12px",
    marginBottom: 20,
  },
  button: {
    padding: "10px 20px",
    borderRadius: 8,
    border: "none",
    background: "#238636",
    color: "#fff",
    fontSize: "0.95rem",
    cursor: "pointer",
    transition: "background 0.2s",
  },
  note: {
    fontSize: "0.9rem",
    color: "#8b949e",
    marginTop: 10,
  },
};
