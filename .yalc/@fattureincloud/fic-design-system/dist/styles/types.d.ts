export declare type paletteColor = string;
declare type bwColorValues = 8 | 16 | 48 | 80 | 100;
export declare type bwColor = {
    [k in bwColorValues]: paletteColor;
};
declare type colorValues = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export declare type color = {
    [k in colorValues]: paletteColor;
};
declare const bwColorsList: readonly ["black", "white"];
declare type bwColors = typeof bwColorsList[number];
declare type BwPalette = {
    [k in bwColors]: bwColor;
};
declare const colorsList: readonly ["grey", "blue", "indigo", "yellow", "orange", "red", "green", "fuchsia", "pink", "cyan", "primary"];
export declare type colors = typeof colorsList[number];
declare type ColorsPalette = {
    [k in colors]: color;
};
export declare const allColorsList: ("black" | "white" | "grey" | "blue" | "indigo" | "yellow" | "orange" | "red" | "green" | "fuchsia" | "pink" | "cyan" | "primary")[];
export declare type Palette = BwPalette & ColorsPalette;
export {};
