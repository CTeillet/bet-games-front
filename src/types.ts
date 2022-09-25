export interface MatchType {
    coteB: number
    coteA: number
    teamA: string
    teamB: string
    id: number
}

export interface LeagueType {
    name: string
    matches: MatchType[]
}

export interface GameType {
    name: string
    leagues: LeagueType[]
}
