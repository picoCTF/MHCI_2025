const { heroui, colors } = require("@heroui/react");
// import './assets/fonts/GeistMono/variable/';
// import './src/assets/fonts/Geist/variable';

/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/geist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    spacing: {
      '0': "0px",
      '1': "4px",
      '2': "8px",
      '3': "12px",
      '4': "16px",
      '5': "20px",
      '6': "24px",
      '8': "32px",
      '9': "36px",
      '10': "40px",
      '12': "48px",
      '14': "56px",
      '16': "64px",
      '20': "80px",
      '24': "96px",
      '32': "128px"
    },
    extend: {
      fontFamily: {
        'sans': ['Geist'],
        'mono': ['Geist Mono'],
        'icon': ['Material Symbols Outlined']
      },
      fontSize: {
        'icon-xs': "20px",
        'icon-sm': "24px",
        'icon-md': "40px",
        'icon-lg': "48px"
      },
      theme: {
        extends: {
          colors: {
            white: "#FFFFFF",
            black: "#000000",
            blue: {
              50: "#E4E7F7",
              100: "#C5CEF9",
              200: "#A9B6F6",
              300: "#8294F2",
              400: "#6A80EF",
              500: "#4560EB",
              600: "#3F57D6",
              700: "#3144A7",
              800: "#263581",
              900: "#1D2863"
            },
            cyan: {
              50: "#F0FCFF",
              100: "#E6FAFE",
              200: "#D7F8FE",
              300: "#C3F4FD",
              400: "#A5EEFD",
              500: "#7EE7FC",
              600: "#06B7DB",
              700: "#09AACD",
              800: "#0E8AAA",
              900: "#053B48"
            },
            green: {
              50: "#E0F5E7",
              100: "#C4EBCF",
              200: "#A8E1B8",
              300: "#80D397",
              400: "#67CB83",
              500: "#41BE64",
              600: "#31914C",
              700: "#27723C",
              800: "#174424",
              900: "#0D2614"
            },
            pink: {
              50: "#FFEDFA",
              100: "#FFDCF5",
              200: "#FFB8EB",
              300: "#FF95E1",
              400: "#FF71D7",
              500: "#FF4ECD",
              600: "#CC3EA4",
              700: "#992F7B",
              800: "#661F52",
              900: "#331029"
            },
            purple: {
              50: "#F2EAFA",
              100: "#E4D4F4",
              200: "#C9A9E9",
              300: "#AE7EDE",
              400: "#9353D3",
              500: "#7828C8",
              600: "#6020A0",
              700: "#481878",
              800: "#301050",
              900: "#180828"
            },
            red: {
              50: "#FEE7E7",
              100: "#FBB4B5",
              200: "#F99092",
              300: "#F65D60",
              400: "#F53D41",
              500: "#F20D11",
              600: "#CB0B0E",
              700: "#A5090B",
              800: "#7E0709",
              900: "#570506"
            },
            yellow: {
              50: "#FDF1D8",
              100: "#FAE1B0",
              200: "#F8D38A",
              300: "#F5BF54",
              400: "#F3B333",
              500: "#F0A000",
              600: "#DA9100",
              700: "#8F681C",
              800: "#845800",
              900: "#654400"
            },
            zinc: {
              50: "#FAFAFA",
              100: "#F4F4F5",
              200: "#E4E4E7",
              300: "#D4D4D8",
              400: "#A1A1AA",
              500: "#71717A",
              600: "#52525B",
              700: "#3F3F46",
              800: "#27272A",
              900: "#18181B"
            }
          }
        }
      }
    },
  },
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [heroui({
    prefix: "pico",
    addCommonColors: true,
    layout: {
      borderWidth: {
        small: 1,
        medium: 2,
        large: 3
      },
      fontSize: {
        tiny: "0.75rem", // text-tiny
        small: "0.875rem", // text-small
        medium: "1rem", // text-medium
        large: "1.125rem", // text-large

        // NOTE - The 2xl - 5xl convention in the Figma file was changed to x2l - x5l here 
        //    since these vars can't start with a number
        base: "1rem", // text-base

        xs: "0.75rem", // text-xs
        sm: "0.875rem", // text-sm
        md: "1rem", // text-md
        lg: "1.125rem", // text-lg
        xl: "1.25rem", // text-xl
        '2xl': "1.5rem", // text-x2l
        '3xl': "1.875rem", // text-x3l
        '4xl': "2.25rem", // text-x4l
        '5xl': "2.875rem" // text-x5l
      },
      lineHeight: {
        tiny: "1rem", // text-tiny
        small: "1.25rem", // text-small
        medium: "1.5rem", // text-medium
        large: "1.75rem", // text-large

        // NOTE - The 2xl - 5xl convention in the Figma file was changed to x2l - x5l here 
        //    since these vars can't start with a number
        base: "1.5rem", // text-base
        xs: "1rem", // text-xs
        sm: "1.25rem", // text-sm
        md: "1.5rem", // text-md
        lg: "1.75rem", // text-lg
        xl: "1.75rem", // text-xl
        '2xl': "2rem", // text-2xl
        '3xl': "2.25rem", // text-3xl
        '4xl': "2.5rem", // text-4xl
        '5xl': "2.875rem" // text-5xl
      },
      radius: {
        small: "8px", // rounded-small
        medium: "12px", // rounded-medium
        large: "14px", // rounded-large
      }
    },
    themes: {
      light: {
        colors: {
          background: "#F6F7FB",
          content1: {
            base: "#FFFFFF",
            foreground: "#11181C"
          },
          content2: {
            base: "#F4F4F5",
            foreground: "#27272A"
          },
          content3: {
            base: "#D4D4D8",
            foreground: "#3F3F46"
          },
          content4: {
            base: "#D4D4D8",
            foreground: "#52525B"
          },
          focus: "#4560EB",
          divider: "#11111126",
          foreground: {
            base: "#11181C",
            50: "#FAFAFA",
            100: "#F4F4F5",
            200: "#E4E4E7",
            300: "#D4D4D8",
            400: "#A1A1AA",
            500: "#71717A",
            600: "#52525B",
            700: "#3F3F46",
            800: "#27272A",
            900: "#18181B"
          },
          default: {
            base: "#D4D4D8",
            foreground: "#000000",
            50: "#FAFAFA",
            100: "#F4F4F5",
            200: "#E4E4E7",
            300: "#D4D4D8",
            400: "#A1A1AA",
            500: "#71717A",
            600: "#52525B",
            700: "#3F3F46",
            800: "#27272A",
            900: "#18181B"
          },
          primary: {
            base: "#4560EB",
            foreground: "#FFFFFF",
            50: "#E4E7F7",
            100: "#C5CEF9",
            200: "#A9B6F6",
            300: "#8294F2",
            400: "#6A80EF",
            500: "#4560EB",
            600: "#3F57D6",
            700: "#3144A7",
            800: "#263581",
            900: "#1D2863"
          },
          secondary: {
            base: "#7828C8",
            foreground: "#FFFFFF",
            50: "#F2EAFA",
            100: "#E4D4F4",
            200: "#C9A9E9",
            300: "#AE7EDE",
            400: "#9353D3",
            500: "#7828C8",
            600: "#6020A0",
            700: "#481878",
            800: "#301050",
            900: "#180828"
          },
          success: {
            base: "#41BE64",
            foreground: "#000000",
            50: "#E0F5E7",
            100: "#C4EBCF",
            200: "#A8E1B8",
            300: "#80D397",
            400: "#67CB83",
            500: "#41BE64",
            600: "#31914C",
            700: "#27723C",
            800: "#174424",
            900: "#0D2614"
          },
          warning: {
            base: "#F0A000",
            foreground: "#DA9100",
            50: "#FDF1D8",
            100: "#FAE1B0",
            200: "#F8D38A",
            300: "#F5BF54",
            400: "#F3B333",
            500: "#F0A000",
            600: "#DA9100",
            700: "#8F681C",
            800: "#845800",
            900: "#654400"
          },
          danger: {
            base: "#F20D11",
            foreground: "#CB0B0E",
            50: "#FEE7E7",
            100: "#FBB4B5",
            200: "#F99092",
            300: "#F65D60",
            400: "#F53D41",
            500: "#F20D11",
            600: "#CB0B0E",
            700: "#A5090B",
            800: "#7E0709",
            900: "#570506"
          }
        }
      },
      dark: {
        colors: {
          background: "#000000",
          content1: {
            base: "var(--color-zinc-900)",
            foreground: "var(--color-zinc-50)"
          },
          content2: {
            base: "var(--color-zinc-800)",
            foreground: "var(--color-zinc-100)"
          },
          content3: {
            base: "var(--color-zinc-700)",
            foreground: "var(--color-zinc-200)"
          },
          content4: {
            base: "var(--color-zinc-600)",
            foreground: "var(--color-zinc-300)"
          },
          focus: "#006FEE",
          divider: "#11111126",
          foreground: {
            base: "#ECEDEE",
            50: "var(--color-zinc-900)",
            100: "var(--color-zinc-800)",
            200: "var(--color-zinc-700)",
            300: "var(--color-zinc-600)",
            400: "var(--color-zinc-500)",
            500: "var(--color-zinc-400)",
            600: "var(--color-zinc-300)",
            700: "var(--color-zinc-200)",
            800: "var(--color-zinc-100)",
            900: "var(--color-zinc-50)"
          },
          default: {
            base: "var(--color-zinc-700)",
            foreground: "var(--color-white)",
            50: "var(--color-zinc-900)",
            100: "var(--color-zinc-800)",
            200: "var(--color-zinc-700)",
            300: "var(--color-zinc-600)",
            400: "var(--color-zinc-500)",
            500: "var(--color-zinc-400)",
            600: "var(--color-zinc-300)",
            700: "var(--color-zinc-200)",
            800: "var(--color-zinc-100)",
            900: "var(--color-zinc-50)"
          },
          primary: {
            base: "var(--color-blue-500)",
            foreground: "var(--color-white)",
            50: "var(--color-blue-900)",
            100: "var(--color-blue-800)",
            200: "var(--color-blue-700)",
            300: "var(--color-blue-600)",
            400: "var(--color-blue-500)",
            500: "var(--color-blue-400)",
            600: "var(--color-blue-300)",
            700: "var(--color-blue-200)",
            800: "var(--color-blue-100)",
            900: "var(--color-blue-50)"
          },
          secondary: {
            base: "var(--color-purple-400)",
            foreground: "var(--color-white)",
            50: "var(--color-purple-900)",
            100: "var(--color-purple-800)",
            200: "var(--color-purple-700)",
            300: "var(--color-purple-600)",
            400: "var(--color-purple-500)",
            500: "var(--color-purple-400)",
            600: "var(--color-purple-300)",
            700: "var(--color-purple-200)",
            800: "var(--color-purple-100)",
            900: "var(--color-purple-50)"
          },
          success: {
            base: "var(--color-green-500)",
            foreground: "var(--color-black)",
            50: "var(--color-green-900)",
            100: "var(--color-green-800)",
            200: "var(--color-green-700)",
            300: "var(--color-green-600)",
            400: "var(--color-green-500)",
            500: "var(--color-green-400)",
            600: "var(--color-green-300)",
            700: "var(--color-green-200)",
            800: "var(--color-green-100)",
            900: "var(--color-green-50)"
          },
          warning: {
            base: "var(--color-yellow-500)",
            foreground: "var(--color-yellow-600)",
            50: "var(--color-yellow-900)",
            100: "var(--color-yellow-800)",
            200: "var(--color-yellow-700)",
            300: "var(--color-yellow-600)",
            400: "var(--color-yellow-500)",
            500: "var(--color-yellow-400)",
            600: "var(--color-yellow-300)",
            700: "var(--color-yellow-200)",
            800: "var(--color-yellow-100)",
            900: "var(--color-yellow-50)"
          },
          danger: {
            base: "var(--color-red-500)",
            foreground: "var(--color-red-400)",
            50: "var(--color-red-900)",
            100: "var(--color-red-800)",
            200: "var(--color-red-700)",
            300: "var(--color-red-600)",
            400: "var(--color-red-500)",
            500: "var(--color-red-400)",
            600: "var(--color-red-300)",
            700: "var(--color-red-200)",
            800: "var(--color-red-100)",
            900: "var(--color-red-50)"
          }
        }
      }
    }
  })]
}

