import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const duration = 1;
const variants = {
	initial: {
		opacity: 0,
	},
	enter: {
		opacity: 1,
		transition: {
			duration: duration,
			delay: 0.3,
			ease: 'linear',
			when: 'beforeChildren',
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: duration,
			ease: 'linear',
			when: 'beforeChildren',
		},
	},
};

const Wrapper = styled(motion.div)``;

type LayoutProps = {};

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<Wrapper initial="initial" animate="enter" exit="exit" variants={variants}>
			{children}
		</Wrapper>
	);
};
