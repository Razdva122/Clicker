import React, { FC } from 'react';
import { Button } from 'antd';
import { IBuyMinerButtonProps } from './interface';
import { COST_OF_MINERS } from './const';

const BuyMinerButton: FC<IBuyMinerButtonProps> = ({amount, balance, buyMiner}) => {
	const currentMinerCost = COST_OF_MINERS[amount];

	if (!currentMinerCost) {
		return null;
	}

	return (
		<Button disabled={currentMinerCost > balance} shape={'round'} onClick={() => buyMiner(currentMinerCost)}>
			Купить майнер за {currentMinerCost} $
		</Button>
	)
};

export default BuyMinerButton;
