declare module 'react-pdf' {
    import { ComponentType } from 'react';
  
    export const Document: ComponentType<any>;
    export const Page: ComponentType<any>;
  
    export namespace pdfjs {
      function getDocument(
        src: string | Uint8Array | ArrayBuffer | object
      ): Promise<any>;
      let GlobalWorkerOptions: {
        workerSrc: string;
      };
    }
  }
  