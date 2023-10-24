/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      backgroundImage: {
        "logo-bg": "url(../public/img/loicon.png)",
        "map-bg": "url(../public/img/map.jpg)",
        "img-bg": "url(../public/img/medic.jpg)",
        "teeth-bg": "url(../public/img/teeth1.jpg)",
        "teeth2-bg": "url(../public/img/teeth2.jpg)",
        "teeth3-bg": "url(../public/img/teeth3.jpg)",
        "teeth4-bg": "url(../public/img/teeth4.jpg)",
        "teeth5-bg": "url(../public/img/teeth5.jpg)",
        "teeth6-bg": "url(../public/img/teeth6.jpg)",
        "teeth7-bg": "url(../public/img/teeth7.jpg)",
        "teeth8-bg": "url(../public/img/teeth8.jpg)",
        "cls-bg": "url(../public/img/medic2.jpg)",
        "tes-1": "url(../public/img/pp.jpg)",
        "about-bg": "url(../public/img/Apoly.png)",
        "testi-1": "url(../public/img/tes-1.jpg)",
        "testi-2": "url(../public/img/tes-2.jpg)",
        "testi-3": "url(../public/img/tes-3.jpg)",
        "testi-4": "url(../public/img/tes-4.jpg)",
        "our-bg": "url(../public/img/55.jpg)",
        "our-2": "url(../public/img/our1.jpg)",
        "our-3": "url(../public/img/our2.jpg)",
        "our-1": "url(../public/img/66.jpg)",
        "banner-1": "url(../public/img/77.jpg)",
        "care-1": "url(../public/img/hemo.jpg)",
        "care-2": "url(../public/img/den.jpg)",
        "care-3": "url(../public/img/treat.jpg)",
        "place-p": "url(../public/img/place.png)",
        "logo-1": "url(../public/img/logo.png)",
        "logo-2": "url(../public/img/logo2.png)",
        "poly-1": "url(../public/img/hemor.jpg)",
      },

      colors: {
        newcolor: "#343434",
      },
    },
  },
  plugins: [],
};
