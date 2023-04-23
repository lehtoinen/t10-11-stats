export const teams = [
  { name: "T12", id: "184530", categoryId: "T125" },
  { name: "T13/v", id: "35127914", categoryId: "T135" },
  { name: "T13/m", id: "157309", categoryId: "T134" },
] as const;

export type TeamId = (typeof teams)[number]["id"];
export type TeamName = (typeof teams)[number]["name"];

export type Stats = {
  matches: number;
  goals: number;
};

type WithStatsByTeam = {
  [key in TeamId]?: Stats;
};

export type WithTotals = Player & Stats;

export type Player = {
  id: string;
  name: string;
  birthyear: number;
} & WithStatsByTeam;

export type TeamDetails = {
  id: string;
  players: Player[];
};
