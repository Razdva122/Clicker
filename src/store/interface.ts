export interface IGameState {
	balance: number;
	clickCost: number;
	minersAmount: number;
	minersProfit: number;
	casesAmount: number;
	version: number;
}

export type TGameStateKeys = keyof IGameState;