import PropTypes from 'prop-types';

// components
import BaseCard from '../Base/BaseCard';
import CardTcasterTop from './CardTcasterTop';
import CardTcasterContent from './CardTcasterContent';

const CardTcaster = ({ data }) => {
	return (
		data && (
			<BaseCard>
				<CardTcasterTop data={data} />
				<CardTcasterContent data={data} />
			</BaseCard>
		)
	);
};

CardTcaster.propTypes = {
	data: PropTypes.object,
};

export default CardTcaster;
