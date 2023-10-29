export const teams = [
  {
    name: "T12 V",
    id: "184530",
    categoryId: "T125",
    statsId: "184530-T125",
  },
  {
    name: "T12 IV",
    id: "184530",
    categoryId: "T124",
    statsId: "184530-T124",
  },
  {
    name: "T13 V",
    id: "35127914",
    categoryId: "T135",
    statsId: "35127914-T135",
  },
  { name: "T13 IV", id: "157309", categoryId: "T134", statsId: "157309-T134" },
  { name: "T13 III", id: "157309", categoryId: "T133", statsId: "157309-T133" },
] as const;

export type TeamId = (typeof teams)[number]["id"];
export type TeamName = (typeof teams)[number]["name"];
export type StatsId = (typeof teams)[number]["statsId"];

export type Stats = {
  matches: number;
  goals: number;
};

type WithStatsByTeam = {
  [key in StatsId]?: Stats;
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
