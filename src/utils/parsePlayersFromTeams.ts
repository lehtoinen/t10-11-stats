import { TeamDetails, teams } from "../types";
import { applyCorrections } from "./applyCorrections";
import mergeObjectsInArraysByProperty from "./mergeObjectsInArraysByProperty";

export const parsePlayersFromTeams = (teamDetails: TeamDetails[]) => {
  const players = mergeObjectsInArraysByProperty(
    teamDetails.map(({ players }) => players),
    "id"
  )
    .map((player) => console.log(player) || applyCorrections(player))
    .map((player) => {
      const totals = teams.reduce(
        (total, { id: teamId, categoryId: teamCategoryId }) => ({
          matches:
            total.matches +
            (player[`${teamId}-${teamCategoryId}`]?.matches ?? 0),
          goals:
            total.goals + (player[`${teamId}-${teamCategoryId}`]?.goals ?? 0),
        }),
        { matches: 0, goals: 0 }
      );

      return {
        ...player,
        ...totals,
      };
    })
    .filter(({ matches }) => matches > 0)
    .sort((a, b) =>
      a.matches !== b.matches ? b.matches - a.matches : b.goals - a.goals
    );

  return players;
};
