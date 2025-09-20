import PixelCard from "../lib/animation/PixelCard";
import { Upload } from "lucide-react";

export const ModelSpace = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30 flex items-center justify-center"
    >
      <div className="container mx-auto max-w-3xl flex justify-center">
        <PixelCard
          variant="pink"
          className="w-full p-12 flex items-center justify-center"
        >
          <div className="w-full flex flex-col items-center justify-center text-center space-y-6">
            <Upload className="w-12 h-12 text-primary" />
            <h3 className="text-2xl font-semibold">Upload Your Document</h3>
            <p className="text-muted-foreground text-sm max-w-md">
              Drop your contracts, agreements, or policies here and let our AI
              simplify them into plain language.
            </p>
            <label className="w-full max-w-md">
              <div className="border-2 border-dashed border-primary/50 rounded-xl p-10 cursor-pointer hover:border-primary transition flex flex-col items-center space-y-3 bg-white">
                <Upload className="w-8 h-8 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Click to upload or drag & drop
                </span>
                <input type="file" className="hidden" />
              </div>
            </label>
          </div>
        </PixelCard>
      </div>
    </section>
  );
};