
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clapperboard, FastForward } from "lucide-react";
import "./MotionDirector.css";

gsap.registerPlugin(ScrollTrigger);

const SCENES = [
  { id: "home", number: "00", label: "IDENTITY" },
  { id: "projects", number: "01", label: "BUILT SYSTEMS" },
  { id: "about", number: "02", label: "THE HUMAN" },
  { id: "experience", number: "03", label: "MY JOURNEY" },
  { id: "skills", number: "04", label: "CAPABILITIES" },
  { id: "contact", number: "05", label: "TRANSMISSION" }
];

export default function MotionDirector() {
  const [introVisible, setIntroVisible] = useState(true);
  const [activeScene, setActiveScene] = useState(SCENES[0]);

  const introTimeline = useRef(null);
  const progressBar = useRef(null);
  const sceneFlash = useRef(null);
  const cursorDot = useRef(null);
  const cursorHalo = useRef(null);
  const lastScene = useRef("home");

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    const oldOverflow = document.body.style.overflow;
    let introFinished = false;

    const context = gsap.context(() => {
      // ============================================
      // HERO ENTRANCE TIMELINE
      // ============================================

      const hero = gsap.timeline({ paused: true });
      const title = document.querySelector(".future-hero-title");

      if (!reducedMotion) {
        hero
          .fromTo(
            ".system-label, .hero-identity-row",
            {
              autoAlpha: 0,
              y: 25,
              filter: "blur(8px)"
            },
            {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.7,
              stagger: 0.12,
              ease: "power3.out"
            }
          )

          .fromTo(
            ".future-hero-title",
            {
              autoAlpha: 0,
              y: 110,
              rotateX: -12,
              filter: "blur(13px)"
            },
            {
              autoAlpha: 1,
              y: 0,
              rotateX: 0,
              filter: "blur(0px)",
              duration: 1.25,
              ease: "expo.out"
            },
            "-=0.3"
          )

          .fromTo(
            ".hero-name-block, .future-hero-description, .future-hero-buttons, .hero-stats",
            {
              autoAlpha: 0,
              y: 40
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.11,
              ease: "power3.out"
            },
            "-=0.75"
          )

          .fromTo(
            ".hero-right",
            {
              autoAlpha: 0,
              x: 100,
              rotateY: 13,
              scale: 0.88
            },
            {
              autoAlpha: 1,
              x: 0,
              rotateY: 0,
              scale: 1,
              duration: 1.45,
              ease: "expo.out"
            },
            0.35
          );
      }

      // ============================================
      // CINEMATIC INTRO
      // ============================================

      function finishIntro() {
        if (introFinished) return;

        introFinished = true;
        document.body.style.overflow = oldOverflow;

        setIntroVisible(false);
        hero.play(0);
      }

      if (reducedMotion) {
        finishIntro();
      } else {
        document.body.style.overflow = "hidden";

        const intro = gsap.timeline({
          onComplete: finishIntro
        });

        introTimeline.current = intro;

        intro
          .fromTo(
            ".cin-intro-symbol",
            {
              scale: 0.6,
              opacity: 0,
              rotate: -20
            },
            {
              scale: 1,
              opacity: 1,
              rotate: 0,
              duration: 0.65,
              ease: "back.out(1.6)"
            }
          )

          .fromTo(
            ".cin-intro-line, .cin-intro-subline",
            {
              opacity: 0,
              y: 38,
              filter: "blur(9px)"
            },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              stagger: 0.13,
              duration: 0.6,
              ease: "power3.out"
            },
            "-=0.3"
          )

          .fromTo(
            ".cin-intro-load > span",
            {
              scaleX: 0
            },
            {
              scaleX: 1,
              duration: 1.0,
              ease: "power2.inOut"
            },
            "-=0.2"
          )

          .to(
            ".cin-intro-panel",
            {
              yPercent: -105,
              duration: 0.95,
              ease: "power4.inOut"
            },
            "+=0.05"
          )

          .to(
            ".cin-intro",
            {
              autoAlpha: 0,
              duration: 0.1
            },
            "-=0.2"
          );
      }

      if (reducedMotion) return;

      // ============================================
      // SECTION TITLE REVEALS
      // ============================================

      document
        .querySelectorAll(".future-section")
        .forEach((section) => {
          const heading = section.querySelector(
            ".section-heading-future"
          );

          if (heading) {
            gsap.fromTo(
              heading,
              {
                autoAlpha: 0,
                y: 85,
                clipPath: "inset(0 0 100% 0)",
                filter: "blur(8px)"
              },
              {
                autoAlpha: 1,
                y: 0,
                clipPath: "inset(0 0 0% 0)",
                filter: "blur(0px)",
                duration: 1.15,
                ease: "power4.out",
                clearProps: "all",
                scrollTrigger: {
                  trigger: heading,
                  start: "top 88%",
                  once: true
                }
              }
            );
          }
        });

      // ============================================
      // HERO SCROLL-OUT TRANSITION
      // ============================================

      if (title) {
        gsap.to(".hero-left", {
          y: -105,
          opacity: 0.28,
          ease: "none",
          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        });

        gsap.to(".holo-scene", {
          y: 90,
          scale: 0.88,
          ease: "none",
          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        });
      }

      // ============================================
      // PROJECT MONTAGE
      // ============================================

      gsap.utils
        .toArray(".future-project-card")
        .forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              autoAlpha: 0,
              y: 85,
              clipPath: "inset(0 0 100% 0)"
            },
            {
              autoAlpha: 1,
              y: 0,
              clipPath: "inset(0 0 0% 0)",
              duration: 1.05,
              delay: (index % 2) * 0.12,
              ease: "power4.out",
              clearProps:
                "transform,clipPath,opacity,visibility",
              scrollTrigger: {
                trigger: card,
                start: "top 91%",
                once: true
              }
            }
          );

          const image = card.querySelector(
            ".future-project-visual > img"
          );

          if (image) {
            gsap.fromTo(
              image,
              {
                yPercent: -7,
                scale: 1.08
              },
              {
                yPercent: 7,
                scale: 1.08,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.2
                }
              }
            );
          }
        });

      // ============================================
      // ABOUT + TERMINAL TRANSITIONS
      // ============================================

      [
        [".about-identity-visual", -80],
        [".about-future-content", 80],
        [".ai-terminal", 0],
        [".research-strip", 0]
      ].forEach(([selector, x]) => {
        gsap.utils.toArray(selector).forEach((el) => {
          gsap.fromTo(
            el,
            {
              autoAlpha: 0,
              x,
              y: x === 0 ? 65 : 25,
              scale: 0.94
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 1.15,
              ease: "power3.out",
              clearProps: "all",
              scrollTrigger: {
                trigger: el,
                start: "top 87%",
                once: true
              }
            }
          );
        });
      });

      // ============================================
      // TIMELINE + SKILLS + CONTACT CARDS
      // ============================================

      [
        ".timeline-entry-card",
        ".future-skill-card",
        ".future-contact-card"
      ].forEach((selector) => {
        gsap.utils.toArray(selector).forEach((el, index) => {
          gsap.fromTo(
            el,
            {
              autoAlpha: 0,
              y: 70,
              rotateX: -10,
              scale: 0.94
            },
            {
              autoAlpha: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              duration: 1.05,
              delay: (index % 3) * 0.1,
              ease: "power3.out",
              clearProps: "all",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                once: true
              }
            }
          );
        });
      });

      // ============================================
      // CONTACT SCENE FINALE
      // ============================================

      gsap.fromTo(
        ".contact-intro",
        {
          autoAlpha: 0,
          scale: 0.84,
          y: 70,
          filter: "blur(8px)"
        },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.3,
          ease: "expo.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".contact-intro",
            start: "top 87%",
            once: true
          }
        }
      );

      gsap.fromTo(
        ".contact-section-future",
        {
          backgroundPosition: "50% -100px"
        },
        {
          backgroundPosition: "50% 50px",
          ease: "none",
          scrollTrigger: {
            trigger: "#contact",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    });

    // ============================================
    // SCROLL PROGRESS
    // ============================================

    const progress = ScrollTrigger.create({
      start: 0,
      end: () => ScrollTrigger.maxScroll(window) || 1,
      onUpdate: (self) => {
        if (progressBar.current) {
          progressBar.current.style.transform =
            `scaleX(${self.progress})`;
        }
      }
    });

    // ============================================
    // CHAPTER TRACKING + SCENE CUTS
    // ============================================

    function changeScene(scene) {
      setActiveScene(scene);

      if (
        reducedMotion ||
        lastScene.current === scene.id
      ) {
        return;
      }

      lastScene.current = scene.id;

      if (!sceneFlash.current) return;

      gsap.killTweensOf(sceneFlash.current);

      gsap.fromTo(
        sceneFlash.current,
        {
          xPercent: -105,
          opacity: 0.68
        },
        {
          xPercent: 105,
          opacity: 0,
          duration: 0.72,
          ease: "power4.inOut"
        }
      );
    }

    const sceneTriggers = SCENES.map((scene) =>
      ScrollTrigger.create({
        trigger: `#${scene.id}`,
        start: "top 48%",
        end: "bottom 48%",
        onEnter: () => changeScene(scene),
        onEnterBack: () => changeScene(scene)
      })
    );

    // ============================================
    // SMOOTH REACTIVE CURSOR
    // ============================================

    let removePointer = () => {};

    if (
      finePointer &&
      !reducedMotion &&
      cursorDot.current &&
      cursorHalo.current
    ) {
      const dotX = gsap.quickTo(
        cursorDot.current,
        "x",
        {
          duration: 0.12,
          ease: "power3.out"
        }
      );

      const dotY = gsap.quickTo(
        cursorDot.current,
        "y",
        {
          duration: 0.12,
          ease: "power3.out"
        }
      );

      const haloX = gsap.quickTo(
        cursorHalo.current,
        "x",
        {
          duration: 0.36,
          ease: "power3.out"
        }
      );

      const haloY = gsap.quickTo(
        cursorHalo.current,
        "y",
        {
          duration: 0.36,
          ease: "power3.out"
        }
      );

      function onMove(event) {
        dotX(event.clientX);
        dotY(event.clientY);
        haloX(event.clientX);
        haloY(event.clientY);

        cursorDot.current?.classList.add("visible");
        cursorHalo.current?.classList.add("visible");

        const interactive =
          event.target instanceof Element &&
          Boolean(
            event.target.closest("a, button, input")
          );

        cursorHalo.current?.classList.toggle(
          "is-hovering",
          interactive
        );
      }

      function onLeave() {
        cursorDot.current?.classList.remove("visible");
        cursorHalo.current?.classList.remove("visible");
      }

      window.addEventListener(
        "pointermove",
        onMove,
        { passive: true }
      );

      document.addEventListener(
        "pointerleave",
        onLeave
      );

      removePointer = () => {
        window.removeEventListener(
          "pointermove",
          onMove
        );

        document.removeEventListener(
          "pointerleave",
          onLeave
        );
      };
    }

    // ============================================
    // REFRESH AFTER INITIAL RENDER
    // ============================================

    const refresh = () => ScrollTrigger.refresh();

    window.addEventListener("load", refresh);
    requestAnimationFrame(refresh);

    return () => {
      document.body.style.overflow = oldOverflow;
      introTimeline.current = null;

      window.removeEventListener(
        "load",
        refresh
      );

      removePointer();

      sceneTriggers.forEach((trigger) =>
        trigger.kill()
      );

      progress.kill();
      context.revert();
    };
  }, []);

  // ============================================
  // SKIP INTRO BUTTON
  // ============================================

  function skipIntro() {
    if (introTimeline.current) {
      introTimeline.current.progress(1);
    } else {
      document.body.style.overflow = "";
      setIntroVisible(false);
    }
  }

  return (
    <>
      {/* CINEMATIC INTRO */}

      {introVisible && (
        <div
          className="cin-intro"
          role="status"
          aria-label="Portfolio opening sequence"
        >
          <div className="cin-intro-panel">
            <div className="cin-intro-content">
              <div className="cin-intro-symbol">
                <Clapperboard size={32} />
              </div>

              <div className="cin-intro-kicker">
                A DIGITAL SHOWREEL / 2026
              </div>

              <div className="cin-intro-line">
                KAREEM<span>_OS</span>
              </div>

              <div className="cin-intro-subline">
                ENGINEERING THE FUTURE.
              </div>

              <div className="cin-intro-load">
                <span />
              </div>

              <div className="cin-intro-status">
                INITIALIZING VISUAL EXPERIENCE
              </div>
            </div>

            <button
              type="button"
              className="cin-skip"
              onClick={skipIntro}
            >
              SKIP INTRO
              <FastForward size={16} />
            </button>
          </div>
        </div>
      )}

      {/* MOVING PROGRESS LINE */}

      <div
        className="cin-progress"
        aria-hidden="true"
      >
        <div ref={progressBar} />
      </div>

      {/* TRANSITION EFFECT */}

      <div
        className="cin-scene-flash"
        ref={sceneFlash}
        aria-hidden="true"
      />

      {/* CINEMATIC OVERLAYS */}

      <div
        className="cin-film-grain"
        aria-hidden="true"
      />

      <div
        className="cin-letterbox cin-letterbox-top"
        aria-hidden="true"
      />

      <div
        className="cin-letterbox cin-letterbox-bottom"
        aria-hidden="true"
      />

      {/* SCENE NUMBER */}

      <div
        className="cin-scene-hud"
        aria-live="off"
      >
        <span className="cin-hud-line" />

        <span className="cin-hud-number">
          {activeScene.number}
        </span>

        <span className="cin-hud-label">
          {activeScene.label}
        </span>

        <span className="cin-hud-dot" />
      </div>

      {/* CONTINUOUS TECHNOLOGY TICKER */}

      <div
        className="cin-ticker"
        aria-hidden="true"
      >
        <div className="cin-ticker-track">
          <span>
            SOFTWARE ENGINEERING <i>✦</i>
            ARTIFICIAL INTELLIGENCE <i>✦</i>
            DIGITAL EXPERIENCES <i>✦</i>
            FULL-STACK DEVELOPMENT <i>✦</i>
            FUTURE SYSTEMS <i>✦</i>
          </span>

          <span>
            SOFTWARE ENGINEERING <i>✦</i>
            ARTIFICIAL INTELLIGENCE <i>✦</i>
            DIGITAL EXPERIENCES <i>✦</i>
            FULL-STACK DEVELOPMENT <i>✦</i>
            FUTURE SYSTEMS <i>✦</i>
          </span>
        </div>
      </div>

      {/* INTERACTIVE CURSOR */}

      <div
        className="cin-cursor-dot"
        ref={cursorDot}
        aria-hidden="true"
      />

      <div
        className="cin-cursor-halo"
        ref={cursorHalo}
        aria-hidden="true"
      />
    </>
  );
}
