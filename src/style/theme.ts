type ColorKey = "primary" | "background" | "secondary" | "third";
export type ThemeName = "light" | "dark";

interface Theme {
    name : string;
    color : Record<ColorKey, string>;
}

export const light = {
    name : 'light',
    color: {
        primary : 'brown',
        background: 'lightgray',
        secondary: 'blue',
        third: 'green'
    },
};

export const dark = {
    name : 'dark',
    color : {
        primary : 'coral',
        background : 'midnightblue',
        secondary: 'darkblue',
        third: 'darkgreen'
    },
};

export const getTheme = (themeName: ThemeName): Theme => {
    switch (themeName){
        case "light":
            return light;
        case "dark":
            return dark;
    }
};