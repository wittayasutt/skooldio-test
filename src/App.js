import { useState, useEffect, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getData } from './services';
import theme from './theme';

import './styles/_reset.css';
import './styles/typography.css';
import './styles/main.css';

// components
import CardTcaster from './components/CardTcaster';

const Container = styled.div`
	max-width: 1366px;
	margin: auto;
	padding: 32px;
`;

const CartWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-column-gap: 24px;
`;

const App = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	const handleGetData = useCallback(async () => {
		setLoading(true);
		const _data = await getData();
		setData(_data);

		setLoading(false);
	}, []);

	useEffect(() => {
		handleGetData();
	}, [handleGetData]);

	if (loading) {
		return 'loading';
	}

	return (
		<ThemeProvider theme={theme}>
			<Container>
				{data.length > 0 ? (
					<CartWrapper>
						{data.map((item) => (
							<CardTcaster data={item} key={item.id} />
						))}
					</CartWrapper>
				) : (
					'empty state'
				)}
			</Container>
		</ThemeProvider>
	);
};

export default App;
