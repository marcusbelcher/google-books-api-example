export type ColorHex = string;

export interface ColorRGB {
    r: number;
    g: number;
    b: number;
}

export interface ColorRGBA extends ColorRGB {
    a: number;
}
