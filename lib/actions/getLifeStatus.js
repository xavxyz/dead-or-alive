const alive = {
	color: 'green',
	label: 'alive',
	image: 'http://i.giphy.com/uvU9WUwlj4SIg.gif'
};

const dead = {
	color: 'red',
	label: 'dead',
	image: 'http://i.giphy.com/uhA0pldQaXUNW.gif'
};

export const getLocalLifeStatus = (newerRevenue, olderRevenue = 0) => {
	if (newerRevenue > olderRevenue) {
		return alive;
	} else {
		return dead;
	}
};

export const mapRevenuesToLifeStatus = (revenues) => {
	if (revenues && revenues.length > 0) {
		const olderRevenue = revenues[1] !== undefined ? revenues[1].revenue : 0;

		return getLocalLifeStatus(revenues[0].revenue, olderRevenue);
	}

	return undefined;
};