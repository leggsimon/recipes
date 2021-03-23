import { IRecipe } from '../../../data/recipes';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled(motion.article)`
	border: 1px solid hsl(0 0% 90%);
	border-radius: 15px;
	overflow: hidden;
	height: 100%;

	&:hover {
		border: 1px solid hsl(0 0% 70%);
		transform: scale(1.005);
	}
`;
// const RecipeImage = styled.img`
// 	width: 100%;
// 	display: block;
// `;
const RecipeName = styled.h1`
	padding: 0.8em 1em;
	font-family: var(--font-family-body);
`;

type RecipeCardProps = {
	recipe: IRecipe;
};

const postVariants = {
	initial: {
		scale: 0.96,
		y: 30,
		opacity: 0,
	},
	enter: {
		scale: 1,
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.2,
			duration: 0.5,
			ease: [0.48, 0.15, 0.25, 0.96],
		},
	},
	exit: {
		scale: 0.6,
		y: 600,
		opacity: 0,
		transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] },
	},
};

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
	const url = `/recipe/${recipe.id}`;
	return (
		<motion.div variants={postVariants}>
			<Link key={recipe.id} href={url}>
				<a onClick={() => console.log('clicked')}>
					<Wrapper>
						<motion.figure layoutId={`image-${recipe.id}`}>
							<Image
								src={recipe.mainImage || '/images/placeholder-image.png'}
								layout="responsive"
								width={350}
								height={350 / 1.5}
							/>
						</motion.figure>
						<RecipeName>{recipe.name}</RecipeName>
					</Wrapper>
				</a>
			</Link>
		</motion.div>
	);
};
