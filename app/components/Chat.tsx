"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Card } from "@/components/ui/card";
// import { Slider } from "@/components/ui/slider";
import { Send } from "lucide-react";
// import { useState } from "react";

export default function Chat() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          <div className="ml-auto max-w-[80%] rounded-lg bg-muted p-4">
            <p className="text-sm">Give me a summary of this document</p>
          </div>
          <div className="mr-auto max-w-[80%] rounded-lg bg-primary p-4">
            <p className="text-sm text-primary-foreground">
              This document appears to be &quot;The Tragedy of Romeo and
              Juliet&quot; by William Shakespeare, edited by Barbara A. Mowat
              and Paul Werstine. It&apos;s published by the Folger Shakespeare
              Library. The text includes explanatory notes, illustrations, and
              additional materials to help readers better understand the play.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t p-4">
        <div className="flex space-x-2">
          <Input
            placeholder="Ask a question about the document..."
            className="flex-1"
          />
          <Button size="icon">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          AI may produce inaccurate information about people, places, or facts.
        </p>
      </div>
    </div>
  );
}
