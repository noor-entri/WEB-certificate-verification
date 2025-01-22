import React from "react";
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';

import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

interface PDFViewerProps {
    fileURL: string;
    width: number;
}

const PDFViewer: React.FC<PDFViewerProps> = ({
    fileURL,
    width,
}) => {

    return (
        <Document
            file={fileURL}
            className="w-full h-full"
            loading="Loading certificate"
            error="An error occurred while loading the certificate"
        >
            <Page
                pageNumber={1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                width={width}
            />
        </Document>
    );
}

export default PDFViewer;