import React, { FC } from 'react';
import { IProgressBarProps } from './interface';

const ProgressBar: FC<IProgressBarProps> = (props) => {
  const { bgcolor, completed, text } = props;

  const containerStyles = {
		position: 'relative',
    height: 20,
    width: 200,
    backgroundColor: "#e0e0de",
    borderRadius: 50,
		marginBottom: 8,
  } as const;

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
		transition: 'width 0.2s ease-in-out',
  } as const;

  const labelStyles = {
		position: 'absolute',
		transform: 'translate(-50%,0)',
		top: 0,
    color: 'black',
    fontWeight: 'bold'
  } as const;

  return (
    <div style={containerStyles}>	
      <div style={fillerStyles}>
      </div>
			<span style={labelStyles}>{`${text}`}</span>
    </div>
  );
};

export default ProgressBar;