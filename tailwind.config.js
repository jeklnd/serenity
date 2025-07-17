/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'playful': ['Fredoka One', 'cursive'],
                'sans': ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                // Primary brand color - Yellow (#F5C800) - 36.32%
                sy: {
                    50: "#fefce8",
                    100: "#fef9c3",
                    200: "#fef08a",
                    300: "#fde047",
                    400: "#facc15",
                    500: "#f5c800", // Main brand color
                    600: "#eab308",
                    700: "#ca8a04",
                    800: "#a16207",
                    900: "#854d0e",
                },
                // Secondary accent - Orange (#F0490D) - 28.53%
                orange: {
                    50: "#fff7ed",
                    100: "#ffedd5",
                    200: "#fed7aa",
                    300: "#fdba74",
                    400: "#fb923c",
                    500: "#f0490d", // Secondary accent
                    600: "#ea580c",
                    700: "#c2410c",
                    800: "#9a3412",
                    900: "#7c2d12",
                },
                // Success/Nature - Green (#208D16) - 27.69%
                green: {
                    50: "#f0fdf4",
                    100: "#dcfce7",
                    200: "#bbf7d0",
                    300: "#86efac",
                    400: "#4ade80",
                    500: "#208d16", // Success color
                    600: "#16a34a",
                    700: "#15803d",
                    800: "#166534",
                    900: "#14532d",
                },
                // Trust/Professional - Blue (#0077CB) - 6.94%
                blue: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#0077cb", // Trust color
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a",
                },
                // Subtle accent - Light Yellow (#FABC01) - 0.52%
                accent: {
                    50: "#fefce8",
                    100: "#fef9c3",
                    200: "#fef08a",
                    300: "#fde047",
                    400: "#facc15",
                    500: "#fabc01", // Subtle accent
                    600: "#eab308",
                    700: "#ca8a04",
                    800: "#a16207",
                    900: "#854d0e",
                },
            },
        },
    },
    plugins: [],
};
