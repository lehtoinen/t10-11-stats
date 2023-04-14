import { memoizeWith } from "ramda";
import mockTeamResponse from "../test/fixtures/teamResponse.json";
import type TeamResponse from "../types/torneoPal/TeamResponse";

const {
  TORNEOPAL_API_KEY,
  TORNEOPAL_CLUB_ID,
  TORNEOPAL_COMPETITION_ID,
  MOCK_TORNEOPAL_REQUESTS,
} = import.meta.env;

const sendRequest = memoizeWith(
  (uri) => uri,
  async (uri: string, mockResponse: unknown) => {
    if (MOCK_TORNEOPAL_REQUESTS === "true") {
      return mockResponse;
    }

    console.log("sendRequest", uri.replace(TORNEOPAL_API_KEY, "*****"));

    const response = await fetch(`https://spl.torneopal.fi${uri}`);
    return response.json();
  }
);

export const getTeam = async (
  teamId: string,
  categoryId: string
): Promise<TeamResponse> =>
  sendRequest(
    `/taso/rest/getTeam/?api_key=${TORNEOPAL_API_KEY}&competition_id=${TORNEOPAL_COMPETITION_ID}&category_id=${categoryId}&team_id=${teamId}`,
    mockTeamResponse
  );

export default { getTeam };
