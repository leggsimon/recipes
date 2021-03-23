import { GetStaticPropsResult } from 'next';
import styled from 'styled-components';
import recipes, { IRecipe } from '../data/recipes';
import { RecipeCard } from '../src/components/RecipeCard/RecipeCard';
import { motion, AnimatePresence } from 'framer-motion';

const Title = styled.h1`
	color: hsla(0, 0%, 15%);
	font-size: 3rem;
	text-align: center;
	padding: 1.5rem 0;
	background-color: hsla(0, 0%, 100%, 0.95);
`;

const Recipes = styled(motion.section)`
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
			<AnimatePresence>
				<Recipes
					layout
					initial="initial"
					animate="enter"
					exit="exit"
					variants={{
						enter: {
							transition: {
								staggerChildren: 0.1,
							},
						},
						exit: {
							transition: {
								staggerDirection: -1,
							},
						},
					}}
				>
					{recipes.map((recipe) => (
						<motion.div key={recipe.id}>
							<RecipeCard recipe={recipe} />
						</motion.div>
					))}
				</Recipes>
			</AnimatePresence>
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
