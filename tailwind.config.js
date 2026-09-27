/** Design tokens from the static reference. Palette is replaced, not extended. */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  experimental: { optimizeUniversalDefaults: true },
  corePlugins: {
    filter: false,
    blur: false,
    dropShadow: false,
    backdropFilter: false,
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
    gradientColorStops: false,
  },
  theme: {
    transitionProperty: {
      none: "none",
      all: "all",
      DEFAULT:
        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform",
      colors:
        "color, background-color, border-color, text-decoration-color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      paper: "#F5F4F0",
      ink: "#111111",
      gray: { 400: "rgba(17,17,17,0.4)" },
    },
    extend: {
      borderColor: { DEFAULT: "rgba(17,17,17,0.1)" },
      ringColor: { DEFAULT: "rgba(17,17,17,0.5)" },
      ringOffsetColor: { DEFAULT: "#F5F4F0" },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 0 rgba(17,17,17,0.04), 0 8px 24px -12px rgba(17,17,17,0.18)",
        "soft-lg":
          "0 1px 0 rgba(17,17,17,0.04), 0 16px 32px -12px rgba(17,17,17,0.25)",
        "soft-paper":
          "0 1px 0 rgba(245,244,240,0.04), 0 8px 24px -12px rgba(245,244,240,0.18)",
      },
      animation: {
        "drift-1": "drift 6s ease-in-out infinite alternate",
        "drift-2": "drift 7s ease-in-out infinite alternate-reverse",
        "drift-3": "drift 8s ease-in-out infinite alternate",
        "drift-4": "drift 9s ease-in-out infinite alternate-reverse",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "svg-grid":
          "url(\"data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M64 0L0 0 0 64' fill='none' stroke='rgba(17,17,17,0.05)' stroke-width='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
