
import { useEffect } from "react";
import "./FaceFollower.css";

const clamp = (value, min, max) =>
  Math.max(min, Math.min(max, value));

export default function FaceFollower() {
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const touchQuery = window.matchMedia(
      "(pointer: coarse)"
    );

    if (mediaQuery.matches || touchQuery.matches) {
      return;
    }

    // Find both holographic portraits on the page.
    const portraits = Array.from(
      document.querySelectorAll(".holo-scene")
    );

    const states = new Map();

    portraits.forEach((portrait) => {
      states.set(portrait, {
        x: 0,
        y: 0
      });
    });

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };

    let frameId = null;

    function animate() {
      let stillMoving = false;

      portraits.forEach((portrait) => {
        const rect = portrait.getBoundingClientRect();

        // Avoid animating portraits outside the viewport.
        if (
          rect.bottom < 0 ||
          rect.top > window.innerHeight
        ) {
          return;
        }

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate the mouse direction relative to the face.
        const targetX = clamp(
          (mouse.x - centerX) / (window.innerWidth * 0.45),
          -1,
          1
        );

        const targetY = clamp(
          (mouse.y - centerY) / (window.innerHeight * 0.55),
          -1,
          1
        );

        const state = states.get(portrait);

        // Smooth interpolation creates natural movement.
        state.x += (targetX - state.x) * 0.1;
        state.y += (targetY - state.y) * 0.1;

        if (
          Math.abs(targetX - state.x) > 0.001 ||
          Math.abs(targetY - state.y) > 0.001
        ) {
          stillMoving = true;
        }

        // Rotate the main portrait card.
        portrait.style.setProperty(
          "--rotate-y",
          `${state.x * 12}deg`
        );

        portrait.style.setProperty(
          "--rotate-x",
          `${-state.y * 9}deg`
        );

        // Move the photograph independently.
        portrait.style.setProperty(
          "--face-x",
          `${state.x * 13}px`
        );

        portrait.style.setProperty(
          "--face-y",
          `${state.y * 9}px`
        );

        portrait.style.setProperty(
          "--face-yaw",
          `${state.x * 5}deg`
        );

        portrait.style.setProperty(
          "--face-pitch",
          `${-state.y * 4}deg`
        );

        // Dynamic light follows the cursor.
        portrait.style.setProperty(
          "--face-light-x",
          `${50 + state.x * 30}%`
        );

        portrait.style.setProperty(
          "--face-light-y",
          `${50 + state.y * 30}%`
        );
      });

      if (stillMoving) {
        frameId = requestAnimationFrame(animate);
      } else {
        frameId = null;
      }
    }

    function requestUpdate() {
      if (frameId === null) {
        frameId = requestAnimationFrame(animate);
      }
    }

    function handleMouseMove(event) {
      if (event.pointerType === "touch") return;

      mouse.x = event.clientX;
      mouse.y = event.clientY;

      requestUpdate();
    }

    function handleMouseLeave() {
      mouse.x = window.innerWidth / 2;
      mouse.y = window.innerHeight / 2;

      requestUpdate();
    }

    window.addEventListener(
      "pointermove",
      handleMouseMove,
      { passive: true }
    );

    document.addEventListener(
      "pointerleave",
      handleMouseLeave
    );

    window.addEventListener(
      "scroll",
      requestUpdate,
      { passive: true }
    );

    window.addEventListener("resize", requestUpdate);

    requestUpdate();

    return () => {
      window.removeEventListener(
        "pointermove",
        handleMouseMove
      );

      document.removeEventListener(
        "pointerleave",
        handleMouseLeave
      );

      window.removeEventListener(
        "scroll",
        requestUpdate
      );

      window.removeEventListener(
        "resize",
        requestUpdate
      );

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      portraits.forEach((portrait) => {
        [
          "--rotate-x",
          "--rotate-y",
          "--face-x",
          "--face-y",
          "--face-yaw",
          "--face-pitch",
          "--face-light-x",
          "--face-light-y"
        ].forEach((property) => {
          portrait.style.removeProperty(property);
        });
      });
    };
  }, []);

  return null;
}
