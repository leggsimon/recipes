import { IRecipe } from '../../../data/recipes';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.article`
	border: 1px solid hsl(0 0% 90%);
	border-radius: 15px;
	overflow: hidden;
	height: 100%;

	&:hover {
		border: 1px solid hsl(0 0% 70%);
		transform: scale(1.005);
	}
`;

const RecipeName = styled.h1`
	padding: 0.8em 1em;
	font-family: var(--font-family-body);
`;

type RecipeCardProps = {
	recipe: IRecipe;
};

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
	const url = `/recipe/${recipe.id}`;
	return (
		<Link key={recipe.id} href={url}>
			<a onClick={() => console.log('clicked')}>
				<Wrapper>
					<Image
						src={recipe.mainImage || '/images/placeholder-image.png'}
						layout="responsive"
						width={350}
						height={350 / 1.5}
					/>
					<RecipeName>{recipe.name}</RecipeName>
				</Wrapper>
			</a>
		</Link>
	);
};
