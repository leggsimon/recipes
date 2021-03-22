import { GetStaticPropsResult } from 'next';
import styled from 'styled-components';
import recipes, { IRecipe } from '../data/recipes';
import { RecipeCard } from '../src/components/RecipeCard/RecipeCard';

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

type HomeProps = {
	recipes: IRecipe[];
};

export default function Home({ recipes }: HomeProps) {
	return (
		<>
			<Title>Recipes</Title>
			<Recipes>
				{recipes.map((recipe) => (
					<RecipeCard key={recipe.id} recipe={recipe} />
				))}
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
