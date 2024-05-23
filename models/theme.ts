export interface Theme {
    id: string;
    content: string;
    surface: string;
    project: string;
}

export const IsValidTheme = (theme: any): theme is Theme => {
    return typeof theme.content === 'string' &&
        typeof theme.surface === 'string' &&
        typeof theme.project === 'string'
}