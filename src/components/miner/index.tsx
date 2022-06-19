import React, { FC, useState, useEffect } from 'react';
import ProgressBar from '../progressBar';
import { IMinerProps, IMinerState } from './interface';
import { secondsToText } from './helpers';


const Miner: FC<IMinerProps> = (props) => {
  const { onSuccess, amount, timer, profit } = props;

	const [minerState, setMinerState] = useState<IMinerState>({timer: secondsToText(timer), progress: 0});

	useEffect(() => {
		const intervalPercent = timer * 1000 / 100;
		const isPercentTimer = intervalPercent < 1000;

    const intervalID = setInterval(() => {
			if (minerState.progress >= 100) {
				setMinerState({
					timer: secondsToText(timer),
					progress: 0
				});

				onSuccess();
			} else {
				
				setMinerState((prevState) => {
					let timeLeft;
					let progress;


					if (isPercentTimer) {
						timeLeft = timer - Math.floor(intervalPercent / 1000 * prevState.progress);
						progress = 1;
					} else {
						timeLeft = Math.floor(timer - (prevState.progress / 100 * timer));
						progress = 100 / timer;
					}

					return {
						timer: timeLeft > 3 ? secondsToText(timeLeft) : `+ ${profit}$`,
						progress: prevState.progress + progress
					}
				})
			}
		}, isPercentTimer ? intervalPercent : 1000);

		return () => {
			clearInterval(intervalID);
		}
  }, [timer, onSuccess, minerState.progress, profit]);

  const array = new Array(amount).fill(null);

	const minersList = array.map((_, index) => 
		<ProgressBar key={index} bgcolor={"#1E90FF"} completed={minerState.progress} text={minerState.timer}/>
	)

  return (
		<div className="miner-container">
			{minersList}
		</div>
  );
};

export default Miner;