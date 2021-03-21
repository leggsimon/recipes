import { GetStaticPropsResult } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import recipes, { IRecipe } from '../data/recipes';

const Title = styled.h1`
	color: hsla(0, 0%, 15%);
	font-size: 3rem;
	text-align: center;
	padding-block: 1rem;
	background-color: hsla(0, 0%, 100%, 0.95);
	position: sticky;
	top: 0;
`;

const Recipes = styled.section`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	grid-gap: 1em;
	padding-inline: 2em;
`;
const RecipeCard = styled.article`
	border: 1px solid hsl(0 0% 90%);
	border-radius: 15px;
	overflow: hidden;
	height: 100%;

	&:hover {
		border: 1px solid hsl(0 0% 70%);
		transform: scale(1.005);
	}
`;
const RecipeImage = styled.img`
	width: 100%;
	display: block;
`;
const RecipeName = styled.h1`
	padding: 0.8em 1em;
`;

type HomeProps = {
	recipes: IRecipe[];
};

export default function Home({ recipes }: HomeProps) {
	return (
		<>
			<Title>Recipes</Title>
			<Recipes>
				{recipes
					.sort(({ mainImage }) => {
						return mainImage ? -1 : 1;
					})
					.map((recipe) => {
						const url = `/recipe/${recipe.id}`;
						return (
							<Link key={recipe.id} href={url}>
								<a>
									<RecipeCard>
										<RecipeImage
											src={recipe.mainImage || '/images/placeholder-image.png'}
										/>
										<RecipeName>{recipe.name}</RecipeName>
									</RecipeCard>
								</a>
							</Link>
						);
					})}
			</Recipes>
		</>
	);
}

export function getStaticProps(): GetStaticPropsResult<HomeProps> {
	return {
		props: {
			recipes,
		},
	};
}
