import { GetStaticPropsResult } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import recipes, { IRecipe } from '../../data/recipes';
import ingredients, {
	IIngredient,
	IngredientQuantityType,
} from '../../data/ingredients';

const Wrapper = styled(motion.main)`
	/* position: relative; */
	/* top: 50%; */
`;

const RecipeImage = styled(motion.figure)`
	max-width: 1000px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
`;

const TitleContainer = styled.header`
	text-align: center;
	max-width: 600px;
	margin: 0 auto;
	line-height: 1.3;
	padding: 1rem 1rem 0 1rem;
	border-radius: 10px 10px 0 0;
	background-color: white;
`;

const Title = styled.h1`
	font-size: 3.6rem;

	@media (max-width: 500px) {
		font-size: 2.5rem;
	}
`;

const Section = styled.section`
	background-color: white;
	padding: 40px;
`;

const MaxWidthWrapper = styled.div`
	max-width: 800px;
	margin: 0 auto;
`;

const SectionHeading = styled.h2`
	margin-bottom: 2rem;
	font-size: 2rem;
	position: sticky;
	top: 0;
	background-color: #ffffff;
	padding-block: 1rem;
	z-index: 1;

	@media (max-width: 500px) {
		font-size: 1.8rem;
	}
`;

const IngredientsList = styled.ul`
	padding: 0;
`;

const IngredientItem = styled.li`
	&:before {
		content: '•';
		color: hsl(328deg 100% 64%);
		margin-right: 1rem;
		font-size: 2rem;
		line-height: 1;
		vertical-align: sub;
	}
`;

const MethodList = styled.ol`
	counter-reset: method-counter;
	max-width: 700px;
	margin: 0 auto;
	padding: 0;
`;

const MethodStepContainer = styled.li`
	counter-increment: method-counter;
	padding-bottom: 30px;
	border-bottom: 1px solid hsl(0 0% 90%);
	margin-bottom: 20px;

	&::before {
		font-family: 'Lobster', cursive;
		content: counter(method-counter);
		background-color: hsl(328deg 100% 64%);
		position: absolute;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		display: inline-block;
		line-height: 2rem;
		color: hsl(0 0% 100%);
		text-align: center;
		margin-right: 0.5rem;
	}
`;
const MethodStep = styled.p`
	padding-left: 3rem;
`;

type RecipeProps = {
	recipe: IRecipeWithIngredients;
};

let easing = [0.175, 0.85, 0.42, 0.96];

// const imageVariants = {
// 	exit: {
// 		y: 150,
// 		opacity: 0,
// 		transition: {
// 			duration: 0.5,
// 			ease: easing,
// 		},
// 	},
// 	enter: {
// 		y: 0,
// 		opacity: 1,
// 		transition: {
// 			duration: 0.5,
// 			ease: easing,
// 		},
// 	},
// };

const textVariants = {
	exit: {
		y: 600,
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: easing,
		},
	},
	enter: {
		y: 300,
		opacity: 1,
		transition: {
			delay: 0.3,
			duration: 0.5,
			ease: easing,
		},
	},
};

export default function Recipe({ recipe }: RecipeProps) {
	return (
		<>
			<Head>
				<meta property="og:image" content={recipe.mainImage} />
				<title>{recipe.name}</title>
			</Head>
			<motion.div initial="exit" animate="enter" exit="exit">
				<RecipeImage
					// variants={imageVariants}
					layoutId={`image-${recipe.id}`}
				>
					<Image
						src={recipe.mainImage || '/images/placeholder-image.png'}
						layout="responsive"
						width={350}
						height={350 / 1.5}
					/>
				</RecipeImage>
				<Wrapper variants={textVariants}>
					<TitleContainer>
						<Title>{recipe.name}</Title>
					</TitleContainer>
					<Section>
						<MaxWidthWrapper>
							<SectionHeading>Ingredients</SectionHeading>
							<IngredientsList role="list">
								{recipe.ingredients.map((ingredient, i) => {
									return <IngredientItem key={i}>{ingredient}</IngredientItem>;
								})}
							</IngredientsList>
						</MaxWidthWrapper>
					</Section>
					{recipe.method && (
						<Section>
							<MaxWidthWrapper>
								<SectionHeading>Method</SectionHeading>
								<MethodList role="list">
									{recipe.method.steps.map((step, i) => {
										return (
											<MethodStepContainer key={i}>
												<MethodStep>{step}</MethodStep>
											</MethodStepContainer>
										);
									})}
								</MethodList>
							</MaxWidthWrapper>
						</Section>
					)}
				</Wrapper>
			</motion.div>
		</>
	);
}

type Context = {
	params: {
		id: string;
	};
};

type Modify<T, R> = Omit<T, keyof R> & R;

type IRecipeWithIngredients = Modify<
	IRecipe,
	{
		ingredients: string[];
	}
>;

export function getStaticProps({
	params,
}: Context): GetStaticPropsResult<RecipeProps> {
	const { id } = params;
	const separators: Record<IngredientQuantityType, string> = {
		grams: 'g',
		millilitres: 'ml',
		individual: ' ×',
	};
	const recipe = recipes.find(
		(r) => r.id === parseInt(id as string),
	) as IRecipe;

	const recipeWithIngredients = {
		...recipe,
		ingredients: recipe.ingredients.map((recipeIngredient) => {
			const ingredient = ingredients.find(
				(i) => i.id === recipeIngredient.ingredientId,
			) as IIngredient;

			return `${recipeIngredient.amount}${
				separators[ingredient.quantityType]
			} ${ingredient.name}`;
		}),
	};

	return {
		props: {
			recipe: recipeWithIngredients,
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
