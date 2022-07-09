import React, { FC } from 'react';

import Header from '@/components/header';

const PageWithHeader: (Content: FC) => FC = (Content: FC) => () => {
	return (
		<div>
			<Header/>
			<Content/>
		</div>
	)
};

export default PageWithHeader;
