import { motion } from "framer-motion";
import { Download, Printer, X } from "lucide-react";
import * as htmlToImage from "html-to-image";
import jsPDF from "jspdf";
import { useRef, useEffect } from "react";
import logoSvg from "../../assets/images/logo.svg";

export default function PDFPreviewModal({ event, onClose }) {
  const pdfContentRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleDownload = async () => {
    if (!pdfContentRef.current) return;

    try {
      // html-to-image is much better with SVGs and aspect ratios
      const dataUrl = await htmlToImage.toJpeg(pdfContentRef.current, {
        quality: 0.95,
        backgroundColor: "#120d0f",
        pixelRatio: 2,
      });

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [pdfContentRef.current.offsetWidth * 2, pdfContentRef.current.offsetHeight * 2],
      });

      pdf.addImage(
        dataUrl,
        "JPEG",
        0,
        0,
        pdfContentRef.current.offsetWidth * 2,
        pdfContentRef.current.offsetHeight * 2
      );
      pdf.save(`${event.title.replace(/\s+/g, "_")}_Event_Details.pdf`);
    } catch (error) {
      console.error("PDF Generation Error:", error);
    }
  };

  const handlePrint = () => {
    const printContent = pdfContentRef.current;
    const windowUrl = "about:blank";
    const uniqueName = new Date().getTime();
    const windowName = "Print" + uniqueName;
    const printWindow = window.open(windowUrl, windowName, "left=50000,top=50000,width=0,height=0");

    const logoUrl = new URL(logoSvg, window.location.origin).href;

    printWindow.document.write(`
      <html>
        <head>
          <title>${event.title}</title>
          <style>
            body { margin: 0; background: #120d0f; color: #fff; font-family: sans-serif; }
            .print-container { padding: 40px; max-width: 800px; margin: 0 auto; }
            .pdf-header-container { display: flex; align-items: center; gap: 20px; border-bottom: 1px solid rgba(224,169,109,0.3); padding-bottom: 20px; margin-bottom: 30px; }
            .pdf-logo { height: 64px; width: 64px; }
            .pdf-brand-text { display: flex; flex-direction: column; }
            .pdf-brand-top { text-transform: uppercase; letter-spacing: 0.3em; font-size: 10px; color: rgba(227,213,202,0.8); }
            .pdf-brand-main { font-size: 24px; color: #e0a96d; text-transform: uppercase; letter-spacing: 0.1em; font-family: serif; }
            .event-image-container { width: 100%; position: relative; padding-top: 56.25%; /* 16:9 Aspect Ratio */ overflow: hidden; border: 1px solid rgba(255,255,255,0.1); }
            .event-image { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; }
            h1 { font-size: 36px; color: #f5ebe0; margin-top: 24px; font-family: serif; }
            .meta { display: flex; gap: 20px; color: #d4cfcc; margin-top: 10px; font-size: 16px; }
            .eyebrow { color: #e0a96d; text-transform: uppercase; letter-spacing: 0.3em; font-size: 12px; margin-top: 20px; }
            .description { color: #d4cfcc; margin-top: 30px; line-height: 1.6; font-size: 16px; }
            .footer { color: rgba(212,207,204,0.5); margin-top: 40px; font-size: 12px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; }
          </style>
        </head>
        <body>
          <div class="print-container">
            ${printContent.innerHTML}
          </div>
          <script>
            const imgs = document.getElementsByTagName('img');
            for (let img of imgs) {
              if (img.classList.contains('pdf-logo')) {
                img.src = '${logoUrl}';
              }
            }
            window.onload = function() {
              window.print();
              window.onafterprint = function() {
                window.close();
              };
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/80 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#120d0f] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(224,169,109,0.1),transparent_40%)]" />

        <div className="relative z-10 flex items-center justify-between border-b border-white/10 p-6">
          <h3 className="font-display text-2xl text-linen">Event PDF Preview</h3>
          <button
            onClick={onClose}
            className="rounded-full bg-white/5 p-2 text-sand transition hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative z-10 max-h-[70vh] overflow-y-auto p-6">
          <div
            ref={pdfContentRef}
            className="border border-gold/20 bg-gradient-to-br from-velvet/20 to-obsidian p-8"
          >
            <div className="pdf-header-container mb-8 flex items-center gap-5 border-b border-gold/30 pb-6">
              <img src={logoSvg} alt="Logo" className="pdf-logo h-16 w-16" />
              <div className="pdf-brand-text">
                <p className="pdf-brand-top text-[10px] uppercase tracking-[0.3em] text-sand/80">House of</p>
                <p className="pdf-brand-main font-display text-2xl uppercase tracking-[0.1em] text-gold">Aphrodisia</p>
              </div>
            </div>

            <div className="event-image-container relative w-full overflow-hidden" style={{ paddingBottom: "56.25%", background: "#000" }}>
              <img
                src={event.image}
                alt={event.title}
                className="event-image absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="mt-8">
              <div className="meta flex gap-4 text-sm text-sand/80">
                <span>{event.date}</span>
                <span>{event.location}</span>
              </div>
              <p className="eyebrow mt-4 text-xs uppercase tracking-[0.3em] text-gold/70">
                {event.eyebrow}
              </p>
              <h1 className="mt-2 font-display text-4xl text-linen">{event.title}</h1>
              <div className="description mt-6 space-y-4 text-sand/90">
                {event.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <p className="footer mt-10 border-t border-white/10 pt-6 text-xs text-sand/50">
                See you in the Temple · +393297423897 · @templeofaphrodisia
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-3 border-t border-white/10 p-6 sm:flex-row sm:justify-end">
          <button
            onClick={onClose}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-widest text-sand transition hover:bg-white/10 sm:flex-none"
          >
            Close
          </button>
          <div className="flex flex-1 gap-3 sm:flex-none">
            <button
              onClick={handlePrint}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-widest text-linen transition hover:bg-white/10 sm:flex-none"
            >
              <Printer className="h-4 w-4" />
              Print
            </button>
            <button
              onClick={handleDownload}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold/10 border border-gold/25 px-6 py-3 text-sm uppercase tracking-widest text-linen transition hover:bg-gold/20 sm:flex-none"
            >
              <Download className="h-4 w-4" />
              Save PDF
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
