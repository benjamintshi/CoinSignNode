export enum CacheTimes {
    None = 0,
    Second = 1,
    Minute = 60,
    Hour = CacheTimes.Minute * 60,
    Day = CacheTimes.Hour * 24,
    Month = CacheTimes.Day * 30,
    Year = CacheTimes.Day * 365
}