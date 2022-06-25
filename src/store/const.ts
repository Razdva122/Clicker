import { IGameState } from './interface';

export const GAME_STATE_PATH = '__clicker_game_state__';

export const defaultGameState: IGameState = {
	balance: 0,
	clickCost: 1,
	minersAmount: 0,
	minersProfit: 5,
	version: 3
};
