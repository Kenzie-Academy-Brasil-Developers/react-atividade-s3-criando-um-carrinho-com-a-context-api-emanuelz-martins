import styled from 'styled-components';

export const Container = styled.div`
	box-sizing: border-box;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	border-radius: 10px;

	padding: 10px;
	margin: 3em 0;
	width: 80%;
	height: 100%;

	display: flex;
	justify-content: space-between;

	@media (min-width: 768px) {
		width: 50%;
	}

	@media (min-width: 1024px) {
		width: 30%;
	}
`;

export const List = styled.ul`
	width: 100%;
`;

export const ListItem = styled.li`
	display: flex;
	justify-content: space-between;

	margin: 1em 0;
`;

export const Product = styled.h3``;
