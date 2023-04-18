import GlobalStyle from './GlobalStyles';
import styled from 'styled-components';
import SocialMediaButtons from './SocialMediaButtons';

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
		font-size: clamp(1rem, 4vw, 3rem);
		margin: 0;
		margin-left: 15px;
		color: #921267;
	}
`;

const MainContent = styled.div`
	padding: 15px;
	overflow: auto;
	grid-area: main-content;
	scroll-behavior: smooth;
	background-color: rgb(23, 25, 29);
`;

const Footer = styled.div`
	grid-area: footer;
`;

const spices = [
	{ id: '1', name: 'Basil', price: '3', taste: 'Dry leaves' },
	{ id: '2', name: 'Caper', price: '23', taste: 'Special' },
	{ id: '3', name: 'Nutmeg', price: '4', taste: '2 days of feeling sick' },
	{ id: '4', name: 'Paprika', price: '65', taste: 'Never tried' },
	{ id: '5', name: 'Saffron', price: '56', taste: 'Yellow mellow' },
	{ id: '6', name: 'Thyme', price: '33', taste: 'True love of mine' },
];

const App = () => {
	return (
		<Wrapper>
			<GlobalStyle />
			<Header>
				<h1>Spice Project</h1>
			</Header>
			<MainContent>
				{spices.map((spice, index) => (
					<div key={index}>{spice.name}</div>
				))}
			</MainContent>
			<Footer>
				<SocialMediaButtons />
			</Footer>
		</Wrapper>
	);
};

export default App;
