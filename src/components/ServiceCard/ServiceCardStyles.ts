import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 40rem;
	padding-top: 1rem;
	background-color: white;
`;

export const CardsWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

export const CardsTitle = styled.h1`
	text-align: center;
	margin-bottom: 1rem;
	font-weight: 300;
`;

export const Card = styled.div`
	width: 300px;
	height: 400px;
	border: 1px solid #ccc;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s;
	margin: 2rem;

	&:hover {
		transform: scale(1.05);
	}
`;

export const CardImage = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
`;

export const CardContent = styled.div`
	padding: 16px;
	height: calc(100% - 200px);
	box-sizing: border-box;
`;

export const CardTitle = styled.h2`
	font-size: 1.5em;
	margin-bottom: 1rem;
	text-align: center;
`;

export const CardParagraph = styled.p`
	font-size: 1em;
	text-align: center;

	color: #555;
`;
