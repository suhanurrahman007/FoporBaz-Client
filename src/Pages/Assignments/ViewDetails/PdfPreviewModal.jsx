import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function PdfPreviewModal({ pdfUrl, isOpen, onClose }) {
  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-box">
        <button onClick={onClose} className="modal-close">
          Close
        </button>
        <Document file={pdfUrl}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}

export default PdfPreviewModal
