export interface IRecipe {
	id: number;
	name: string;
	recipeUrl: string;
	mainImage: string;
	ingredients: {
		ingredientId: number;
		amount: number;
	}[];
	method?: {
		steps: string[];
	};
}

const recipes: IRecipe[] = [
	{
		id: 1,
		name: 'Burger with pear and onion chutney',
		recipeUrl:
			'https://www.hellofresh.de/recipes/burger-mit-birnen-zwiebel-chutney-5f6d9584a5f8903748746b00',
		ingredients: [
			{
				ingredientId: 12,
				amount: 100,
			},
			{
				ingredientId: 46,
				amount: 1,
			},
			{
				ingredientId: 54,
				amount: 1,
			},
			{
				ingredientId: 14,
				amount: 2,
			},
			{
				ingredientId: 42,
				amount: 200,
			},
			{
				ingredientId: 57,
				amount: 500,
			},
			{
				ingredientId: 65,
				amount: 1,
			},
			{
				ingredientId: 39,
				amount: 35,
			},
			{
				ingredientId: 7,
				amount: 25,
			},
			{
				ingredientId: 30,
				amount: 1,
			},
		],
		mainImage: '/images/burger-with-pear-and-onion-chutney.jpeg',
		method: {
			steps: [
				'Preheat the oven to 220 ° C top / bottom heat (200 ° C convection).',
				'Depending on the size, quarter or halve unpeeled potatoes lengthways and place on a baking sheet lined with baking paper, sprinkle with salt, pepper and 1 tbsp olive oil.',
				'Peel the onion and cut into fine strips. Peel and quarter the pear and core. Roughly grate the pear quarters. Peel the garlic and chop very finely.',
				'In a large bowl, mix the minced meat, garlic, salt & pepper. From the mass form 2 finger-thick patties. TIP: Try to shape the patties flat, otherwise they will contract too much during frying and become too thick.',
				'Put the potatoes in the oven for 25-30 minutes.',
				'In a small saucepan heat 1 tbsp olive oil over low heat. Put in onion strips, balsamic cream, grated pear and 2 tbsp of water. Simmer for approx. 14-16 minutes over low heat, until all the liquid has evaporated and the chutney is thick and sticky. Season to taste with salt and pepper.',
				'In a large pan heat 1 tbsp of oil and fry the patties on one side for approx. 5 minutes. Turn the patties over, distribute the blue cheese (according to taste) on the fried sides and fry the patties for another 5 minutes until the meat is cooked through.',
				'Halve the brioche buns and place in the oven with the potatoes for the last 1 - 2 minutes. Meanwhile, pluck off the lettuce leaves.',
				'After baking, coat the burger buns with a dollop of pear chutney on the underside and on the top and top with salad leaves and patties. Enjoy with potato wedges and mayonnaise.',
			],
		},
	},
	{
		id: 2,
		name: 'Fried venison steak with onion sauce',
		recipeUrl:
			'https://www.hellofresh.de/recipes/gebratenes-hirschsteak-mit-zwiebelsosze-5fa27cd34afcda73f967640e',
		ingredients: [
			{
				ingredientId: 99,
				amount: 250,
			},
			{
				ingredientId: 61,
				amount: 1,
			},
			{
				ingredientId: 51,
				amount: 10,
			},
			{
				ingredientId: 66,
				amount: 10,
			},
			{
				ingredientId: 100,
				amount: 200,
			},
			{
				ingredientId: 101,
				amount: 25,
			},
			{
				ingredientId: 57,
				amount: 400,
			},
			{
				ingredientId: 69,
				amount: 1,
			},
			{
				ingredientId: 30,
				amount: 1,
			},
			{
				ingredientId: 102,
				amount: 1,
			},
		],
		mainImage: '/images/fried-venison-steak-with-onion-sauce.jpeg',
		method: {
			steps: [
				'Add salted water to a large saucepan and bring to the boil.',
				'Halve the savoy cabbage if necessary and remove the stalk. Then cut the savoy cabbage into approx. 3 cm diamonds. Halve the shallot, peel and finely chop. Halve the red onion, peel it and cut into fine strips. Peel the garlic. Pluck the leaves of the parsley and chop finely.',
				'Add the potatoes to the boiling water, reduce the heat and cook for 15-20 minutes until soft. Meanwhile, continue with the recipe. Drain the finished potatoes through a sieve. In the same pot add 1 tbsp butter, put the potatoes and half of the rosemary sprigs back into the saucepan and fry for 2-3 minutes. Salt the potatoes.',
				'In a small saucepan over medium heat melt 1 tbsp butter and sauté the red onion strips for 2-3 minutes until colorless. Deglaze the contents of the pot with the demi-glace . Let everything simmer for another 2 - 3 minutes and set aside.',
				'Heat 1 tbsp oil in a large pan. Add the shallot cubes, press in the garlic and sauté for 1 minute. Add savoy cabbage and fry everything together for 6 - 8 minutes, stirring occasionally, until the savoy cabbage is soft enough. Season to taste with salt and pepper.',
				'In a second large pan, heat 1 tbsp oil. Add the venison steaks and the remaining rosemary to the pan for the aroma and fry the venison steaks for 1 - 2 minutes (for rare), 2 - 3 minutes (for medium) or 3 - 4 minutes (for well done) on each side. Then take it out of the pan and let it rest briefly, wrapped in aluminum foil.',
				'Remove the rosemary sprigs from the potatoes and the pan after cooking. Arrange the potatoes, venison steaks, savoy cabbage and sauce on plates, add the cranberry jam, garnish with chopped parsley and enjoy.',
			],
		},
	},
	{
		id: 3,
		name: 'Pork fillet with apple and mustard sauce',
		recipeUrl:
			'https://www.hellofresh.de/recipes/schweinefilet-mit-apfel-senf-sosze-5fa27c2ff1ec366d3b2e0603',
		mainImage: '/images/pork-fillet-with-apple-and-mustard-sauce.jpeg',
		ingredients: [
			{
				ingredientId: 2,
				amount: 1,
			},
			{
				ingredientId: 46,
				amount: 1,
			},
			{
				ingredientId: 58,
				amount: 500,
			},
			{
				ingredientId: 56,
				amount: 250,
			},
			{
				ingredientId: 51,
				amount: 10,
			},
			{
				ingredientId: 78,
				amount: 10,
			},
			{
				ingredientId: 15,
				amount: 1,
			},
			{
				ingredientId: 9,
				amount: 4,
			},
			{
				ingredientId: 45,
				amount: 10,
			},
			{
				ingredientId: 94,
				amount: 150,
			},
			{
				ingredientId: 16,
				amount: 10,
			},
		],
		method: {
			steps: [
				'Heat plenty of water in the kettle. Pour plenty of hot water into a large saucepan and a smaller saucepan, add salt to both and bring to the boil.',
				'Peel the potatoes and quarter or halve depending on the size. Divide the broccoli into florets. Remove the core of the apple and cut the apple into approx. 1 cm wide slices. Peel and finely chop the onion. Finely chop the parsley. Pluck the thyme leaves and roughly chop. Cut pork tenderloin into 4 medallions of the same size and lightly salt.',
				'Prepare beef broth with beef stock and 100ml hot water.',
				'Add the potato quarters to the boiling water, reduce the heat and cook for 15-20 minutes until soft. Towards the end, add broccoli to the smaller saucepan and boil for 3 minutes.',
				'In a large pan heat 1 tbsp olive oil over medium heat and sear the pork fillets and apple wedges for approx 5 minutes until the apple is soft and the medallions are light pink. Then remove the meat and apple from the pan and set aside in some aluminium foil to keep warm.',
				'Fry the onion cubes in the same pan without adding any further fat for 2 - 3 minutes. Deglaze with crème fraîche, beef broth, mustard and thyme. Reduce for approx 3 minutes until the sauce has thickened. Season to taste with salt and pepper. Add the apple and medallions to the sauce and keep warm until potatoes are done.',
				'Drain the brocolli in a colander.',
				'Drain the potatoes in a colander reserving a small amount of the water. Add back to empty saucepan. Then mash the potatoes with butter, the cooking water. Add salt and pepper to taste.',
				'Spread the mashed potatoes and broccoli on plates and sprinkle with parsley. Serve with pork medallions and enjoy with apple and mustard sauce.',
			],
		},
	},
	{
		id: 4,
		name: 'Enchiladas with spicy tomato sauce',
		recipeUrl:
			'https://www.hellofresh.de/recipes/enchiladas-mit-scharfer-tomatensosze-5fab9c71392eeb7bdf3f68fa',
		ingredients: [
			{
				ingredientId: 95,
				amount: 4,
			},
			{
				ingredientId: 11,
				amount: 400,
			},
			{
				ingredientId: 96,
				amount: 50,
			},
			{
				ingredientId: 44,
				amount: 100,
			},
			{
				ingredientId: 10,
				amount: 1,
			},
			{
				ingredientId: 83,
				amount: 70,
			},
			{
				ingredientId: 97,
				amount: 2,
			},
			{
				ingredientId: 38,
				amount: 1,
			},
			{
				ingredientId: 70,
				amount: 150,
			},
			{
				ingredientId: 76,
				amount: 1,
			},
			{
				ingredientId: 20,
				amount: 1,
			},
			{
				ingredientId: 80,
				amount: 2,
			},
			{
				ingredientId: 30,
				amount: 1,
			},
			{
				ingredientId: 16,
				amount: 10,
			},
			{
				ingredientId: 84,
				amount: 4,
			},
		],
		mainImage: '/images/enchiladas-with-spicy-tomato-sauce.jpeg',
		method: {
			steps: [
				'Preheat the oven to 200 ° C top / bottom heat (180 ° C convection). Boil some water in the kettle.',
				'Halve the pepper, remove the core and cut the pepper halves into strips. Put black beans in a colander and rinse under running water until it runs clear. Peel and finely chop garlic. Cut the chilli into rings (attention: spicy!). Quarter or eighth of the mushrooms depending on their size. Cut the white and green parts of the spring onions separately into thin rings. Roughly grate cheese.',
				'Prepare vegatable broth with vegetable stock and 100ml boiling water.',
				'In a large pan heat 1 tbsp olive oil over medium heat and sauté the garlic, paprika, mushrooms and white spring onion rings for approx. 3 minutes. Add black beans and fry for 2 minutes. Add vegetable broth and simmer for 6 - 8 minutes, until the peppers are soft and the water has boiled away.',
				'Prepare tomato broth with tomato paste and 150ml boiling water.',
				'After simmering, add 2 tbsp sour cream to the beans and season with salt & pepper to taste and mix together.',
				'Fill the tortilla wraps with the bean mixture and roll up. Place the rolls close together in a baking dish.',
				'Melt butter in the same pan over medium heat, add “Hello Fiesta” spice mixture and heat for approx. 30 seconds. Add tomato broth and stir into a sauce. Season to taste with salt and pepper. Spread the tomato sauce over the enchiladas and top with the chili rings. Crumble the cheese mix over it. Bake the enchiladas in the oven for 10-15 minutes, until the cheese is golden brown.',
				'Wash the lime with hot water, and finely grate the peel. Halve the lime and squeeze half of the lime into a small bowl. Cut the other half into wedges. Halve the tomatoes, remove the stalk and seeds and cut the tomato halves into approx. 2 cm cubes. Add the tomato and green spring onion rings to the lime juice and add 1 tsp sugar, stir and let marinate.',
				'In a second small bowl, add the remaining sour cream with 1 tsp of the lime zest and season with salt and pepper. Spread the enchiladas on plates and enjoy with tomato salsa, lemon sour cream and lime wedges. Good Appetite!',
			],
		},
	},
	{
		id: 5,
		name: 'Boulette with apple and bacon sauce',
		recipeUrl:
			'https://www.hellofresh.de/recipes/boulette-mit-apfel-speck-sosze-5fabff509af9e30821771e91',
		ingredients: [
			{
				ingredientId: 2,
				amount: 1,
			},
			{
				ingredientId: 46,
				amount: 1,
			},
			{
				ingredientId: 48,
				amount: 1,
			},
			{
				ingredientId: 25,
				amount: 200,
			},
			{
				ingredientId: 51,
				amount: 10,
			},
			{
				ingredientId: 75,
				amount: 5,
			},
			{
				ingredientId: 42,
				amount: 300,
			},
			{
				ingredientId: 58,
				amount: 600,
			},
			{
				ingredientId: 16,
				amount: 20,
			},
			{
				ingredientId: 29,
				amount: 1,
			},
		],
		mainImage: '/images/boulette-with-apple-and-bacon-sauce.jpeg',
		method: {
			steps: [
				'Boil plenty of salted water in a saucepan.',
				'Peel the potatoes and half or quarter depending on the size and put aside. Finely chop the parsley leaves.',
				'Mix the minced meat with salt and pepper in a large bowl, beat in the egg and add half of the chopped parsley, knead everything well and form 2 meatballs. (Tip: Adding an egg will make the meatball more tender, but you can also leave it out.)',
				'Peel and halve the onions and cut into fine strips. Quarter the apple, remove the core and cut the apple quarters into smaller slices.',
				'Put the potatoes in the boiling water. Let the potatoes simmer for about 15 minutes until they are soft.',
				'Heat 1 tbsp oil in a large pan over medium heat. Add the meatballs, diced bacon and onion strips. Fry the meatballs for approx. 5 minutes on each side, until they are no longer pink on the inside. Stir the onion strips and bacon in between. After the cooking time, remove the meatballs from the pan and keep them warm.',
				'Put apple wedges in the pan and sprinkle with cream and 75 ml water. Stir in the "Hello Muskat" spice mixture and season to taste with salt and pepper, simmer the sauce for approx. 5 minutes.',
				'Drain the potatoes using the lid, add butter and mash the potatoes. Season to taste with salt and pepper. Distribute mashed potatoes and meatballs on plates, enjoy with apple and bacon sauce and the remaining parsley.',
			],
		},
	},
	{
		id: 6,
		name: 'Pork fillet with honey and rosemary sauce',
		recipeUrl:
			'https://www.hellofresh.de/recipes/schweinefilet-mit-honig-rosmarin-sosze-5f8fffdf0ecbb93535781f04',
		ingredients: [
			{
				ingredientId: 58,
				amount: 500,
			},
			{
				ingredientId: 61,
				amount: 1,
			},
			{
				ingredientId: 66,
				amount: 10,
			},
			{
				ingredientId: 56,
				amount: 250,
			},
			{
				ingredientId: 15,
				amount: 1,
			},
			{
				ingredientId: 16,
				amount: 10,
			},
			{
				ingredientId: 33,
				amount: 8,
			},
			{
				ingredientId: 40,
				amount: 100,
			},
			{
				ingredientId: 19,
				amount: 4,
			},
			{
				ingredientId: 7,
				amount: 15,
			},
			{
				ingredientId: 50,
				amount: 40,
			},
		],
		mainImage: '/images/pork-fillet-with-honey-and-rosemary-sauce.jpeg',
		method: {
			steps: [
				'Fill a large pot and a smaller pot with plenty of hot water, add salt and bring to the boil. Boil some water in the kettle.',
				'Peel and quarter the potatoes. Divide the broccoli into small florets. Peel and halve the onion and cut the onion halves into thin strips. Pluck the needles from the rosemary and roughly chop them. Prepare the chicken broth with the chicken stock and 250ml hot water.',
				'Cut the pork fillet into 2 and season with salt and pepper.',
				'In a large frying pan heat 1 tbsp oil on medium heat, fry the pork fillets for 7 - 8 minutes on each side until they are light pink. Then take it out of the pan and keep in aluminium foil to keep warm.',
				'Put the potatoes in the large pot with boiling water and simmer for 12-15 minutes.',
				'Again in the frying pan heat 1 tbsp oil over medium heat, fry onion strips and half of the chopped rosemary for 2 - 3 minutes, then deglaze with the prepared chicken stock and let it simmer for approx. 5 minutes. Stir in honey, balsamic cream and butter and season to taste with a little salt and pepper.',
				'Put the broccoli florets in the smaller pot with boiling water and simmer for 3-4 minutes.',
				'Drain the cooked potatoes into a sieve and put them back into the pot straight away. Add 100 ml milk and grated hard cheese and use a potato masher to make a creamy puree. Season the puree with salt and pepper.',
				'Distribute the mashed potatoes on plates. Serve the pork fillets and broccoli next to it. Spread the rosemary and honey sauce on top and enjoy.',
			],
		},
	},
	{
		id: 7,
		name: 'Indian curry fish with spicy zucchini',
		recipeUrl:
			'https://www.hellofresh.de/recipes/indischer-curry-fisch-mit-scharfer-zucchini-5f6d95b7b4e0253fef0c0ccd',
		ingredients: [
			{
				ingredientId: 77,
				amount: 1,
			},
			{
				ingredientId: 17,
				amount: 3,
			},
			{
				ingredientId: 24,
				amount: 250,
			},
			{
				ingredientId: 107,
				amount: 2,
			},
			{
				ingredientId: 30,
				amount: 1,
			},
			{
				ingredientId: 90,
				amount: 1,
			},
			{
				ingredientId: 27,
				amount: 1,
			},
			{
				ingredientId: 20,
				amount: 1,
			},
			{
				ingredientId: 35,
				amount: 100,
			},
			{
				ingredientId: 76,
				amount: 1,
			},
		],
		mainImage: '/images/indian-curry-fish-with-spicy-zucchini.jpeg',
		method: {
			steps: [
				'Preheat the oven to 200 ° C top / bottom heat (180 ° C convection). Heat plenty of salted water into a large saucepan.',
				'Peel and finely chop garlic. Halve the chilli lengthways, remove the seeds and finely chop the chilli halves (attention: spicy!). Cut the white and green parts of the spring onions separately into fine rings. Cut the ends of the courgette and cut the courgette into 1 cm wide slices. Peel the sweet potato and carrots and cut both into large pieces.',
				'Carefully rub the fish on both sides with the spice mixture, a little salt and pepper on a flat plate.',
				'Add courgette, garlic, chilli and white part of the spring onion with 1 tbsp oil, and salt & pepper in a baking dish and bake in the oven for 20-25 minutes.',
				'Put the sweet potato and carrot in the large saucepan and simmer for 15 minutes until tender.',
				'Cut the lemon into 6 wedges. In a small bowl, mix the cream yoghurt with the juice from 1 - 2 lemon wedges and season with salt and pepper.',
				'Heat 1 tbsp oil in a large pan and fry the marinated fish on the skin side for 2 - 3 minutes, then turn and fry for another 2 - 3 minutes, until the fish is golden brown and no longer translucent.',
				'At the end of the cooking time, drain the sweet potato and carrot pieces through a sieve, collecting some of the cooking water and putting the vegetables back into the pot. Use a potato masher to mash. Stir in 1 tbsp of the dip and season the puree with salt and pepper. Keep warm if necessary.',
				'Spread the sweet potato and carrot puree and courgette on plates. Serve the fish, lemon wedges and dip. Garnish with the green spring onion rings.',
			],
		},
	},
	{
		id: 8,
		name: 'Caribbean sweet potato and coconut stew',
		recipeUrl:
			'https://www.hellofresh.de/recipes/karibischer-suszkartoffel-kokos-eintopf-5f994c68334c8e3ebd476de0',
		mainImage: '/images/caribbean-sweet-potato-and-coconut-stew.jpeg',
		ingredients: [
			{
				ingredientId: 8,
				amount: 1,
			},
			{
				ingredientId: 51,
				amount: 10,
			},
			{
				ingredientId: 20,
				amount: 1,
			},
			{
				ingredientId: 40,
				amount: 100,
			},
			{
				ingredientId: 11,
				amount: 400,
			},
			{
				ingredientId: 46,
				amount: 1,
			},
			{
				ingredientId: 30,
				amount: 1,
			},
			{
				ingredientId: 77,
				amount: 1,
			},
			{
				ingredientId: 80,
				amount: 2,
			},
			{
				ingredientId: 84,
				amount: 6,
			},
			{
				ingredientId: 62,
				amount: 1,
			},
			{
				ingredientId: 23,
				amount: 150,
			},
			{
				ingredientId: 55,
				amount: 75,
			},
			{
				ingredientId: 6,
				amount: 2,
			},
		],
		method: {
			steps: [
				'Peel the onion and garlic and chop finely. Peel the sweet potato and cut into 2 cm cubes. Halve the tomatoes, remove the stalk and seeds and roughly dice the tomato halves. Halve the pointed pepper, remove the seeds and cut the pepper halves into large pieces.',
				'In a bowl, mix vegetable stock and 150ml hot water into broth then add coconut milk.',
				'In a separate bowl, peel the banana and break it into pieces. Add Flour, Baking Powder, and Milk, and whisk together. Pluck the parsley leaves and chop finely. Finely chop the chilli. Add half the chopped parsley and the chilli to the batter.',
				'In a large saucepan over medium heat 1 tbsp oil. Sauté onion and garlic for 3 minutes. Add diced tomatoes and cook for another 3 minutes. Meanwhile, drain the black beans through a sieve and rinse until the water runs clear.',
				'Add black beans, sweet potato cubes, paprika pieces, spice mixture and the coconut milk mixture and simmer for about 20 minutes until the sauce has thickened a little. Season to taste with salt at the end of the cooking time.',
				'In a large frying pan heat 1 tbsp oil over medium heat and fry 4 pancakes from the batter for about 5 minutes on each side.',
				'Serve stew in bowls with leftover parsley on top, pancakes on the side.',
			],
		},
	},
	{
		id: 9,
		name: 'Chicken breast in fruity cranberry sauce',
		recipeUrl:
			'https://www.hellofresh.de/recipes/hahnchenbrust-in-cranberrysosze-5f8045b6eb4aa125ec3aaa18',
		ingredients: [
			{
				ingredientId: 46,
				amount: 1,
			},
			{
				ingredientId: 30,
				amount: 1,
			},
			{
				ingredientId: 51,
				amount: 10,
			},
			{
				ingredientId: 66,
				amount: 10,
			},
			{
				ingredientId: 34,
				amount: 150,
			},
			{
				ingredientId: 18,
				amount: 250,
			},
			{
				ingredientId: 107,
				amount: 2,
			},
			{
				ingredientId: 108,
				amount: 20,
			},
			{
				ingredientId: 3,
				amount: 25,
			},
			{
				ingredientId: 27,
				amount: 1,
			},
			{
				ingredientId: 35,
				amount: 100,
			},
			{
				ingredientId: 19,
				amount: 4,
			},
			{
				ingredientId: 16,
				amount: 20,
			},
		],
		mainImage: '/images/chicken-breast-in-fruity-cranberry-sauce.jpeg',
		method: {
			steps: [
				'Heat plenty of water in the kettle. Preheat the oven to 220 ° C top / bottom heat (200 ° C convection). Add 300ml salted water to a saucepan for the rice.',
				'Cut the ends of the courgette and cut the courgette into 0.5 cm thin slices. Roughly chop the cranberries. Peel and chop onion and garlic. Pluck the rosemary needles and parsley leaves and chop separately.',
				'Prepare a chicken broth with the chicken stock and 250 ml of hot water. Add the chopped cranberries, apricot jam and curry to the broth.',
				'Spread the courgette slices on a baking sheet lined with baking paper (leave a little space for the chicken). With 1 tbsp oil, salt and pepper.',
				'Bring the salted water to a boil. Rinse the rice in a sieve with cold water until it runs through it clearly and add to the water. Cook covered for approx. 10 minutes. Then take it off the stove and let it soak for another 10 minutes.',
				'Put the courgette in the oven and bake for about 15 minutes, until the courgette is soft.',
				'In a large pan 1 tbsp of oil, fry the chicken breast in it for approx. 3 minutes on each side. Then place the chicken breast on the baking sheet, season with salt and pepper and cook in the oven for approx. 10 minutes until it is no longer pink.',
				'In the same pan, add butter, rosemary needles, onion and garlic and sauté for 4 - 5 minutes. Then deglaze with the chicken & cranberry broth. Increase the heat and let the sauce simmer for 4 - 5 minutes, until the sauce has thickened a little. Season to taste with salt and pepper. Also season the cream yoghurt with a little salt and pepper.',
				'After the soaking time, loosen the rice with a fork and distribute on plates. Serve with the chicken breast and courgette slices, drizzle with the cranberry sauce, sprinkle with the chopped parsley and enjoy with a dollop of yogurt.',
			],
		},
	},
	{
		id: 10,
		name: 'Apple and onion galette with fresh goat cheese',
		recipeUrl:
			'https://www.hellofresh.de/recipes/apfel-zwiebel-galette-mit-ziegenfrischkase-5f6d95caac48e31755327774',
		ingredients: [
			{
				ingredientId: 59,
				amount: 1,
			},
			{
				ingredientId: 2,
				amount: 1,
			},
			{
				ingredientId: 31,
				amount: 100,
			},
			{
				ingredientId: 70,
				amount: 75,
			},
			{
				ingredientId: 78,
				amount: 10,
			},
			{
				ingredientId: 61,
				amount: 1,
			},
		],
		mainImage: '/images/apple-and-onion-galette-with-fresh-goat-cheese.jpeg',
		method: {
			steps: [
				'Preheat the oven to 200 ° C top / bottom heat (180 ° C convection).',
				'Peel the onion, cut in half and cut into 0.5 cm wide slices. Quarter the apple, peel if you like, remove the core and cut each quarter into 0.5 cm thick slices.',
				'Pluck the thyme leaves. In a small bowl, Mix 75 g sour cream with the thyme leaves. Season with salt and pepper.',
				'Place the quiche pastry on a baking sheet with the parchment paper. Brush the dough evenly with thyme sour cream, leaving approx. 1 cm free at the edge. Fold the outer edge inwards so that an approx. 2 cm wide edge is created. Spread the apple and onion wedges on the dough. Scatter goat cream cheese crumble over the top.',
				'Bake the galette for 20-25 minutes, until the dough is golden brown.',
			],
		},
	},
	{
		id: 11,
		name: 'Vegan peanut curry with coconut rice',
		recipeUrl:
			'https://www.hellofresh.de/recipes/veganes-erdnusscurry-mit-kokosreis-5f7d89c48220af61bc7d74fd',
		ingredients: [
			{
				ingredientId: 23,
				amount: 250,
			},
			{
				ingredientId: 86,
				amount: 25,
			},
			{
				ingredientId: 27,
				amount: 1,
			},
			{
				ingredientId: 76,
				amount: 1,
			},
			{
				ingredientId: 84,
				amount: 4,
			},
			{
				ingredientId: 38,
				amount: 1,
			},
			{
				ingredientId: 20,
				amount: 1,
			},
			{
				ingredientId: 52,
				amount: 25,
			},
			{
				ingredientId: 34,
				amount: 150,
			},
			{
				ingredientId: 22,
				amount: 4,
			},
			{
				ingredientId: 67,
				amount: 100,
			},
			{
				ingredientId: 10,
				amount: 1,
			},
			{
				ingredientId: 53,
				amount: 10,
			},
			{
				ingredientId: 30,
				amount: 1,
			},
		],
		mainImage: '/images/vegan-peanut-curry-with-coconut-rice.jpeg',
		method: {
			steps: [
				'Put 300ml salted water in a saucepan. Boil some water in the kettle.',
				'Cut the white and green parts of the spring onions separately into thin rings. Peel and finely chop garlic. Halve the pepper, remove the core and cut the pepper halves into 1 cm thick strips. Cut off the ends of the courgette. Halve the courgette lengthways and cut into 1 cm thin crescents. Cut off the ends of the French beans and halve the beans. Halve the chilli, remove the seeds and cut the chilli halves into strips. Cut lime into 6 slices.',
				'Prepare the vegetable broth with vegetable stock and 100ml hot water.',
				'Roast the coconut flakes in a small saucepan over a medium heat for 2 - 3 minutes until they turn lightly brown.',
				'Bring the rice water to a boil. Rinse the rice in a sieve with cold water until it runs through it clearly and add to the water. Cook covered for approx. 10 minutes. Then take it off the stove and let it soak for another 10 minutes.',
				'In a large pan heat 1 tbsp oil on high heat and fry white spring onion rings and garlic for 2 minutes. Then add the beans, paprika and courgette to the pan and fry for 3 - 4 minutes.',
				'Then add curry paste and peanut butter and deglaze with coconut milk and vegetable stock. Simmer the curry sauce over a low heat for approx. 8-10 minutes, until the vegetables are soft. At the end of the cooking time 2 Squeeze the lime wedges into the pan and season with salt and pepper.',
				'Fluff the jasmine rice with a fork and distribute on deep plates. Add the peanut curry and sprinkle with green spring onion rings, chilli strips and peanuts. Enjoy with the rest of the lime wedges.',
			],
		},
	},
	{
		id: 12,
		name: 'Sweet and sour chicken pan',
		recipeUrl:
			'https://www.hellofresh.de/recipes/hahnchenpfanne-suszsauer-5f7c556bf51e756b4d12865b',
		ingredients: [
			{
				ingredientId: 18,
				amount: 250,
			},
			{
				ingredientId: 34,
				amount: 150,
			},
			{
				ingredientId: 76,
				amount: 2,
			},
			{
				ingredientId: 46,
				amount: 1,
			},
			{
				ingredientId: 68,
				amount: 10,
			},
			{
				ingredientId: 81,
				amount: 35,
			},
			{
				ingredientId: 10,
				amount: 2,
			},
			{
				ingredientId: 71,
				amount: 25,
			},
			{
				ingredientId: 63,
				amount: 12,
			},
			{
				ingredientId: 26,
				amount: 8,
			},
			{
				ingredientId: 3,
				amount: 25,
			},
			{
				ingredientId: 84,
				amount: 4,
			},
		],
		mainImage: '/images/sweet-and-sour-chicken-pan.jpeg',
		method: {
			steps: [
				'Add 300ml salted water to a saucepan for the rice. Heat some water in the kettle.',
				'Cut the white and green parts of the spring onions separately into fine rings. Peel and halve the onion and cut into slices. Halve the pepper, remove the core and cut the pepper halves into cubes of approx. 2.5 cm. In a second small bowl, add ketchup, apricot jam, red wine vinegar, soy sauce and 0.5 tbsp sugar.',
				'Cut the chicken breast fillets into pieces approx. 1 cm wide. In a small bowl, season the cornstarch with a little salt and pepper and roll the chicken pieces in it. Set aside until further use. Prepare a vegetable broth with the vegetable stock and 200ml hot water.',
				'Roast the sesame seeds in a large pan without added fat for about 1 minute on a medium heat until it smells fine. Then remove from the pan and set aside.',
				'Bring the salted water to a boil. Rinse the rice in a sieve with cold water until it runs through it clearly and add to the water. Cook covered for approx. 10 minutes. Then take it off the stove and let it soak for another 10 minutes.',
				'In the large pan heat 1 tbsp oil on medium heat, add white spring onion rings, onion wedges and chicken pieces and fry for 3 - 5 minutes while turning. Add the pepper cubes and fry again for 1 minute. Then stir in the ketchup-soy sauce and the prepared vegetable stock and let everything simmer for about 5 minutes, until the sauce has thickened a little. Season to taste with salt and pepper.',
				'After the soaking time, loosen the jasmine rice a little with a fork and distribute it on a plate. Spread the chicken pan on top, sprinkle with green spring onion rings and roasted sesame seeds and enjoy.',
			],
		},
	},
	{
		id: 13,
		name: 'Spanish-style tarte flambée with chorizo',
		recipeUrl:
			'https://www.hellofresh.de/recipes/spanish-style-flammkuchen-mit-chorizo-5f7d8a0373e82011896497be',
		ingredients: [],
		mainImage: '/images/spanish-style-tarte-flambee-with-chorizo.jpeg',
		method: {
			steps: [
				'Preheat the oven to 200 ° C top / bottom heat (180 ° C convection).',
				'Spread the tarte flambée dough on a baking sheet lined with baking paper. Peel the onion and cut into fine rings. Cut the chorizo ​​into fine cubes. Pluck the parsley leaves and chop finely. Grate the cheese.',
				'Spread the tarte flambée batter evenly with two thirds of the sour cream and season with salt and pepper. Cover the surface with onion rings, chorizo ​​cubes and cheese.',
				'Put the Pimientos de Padrón in a small baking dish mix with 1 tbsp olive oil and season generously with salt. Bake the tray with the tarte flambée on the middle rack and Pimientos de Padrón on the bottom rack in the oven for 12-16 minutes. TIP: If you want the typical tan on the pimientos, switch the oven to the grill function for approx. 2 - 5 minutes after you have taken the tarte flambée out of the oven.',
				'Peel the garlic and press into a small bowl, mix with the remaining sour cream, mayonnaise and half of the chopped parsley. Season to taste with salt and pepper.',
				'Take the tarte flambée out of the oven, garnish with the remaining parsley, portion and distribute on plates. Add the Pimientos de Padrón and enjoy with the dip.',
			],
		},
	},
	{
		id: 14,
		name: 'Sesame chicken with teriyaki stir fry',
		recipeUrl:
			'https://www.hellofresh.de/recipes/sesamhahnchen-mit-teriyaki-stir-fry-5f7d89e88220af61bc7d7501',
		ingredients: [
			{
				ingredientId: 71,
				amount: 25,
			},
			{
				ingredientId: 33,
				amount: 8,
			},
			{
				ingredientId: 68,
				amount: 20,
			},
			{
				ingredientId: 20,
				amount: 1,
			},
			{
				ingredientId: 30,
				amount: 1,
			},
			{
				ingredientId: 98,
				amount: 2,
			},
			{
				ingredientId: 91,
				amount: 8,
			},
			{
				ingredientId: 18,
				amount: 250,
			},
			{
				ingredientId: 76,
				amount: 1,
			},
			{
				ingredientId: 17,
				amount: 1,
			},
			{
				ingredientId: 15,
				amount: 1,
			},
			{
				ingredientId: 10,
				amount: 1,
			},
			{
				ingredientId: 38,
				amount: 1,
			},
			{
				ingredientId: 34,
				amount: 150,
			},
			{
				ingredientId: 26,
				amount: 8,
			},
		],
		mainImage: '/images/sesame-chicken-with-teriyaki-stir-fry.jpeg',
		method: {
			steps: [
				'Add 300ml salted water to a saucepan for the rice. Heat some water in the kettle.',
				'Divide broccoli into bite-sized florets. Peel the carrot and cut into 0.5 cm thin slices. Halve the pointed peppers, remove the seeds and stalk and cut the pointed peppers into 2 cm wide strips. Cut the white and green parts of the spring onions separately into fine rings. Peel and finely chop One third of the ginger and garlic. Halve the chilli lengthways, remove the seeds and finely chop the chilli halves. Quarter the lime.',
				'Cut the chicken breast fillets into pieces approx. 2 cm in size and stir in a large bowl together with half the corn starch and a pinch of salt until the starch becomes a little sticky. Mix the sesame and black cumin seeds on a deep plate and roll the chicken pieces in it. Put aside.',
				'Mix together 4g corn starch, honey, soy sauce, juice from 2 lime quarters and 250 ml hot water.',
				'Bring the salted water to a boil. Rinse the rice in a sieve with cold water until it runs through it clearly and add to the water. Cook covered for approx. 10 minutes. Then take it off the stove and let it soak for another 10 minutes.',
				'Heat 1 tbsp oil in a pan. Sweat the chopped ginger, garlic, white part of the spring onion and half of the chilli for 1 - 2 minutes. Add the vegetables and sauté for another 1 - 2. Deglaze with the prepared sauce and simmer for 7 - 9 minutes, until the sauce has thickened and the vegetables are soft enough.',
				'In a second pan heat 1 tbsp oil. Sear the chicken pieces all around on medium heat for 4 - 6 minutes until they are cooked through.',
				'Arrange the teriyaki vegetables and sesame chicken on plates. Serve the rice and garnish with the rest of the chilli and the green part of the spring onion. Add the remaining lime quarters.',
			],
		},
	},
	{
		id: 15,
		name: 'Fish on a vegetable curry',
		recipeUrl:
			'https://www.hellofresh.de/recipes/seehecht-auf-buntem-gemusecurry-5f77114997f39f06e91decdd',

		ingredients: [
			{
				ingredientId: 47,
				amount: 1,
			},
			{
				ingredientId: 17,
				amount: 1,
			},
			{
				ingredientId: 57,
				amount: 400,
			},
			{
				ingredientId: 84,
				amount: 4,
			},
			{
				ingredientId: 79,
				amount: 1,
			},
			{
				ingredientId: 76,
				amount: 1,
			},
			{
				ingredientId: 23,
				amount: 250,
			},
			{
				ingredientId: 24,
				amount: 250,
			},
		],
		mainImage: '/images/fish-on-a-vegetable-curry.jpeg',
		method: {
			steps: [
				'Boil some water in the kettle.',
				'Cut the unpeeled potatoes into 1 cm cubes. Peel the carrot and cut diagonally into 0.5 cm wide slices. Cut the white and green parts of the spring onions separately into fine rings. Wash pak choi. Remove leaves from the stalk, cut leaves and stalk into 0.5 cm wide strips. Prepare vegetable broth with the vegetable stock and 150 ml hot water.',
				'Add 4 tbsp flour in a deep plate. Season the hake with salt and pepper and turn in the flour.',
				'In a large saucepan heat 1 tbsp oil over medium heat, fry the potato cubes in it for 2 - 3 minutes. Then add the carrot slices and the white part of the spring onion and fry for another 2 - 3 minutes.',
				'Add tikka masala paste (attention: spicy!), Coconut milk and prepared vegetable stock to the vegetables in the pot and simmer for 12 - 13 minutes, until the sauce has reduced and thickened a little. When the cooking time is over, add pak choi.',
				'For the last 8 minutes of the curry cooking time in a large pan, heat 1 tbsp oil over medium heat and fry the hake in it for approx. 5 - 7 minutes.',
				'Spread the vegetable curry on plates, arrange the hake on top, sprinkle with green spring onion rings and enjoy.',
			],
		},
	},
	{
		id: 16,
		name: 'Meatballs filled with mozzarella',
		recipeUrl:
			'https://www.hellofresh.de/recipes/hackballchen-gefullt-mit-mozzarella-5f8fffc1d267cf37466082aa',
		ingredients: [
			{
				ingredientId: 17,
				amount: 2,
			},
			{
				ingredientId: 5,
				amount: 1,
			},
			{
				ingredientId: 37,
				amount: 1,
			},
			{
				ingredientId: 43,
				amount: 1,
			},
			{
				ingredientId: 45,
				amount: 10,
			},
			{
				ingredientId: 57,
				amount: 400,
			},
			{
				ingredientId: 9,
				amount: 4,
			},
			{
				ingredientId: 42,
				amount: 300,
			},
			{
				ingredientId: 25,
				amount: 200,
			},
		],
		mainImage: '/images/meatballs-filled-with-mozzarella.jpeg',
		method: {
			steps: [
				'Preheat the oven to 220 ° C top / bottom heat (200 ° C convection). Heat some water in the kettle.',
				'Quarter or halve unpeeled potatoes depending on size. Peel the carrots, quarter them lengthways and cut into 3 parts. Halve the leek stick lengthways, rinse and cut into thin strips.',
				'Place the potatoes and carrots with 1 tbsp oil, and salt & pepper on a baking sheet lined with baking paper, leaving some space for the meatballs. Put aside for now.',
				'Divide mozzarella in 4 equal pieces. Mix the minced meat, and salt & pepper well in a large bowl. From the mixture make 4 flat patties of the same size. Put a piece of mozzarella in the middle of each patty and wrap the mozzarella with the meat mixture. Wrap each finished ball with 1 or 2 slices of bacon. TIP: Press the mince firmly so that the mozzarella does not run out.',
				'Prepare a beef broth with beef stock, mustard, and 50ml hot water',
				'Put the potatoes and carrots in the oven and bake for approx. 25 - 30 minutes until the vegetables are soft.',
				'Put the balls with the bacon seam down, without adding any fat, into a large pan and fry them carefully all around for approx. 5 minutes until the bacon is lightly browned. Then put the balls with the vegetables in the oven for about 20 minutes, until the meat is no longer pink.',
				'In the same pan without adding any further fat, add strips of leeks and fry for approx. 5 minutes. Add cream and prepared beef broth and simmer for approx. 4 minutes until the sauce thickens slightly and the leek is soft.',
				'Arrange the oven vegetables on plates and serve with meatballs. Enjoy with the sauce.',
			],
		},
	},
	{
		id: 17,
		name: 'Pork fillet in plum sauce',
		recipeUrl:
			'https://www.hellofresh.de/recipes/schweinefilet-in-pflaumensosze-5f7d89f355eb41083f7ce399',
		ingredients: [
			{
				ingredientId: 56,
				amount: 250,
			},
			{
				ingredientId: 76,
				amount: 1,
			},
			{
				ingredientId: 81,
				amount: 35,
			},
			{
				ingredientId: 84,
				amount: 4,
			},
			{
				ingredientId: 30,
				amount: 1,
			},
			{
				ingredientId: 46,
				amount: 1,
			},
			{
				ingredientId: 103,
				amount: 60,
			},
			{
				ingredientId: 104,
				amount: 50,
			},
			{
				ingredientId: 105,
				amount: 40,
			},
			{
				ingredientId: 106,
				amount: 200,
			},
			{
				ingredientId: 34,
				amount: 150,
			},
		],
		mainImage: '/images/pork-fillet-in-plum-sauce.jpeg',
		method: {
			steps: [
				'Add 300ml salted water to a saucepan for the rice, and a smaller saucepan for the broccoli. Heat some water in the kettle.',
				'Finely chop the onion and garlic. Cut the white and green parts of the spring onions separately into thin rings. Roughly chop the dried plums. Cut the pork fillets into slices approx. 2 cm wide.',
				'Prepare a sauce with 100 ml of water, vegetable stock powder, ketchup, ketjap manis and plum jam',
				'Bring the salted water to a boil. Rinse the rice in a sieve with cold water until it runs through it clearly and add to the water. Cook covered for approx. 10 minutes. Then take it off the stove and let it soak for another 10 minutes.',
				'Bring the smaller saucepan of water to the boil.',
				'Heat 1 tbsp oil in a large pan on medium heat, add pieces of pork fillet, onion and garlic, white spring onion rings and dried plums and fry for 3 - 5 minutes, turning. Add the prepared plum sauce and simmer for approx. 5 minutes until the sauce thickens and the meat is light pink. Season with salt and pepper.',
				'Cook the broccoli in the smaller pan of water for 3 - 4 minutes until al dente. Then drain through a sieve.',
				'Arrange the jasmine rice and broccoli on plates, spread the plum sauce on the side, sprinkle with green spring onion rings and enjoy. Good Appetite!',
			],
		},
	},
	{
		id: 18,
		name: 'Fish in coconut panko with curry rice',
		recipeUrl:
			'https://www.hellofresh.de/recipes/seehecht-in-kokos-panko-mit-curryreis-5f8045d06781da426e0c72f9',
		ingredients: [
			{
				ingredientId: 24,
				amount: 250,
			},
			{
				ingredientId: 26,
				amount: 6,
			},
			{
				ingredientId: 22,
				amount: 8,
			},
			{
				ingredientId: 72,
				amount: 2,
			},
			{
				ingredientId: 49,
				amount: 25,
			},
			{
				ingredientId: 76,
				amount: 1,
			},
			{
				ingredientId: 35,
				amount: 75,
			},
			{
				ingredientId: 38,
				amount: 1,
			},
			{
				ingredientId: 30,
				amount: 1,
			},
			{
				ingredientId: 34,
				amount: 150,
			},
			{
				ingredientId: 27,
				amount: 1,
			},
			{
				ingredientId: 20,
				amount: 1,
			},
		],
		mainImage: '/images/fish-in-coconut-panko-with-curry-rice.jpeg',
		method: {
			steps: [
				'Preheat the oven to 200 ° C top / bottom heat (180 ° C convection). Add 300ml salted water to a saucepan for the rice. Heat some water in the kettle.',
				'Halve the chilli lengthways, remove the seeds and finely chop the chilli halves. Cut off the ends of the courgette, halve the courgette lengthways and cut into half moons 1 cm wide. Mix courgette, chilli, salt & pepper, and 1 tbsp oil on a baking sheet lined with baking paper. Cut the white and green parts of the spring onions separately into fine rings. Wash the lime with hot water, finely grate the peel and then quarter the lime.',
				'In a deep plate mix 1 tsp lime zest, corn starch and 1 tbsp water. In a second deep plate, mix half the panko and coconut flakes. Halve each fish fillet, season with salt, pepper and pull the pieces with the skinless side through the starch and then place in the coconut panko. Gently press the crumbs down.',
				'Put courgette in the oven and bake for 20-25 minutes. Bake the garlic clove for 10 minutes.',
				'Bring the salted water to a boil. Rinse the rice in a sieve with cold water until it runs through it clearly and add to the water with the white parts of the spring onion, half the coconut flakes, and curry powder. Cook covered for approx. 10 minutes. Then take it off the stove and let it soak for another 10 minutes.',
				'Heat 1.5 tbsp oil in a large pan. Place the fish fillets in the pan with the breaded side first and fry each side for approx. 3 - 4 minutes until the fish is no longer translucent.',
				'Remove the garlic from the oven, peel it and squeeze it into a small bowl. Mix yogurt and juice from 2 lime quarters, stir and season with salt and pepper.',
				'Spread the fish in coconut panko and curry rice on plates. Garnish the rice with the green part of the spring onion. Serve the courgette and enjoy with the garlic dip and the remaining lime wedges.',
			],
		},
	},
	{
		id: 19,
		name: 'Linguine with blue cheese sauce',
		recipeUrl:
			'https://www.hellofresh.de/recipes/linguine-mit-blauschimmelkase-sosze-5f7d89eeba59155848207e14',
		ingredients: [
			{
				ingredientId: 109,
				amount: 250,
			},
			{
				ingredientId: 30,
				amount: 1,
			},
			{
				ingredientId: 46,
				amount: 1,
			},
			{
				ingredientId: 106,
				amount: 200,
			},
			{
				ingredientId: 12,
				amount: 150,
			},
			{
				ingredientId: 25,
				amount: 200,
			},
			{
				ingredientId: 50,
				amount: 20,
			},
			{
				ingredientId: 51,
				amount: 10,
			},
			{
				ingredientId: 78,
				amount: 10,
			},
			{
				ingredientId: 1,
				amount: 10,
			},
			{
				ingredientId: 5,
				amount: 1,
			},
		],
		mainImage: '/images/linguine-with-blue-cheese-sauce.jpeg',
		method: {
			steps: [
				'Heat plenty of water in the kettle. Put on a large saucepan with plenty of water, add salt and bring to the boil.',
				'Remove the ends from the broccoli. Pluck the parsley leaves and chop finely. Strip the thyme leaves from the stems. Cut the blue cheese into approx. 2 cm cubes. ',
				'Roast the almond flakes in a large pan for 1 - 2 minutes without adding any fat, until the flakes are brown and fragrant. Remove and set aside. Place the bacon slices in the pan and fry them over a medium heat for about 5 minutes, turning occasionally. Remove and let degrease on kitchen paper.',
				'Add the linguine and broccolini to the boiling water and cook for 4 - 5 minutes, until the broccolini is soft but still firm to the bite. Then drain the linguine and broccolini through a sieve and drain.',
				'In the same pan, sauté the garlic and onion paste for 1 - 2 minutes. Add the cream, blue cheese and grated hard cheese and heat for 2 - 3 minutes, stirring, until both types of cheese have melted. Mix the linguine and broccoli into the sauce. Season to taste with salt and pepper. Distribute the finished pasta on plates. Top with bacon slices, sprinkle with flaked almonds and chopped herbs and enjoy.',
			],
		},
	},
	{
		id: 20,
		name: 'Pork fillet with spicy apricot sauce',
		recipeUrl:
			'https://www.hellofresh.de/recipes/schweinefilet-mit-wurziger-aprikosensosze-5f6d95b292de38729f0583f3',
		ingredients: [
			{
				ingredientId: 56,
				amount: 250,
			},
			{
				ingredientId: 58,
				amount: 500,
			},
			{
				ingredientId: 3,
				amount: 50,
			},
			{
				ingredientId: 69,
				amount: 1,
			},
			{
				ingredientId: 19,
				amount: 4,
			},
			{
				ingredientId: 15,
				amount: 1,
			},
			{
				ingredientId: 1,
				amount: 10,
			},
			{
				ingredientId: 16,
				amount: 20,
			},
		],
		mainImage: '/images/pork-fillet-with-spicy-apricot-sauce.jpeg',
		method: {
			steps: [
				'Preheat the oven to 220 ° C top / bottom heat (200 ° C convection). Fill a large saucepan and a small saucepan with plenty of hot water, add enough salt and bring to the boil. Heat some water in the kettle.',
				'Peel the potatoes as desired or wash them thoroughly and cut into bite-sized pieces 2 - 3 cm in size. Then spread on a baking sheet lined with baking paper, mix with 1 tbsp of oil and salt & pepper. Put aside for now.',
				'Peel and finely chop shallot. Cut or break broccoli into bite-sized florets. Cut pork fillets into 4 medallions and salt on both sides.',
				'Prepare a chicken broth with chicken stock, mustard, apricot chutney, and 100ml hot water.',
				'Put potatoes in the oven and bake in the oven for 20-25 minutes until golden brown.',
				'Roast the almond flakes in a large pan for 2 - 3 minutes until golden brown, until they smell fine. Then remove from the pan. In the same pan heat 1 tbsp oil and fry pork medallions for 2 - 3 minutes on each side. Place the medallions in the oven with the potatoes and bake for 8-10 minutes until they are only slightly pink in the middle.',
				'Bring the smaller pan of water to the boil and cook the broccoli in a for 3 - 4 minutes until al dente. Then drain through a sieve.',
				'Heat the same frying pan again over medium heat and sauté shallot cubes for 3 minutes without adding any fat until colorless. Deglaze the contents of the pan with the prepared broth, add butter and cook everything together for 2 - 3 minutes, until the sauce has thickened. Season the sauce with salt and pepper.',
				'Arrange the potatoes, medallions and broccoli side by side on plates, add the sauce and sprinkle the broccoli with flaked almonds.',
			],
		},
	},
	{
		id: 21,
		name: 'Meatball pan with paprika vegetables',
		recipeUrl:
			'https://www.hellofresh.de/recipes/hackballchenpfanne-mit-paprikagemuse-5f994c7698a0363d3f512b76',
		ingredients: [
			{
				ingredientId: 42,
				amount: 300,
			},
			{
				ingredientId: 13,
				amount: 25,
			},
			{
				ingredientId: 45,
				amount: 10,
			},
			{
				ingredientId: 10,
				amount: 2,
			},
			{
				ingredientId: 83,
				amount: 35,
			},
			{
				ingredientId: 61,
				amount: 1,
			},
			{
				ingredientId: 84,
				amount: 4,
			},
			{
				ingredientId: 34,
				amount: 150,
			},
			{
				ingredientId: 33,
				amount: 8,
			},
			{
				ingredientId: 51,
				amount: 10,
			},
			{
				ingredientId: 74,
				amount: 2,
			},
		],
		mainImage: '/images/meatball-pan-with-paprika-vegetables.jpeg',
		method: {
			steps: [
				'Add 300ml salted water to a saucepan for the rice. Heat some water in the kettle.',
				'Halve the peppers, remove the core and cut the pepper halves into 1 cm wide strips. Peel and halve the onion and cut into fine strips. Pluck the leaves of the parsley and chop finely.',
				'In a large bowl, knead the minced meat together with breadcrumbs, mustard and a pinch of salt and pepper and make 12 meatballs.',
				'In a jug, add 2 tbsp tomato paste, 250 ml hot water, vegetable stock, honey, and spices. Mix together thoroughly.',
				'Bring the salted water to a boil. Rinse the rice in a sieve with cold water until it runs through it clearly and add to the water. Cook covered for approx. 10 minutes. Then take it off the stove and let it soak for another 10 minutes.',
				'In a large pan heat 1 tbsp oil and fry the meatballs all over for 2-3 minutes. Then take the meatballs out of the pan. Heat the pan again and, without adding any further fat, fry the paprika and onion strips for approx. 5 minutes while stirring, until the onion is translucent and the paprika is a little softer.',
				'Deglaze the contents of the pan with the prepared sauce, bring to the boil, put the meatballs back in the pan and simmer uncovered for another 6 - 8 minutes, until the vegetables are soft, the meatballs are cooked and the sauce is thick enough. Season to taste with salt and pepper. TIP: If the sauce is too thick, add another sip of water.',
				'Fluff the jasmine rice with a fork after the cooking time. Arrange rice, meatballs and stir-fried vegetables on plates and sprinkle with a little parsley.',
			],
		},
	},
	{
		id: 22,
		name: 'Kiwi halloumi burger with yogurt aioli',
		recipeUrl:
			'https://www.hellofresh.de/recipes/kiwi-halloumi-burger-mit-joghurt-aioli-5f8045e7f62367537e0082d2',
		ingredients: [
			{
				ingredientId: 32,
				amount: 200,
			},
			{
				ingredientId: 36,
				amount: 1,
			},
			{
				ingredientId: 80,
				amount: 1,
			},
			{
				ingredientId: 28,
				amount: 1,
			},
			{
				ingredientId: 65,
				amount: 1,
			},
			{
				ingredientId: 14,
				amount: 2,
			},
			{
				ingredientId: 58,
				amount: 400,
			},
			{
				ingredientId: 74,
				amount: 2,
			},
			{
				ingredientId: 35,
				amount: 100,
			},
			{
				ingredientId: 30,
				amount: 1,
			},
			{
				ingredientId: 39,
				amount: 35,
			},
		],
		mainImage: '/images/kiwi-halloumi-burger-with-yogurt-aioli.jpeg',
		method: {
			steps: [
				'Preheat the oven to 220 ° C top / bottom heat (200 ° C convection).',
				'Cut the halloumi into approx. 1 cm thick slices. Peel the kiwi and cut into slices. Halve the tomato, remove the stalk and cut the tomato halves into slices. Cut the cucumber into 1 cm cubes. Halve the lettuce, remove the stalk and cut the lettuce into strips.',
				'Cut the washed potatoes, peeled or unpeeled, into wedges of about 2.5 cm. Then spread on a baking sheet lined with baking paper, mix with 1 tbsp of oil, spices, and salt & pepper. Put potatoes in the oven and bake in the oven for 20-25 minutes until golden brown. Place the clove of garlic on the baking sheet for 10 minutes.',
				'In a large bowl mix 2 tbsp olive oil, 1 tbsp white wine vinegar, salt and pepper to make a dressing. Add the lettuce pieces and cucumber cubes and mix well.',
				'Remove the garlic from the oven, peel it and squeeze it into a small bowl. Mix with yogurt and mayonnaise and season with salt and pepper. In a large pan heat 1 tbsp of oil, fry the halloumi slices in it for 2 minutes on each side until golden brown.',
				'In the last 3 minutes of the potatoes baking time, add the burger buns to the oven and bake them up.',
				'Spread a little yoghurt aioli on the roll halves. Then top with tomato, halloumi and kiwi slices. Enjoy with salad and potato wedges.',
			],
		},
	},
	{
		id: 23,
		name: 'Harissa Chicken Breast with Aubergine',
		recipeUrl:
			'https://www.hellofresh.de/recipes/harissa-hahnchenbrust-mit-aubergine-5fbe25fa590d225e551a6ea2',
		ingredients: [
			{
				ingredientId: 18,
				amount: 250,
			},
			{
				ingredientId: 46,
				amount: 1,
			},
			{
				ingredientId: 82,
				amount: 50,
			},
			{
				ingredientId: 60,
				amount: 100,
			},
			{
				ingredientId: 73,
				amount: 4,
			},
			{
				ingredientId: 30,
				amount: 1,
			},
			{
				ingredientId: 84,
				amount: 4,
			},
			{
				ingredientId: 4,
				amount: 1,
			},
			{
				ingredientId: 41,
				amount: 10,
			},
			{
				ingredientId: 51,
				amount: 10,
			},
			{
				ingredientId: 35,
				amount: 100,
			},
		],
		mainImage: '/images/harissa-chicken-breast-with-aubergine.jpeg',
		method: {
			steps: [
				'Season the chicken breast fillets with olive oil and spices (chilli powder, ground cumin, smoked paprika, tikka masala powder, oregano, basil, and ground coriander).',
				'Heat water in the kettle. Preheat the oven to 220 ° C top / bottom heat (200 ° C convection).',
				'Cut off the ends of the aubergine and cut the aubergine into 2 cm cubes. Peel the garlic and onion and finely chop both separately. Pluck the mint and parsley leaves and finely chop them separately. Mix vegetable stock with 200ml hot water.',
				'Put aubergine cubes in a baking dish, half the garlic, spices, salt, pepper, and olive oil. Put aside for now.',
				'Put onion cubes, other half of garlic and tomato pesto in a small saucepan with olive oil and sauté for 1 - 2 minutes over medium heat. Rinse the quinoa in a sieve with cold water until it runs clear. Put in quinoa and vegetable broth, bring everything to the boil once and then simmer with the lid closed on the lowest setting for 15 minutes. Then take it off the stove and let it soak for 10 minutes.',
				'Put the aubergine in the oven and bake for 20-25 minutes',
				'In a large pan heat 1 tbsp of olive oil and sauté the chicken breast fillets for 1 - 2 minutes on each side until they are lightly browned. Add the fried chicken breast fillets to the baking dish for the last 12-14 minutes and bake until the chicken is no longer pink on the inside.',
				'In a small bowl, mix the yogurt with the chopped mint. Season the dip with salt and pepper.',
				'When the cooking time is over, fold half of the chopped parsley into the quinoa.',
				'Take the chicken breast and vegetables out of the oven and arrange on plates. Serve with tomato quinoa and mint dip. Garnish with the remaining parsley.',
			],
		},
	},
	{
		id: 24,
		name: 'Creamy Mushroom Risotto with Bacon',
		recipeUrl:
			'https://www.hellofresh.de/recipes/cremiges-pilzrisotto-mit-bacon-5fb3f9ac70d53179a859c552',

		ingredients: [
			{
				ingredientId: 64,
				amount: 200,
			},
			{
				ingredientId: 44,
				amount: 150,
			},
			{
				ingredientId: 54,
				amount: 1,
			},
			{
				ingredientId: 21,
				amount: 10,
			},
			{
				ingredientId: 50,
				amount: 40,
			},
			{
				ingredientId: 5,
				amount: 1,
			},
			{
				ingredientId: 85,
				amount: 20,
			},
			{
				ingredientId: 30,
				amount: 1,
			},
		],
		mainImage: '/images/creamy-mushroom-risotto-with-bacon.jpeg',
		method: {
			steps: [
				'Add vegetable stock and 650ml water into a small saucepan and heat.',
				'Cut the mushrooms into slices. Quarter the pear, remove the core and halve the pieces again. Cut the chives into small rolls. Peel and finely chop the onion and garlic.',
				'Fry the bacon over medium heat for approx. 5 minutes until crispy, turning occasionally, then briefly remove and set aside on some kitchen roll.',
				'In a large saucepan heat 1 tbsp oil, sauté the chopped onion and garlic in it for approx. 1 min. Add the risotto rice and sauté for approx. 1 min. Deglaze with a little broth and cook the risotto for approx. 20 minutes, stirring occasionally, gradually adding the broth.',
				'In the same pan the bacon was fried in, fry the mushroom slices for 3 - 4 minutes without adding any additional fat, season with salt and pepper and then add to the risotto.',
				'Wipe the pan with kitchen paper, then add the pear wedges and walnuts and fry for approx. 3 minutes. Sprinkle 1 tbsp sugar over the top, let it caramelize for 2-3 minutes.',
				'Stir grated parmesan, a knob of butter, and half the chives into the finished risotto, distribute it on plates. Spread the caramelized pear wedges, walnuts and crispy bacon slices on top, sprinkle with chives and enjoy.',
			],
		},
	},
	{
		id: 25,
		name: 'Couscous with dukkah oven vegetables',
		recipeUrl:
			'https://www.hellofresh.de/recipes/couscous-mit-dukkah-ofengemuse-5fbe263247e12018943a7900',
		ingredients: [
			{
				ingredientId: 10,
				amount: 1,
			},
			{
				ingredientId: 27,
				amount: 1,
			},
			{
				ingredientId: 17,
				amount: 2,
			},
			{
				ingredientId: 80,
				amount: 2,
			},
			{
				ingredientId: 35,
				amount: 100,
			},
			{
				ingredientId: 30,
				amount: 1,
			},
			{
				ingredientId: 87,
				amount: 100,
			},
			{
				ingredientId: 88,
				amount: 150,
			},
			{
				ingredientId: 89,
				amount: 2,
			},
			{
				ingredientId: 61,
				amount: 1,
			},
			{
				ingredientId: 90,
				amount: 1,
			},
			{
				ingredientId: 84,
				amount: 4,
			},
			{
				ingredientId: 41,
				amount: 10,
			},
			{
				ingredientId: 51,
				amount: 10,
			},
			{
				ingredientId: 76,
				amount: 1,
			},
		],
		mainImage: '/images/couscous-with-dukkah-oven-vegetables.jpeg',
		method: {
			steps: [
				'Preheat the oven to 220 ° C top / bottom heat (200 ° C convection). Heat some water in the kettle.',
				'Halve the pepper, remove the core and cut the pepper halves into 1 cm strips. Remove the ends of the zucchini, halve the zucchini lengthways and cut into 1 cm crescents. Peel the carrots and cut them diagonally into thin slices. Spread them on a baking sheet lined with baking paper, mix with 1 tbsp of oil, spices, and salt & pepper. Put aside for now.',
				'Peel the onion and garlic and chop both finely. Halve the tomatoes, remove the stalk and cut the tomato halves into 1 cm fine cubes. Cut the white and green parts of the spring onions separately into fine rings. Cut the lemon in 4 sices. Finely chop the parsley and mint leaves. Roughly crumble the shepherd’s cheese in a small bowl. Prepare a vegetable broth with vegetable stock and 250ml hot water.',
				'Put the vegetables in the oven and bake for 20-25 minutes, until the vegetables are soft.',
				'Mix the yoghurt with the green spring onion rings in a small bowl and season with salt and pepper.',
				'Squeeze 1 lemon slice into a separate large bowl and add 1 tbsp oil, salt & pepper, and mix together. Add tomatoes and white spring onion rings.',
				'In a large saucepan 1 tbsp [1.5 tbsp | Heat 2 tbsp] oil over medium heat, add onion and garlic and fry together for 2 - 3 minutes. Deglaze with vegetable broth and add salt. Let everything boil once. Put the couscous in the pot, bring to the boil again briefly, remove from the heat and let soak for 5 - 8 minutes until the couscous is soft.',
				'Fluff the couscous a little with a fork and mix in two thirds of the chopped parsley and mint, season with salt and pepper. Spread the couscous on plates and arrange the oven vegetables on top. Top with herder cheese, diced tomatoes and the remaining herbs and enjoy with yogurt dip and lemon wedges.',
			],
		},
	},
	{
		id: 26,
		name: 'Honey teriyaki burger',
		recipeUrl:
			'https://www.hellofresh.de/recipes/honig-teriyaki-burger-5fbe259190acc543b25bb6be',
		ingredients: [
			{
				ingredientId: 14,
				amount: 2,
			},
			{
				ingredientId: 42,
				amount: 300,
			},
			{
				ingredientId: 91,
				amount: 15,
			},
			{
				ingredientId: 33,
				amount: 20,
			},
			{
				ingredientId: 30,
				amount: 1,
			},
			{
				ingredientId: 71,
				amount: 25,
			},
			{
				ingredientId: 92,
				amount: 8,
			},
			{
				ingredientId: 93,
				amount: 35,
			},
			{
				ingredientId: 38,
				amount: 1,
			},
			{
				ingredientId: 17,
				amount: 1,
			},
			{
				ingredientId: 65,
				amount: 1,
			},
			{
				ingredientId: 58,
				amount: 400,
			},
			{
				ingredientId: 68,
				amount: 10,
			},
		],
		mainImage: '/images/honey-teriyaki-burger.jpeg',
		method: {
			steps: [
				'Preheat the oven to 220 ° C top / bottom heat (200 ° C convection).',
				'Peel the garlic and squeeze it into a small bowl. Peel the ginger and grate finely. Add honey, soy sauce, grated ginger to the garlic in the small bowl and mix well until the honey has dissolved. Halve the lime.',
				'Quarter the unpeeled potatoes lengthways. Then spread on a baking sheet lined with baking paper, mix with 1 tbsp of oil, seseme seeds, and salt. Put potatoes in the oven and bake in the oven for 20-25 minutes until golden brown. Place the clove of garlic on the baking sheet for 10 minutes.',
				'In another small bowl, add mayonnaise, yoghurt and (depending on how spicy you like it) sriracha and mix everything well. Cut the lettuce into fine strips. Peel and roughly grate the carrot. Salad and carrot in a large bowl with 1 tbsp Sriracha dip and season with lime juice and salt & pepper.',
				'From the minced meat form 2 large, approx. 1 - 2 cm thick patties. In a large pan heat 1 tbsp oil and sear the patties for 2-3 minutes on each side. Reduce the heat, deglaze the pan with the prepared teriyaki sauce and simmer for approx. 2 minutes until the burgers are nicely glazed.',
				'Cut the burger buns open and add to the potato wedges in the oven approx. 2 - 5 minutes before the end of the potato baking time.',
				'Brush the burger buns with a dollop of Sriracha dip. First top with the patties and then top with the lettuce strips. Enjoy the finished burger with the potato wedges, the rest of the salad and the rest of the dip.',
			],
		},
	},
];

export default recipes;
