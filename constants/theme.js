import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

// Colours

export const COLORS = {

    // Primary and Secondary Colours

    secondary: "#25282F",
    primary: "#ffa800",

    // Custom Colours

    white: "#fff",
    black: "#1E1B26",
    black1: "#000000",
    black2: "#222020",
    blue: "#4096FE",
    transparentWhite: 'rgba(255, 255, 255, 0.2)',
    transparentBlack: 'rgba(0, 0, 0, 0.2)',
    transparentBlack1: 'rgba(0, 0, 0, 0.5)',
    lightGray: "#64676D",
    lightGray2: "#EFEFF0",
    lightGray3: '#D4D5D6',
    lightGray4: '#7D7E84',
    gray: "#2D3038",
    gray1: "#282C35",
    darkRed: "#31262F",
    lightRed: "#C5505E",
    darkBlue: "#22273B",
    lightBlue: "#42FFFF",
    darkGreen: "#213432",
    lightGreen: "#31Ad66",
    gold: "#F3D03E",

    green: "#66D59A",
    lightGreen: "#E6FEF0",

    lime: "#00BA63",
    emerald: "#2BC978",

    red: "#FF4134",
    lightRed: "#FFF1F0",

    purple: "#6B3CE9",
    lightpurple: "#F3EFFF",

    yellow: "#FFC664",
    lightyellow: "#FFF9EC",
    darkgray: "#C3C6C7",

    transparent: "transparent",
};

// Sizes

export const SIZES = {
    // Global Sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // Font Sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    // App Dimensions
    width,
    height
};

// Fonts

export const FONTS = {
    largeTitle: { fontFamily: "Typo-Round-Bold", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Typo-Round-Bold", fontSize: SIZES.h1, lineHeight: 36 },
    SFh1: { fontFamily: "SFProDisplay-Bold", fontSize: SIZES.h1, lineHeight: 36 },
    SFh2: { fontFamily: "SFProDisplay-semiBold", fontSize: SIZES.h1, lineHeight: 36 },
    SFh3: { fontFamily: "SFProDisplay-Medium", fontSize: SIZES.h1, lineHeight: 36 },
    SFh4: { fontFamily: "SFProDisplay-Regular", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Typo-Round-Regular", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Typo-Round-Regular", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Typo-Round-Regular", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Typo-Round-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Typo-Round-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Typo-Round-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Typo-Round-Regular", fontSize: SIZES.body4, lineHeight: 22 },
};

// Custom Theme For Dark And Light

export const darkTheme = {
    name: "dark",
    backgroundColor: COLORS.transparentBlack1,
    ubackgroundColor: COLORS.lightGray3,
    textColor: COLORS.white,
    utextColor: COLORS.black1,
    tabBackgroundColor: COLORS.transparentBlack1,
    navBackgroundColor: COLORS.transparentBlack1,
    cardBackgroundColor: COLORS.gray1,
    bottomTabBarBackgroundColor: COLORS.black1,
    headerColor: COLORS.gold,
    buttonBackgroundColor: COLORS.transparent,
    invheaderColor: COLORS.black1,
    invBackgroundColor: COLORS.white
}

export const lightTheme = {
    name: "light",
    backgroundColor: COLORS.white,
    ubackgroundColor: COLORS.transparentBlack1,
    textColor: COLORS.black1,
    utextColor: COLORS.white,
    tabBackgroundColor: COLORS.lightGray,
    navBackgroundColor: COLORS.transparentBlack,
    cardBackgroundColor: COLORS.gray1,
    bottomTabBarBackgroundColor: COLORS.black1,
    invheaderColor: COLORS.gold,
    headerColor: COLORS.black1,
    buttonBackgroundColor: COLORS.black1,
    invBackgroundColor: COLORS.black1
}

export const selectedTheme = darkTheme

const appTheme = { COLORS, SIZES, FONTS, darkTheme, lightTheme };

export default appTheme;