import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

const RoundWrapper = styled.div`
	display: flex;
	align-items: center;

	margin-bottom: 8px;
`;

const RoundTitle = styled.div`
	font-size: 20px;
	font-weight: 200;
	color: ${({ theme }) => theme.text};

	margin-right: 24px;
`;

const Round = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 32px;
	width: 32px;
	background-color: ${(props) =>
		props.active ? props.theme.greenishTeal : props.theme.grey};
	color: ${({ theme }) => theme.white};

	border-radius: 50%;
	margin-right: 8px;
`;

const SelecetedRoundWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-bottom: 18px;
`;

const SelecetedRoundWrapperText = styled.div`
	font-weight: 500;
	color: ${({ theme }) => theme.grapefruit};
`;

const SelecetedRoundWrapperButton = styled.button`
	background-color: ${({ theme }) => theme.white};
	color: ${({ theme }) => theme.grapefruit};
	padding: 8px 16px;

	border: 1px solid ${({ theme }) => theme.grapefruit};
	border-radius: 17.5px;
	cursor: pointer;
`;

const ScoreWrapper = styled.div`
	display: flex;

	margin-bottom: 16px;
`;

const ScoreLeft = styled.div`
	flex: 1;
`;

const ScoreRight = styled.div`
	font-weight: 200;
	color: ${({ theme }) => theme.black};
	text-align: right;

	span {
		font-size: 12px;
	}
`;

const Score = styled.div`
	font-size: 42px;
	font-weight: 200;
`;

const CompareScore = styled.div`
	display: flex;
	margin-bottom: 16px;
`;

const CompareScoreItem = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;

	border-left-width: 1px;
	border-right-width: 1px;
	border-style: solid;
	border-color: ${({ theme }) => theme.grey};

	padding: 8px;

	&:first-child {
		border-left-width: 0;
	}

	&:last-child {
		border-right-width: 0;
	}
`;

const ScoreProportion = styled.details`
	color: ${({ theme }) => theme.teal};
`;

const CardTcasterContent = ({ data }) => {
	return (
		data && (
			<Wrapper>
				<RoundWrapper>
					<RoundTitle>รอบที่เปิด</RoundTitle>
					{data.roundSeats.map((roundSeat, index) => (
						<Round key={index} active={roundSeat > 0}>
							{index + 1}
						</Round>
					))}
				</RoundWrapper>

				<SelecetedRoundWrapper>
					<SelecetedRoundWrapperText>
						{/* TODO: integrate */}
						รอบที่ 4 : Admission
					</SelecetedRoundWrapperText>
					<SelecetedRoundWrapperButton>
						แก้ไขคะแนน
						{/* TODO: add logo / hover state */}
					</SelecetedRoundWrapperButton>
				</SelecetedRoundWrapper>

				{/* NOT ON TIME */}

				<ScoreWrapper>
					<ScoreLeft>{/* TODO: add image */}</ScoreLeft>
					<ScoreRight>
						<span>คะแนนของคุณคือ</span>
						<Score>23,453</Score>
					</ScoreRight>
				</ScoreWrapper>

				<CompareScore>
					{/* TODO: add data */}
					<CompareScoreItem>100</CompareScoreItem>
					<CompareScoreItem>200</CompareScoreItem>
					<CompareScoreItem>300</CompareScoreItem>
				</CompareScore>

				<ScoreProportion>
					<summary>ดูสัดส่วนคะแนน</summary>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Odit ut, officiis modi, totam maxime iste aliquam fuga
						tempora porro recusandae neque praesentium unde
						cupiditate! Quaerat nulla quibusdam corrupti doloribus
						harum?
					</p>
				</ScoreProportion>
			</Wrapper>
		)
	);
};

CardTcasterContent.propTypes = {
	data: PropTypes.object,
};

export default CardTcasterContent;
