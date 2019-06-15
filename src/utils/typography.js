import Typography from "typography"
/*import funstonTheme from 'typography-theme-funston'

const typography = new Typography(funstonTheme);*/

const typography = new Typography({
    baseFontSize: "16px",
    baseLineHeight: 1.666,
    headerFontFamily: [
        "Avenir Next",
        "Helvetica Neue",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    bodyFontFamily: [
        "Avenir Next",
        "Helvetica Neue",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
  })

export default typography;