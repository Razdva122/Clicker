import PageWithHeader from '@/pages/helpers/pageWithHeader';

import Main from '@/pages/main';
import Shop from '@/pages/shop';


const pages = {
	Main: PageWithHeader(Main),
	Shop: PageWithHeader(Shop),
};

export default pages;
