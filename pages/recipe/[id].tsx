import { useRouter } from 'next/router';
import { GetStaticPropsResult } from 'next';
import styled from 'styled-components';
import recipes from '../../data/recipes.json';

const Title = styled.h1`
	color: red;
	font-size: 50px;
`;

type Recipe = {
	id: number;
	name: string;
	recipeUrl: string;
	ingredients: {
		ingredientId: number;
		amount: number;
	}[];
};

type RecipeProps = {
	recipe: Recipe;
};

export default function Recipe({ recipe }: RecipeProps) {
	const router = useRouter();
	const { id } = router.query;

	recipe = recipe || recipes.find((r) => r.id === parseInt(id as string));

	console.log({ id });

	return <Title>{recipe.name}</Title>;
	return (
		<main>
			<header>
				<h1>Caribbean sweet potato and coconut stew</h1>
			</header>
			<section>
				<div className="max-width-wrapper">
					<h2>Ingredients</h2>
					<div className="ingredients-lists__wrapper">
						<div className="ingredients-list__wrapper">
							<h3 className="ingredients-list__title">Pancakes</h3>
							<ul role="list" className="ingredients-list">
								<li className="ingredients-list__item">1 Banana</li>
								<li className="ingredients-list__item">75g Flour</li>
								<li className="ingredients-list__item">10g parsley</li>
								<li className="ingredients-list__item">100 ml milk</li>
								<li className="ingredients-list__item">2g Baking powder</li>
								<li className="ingredients-list__item">
									1 piece red chilli pepper
								</li>
							</ul>
						</div>
						<div className="ingredients-list__wrapper">
							<h3 className="ingredients-list__title">Stew</h3>
							<ul role="list" className="ingredients-list">
								<li className="ingredients-list__item">
									4 g Smoked Paprika powder
								</li>
								<li className="ingredients-list__item">2g Chilli powder</li>
								<li className="ingredients-list__item">400g black beans</li>
								<li className="ingredients-list__item">1 onion</li>
								<li className="ingredients-list__item">1 clove of garlic</li>
								<li className="ingredients-list__item">1 sweet potato</li>
								<li className="ingredients-list__item">2 tomatoes</li>
								<li className="ingredients-list__item">6g Vegetable broth</li>
								<li className="ingredients-list__item">1 red pointed pepper</li>
								<li className="ingredients-list__item">150 ml Coconut milk</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="max-width-wrapper">
					<h2>Method</h2>
					<ol role="list" className="method-list">
						<li className="method-list__step">
							<p className="method-list__step-content">
								Peel the onion and garlic and chop finely. Peel the sweet potato
								and cut into 2 cm cubes. Halve the tomatoes, remove the stalk
								and seeds and roughly dice the tomato halves. Halve the pointed
								pepper, remove the seeds and cut the pepper halves into large
								pieces.
							</p>
						</li>
						<li className="method-list__step">
							<p className="method-list__step-content">
								In a bowl, mix vegetable stock and 150ml hot water into broth
								then add coconut milk.
							</p>
						</li>
						<li className="method-list__step">
							<p className="method-list__step-content">
								In a separate bowl, peel the banana and break it into pieces.
								Add Flour, Baking Powder, and Milk, and whisk together. Pluck
								the parsley leaves and chop finely. Finely chop the chilli. Add
								half the chopped parsley and the chilli to the batter.
							</p>
						</li>
						<li className="method-list__step">
							<p className="method-list__step-content">
								In a large saucepan over medium heat 1 tbsp oil. Sauté onion and
								garlic for 3 minutes. Add diced tomatoes and cook for another 3
								minutes. Meanwhile, drain the black beans through a sieve and
								rinse until the water runs clear.
							</p>
						</li>
						<li className="method-list__step">
							<p className="method-list__step-content">
								Add black beans, sweet potato cubes, paprika pieces, spice
								mixture and the coconut milk mixture and simmer for about 20
								minutes until the sauce has thickened a little. Season to taste
								with salt at the end of the cooking time.
							</p>
						</li>
						<li className="method-list__step">
							<p className="method-list__step-content">
								In a large frying pan heat 1 tbsp oil over medium heat and fry 4
								pancakes from the batter for about 5 minutes on each side.
							</p>
						</li>
						<li className="method-list__step">
							<p className="method-list__step-content">
								Serve stew in bowls with leftover parsley on top, pancakes on
								the side.
							</p>
						</li>
					</ol>
				</div>
			</section>
		</main>
	);
}

type Context = {
	params: {
		id: string;
	};
};

export function getStaticProps({
	params,
}: Context): GetStaticPropsResult<RecipeProps> {
	const { id } = params;

	return {
		props: {
			recipe: recipes.find((r) => r.id === parseInt(id as string)) as Recipe,
		},
	};
}

export async function getStaticPaths() {
	return {
		paths: recipes.map(({ id }) => {
			return { params: { id: id.toString() } };
		}),
		fallback: false,
	};
}
