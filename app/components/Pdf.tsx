'use client';

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ChevronLeft, ChevronRight, Minus, Plus, Upload } from "lucide-react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/4.7.76/pdf.worker.js`;


export default function PdfViewer() {
  const [zoom, setZoom] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setCurrentPage(1);
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please select a valid PDF file.");
    }
  }

  return (
    <div className="flex h-full flex-col border-r">
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            disabled={currentPage <= 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center space-x-2">
            <Input
              type="number"
              value={currentPage}
              onChange={(e) => setCurrentPage(Math.min(Math.max(1, Number(e.target.value)), numPages || 1))}
              className="w-16"
            />
            <span className="text-sm text-muted-foreground">
              / {numPages || 1}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentPage(Math.min(currentPage + 1, numPages || 1))}
            disabled={currentPage >= (numPages || 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setZoom(Math.max(zoom - 10, 50))}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Slider
            className="w-[100px]"
            value={[zoom]}
            min={50}
            max={200}
            step={10}
            onValueChange={(value) => setZoom(value[0])}
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setZoom(Math.min(zoom + 10, 200))}
          >
            <Plus className="h-4 w-4" />
          </Button>
          <span className="min-w-[4ch] text-sm text-muted-foreground">
            {zoom}%
          </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="h-4 w-4 mr-2" />
          Import PDF
        </Button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="application/pdf"
          className="hidden"
        />
      </div>
      <div className="flex-1 overflow-auto bg-muted/10 p-4">
        <Card className="mx-auto max-w-3xl shadow-sm">
          {pdfFile ? (
            <Document
              file={pdfFile}
              onLoadSuccess={onDocumentLoadSuccess}
              className="w-full"
            >
              <Page
                pageNumber={currentPage}
                scale={zoom / 100}
                className="w-full"
              />
            </Document>
          ) : (
            <div className="flex items-center justify-center h-[800px] text-muted-foreground">
              No PDF loaded. Please import a PDF file.
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
