import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;

	margin-bottom: 16px;
	padding-bottom: 16px;

	border-bottom-width: 2px;
	border-style: solid;
	border-color: ${({ theme }) => theme.grey};
`;

const Logo = styled.img`
	height: fit-content;
	width: 88px;
	margin-right: 16px;
`;

const Content = styled.div`
	flex: 1;

	display: flex;
	flex-direction: column;
`;

const FacultyName = styled.h4`
	font-size: 24px;
	font-weight: 600;
	color: ${({ theme }) => theme.grapefruit};

	margin-bottom: 4px;
`;

const DepartmentName = styled.h5`
	flex: 1;

	font-size: 20px;
	font-weight: 500;
	line-height: 24px;
	color: ${({ theme }) => theme.warmGrey};
	margin-bottom: 8px;
`;

const UniversityName = styled.div`
	font-size: 20px;
	font-weight: 200;
	color: ${({ theme }) => theme.warmGrey};
`;

const Right = styled.div``;

const Wishlist = styled.img``;

const CardTcasterTop = ({ data }) => {
	return (
		data && (
			<Wrapper>
				<Logo src={data.logo} alt={data.name} />
				{data.faculty && (
					<Content>
						<FacultyName>{data.faculty.name}</FacultyName>
						<DepartmentName>{data.name}</DepartmentName>

						{data.faculty.university && (
							<UniversityName>
								{data.faculty.university.name}
							</UniversityName>
						)}
					</Content>
				)}

				<Right>
					{/* TODO: change to font, handle state */}
					<Wishlist src='images/wish.svg' alt='svg' />
				</Right>
			</Wrapper>
		)
	);
};

CardTcasterTop.propTypes = {
	data: PropTypes.object,
};

export default CardTcasterTop;
