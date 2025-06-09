
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
        nave: {
          blue: "#2563EB",
          lightblue: "#38BDF8",
          green: "#10B981",
          purple: "#8B5CF6",
          pink: "#EC4899",
          orange: "#F97316",
          yellow: "#FBBF24",
          space: "#0F172A",
          star: "#FBBF24",
          cosmic: {
            orange: "#FF9900",
            pink: "#FF447F",
            magenta: "#F471B5", 
            purple: "#A020F0",
            violet: "#8A2BE2",
            blue: "#00BFFF",
            cyan: "#1E90FF"
          },
          // Nuevos colores personalizados
          gradient: {
            start: "#1e2674",
            end: "#000320"
          },
          subtitle: "#f25cca"
        }
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "space-stars": "url('/images/space-bg.svg')",
        "gradient-cosmic": "linear-gradient(135deg, #FF9900, #FF447F, #A020F0, #00BFFF)",
        "gradient-sunrise": "linear-gradient(90deg, #FF9900, #FF447F)",
        "gradient-sunset": "linear-gradient(90deg, #8A2BE2, #1E90FF)",
        "gradient-nebula": "linear-gradient(to right, #FF447F, #A020F0)",
        // Nuevo degradado principal con tus colores
        "gradient-main": "linear-gradient(135deg, #1e2674, #000320)",
        "gradient-main-vertical": "linear-gradient(to bottom, #1e2674, #000320)"
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-gentle": "pulse 3s ease-in-out infinite",
        "twinkle": "twinkle 4s alternate infinite",
        "orbit": "orbit 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        twinkle: {
          "0%": { opacity: "0.4", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1.2)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(10px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(10px) rotate(-360deg)" },
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
