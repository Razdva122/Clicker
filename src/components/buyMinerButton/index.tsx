import React, { FC } from 'react';
import { IBuyMinerButtonProps } from './interface';
import { COST_OF_MINERS } from './const';

const BuyMinerButton: FC<IBuyMinerButtonProps> = ({amount, balance, buyMiner}) => {
	const currentMinerCost = COST_OF_MINERS[amount];

	if (!currentMinerCost) {
		return null;
	}

	return (
		<button disabled={currentMinerCost > balance} onClick={() => buyMiner(currentMinerCost)}>
			Купить майнер за {currentMinerCost} $
		</button>
	)
};

export default BuyMinerButton;
