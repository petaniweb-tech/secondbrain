declare module 'react-pdf' {
    import { ComponentType, ReactElement } from "react";

    interface Page {
      pageNumber: number;
      scale: number;
      className: string;
    }
    export const Document: ComponentType<{
      file: File;
      onLoadSuccess: ({ numPages }: { numPages: number }) => void;
      className: string;
      children: ReactElement<Page>;
    }>;

    export const Page: ComponentType<Page>;

    export namespace pdfjs {
      function getDocument(
        src: string | Uint8Array | ArrayBuffer | object
      ): Promise<unknown>;
      let GlobalWorkerOptions: {
        workerSrc: string;
      };
    }
  }
  