export interface IGameState {
	balance: number;
	clickCost: number;
	minersAmount: number;
	minersProfit: number;
	version: number;
}

export type TGameStateKeys = keyof IGameState;