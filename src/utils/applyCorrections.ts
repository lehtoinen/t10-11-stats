import { Player, Stats, TeamName, teams } from "../types";

const CORRECTIONS: Record<string, { [key in TeamName]?: Partial<Stats> }> = {
  "632016": {
    // Vivien P.
    T12: { matches: -100 },
    "T13/v": { matches: -100 },
    "T13/m": { matches: -100 },
  },
  "1021770": {
    // Kaisa K.
    T12: { matches: -1 },
  },
  "921255": {
    // Mirjami N.
    "T13/v": { matches: -1 },
  },
  "985681": {
    // Anna M.
    T12: { matches: -1 },
  },
  "1058564": {
    // Leona G.
    T12: { matches: -1 },
  },
  "1066380": {
    // Aisha B.
    "T13/v": { goals: 1 },
  },
};

export const applyCorrections = (player: Player): Player => {
  const corrections = CORRECTIONS[player.id];

  if (corrections) {
    const playerWithCorrectedStats = teams.reduce(
      (corrected, team) => {
        const correctionsForTeam = corrections[team.name];

        if (correctionsForTeam) {
          const origStats = player[team.id];
          const correctedMatches =
            (origStats?.matches ?? 0) + (correctionsForTeam?.matches ?? 0);
          const correctedGoals =
            (origStats?.goals ?? 0) + (correctionsForTeam?.goals ?? 0);

          const correctedForTeam = {
            ...origStats,
            matches: correctedMatches > 0 ? correctedMatches : undefined,
            goals: correctedGoals > 0 ? correctedGoals : undefined,
          };

          return {
            ...corrected,
            [team.id]: correctedForTeam,
          };
        }

        return corrected;
      },
      { ...player }
    );

    return playerWithCorrectedStats;
  }

  return player;
};
