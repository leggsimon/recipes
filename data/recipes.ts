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
	},
	{
		id: 13,
		name: 'Spanish-style tarte flambée with chorizo',
		recipeUrl:
			'https://www.hellofresh.de/recipes/spanish-style-flammkuchen-mit-chorizo-5f7d8a0373e82011896497be',
		ingredients: [],
		mainImage: '/images/spanish-style-tarte-flambee-with-chorizo.jpeg',
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
	},
	{
		id: 15,
		name: 'Fish on a vegetable curry',
		recipeUrl:
			'https://www.hellofresh.de/recipes/seehecht-auf-buntem-gemusecurry-5f77114997f39f06e91decdd',
		mainImage: '/images/fish-on-a-vegetable-curry.jpeg',
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
		mainImage: '/images/creamy-mushroom-risotto-with-bacon.jpeg',
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
	},
];

export default recipes;
