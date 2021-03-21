import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const RECIPES = [
	{
		name: 'Caribbean sweet potato and coconut stew',
		url: '/caribbean-stew',
		image: '/images/caribbean-stew.jpg',
	},
	{
		name: 'Fish on Vegetable Curry',
		url: '/fish-on-vegetable-curry',
		image: '/images/fish-on-vegetable-curry.jpg',
	},
	{
		name: 'Pork Fillet with Apple and Mustard Sauce',
		url: '/pork-fillet-with-apple-and-mustard-sauce',
		image: '/images/pork-fillet-with-apple-and-mustard-sauce.jpg',
	},
	{
		name: 'Creamy mushroom risotto with bacon',
		url: '/creamy-mushroom-risotto-with-bacon',
		image: '/images/creamy-mushroom-risotto-with-bacon.jpg',
	},
];

const Title = styled.h1`
	color: red;
	font-size: 50px;
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
	border: 1px solid black;
	border-radius: 2px;
	height: 100%;
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
			<Title>My page</Title>
			<Recipes>
				{RECIPES.map((recipe) => {
					return (
						<Link href={recipe.url}>
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
