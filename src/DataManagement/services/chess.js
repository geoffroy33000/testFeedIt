import { api } from './api';

export const chessApi = api.injectEndpoints({
	endpoints: (build) => ({
		getTopPlayers: build.query({
			query: () => `leaderboards`,

			transformResponse: (response) => {
				try {
					if (!response?.players) return response;
					return response?.players;
				} catch (error) {
					console.log(`error`, error);
				}
			},
		}),
	}),
});
export const { useGetTopPlayersQuery } = chessApi;
