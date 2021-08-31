import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	grid-column: span 12;

	border-radius: 5px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
	margin-bottom: 16px;
	padding: 16px;

	@media only screen and (min-width: 768px) {
		grid-column: span 6;
	}

	@media only screen and (min-width: 992px) {
		grid-column: span 4;
	}
`;

const Card = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

Card.propTypes = {
	children: PropTypes.node,
};

export default Card;
