import Link from 'next/link';
import styled from 'styled-components';

const RECIPES = [
	{
		id: 8,
		name: 'Caribbean sweet potato and coconut stew',
		url: '/recipe/caribbean-stew',
		image: '/images/caribbean-stew.jpg',
	},
	{
		id: 15,
		name: 'Fish on Vegetable Curry',
		url: '/recipe/fish-on-vegetable-curry',
		image: '/images/fish-on-vegetable-curry.jpg',
	},
	{
		id: 3,
		name: 'Pork Fillet with Apple and Mustard Sauce',
		url: '/recipe/pork-fillet-with-apple-and-mustard-sauce',
		image: '/images/pork-fillet-with-apple-and-mustard-sauce.jpg',
	},
	{
		id: 24,
		name: 'Creamy mushroom risotto with bacon',
		url: '/recipe/creamy-mushroom-risotto-with-bacon',
		image: '/images/creamy-mushroom-risotto-with-bacon.jpg',
	},
];

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

export default function Home() {
	return (
		<>
			<Title>Recipes</Title>
			<Recipes>
				{RECIPES.map((recipe) => {
					const url = `/recipe/${recipe.id}`;
					return (
						<Link key={recipe.id} href={url}>
							<a>
								<RecipeCard>
									<RecipeImage src={recipe.image} />
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
