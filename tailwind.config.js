/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                sy: {
                    100: "hsl(52, 100%, 90%)",
                    200: "hsl(50, 99%, 84%)",
                    300: "hsl(48, 98%, 76%)",
                    400: "hsl(46, 97%, 69%)",
                    500: "hsl(44, 95%, 61%)",
                    600: "hsl(42, 97%, 54%)",
                    700: "hsl(40, 98%, 46%)",
                    800: "hsl(38, 99%, 38%)",
                    900: "hsl(36, 100%, 30%)",
                },
            },
        },
    },
    plugins: [],
};
