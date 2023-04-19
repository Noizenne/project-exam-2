export const theme = {
    colors: {
      primary: "#0031DD",
      secondary: "#ED7200",
      black: "#21222D",
      white: "#F6F6F6",
      yellow: "#FFB800",
      blue: "#0094FF"
    },
    fonts: {
      fontFamily: "'Raleway', sans-serif",
      fontSizes: ["12px", "16px", "20px", "22px", "25px", "30px"],
    },
    forms: {
      borderRadius: "15px",
      backgroundColor: `${({ theme }) => theme.colors.white}`,
      color: `${({ theme }) => theme.colors.black}`,
    },
  };