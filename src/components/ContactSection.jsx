import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils.js";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Reach out to Kayastha Parivar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4>Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    meow@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4>Phone</h4>
                  <a
                    href="tel:+9176281723687"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +9176281723687
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4>Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Lucknow, India
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4 "> connect with us </h4>
              <div className="flex space-x-4 justify-center">
                <a>
                  <Linkedin />
                </a>
                <a>
                  <Instagram />
                </a>
                <a>
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a message </h3>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault(); // prevents page reload
                alert("Message submitted successfully!");
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-small font-medium mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Aditya Srivastva"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-small font-medium mb-2"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="abc@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-small font-medium mb-2"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="send message..."
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
