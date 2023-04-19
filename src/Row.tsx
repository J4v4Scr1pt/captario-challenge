import { MouseEvent, useState } from 'react';
import styled from 'styled-components';
import { BtnAnim1, BtnAnim2, BtnAnim3, BtnAnim4 } from './Animatons';

const HiddenConentWrapper = styled.div<{ show: boolean }>`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	overflow: hidden;
	opacity: ${({ show }) => (show ? '1' : '0')};
	max-height: ${({ show }) => (show ? '100%' : '0')};
	transition: all 300ms;

	div > span {
		margin-top: 10px;
		color: #cf3232;
		font-style: italic;
	}

	img {
		height: 150px;
		width: 150px;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: rgb(102 247 84);
	}
	@media (max-width: 1080px) {
		flex-direction: column;
		button {
			margin-top: 12px;
		}
	}
`;
const Row = styled.div`
	min-height: 50px;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 6px;
	backdrop-filter: blur(8px);
	border: 1px solid #ffffff;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px;
	flex-direction: column;
	h3:first-child {
		margin: 0;
		color: rgb(102 247 84);
	}
`;

const SubmitButton = styled.button`
	all: unset;
	position: relative;
	cursor: pointer;
	display: inline-block;
	padding: 10px 20px;
	color: #03e9f4;
	font-size: 16px;
	text-decoration: none;
	text-transform: uppercase;
	overflow: hidden;
	transition: 0.5s;
	letter-spacing: 4px;
	& > span {
		position: absolute;
		display: block;
	}
	& > span:nth-child(1) {
		top: 0;
		left: -100%;
		width: 100%;
		height: 2px;
		background: linear-gradient(90deg, transparent, #03e9f4);
		animation: ${BtnAnim1} 1s linear infinite;
	}
	& > span:nth-child(2) {
		top: -100%;
		right: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(180deg, transparent, #03e9f4);
		animation: ${BtnAnim2} 1s linear infinite;
		animation-delay: 0.25s;
	}
	& > span:nth-child(3) {
		bottom: 0;
		right: -100%;
		width: 100%;
		height: 2px;
		background: linear-gradient(270deg, transparent, #03e9f4);
		animation: ${BtnAnim3} 1s linear infinite;
		animation-delay: 0.5s;
	}
	& > span:nth-child(4) {
		bottom: -100%;
		left: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(360deg, transparent, #03e9f4);
		animation: ${BtnAnim4} 1s linear infinite;
		animation-delay: 0.75s;
	}
	&:hover {
		background: #03e9f4;
		color: #fff;
		border-radius: 5px;
		box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
	}
`;
type Props = {
	spice: Spice;
	handleSpiceDelete: (spiceId: string) => void;
};

const RowContent = ({ spice, handleSpiceDelete }: Props) => {
	const [show, setShow] = useState<boolean>(false);
	const onClick = () => setShow(!show);

	const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		handleSpiceDelete(spice.id);
	};

	return (
		<Row {...{ onClick }}>
			<h3>{spice.name}</h3>
			<HiddenConentWrapper {...{ show }}>
				<img src={spice.image} />

				<div>
					Price:<span>${spice.price}</span>
				</div>
				<div>
					Taste of spice:<span>{spice.taste}</span>
				</div>
				<SubmitButton
					{...{
						onClick: handleDelete,
					}}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Delete
				</SubmitButton>
			</HiddenConentWrapper>
		</Row>
	);
};

export default RowContent;
