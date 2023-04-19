import GlobalStyle from './GlobalStyles';
import styled from 'styled-components';
import SocialMediaButtons from './SocialMediaButtons';
import Row from './Row';
import { useState } from 'react';
import EmptySpicesList from './EmptySpicesList';

const Wrapper = styled.div`
	overflow: hidden;
	display: grid;
	grid-template: 100px calc(100vh - 210px) max-content / 100vw;
	grid-template-areas:
		'header'
		'main-content'
		'footer';
`;

const Header = styled.div`
	grid-area: header;

	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	h1 {
		font-size: clamp(3rem, 4vw, 4rem);
		margin: 0;
		background: rgb(131, 58, 180);
		background: linear-gradient(
			90deg,
			rgba(131, 58, 180, 1) 0%,
			rgba(253, 29, 29, 1) 50%,
			rgba(252, 176, 69, 1) 100%
		);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
	}
`;

const MainContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 15px;
	overflow: auto;
	grid-area: main-content;
	scroll-behavior: smooth;
	background-image: url(https://img.freepik.com/premium-photo/herbs-spices-black_67618-925.jpg?w=2000);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-color: rgb(23, 25, 29);
`;

const InnerWrapper = styled.div`
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	width: 100%;
	row-gap: 24px;
`;

const Footer = styled.div`
	grid-area: footer;
`;

const spicesArray: Array<Spice> = [
	{
		id: '1',
		name: 'Basil',
		price: '3',
		taste: 'Dry leaves',
		image: 'https://www.herbazest.com/imgs/6/8/6/4845/basil.jpg',
	},
	{
		id: '2',
		name: 'Caper',
		price: '23',
		taste: 'Special',
		image: 'https://myfavouritepastime.files.wordpress.com/2019/01/img_4502.jpg',
	},
	{
		id: '3',
		name: 'Nutmeg',
		price: '4',
		taste: '2 days of feeling sick',
		image: 'https://cdn.britannica.com/77/170777-050-3A754B3D/Nutmeg-seeds-ground-spice.jpg',
	},
	{
		id: '4',
		name: 'Paprika',
		price: '65',
		taste: 'Never tried',
		image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/17676673/1127904945.jpg',
	},
	{
		id: '5',
		name: 'Saffron',
		price: '56',
		taste: 'Yellow mellow',
		image: 'https://cdn.webshopapp.com/shops/54005/files/424115282/saffron-and-flower-of-the-crocus-sativus.jpg',
	},
	{
		id: '6',
		name: 'Thyme',
		price: '33',
		taste: 'True love of mine',
		image: 'https://thekitchencommunity.org/wp-content/uploads/2021/02/Thyme-Substitutes.jpg',
	},
];

const App = () => {
	const [spices, setSpices] = useState<Array<Spice>>(spicesArray);
	const handleSpiceDelete = (spiceId: string) => {
		setSpices(spices.filter((spice) => spice.id !== spiceId));
	};
	const handleResetSpices = () => {
		setSpices(spicesArray);
	};
	return (
		<Wrapper>
			<GlobalStyle />
			<Header>
				<h1>Spice Project</h1>
			</Header>
			<MainContent>
				<InnerWrapper>
					{spices.map((spice, index) => (
						<Row key={index + spice.id} {...{ spice, handleSpiceDelete }} />
					))}
					{spices.length <= 0 && <EmptySpicesList {...{ handleResetSpices }} />}
				</InnerWrapper>
			</MainContent>
			<Footer>
				<SocialMediaButtons />
			</Footer>
		</Wrapper>
	);
};

export default App;
