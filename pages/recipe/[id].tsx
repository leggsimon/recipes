import Head from 'next/head';
import { GetStaticPropsResult } from 'next';
import styled from 'styled-components';
import recipes, { IRecipe } from '../../data/recipes';

const Wrapper = styled.main`
	position: relative;
	top: 40vw;
`;

const RecipeImage = styled.img`
	width: 100%;
	position: fixed;
	top: -80px;
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
	recipe: IRecipe;
};

export default function Recipe({ recipe }: RecipeProps) {
	return (
		<>
			<Head>
				<meta property="og:image" content={recipe.mainImage} />
				<title>{recipe.name}</title>
			</Head>
			<RecipeImage src={recipe.mainImage} aria-hidden="true" />
			<Wrapper>
				<TitleContainer>
					<Title>{recipe.name}</Title>
				</TitleContainer>
				<Section>
					<MaxWidthWrapper>
						<SectionHeading>Ingredients</SectionHeading>
						<IngredientsList role="list">
							<IngredientItem>1 Banana</IngredientItem>
							<IngredientItem>75g Flour</IngredientItem>
							<IngredientItem>10g parsley</IngredientItem>
							<IngredientItem>100 ml milk</IngredientItem>
							<IngredientItem>2g Baking powder</IngredientItem>
							<IngredientItem>1 piece red chilli pepper</IngredientItem>
							<IngredientItem>4 g Smoked Paprika powder</IngredientItem>
							<IngredientItem>2g Chilli powder</IngredientItem>
							<IngredientItem>400g black beans</IngredientItem>
							<IngredientItem>1 onion</IngredientItem>
							<IngredientItem>1 clove of garlic</IngredientItem>
							<IngredientItem>1 sweet potato</IngredientItem>
							<IngredientItem>2 tomatoes</IngredientItem>
							<IngredientItem>6g Vegetable broth</IngredientItem>
							<IngredientItem>1 red pointed pepper</IngredientItem>
							<IngredientItem>150 ml Coconut milk</IngredientItem>
						</IngredientsList>
					</MaxWidthWrapper>
				</Section>
				{recipe.steps && (
					<Section>
						<MaxWidthWrapper>
							<SectionHeading>Method</SectionHeading>
							<MethodList role="list">
								{recipe.steps.map((step, i) => {
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
		</>
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
			recipe: recipes.find((r) => r.id === parseInt(id as string)) as IRecipe,
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
