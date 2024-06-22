import { ArrowRight, Loader } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "../lib/utils";

export function EmailForm({ buttonCss, inputCss }) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter an email address.");
      return;
    }

    setIsLoading(true);
    const res = await fetch(import.meta.env.PUBLIC_EMAIL_SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ email }).toString(),
    });

    console.log("EmailForm handleSubmit", res);

    if (res.ok) {
      setEmail("");
      toast.success("Subscribed successfully!");
    } else {
      toast.error("Failed to subscribe. Please try again later.");
    }

    setIsLoading(false);
  };

  console.log("EmailForm render");
  const Icon = isLoading ? Loader : ArrowRight;

  return (
    <form className="flex items-center">
      <input
        type="email"
        placeholder="Email address"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        className={cn(inputCss)}
      />

      <button
        className={cn(
          "focus-visible:ring-ring inline-flex h-10 items-center justify-center whitespace-nowrap rounded-3xl bg-accent-300 px-5 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          buttonCss || "",
        )}
        onClick={handleSubmit}
        disabled={isLoading}
      >
        Subscribe
        {isLoading ? (
          <Loader className="ml-6 size-4 animate-spin" />
        ) : (
          <ArrowRight className="ml-6 size-4" />
        )}
      </button>
    </form>
  );
}
