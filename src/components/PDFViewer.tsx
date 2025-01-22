import React from "react";
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export default function PDFViewer({ fileURL }: { fileURL: string }) {
    return <Document file={fileURL}><Page pageNumber={1} /></Document>
}
