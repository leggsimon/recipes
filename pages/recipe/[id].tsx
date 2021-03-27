import { GetStaticPropsResult } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { Layout } from '../../src/components/Layout/Layout';
import recipes, { IRecipe } from '../../data/recipes';
import ingredients, {
	IIngredient,
	IngredientQuantityType,
} from '../../data/ingredients';

const Wrapper = styled.main`
	position: relative;
	top: 50%;
`;

const RecipeImage = styled.figure`
	max-width: 1000px;
	position: fixed;
	top: -80px;
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

export default function Recipe({ recipe }: RecipeProps) {
	return (
		<Layout>
			<Head>
				<meta property="og:image" content={recipe.mainImage} />
				<title>{recipe.name}</title>
			</Head>
			<RecipeImage>
				<Image
					src={recipe.mainImage || '/images/placeholder-image.png'}
					layout="responsive"
					width={350}
					height={350 / 1.5}
				/>
			</RecipeImage>
			<Wrapper>
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
		</Layout>
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
