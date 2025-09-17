import { FileUp, Scale, Lightbulb } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto w-1/2 h-40">
        <div className="mt-8">
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-primary/40 rounded-xl cursor-pointer hover:border-primary transition"
              >
                <FileUp className="w-10 h-10 text-primary mb-2" />
                <p className="text-sm text-muted-foreground">
                  Click to upload your legal document
                </p>
                <p className="text-xs text-muted-foreground">
                  PDF, DOCX, or TXT (max 5 MB)
                </p>
                <input id="file-upload" type="file" className="hidden" />
              </label>
            </div>
      </div>
    </section>
  );
};