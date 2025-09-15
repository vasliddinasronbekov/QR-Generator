// src/app/layout.js
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Generate QR Codes Online – Quick, Free & No Sign Up",
  description:
    "Free online QR code generator – create custom QR codes for links, text, phone numbers, and more. Fast, secure, no sign-up required. Download instantly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-wrap">
          {/* Chap reklamalar */}
          <aside className="sidebar left">
            <div className="side-ad" id="left-ad" aria-hidden="true" />
          </aside>

          {/* Asosiy kontent */}
          <main className="main-content">{children}</main>

          {/* O‘ng reklamalar */}
          <aside className="sidebar right">
            <div id="right-ad" className="side-ad" aria-hidden="true" />
          </aside>
        </div>

        {/* Analytics */}
        <Analytics />

        {/* Reklama skriptlari */}
        <Script
          id="left-ad-inject"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){ 
              try { 
                var c = document.getElementById('left-ad'); 
                if(!c) return; 
                var s = document.createElement('script'); 
                s.dataset.zone = '9880245'; // chap panel zone ID
                s.src = 'https://groleegni.net/vignette.min.js'; 
                s.async = true; 
                c.appendChild(s); 
              } catch(e){} 
            })();`,
          }}
        />
        <Script
          id="right-ad-inject"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){ 
              try { 
                var c = document.getElementById('right-ad'); 
                if(!c) return; 
                var s = document.createElement('script'); 
                s.dataset.zone = '9880253'; // o‘ng panel zone ID
                s.src = 'https://groleegni.net/vignette.min.js'; 
                s.async = true; 
                c.appendChild(s); 
              } catch(e){} 
            })();`,
          }}
        />

        {/* Minimal dark mode styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root { --max-width: 1100px; --sidebar-w: 160px; }
              html,body { height: 100%; margin:0; padding:0; background:#0d1117; color:#e6edf3; }
              
              .site-wrap { 
                display: flex; 
                justify-content: center; 
                gap: 20px;
                max-width: var(--max-width);
                margin: 0 auto;
                padding: 20px;
                box-sizing:border-box;
              }
              .sidebar {
                width: var(--sidebar-w);
                min-width: var(--sidebar-w);
                align-self: flex-start;
                position: sticky;
                top: 20px;
                display:flex;
                justify-content:center;
              }
              .sidebar > div { width:100%; max-width:160px; }
              .main-content {
                flex: 1 1 700px;
                max-width: 800px;
                box-sizing: border-box;
              }
              /* Hide sidebars on mobile */
              @media (max-width: 900px) {
                .sidebar { display: none; }
                .site-wrap { padding: 10px; }
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
