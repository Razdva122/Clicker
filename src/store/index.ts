import { observable, action, computed, makeObservable } from 'mobx';

import { GAME_STATE_PATH, defaultGameState } from './const';
import type { TGameStateKeys, IGameState } from './interface';

export default class GameStore {
  @observable
  balance!: number;

	@observable
  clickCost!: number;

	@observable
  minersAmount!: number;

	@observable
  minersProfit!: number;

	@observable
	version!: number;

  constructor() {
		const stateFromStorage = JSON.parse(localStorage.getItem(GAME_STATE_PATH) || '{}');

		if (stateFromStorage.version !== defaultGameState.version) {
			localStorage.setItem(GAME_STATE_PATH, JSON.stringify(defaultGameState));

			Object.entries(defaultGameState).forEach(([key, value]) => {
				this[key as TGameStateKeys] = value;
			})

		} else {
			Object.entries(stateFromStorage).forEach(([key, value]) => {
				this[key as TGameStateKeys] = value as number;
			})
		}

    makeObservable<GameStore>(this);
  }

  @computed
  get upgradeCost(): number {
    return Math.pow(2, this.clickCost);
  }

  @action
  updateStore(key: TGameStateKeys, value: number) {
    this[key] = value;

		const currentState = Object.keys(defaultGameState).reduce<Partial<IGameState>>((acc, el) => {
			const key = el as TGameStateKeys;
			acc[key] = this[key];
			return acc;
		}, {});

		localStorage.setItem(GAME_STATE_PATH, JSON.stringify(currentState));
  }
}
