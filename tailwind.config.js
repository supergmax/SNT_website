module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom brand colors
        brand: {
          primary: "#1a365d",
          secondary: "#2d3748",
          accent: "#ed8936",
          light: "#edf2f7",
          dark: "#1a202c",
        },
        // Document security theme colors
        security: {
          primary: "#f59e0b", // amber-500
          secondary: "#fbbf24", // amber-400
          success: "#10b981", // emerald-500
          danger: "#ef4444", // red-500
          warning: "#f59e0b", // amber-500
          info: "#3b82f6", // blue-500
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "var(--tw-prose-body)",
            '[class~="lead"]': {
              color: "var(--tw-prose-lead)",
            },
            a: {
              color: "var(--tw-prose-links)",
              textDecoration: "underline",
              fontWeight: "500",
            },
            strong: {
              color: "var(--tw-prose-bold)",
              fontWeight: "600",
            },
            "a strong": {
              color: "inherit",
            },
            "blockquote strong": {
              color: "inherit",
            },
            "thead th strong": {
              color: "inherit",
            },
            ol: {
              listStyleType: "decimal",
            },
            'ol[type="A"]': {
              listStyleType: "upper-alpha",
            },
            'ol[type="a"]': {
              listStyleType: "lower-alpha",
            },
            'ol[type="A" s]': {
              listStyleType: "upper-alpha",
            },
            'ol[type="a" s]': {
              listStyleType: "lower-alpha",
            },
            'ol[type="I"]': {
              listStyleType: "upper-roman",
            },
            'ol[type="i"]': {
              listStyleType: "lower-roman",
            },
            'ol[type="I" s]': {
              listStyleType: "upper-roman",
            },
            'ol[type="i" s]': {
              listStyleType: "lower-roman",
            },
            'ol[type="1"]': {
              listStyleType: "decimal",
            },
            ul: {
              listStyleType: "disc",
            },
            "ol > li::marker": {
              fontWeight: "400",
              color: "var(--tw-prose-counters)",
            },
            "ul > li::marker": {
              color: "var(--tw-prose-bullets)",
            },
            hr: {
              borderColor: "var(--tw-prose-hr)",
              borderTopWidth: 1,
            },
            blockquote: {
              fontWeight: "500",
              fontStyle: "italic",
              color: "var(--tw-prose-quotes)",
              borderLeftWidth: "0.25rem",
              borderLeftColor: "var(--tw-prose-quote-borders)",
              paddingLeft: "1em",
            },
            "blockquote p:first-of-type::before": {
              content: "open-quote",
            },
            "blockquote p:last-of-type::after": {
              content: "close-quote",
            },
            h1: {
              color: "var(--tw-prose-headings)",
              fontWeight: "800",
            },
            "h1 strong": {
              fontWeight: "900",
              color: "inherit",
            },
            h2: {
              color: "var(--tw-prose-headings)",
              fontWeight: "700",
            },
            "h2 strong": {
              fontWeight: "800",
              color: "inherit",
            },
            h3: {
              color: "var(--tw-prose-headings)",
              fontWeight: "600",
            },
            "h3 strong": {
              fontWeight: "700",
              color: "inherit",
            },
            h4: {
              color: "var(--tw-prose-headings)",
              fontWeight: "600",
            },
            "h4 strong": {
              fontWeight: "700",
              color: "inherit",
            },
            // ...
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
}

