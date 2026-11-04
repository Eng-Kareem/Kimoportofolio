
import { useEffect, useState } from "react";
import {
  FileUser,
  Eye,
  Download,
  X,
  ExternalLink,
  ShieldCheck
} from "lucide-react";

import "./CVViewer.css";

const CV_URL = "/Karim_Elkhouly_CV.pdf";

export default function CVViewer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen]);

  return (
    <>
      <div className="cv-feature">
        <div className="cv-feature-icon">
          <FileUser size={35} />
        </div>

        <div className="cv-feature-content">
          <div className="cv-feature-status">
            <ShieldCheck size={15} />
            DOCUMENT AVAILABLE
          </div>

          <h3>MY CURRICULUM VITAE</h3>

          <p>
            Explore my professional background,
            technical skills, education and experience.
          </p>
        </div>

        <div className="cv-feature-actions">
          <button
            type="button"
            className="cv-action cv-view-btn"
            onClick={() => setIsOpen(true)}
          >
            <Eye size={18} />
            VIEW CV
          </button>

          <a
            href={CV_URL}
            download="Karim_Elkhouly_CV.pdf"
            className="cv-action cv-download-btn"
          >
            <Download size={18} />
            DOWNLOAD CV
          </a>
        </div>
      </div>

      {isOpen && (
        <div
          className="cv-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div
            className="cv-modal"
            role="dialog"
            aria-modal="true"
            aria-label="CV document preview"
          >
            <div className="cv-modal-header">
              <div className="cv-modal-title">
                <FileUser size={24} />

                <div>
                  <strong>KARIM ELKHOULY</strong>
                  <span>CURRICULUM VITAE / PDF</span>
                </div>
              </div>

              <button
                type="button"
                className="cv-modal-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close CV preview"
              >
                <X size={23} />
              </button>
            </div>

            <div className="cv-modal-body">
              <iframe
                src={`${CV_URL}#toolbar=1`}
                title="Karim Elkhouly Curriculum Vitae"
                className="cv-pdf-frame"
              />
            </div>

            <div className="cv-modal-footer">
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-modal-link"
              >
                <ExternalLink size={17} />
                OPEN FULL SCREEN
              </a>

              <a
                href={CV_URL}
                download="Karim_Elkhouly_CV.pdf"
                className="cv-action cv-download-btn"
              >
                <Download size={17} />
                DOWNLOAD PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
