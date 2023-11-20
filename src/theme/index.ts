import { Theme, createTheme } from "@mui/material/styles";

export const HEIGHT_HEADER = 93;
export const PADDING_SIDE = 24;
export const PADDING_LEFT = 46;
export const PADDING_RIGHT = 100;
const fontSizeSubtitle = 32;

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      background: {
        main: string;
        secondary: string;
        grey: string;
        arccordion: string;
        title: string;
        link: string;
        button: string;
        black: string;
        red: string;
        titleInput: string;
        labelInput: string;
        white: string;
        rightAnswer: string;
        step: string;
      };
    };
  }
  interface ThemeOptions {
    custom?: object;
  }
}

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

export const theme = createTheme({
  custom: {
    background: {
      main: "#C23E3E",
      secondary: "#FFF6F6",
      grey: "#e6e6e6",
      arccordion: "#f7f7f7",
      title: "#DB4848",
      link: "#67C2F5",
      button: "#ec8282",
      black: "4C4C4C",
      titleInput: "#4C4C4C",
      labelInput: "#B0ACAC",
      white: "#FFFFFF",
      rightAnswer: "#10C66F",
      step: "#DBE5F5",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: `#ffffff`,
          color: `#65748B`,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          "&:hover": {
            textShadow: "0px 0px 18px rgba(255, 255, 255, 0.69)",
          },
        },
        sizeSmall: {
          padding: `6px 16px`,
        },
        sizeMedium: {
          padding: `8px 20px`,
        },
        sizeLarge: {
          padding: `11px 24px`,
        },
        textSizeSmall: {
          padding: `7px 12px`,
        },
        textSizeMedium: {
          padding: `9px 16px`,
        },
        textSizeLarge: {
          padding: `12px 16px`,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: `32px 24px`,
          "&:last-child": {
            paddingBottom: `32px`,
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: `h6`,
        },
        subheaderTypographyProps: {
          variant: `body2`,
        },
      },
      styleOverrides: {
        root: {
          padding: `32px 24px`,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: `border-box`,
          margin: 0,
          padding: 0,
        },
        html: {
          MozOsxFontSmoothing: `grayscale`,
          WebkitFontSmoothing: `antialiased`,
          display: `flex`,
          flexDirection: `column`,
          minHeight: `100%`,
          width: `100%`,
        },
        body: {
          display: `flex`,
          flex: `1 1 auto`,
          flexDirection: `column`,
          minHeight: `100%`,
          width: `100%`,
        },
        "#__next": {
          display: `flex`,
          flex: `1 1 auto`,
          flexDirection: `column`,
          height: `100%`,
          width: `100%`,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: `#E6E8F0`,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.71,
          minWidth: `auto`,
          paddingLeft: 0,
          paddingRight: 0,
          textTransform: `none`,
          "& + &": {
            marginLeft: 24,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: `#4D4D4D`,
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: `#F3F4F6`,
          ".MuiTableCell-root": {
            color: `#374151`,
          },
          borderBottom: `none`,
          "& .MuiTableCell-root": {
            borderBottom: `none`,
            fontSize: `12px`,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
          },
          "& .MuiTableCell-paddingCheckbox": {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
    },
  },
  palette: {
    action: {
      active: `#6B7280`,
      focus: `rgba(55, 65, 81, 0.12)`,
      hover: `rgba(55, 65, 81, 0.04)`,
      selected: `rgba(55, 65, 81, 0.08)`,
      disabledBackground: `rgba(55, 65, 81, 0.12)`,
      disabled: `rgba(55, 65, 81, 0.26)`,
    },
    background: {
      default: `#FFF`,
      paper: `#FFFFFF`,
    },
    divider: `#E6E8F0`,
    primary: {
      main: `#DB4848`,
      light: `#C23E3E`,
      dark: `#EC8282`,
      contrastText: `#FFFFFF`,
      // main: '#5048E5',
      // light: '#828DF8',
      // dark: '#3832A0',
      // contrastText: '#FFFFFF',
    },
    secondary: {
      main: `#10B981`,
      light: `#3FC79A`,
      dark: `#0B815A`,
      contrastText: `#FFFFFF`,
    },
    success: {
      main: `#14B8A6`,
      light: `#43C6B7`,
      dark: `#0E8074`,
      contrastText: `#FFFFFF`,
    },
    info: {
      main: `#2196F3`,
      light: `#64B6F7`,
      dark: `#0B79D0`,
      contrastText: `#FFFFFF`,
    },
    warning: {
      main: `#FFB020`,
      light: `#FFBF4C`,
      dark: `#B27B16`,
      contrastText: `#FFFFFF`,
    },
    error: {
      main: `#D14343`,
      light: `#DA6868`,
      dark: `#922E2E`,
      contrastText: `#FFFFFF`,
    },
    text: {
      primary: `#121828`,
      secondary: `#65748B`,
      disabled: `rgba(55, 65, 81, 0.48)`,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    `none`,
    `0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)`,
    `0px 1px 2px rgba(100, 116, 139, 0.12)`,
    `0px 1px 4px rgba(100, 116, 139, 0.12)`,
    `0px 1px 5px rgba(100, 116, 139, 0.12)`,
    `0px 1px 6px rgba(100, 116, 139, 0.12)`,
    `0px 2px 6px rgba(100, 116, 139, 0.12)`,
    `0px 3px 6px rgba(100, 116, 139, 0.12)`,
    `0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)`,
    `0px 5px 12px rgba(100, 116, 139, 0.12)`,
    `0px 5px 14px rgba(100, 116, 139, 0.12)`,
    `0px 5px 15px rgba(100, 116, 139, 0.12)`,
    `0px 6px 15px rgba(100, 116, 139, 0.12)`,
    `0px 7px 15px rgba(100, 116, 139, 0.12)`,
    `0px 8px 15px rgba(100, 116, 139, 0.12)`,
    `0px 9px 15px rgba(100, 116, 139, 0.12)`,
    `0px 10px 15px rgba(100, 116, 139, 0.12)`,
    `0px 12px 22px -8px rgcusba(100, 116, 139, 0.25)`,
    `0px 13px 22px -8px rgba(100, 116, 139, 0.25)`,
    `0px 14px 24px -8px rgba(100, 116, 139, 0.25)`,
    `0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)`,
    `0px 25px 50px rgba(100, 116, 139, 0.25)`,
    `0px 25px 50px rgba(100, 116, 139, 0.25)`,
    `0px 25px 50px rgba(100, 116, 139, 0.25)`,
    `0px 25px 50px rgba(100, 116, 139, 0.25)`,
  ],
  typography: {
    button: {
      fontWeight: 600,
      fontSize: `1.125rem`,
      lineHeight: "131.52%",
    },
    fontFamily: `Inter`,
    body1: {
      fontSize: `1rem`,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: `0.875rem`,
      fontWeight: 400,
      lineHeight: 1.57,
    },
    subtitle1: {
      // fontSize: `calc(${fontSizeSubtitle / 16}rem)`,
      fontWeight: 800,
      lineHeight: `calc(${42.09 / fontSizeSubtitle})`,
    },
    subtitle2: {
      fontSize: `1.125rem`,
      fontWeight: 600,
      lineHeight: "131.52%",
    },
    overline: {
      fontSize: `0.75rem`,
      fontWeight: 600,
      letterSpacing: `0.5px`,
      lineHeight: 2.5,
      textTransform: `uppercase`,
    },
    caption: {
      fontSize: `0.75rem`,
      fontWeight: 400,
      lineHeight: 1.66,
    },
    h1: {
      fontWeight: 800,
      fontSize: `2.875rem`,
      lineHeight: 1.375,
    },
    h2: {
      fontWeight: 800,
      fontSize: `2rem`,
      lineHeight: 1.375,
    },
    h3: {
      fontWeight: 600,
      fontSize: `1.125rem`,
      lineHeight: 1.375,
    },
    h4: {
      fontWeight: 400,
      fontSize: `1rem`,
      lineHeight: 1.375,
    },
    h5: {
      fontWeight: 600,
      fontSize: `1.5rem`,
      lineHeight: 1.375,
    },
    h6: {
      fontWeight: 600,
      fontSize: `1.125rem`,
      lineHeight: 1.3152,
    },
  },
  transitions: {},
}) as any;

export default theme;
