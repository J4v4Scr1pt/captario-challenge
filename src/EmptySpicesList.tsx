import styled from 'styled-components';
import Button from './shared-components/Button';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		height: 300px;
		width: 300px;
		margin-bottom: 50px;
	}
`;

type Props = {
	handleResetSpices: () => void;
};

const EmptySpicesList = ({ handleResetSpices }: Props) => {
	return (
		<Wrapper>
			<img src="https://media3.giphy.com/media/ma7VlDSlty3EA/giphy.gif?cid=ecf05e47fz1ycfj517gijea8pp7gm07shzr1kbs63xtiapmr&rid=giphy.gif&ct=g" />
			<Button {...{ onClick: handleResetSpices }}>Reload spices</Button>
		</Wrapper>
	);
};

export default EmptySpicesList;
