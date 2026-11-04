
import { useRef } from "react";
import {
  Code2,
  Cpu,
  Database,
  Globe2,
  Sparkles
} from "lucide-react";

import portrait from "./assets/kareem-portrait.jpg";
import "./MotionPortrait.css";

const orbitDots = Array.from({ length: 12 }, (_, i) => i);

const codeLines = [
  "const developer = {",
  '  name: "Eng. Kareem",',
  '  focus: "Software",',
  '  location: "Kuwait"',
  "};"
];

export default function MotionPortrait() {
  const sceneRef = useRef(null);

  function handlePointerMove(event) {
    if (!sceneRef.current) return;

    const rect = sceneRef.current.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    sceneRef.current.style.setProperty(
      "--tilt-x",
      `${(0.5 - y) * 9}deg`
    );

    sceneRef.current.style.setProperty(
      "--tilt-y",
      `${(x - 0.5) * 9}deg`
    );

    sceneRef.current.style.setProperty(
      "--pointer-x",
      `${x * 100}%`
    );

    sceneRef.current.style.setProperty(
      "--pointer-y",
      `${y * 100}%`
    );
  }

  function resetPointer() {
    if (!sceneRef.current) return;

    sceneRef.current.style.setProperty("--tilt-x", "0deg");
    sceneRef.current.style.setProperty("--tilt-y", "0deg");
    sceneRef.current.style.setProperty("--pointer-x", "50%");
    sceneRef.current.style.setProperty("--pointer-y", "50%");
  }

  return (
    <div
      className="mp-scene"
      ref={sceneRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-label="Animated portrait of Eng. Kareem"
    >
      {/* Moving grid background */}
      <div className="mp-grid" aria-hidden="true" />

      {/* Animated ambient glow */}
      <div className="mp-ambient mp-ambient-one" />
      <div className="mp-ambient mp-ambient-two" />

      {/* Animated circles around portrait */}
      <div className="mp-orbits" aria-hidden="true">
        <div className="mp-orbit mp-orbit-outer">
          <span className="mp-satellite mp-satellite-one" />
        </div>

        <div className="mp-orbit mp-orbit-middle">
          <span className="mp-satellite mp-satellite-two" />
        </div>

        <div className="mp-orbit mp-orbit-inner" />

        <div className="mp-orbit-dots">
          {orbitDots.map((dot) => (
            <span
              key={dot}
              style={{ "--dot-index": dot }}
            />
          ))}
        </div>
      </div>

      {/* Animated left information */}
      <div className="mp-info mp-info-left" aria-hidden="true">
        <span className="mp-info-index">01 / PROFILE</span>

        <div className="mp-info-line">
          <span className="mp-live-dot" />
          SYSTEM ONLINE
        </div>

        <span className="mp-info-detail">
          SOFTWARE ENGINEER
        </span>
      </div>

      {/* Animated right information */}
      <div className="mp-info mp-info-right" aria-hidden="true">
        <span className="mp-info-index">02 / LOCATION</span>

        <div className="mp-info-line">
          <Globe2 size={13} />
          KUWAIT
        </div>

        <span className="mp-info-detail">
          AVAILABLE WORLDWIDE
        </span>
      </div>

      {/* Central portrait */}
      <div className="mp-portrait-stage">
        <div className="mp-portrait-backlight" />

        <div className="mp-portrait-card">
          <div className="mp-photo-wrap">
            <img
              src={portrait}
              alt="Eng. Kareem"
              className="mp-photo"
            />

            {/* Animated scanline */}
            <div className="mp-scanline" />

            {/* Animated light */}
            <div className="mp-light" />

            {/* Technical corner graphics */}
            <span className="mp-corner top-left" />
            <span className="mp-corner top-right" />
            <span className="mp-corner bottom-left" />
            <span className="mp-corner bottom-right" />
          </div>

          <div className="mp-photo-caption">
            <div>
              <span className="mp-caption-overline">
                IDENTITY CONFIRMED
              </span>

              <strong>ENG. KAREEM</strong>
            </div>

            <Sparkles size={22} />
          </div>
        </div>
      </div>

      {/* Floating animated technology tags */}
      <div className="mp-tech mp-tech-react" aria-hidden="true">
        <Code2 size={18} />
        <span>REACT</span>
      </div>

      <div className="mp-tech mp-tech-python" aria-hidden="true">
        <Cpu size={18} />
        <span>PYTHON</span>
      </div>

      <div className="mp-tech mp-tech-db" aria-hidden="true">
        <Database size={18} />
        <span>DATABASES</span>
      </div>

      {/* Animated decorative code panel */}
      <div className="mp-code-panel" aria-hidden="true">
        <div className="mp-code-header">
          <span className="mp-code-dots">
            <i />
            <i />
            <i />
          </span>

          PROFILE.JS
        </div>

        <div className="mp-code-body">
          {codeLines.map((line, index) => (
            <div
              className="mp-code-line"
              key={index}
              style={{ "--line-index": index }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <code>{line}</code>
            </div>
          ))}
        </div>
      </div>

      {/* Footer HUD */}
      <div className="mp-bottom-hud" aria-hidden="true">
        <span>ENGINEERING THE FUTURE</span>

        <div className="mp-signal">
          {[0, 1, 2, 3, 4].map((bar) => (
            <i key={bar} style={{ "--bar-index": bar }} />
          ))}
        </div>

        <span>EST. KUWAIT</span>
      </div>
    </div>
  );
}
