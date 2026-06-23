import { cn } from "@opal/utils";

// Prelude-style text wordmark: uppercase, letter-spaced, DM Sans semibold, gold.
// Replaces the prior Three Crowns logo images (wordmark.png / mark.svg), which
// rendered with issues. `folded` shows a compact "TC" monogram for the collapsed
// sidebar; otherwise the full "Three Crowns" (uppercased via CSS).
export default function ThreeCrownsWordmark({
  size = 16,
  className,
}: {
  folded?: boolean; // accepted for caller compatibility; wordmark is the same either way
  size?: number;
  className?: string;
}) {
  return (
    <span
      aria-label="Onyx"
      className={cn("select-none whitespace-nowrap shrink-0", className)}
      style={{
        color: "var(--tc-gold, #b49a56)",
        fontFamily:
          "var(--font-hanken-grotesk), 'DM Sans', system-ui, sans-serif",
        fontSize: size,
        lineHeight: 1.1,
        letterSpacing: "0.09em",
        textTransform: "uppercase",
        fontWeight: 600,
      }}
    >
      Onyx
    </span>
  );
}
