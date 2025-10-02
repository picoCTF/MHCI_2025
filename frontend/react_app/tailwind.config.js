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
			spacing: {
				card: {
					xs: "16px",
					sm: "20px",
					md: "24px",
					lg: "32px",
					xl: "40px",
				}
			},
      		fontFamily: {
        		'sans': ['Geist'],
        		'mono': ['Geist Mono'],
        		'icon': ['Material Symbols Outlined']
      		},
      		fontSize: {
        		tiny: "0.75rem", // text-tiny
        		small: "0.875rem", // text-small
        		medium: "1rem", // text-medium
        		large: "1.125rem", // text-large

        		base: "1rem", // text-base

        		xs: "0.75rem", // text-xs
        		sm: "0.875rem", // text-sm
        		md: "1rem", // text-md
        		lg: "1.125rem", // text-lg
        		xl: "1.25rem", // text-xl
        		'2xl': "1.5rem", // text-2xl
        		'3xl': "1.875rem", // text-3xl
        		'4xl': "2.25rem", // text-4xl
        		'5xl': "2.875rem", // text-5xl

        		'icon-xs': "16px",
        		'icon-sm': "20px",
        		'icon-md': "24px",
        		'icon-lg': "40px",
        		'icon-xl': "48px"
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

        		base: "1rem", // text-base

        		xs: "0.75rem", // text-xs
        		sm: "0.875rem", // text-sm
        		md: "1rem", // text-md
        		lg: "1.125rem", // text-lg
        		xl: "1.25rem", // text-xl
        		'2xl': "1.5rem", // text-2xl
        		'3xl': "1.875rem", // text-3xl
        		'4xl': "2.25rem", // text-4xl
        		'5xl': "2.875rem" // text-5xl
      		},
      		lineHeight: {
        		tiny: "1rem", // text-tiny
        		small: "1.25rem", // text-small
        		medium: "1.5rem", // text-medium
        		large: "1.75rem", // text-large

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
            		foreground: "#27723C",
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
            		base: "#18181B",
            		foreground: "#FAFAFA"
          		},
          		content2: {
            		base: "#27272A",
            		foreground: "#F4F4F5"
          		},
          		content3: {
            		base: "#3F3F46",
          			foreground: "#E4E4E7"
          		},
          		content4: {
            		base: "#52525B",
            		foreground: "#D4D4D8"
          		},
          		focus: "#006FEE",
          			divider: "#11111126",
          			foreground: {
            			base: "#ECEDEE",
            			50: "#18181B",
            			100: "#27272A",
            			200: "#3F3F46",
            			300: "#52525B",
            			400: "#71717A",
            			500: "#A1A1AA",
            			600: "#D4D4D8",
            			700: "#E4E4E7",
            			800: "#F4F4F5",
            			900: "#FAFAFA"
          			},
          			default: {
            			base: "#3F3F46",
            			foreground: "#FFFFFF",
            			50: "#18181B",
            			100: "#27272A",
            			200: "#3F3F46",
            			300: "#52525B",
            			400: "#71717A",
            			500: "#A1A1AA",
            			600: "#D4D4D8",
            			700: "#E4E4E7",
            			800: "#F4F4F5",
            			900: "#FAFAFA"
          			},
         			primary: {
            			base: "#4560EB",
            			foreground: "#FFFFFF",
            			50: "#1D2863",
            			100: "#263581",
            			200: "#3144A7",
            			300: "#3F57D6",
            			400: "#4560EB",
            			500: "#6A80EF",
            			600: "#8294F2",
            			700: "#A9B6F6",
            			800: "#C5CEF9",
            			900: "#E4E7F7"
          			},
          			secondary: {
            			base: "#9353D3",
            			foreground: "#FFFFFF",
            			50: "#180828",
            			100: "#301050",
            			200: "#481878",
            			300: "#6020A0",
            			400: "#7828C8",
            			500: "#9353D3",
            			600: "#AE7EDE",
            			700: "#C9A9E9",
            			800: "#E4D4F4",
            			900: "#F2EAFA"
          			},
          			success: {
            			base: "#41BE64",
            			foreground: "#A8E1B8",
            			50: "#0D2614",
            			100: "#174424",
            			200: "#27723C",
            			300: "#31914C",
            			400: "#41BE64",
            			500: "#67CB83",
            			600: "#80D397",
            			700: "#A8E1B8",
            			800: "#C4EBCF",
            			900: "#E0F5E7"
          			},
          			warning: {
            			base: "#F0A000",
            			foreground: "#DA9100",
            			50: "#654400",
            			100: "#845800",
            			200: "#8F681C",
            			300: "#DA9100",
            			400: "#F0A000",
            			500: "#F3B333",
            			600: "#F5BF54",
            			700: "#F8D38A",
            			800: "#FAE1B0",
            			900: "#FDF1D8"
          			},
          			danger: {
            			base: "#F20D11",
            			foreground: "#F53D41",
            			50: "#570506",
            			100: "#7E0709",
            			200: "#A5090B",
            			300: "#CB0B0E",
            			400: "#F20D11",
            			500: "#F53D41",
            			600: "#F65D60",
            			700: "#F99092",
            			800: "#FBB4B5",
            			900: "#FEE7E7"
          			}
        		}
      		}
    	}
  	})]
}

