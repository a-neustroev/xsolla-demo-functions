export interface Theme {
    id: string;
    background_color: string;
    font_color: string;
    accent_color: string;
}

export const IsValidTheme = (theme: any): theme is Theme => {
    return typeof theme.background_color === 'string' &&
        typeof theme.font_color === 'string' &&
        typeof theme.accent_color === 'string'
}