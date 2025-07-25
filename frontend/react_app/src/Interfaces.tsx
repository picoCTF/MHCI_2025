export interface SemanticColorProps {
    color: "primary" | "secondary" | "default" | "success" | "warning" | "danger";
    colorValue: "base" | "foreground" | "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
}

export interface TimeStringProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export interface DateProps {
    day: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31;
    month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    year: number;
}