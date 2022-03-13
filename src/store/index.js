import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:     {},
    getters:   {
        isAuth: state => true,
        user:   state => ({
            id:    '1',
            login: 'Behemoth',
            email: 'behemoth87@m.ru',
        }),
    },
    mutations: {},
    actions:   {
        async getUserInfo() {

        },
        async getRecipe(_, id) {
            return {
                id:          '2',
                title:       'Air Fryer Chicken Tenders',
                tag:         'Kid-friendly',
                time:        95,
                rate:        4.3,
                voted:       90,
                img:         '/img/recipes/Air-Fryer-Chickpeas.webp',
                author:      'Mirak',
                description: `Be warned, though. This vegetarian spinach and mushroom lasagna is so good your guests may ask for it again and again — for every potluck, for every holiday feast. They'll get those puppy dog eyes when they look at you and say, "Oh, how about that veggie lasagna, it's so good, and everyone can eat it—could you bring that?" And you'll be slightly annoyed because, perhaps you were hoping to squeeze by with a simple potato salad, even though you signed up for a main. But then you'll think about how good this lasagna is and how much you want some too, and then it's just an excellent excuse to make it again.`,
                ingredients: [
                    {id: '432nf38', name: 'water', amount: '1', measure: 'cups'},
                    {id: '328thf', name: 'cremini mushrooms', amount: '1.5 ', measure: 'pounds'},
                    {id: 'fn38243', name: 'shiitake mushrooms', amount: '1.5', measure: 'pounds'},
                    {id: '7rh3e', name: 'salt', amount: '0.25', measure: 'teaspoon'},
                    {id: '7r8hfeiu', name: 'onions', amount: '1', measure: ''},
                    {id: 'fh83gf', name: 'tomato sauce', amount: '2', measure: 'cups'},
                ],
                steps:       [
                    {
                        step:  1,
                        title: 'Sauté the mushrooms',
                        text:  'Place mushrooms in a large (6 to 8 quart) sauté pan on high or medium-high heat. Stir them with a wooden spoon or shake the pan from time to time. You may hear them squeak. Sprinkle salt over the mushrooms. The mushrooms will sizzle and then start to release water. (Note that you are not adding fat at this point to the pan; this method of cooking mushrooms in their own moisture is called "dry sautéing.) Once the mushrooms start to release water into the pan, stir in the chopped onions. Cook until the mushrooms are no longer releasing moisture and the mushroom water has boiled away, about 5 minutes more.',
                    },
                    {
                        step:  2,
                        title: 'Make the sauce',
                        text:  'Add the olive oil to the mushrooms and stir to coat. Sauté the mushrooms and onions for about a minute. Add the garlic and cook for another minute. Stir in the tomato paste, cook for a minute longer. Reserve 1 cup of the tomato sauce (it will go in the bottom of the casserole dish), and put the remaining cup of tomato sauce into the pot with the mushrooms. Add the large can of crushed tomatoes and one cup of water. Stir in the thyme, sugar, and red pepper flakes. (If you are using dried basil instead of fresh, add it now.) Bring to a simmer, then lower the heat and simmer on a low simmer, for 20 minutes.',
                    },
                    {
                        step:  3,
                        title: 'Boil and drain the lasagna noodles',
                        text:  'Once the sauce is simmering, salt the boiling pasta water, and add the dry lasagna noodles to the boiling water. (The water should be at a vigorous, rolling boil.) Stir gently, making sure that the noodles are not sticking to each other. Set the timer for 8 minutes, or however long is indicated on the package of the noodles. Cook uncovered on a high boil. When the noodles are ready (al dente, cooked through but still firm to the bite), drain the noodles in a colander, and rinse them to cool them with cold water. As you rinse them, gently separate them with your fingers so they don\'t stick to each other. Vegetarian lasagna Preparing noodles for vegetarian lasagna in a colander Prepare a couple large cookie sheets or baking sheets by spreading a tablespoon of olive oil over the baking sheets. Place the lasagna noodles on the sheets, gently coating them with a bit of that olive oil, and spreading them out. This will help keep them from sticking to each other while you finish the sauce and prepare the layered casserole.',
                    },
                    {
                        step:  4,
                        title: 'Assemble the lasagna',
                        text:  'Turn off the heat on the stovetop for the sauce. Preheat the oven to 350°F. Spread the one cup of reserved tomato sauce over the bottom of a large (preferably 10x15-inch) casserole dish. (If your casserole dish is smaller, you may need to add another layer as you go through this step.) Place a layer of lasagna noodles down over the tomato sauce, slightly overlapping. (For our 10x15-inch dish, we ultimately fit 3 layers of 6 noodles each, with 2 extra noodles on which to nosh.) Sprinkle half of the ricotta cheese over the noodles, and half of the defrosted, drained, and squeezed out spinach over the ricotta. Sprinkle half of the mozzarella cheese over the spinach, and just a quarter of the pecorino cheese. Then spoon 1/3 of your mushroom sauce over the mozzarella. Sprinkle half of the fresh basil over the sauce.',
                    },
                    {
                        step:  5,
                        title: 'Cover with foil and bake',
                        text:  'Cover with foil and bake: Pull out a sheet of aluminum foil large enough to cover the casserole dish. Spread a little olive oil over the inside of the piece of foil (the side that will have contact with the lasagna). Place the foil over the casserole dish and crimp the edges. Bake at 350°F for 25 minutes, then remove the foil and bake uncovered for an additional 25 minutes. Take the lasagna out of the oven when done and let it rest 10 minutes before cutting to serve. Once made, the lasagna will last a week in the fridge.',
                    },
                ],
            };
        },
        async getComments(_, id) {
            return [
                {
                    author:   'Holmes',
                    comment:  'Fantastic recipe, I substituted the lasagna noodles for zucchini slices and people could not stop eating it!!!! Thanks',
                    dateFrom: new Date(2020, 3, 19),
                },
                {
                    author:   'Matt',
                    comment:  'Just adding to the chorus of voices that this is a fantastic recipe. My first time ever attempting lasagna and I don\'t see how it could have gone better. Made it exactly as is with no substitutions or changes. I was daunted by some in the comments who said it took them 3 hours? Prep probably took no more than 45 minutes, most of which was waiting for the water to boil.',
                    dateFrom: new Date(2020, 4, 19),
                },
                {
                    author:   'Elly',
                    comment:  'How much fresh spinach did you use, I bought one 10 oz box which is what I normally use for a 9x13 pan.',
                    dateFrom: new Date(2020, 3, 17),
                },

            ];
        },
        async toggleBookmark(_, recipe) {
            return true;
        },
        async postComment(_, comment) {
            return [
                {
                    author:   'Behemoth',
                    comment:  comment,
                    dateFrom: new Date(),
                },
                {
                    author:   'Holmes',
                    comment:  'Fantastic recipe, I substituted the lasagna noodles for zucchini slices and people could not stop eating it!!!! Thanks',
                    dateFrom: new Date(2020, 3, 19),
                },
                {
                    author:   'Matt',
                    comment:  'Just adding to the chorus of voices that this is a fantastic recipe. My first time ever attempting lasagna and I don\'t see how it could have gone better. Made it exactly as is with no substitutions or changes. I was daunted by some in the comments who said it took them 3 hours? Prep probably took no more than 45 minutes, most of which was waiting for the water to boil.',
                    dateFrom: new Date(2020, 4, 19),
                },
                {
                    author:   'Elly',
                    comment:  'How much fresh spinach did you use, I bought one 10 oz box which is what I normally use for a 9x13 pan.',
                    dateFrom: new Date(2020, 3, 17),
                },
            ];
        },
        async getUserComments() {
            return [
                {
                    author:   'Behemoth',
                    comment:  'Fantastic recipe, I substituted the lasagna noodles for zucchini slices and people could not stop eating it!!!! Thanks',
                    dateFrom: new Date(),
                },
                {
                    author:   'Behemoth',
                    comment:  'Fantastic recipe, I substituted the lasagna noodles for zucchini slices and people could not stop eating it!!!! Thanks',
                    dateFrom: new Date(2020, 3, 19),
                },
                {
                    author:   'Behemoth',
                    comment:  'Just adding to the chorus of voices that this is a fantastic recipe. My first time ever attempting lasagna and I don\'t see how it could have gone better. Made it exactly as is with no substitutions or changes. I was daunted by some in the comments who said it took them 3 hours? Prep probably took no more than 45 minutes, most of which was waiting for the water to boil.',
                    dateFrom: new Date(2020, 4, 19),
                },
                {
                    author:   'Behemoth',
                    comment:  'How much fresh spinach did you use, I bought one 10 oz box which is what I normally use for a 9x13 pan.',
                    dateFrom: new Date(2020, 3, 17),
                },
            ];
        },
        async getUserFavorites() {
            return [
                {
                    id:    '1',
                    title: 'Air Fryer Cauliflower Buffalo Wings',
                    tag:   'Healthy Air Fryer',
                    time:  40,
                    rate:  2.3,
                    voted: 14,
                    img:   '/img/recipes/Air-Fryer-Buffalo-Cauliflower.webp',
                },
                {
                    id:    '2',
                    title: 'Air Fryer Chicken Tenders',
                    tag:   'Kid-friendly',
                    time:  95,
                    rate:  4.3,
                    voted: 90,
                    img:   '/img/recipes/Air-Fryer-Chickpeas.webp',
                },
                {
                    id:    '5',
                    title: 'Air Fryer Chicken Tenders',
                    tag:   'Kid-friendly',
                    time:  95,
                    rate:  4.3,
                    voted: 90,
                    img:   '/img/recipes/Air-Fryer-Chickpeas.webp',
                },
                {
                    id:    '3.3',
                    title: 'Sticky Chinese Rice with Lạp Xưởng, Dried Shrimp, and Fryed Shiitake Mushrooms, and Crispy Air Fryer Tenders',
                    tag:   'Healthy Snacks and Appetizers',
                    time:  60,
                    rate:  0,
                    voted: 0,
                    img:   '/img/recipes/albondigas-soup.webp',
                },
                {
                    id:    '4',
                    title: 'Air Fryer Cauliflower Buffalo Wings',
                    tag:   'Healthy Air Fryer',
                    time:  40,
                    rate:  2.3,
                    voted: 14,
                    img:   '/img/recipes/Air-Fryer-Buffalo-Cauliflower.webp',
                },
                {
                    id:    '5',
                    title: 'Air Fryer Chicken Tenders',
                    tag:   'Kid-friendly',
                    time:  95,
                    rate:  4.3,
                    voted: 90,
                    img:   '/img/recipes/Air-Fryer-Chickpeas.webp',
                },
                {
                    id:    '6',
                    title: 'Sticky Chinese Rice with Lạp Xưởng, Dried Shrimp, and Fryed Shiitake Mushrooms, and Crispy Air Fryer Tenders',
                    tag:   'Healthy Snacks and Appetizers',
                    time:  60,
                    rate:  0,
                    voted: 0,
                    img:   '/img/recipes/albondigas-soup.webp',
                },
                {
                    id:    '7',
                    title: 'Sticky Chinese Rice with Lạp Xưởng, Dried Shrimp, and Fryed Shiitake Mushrooms, and Crispy Air Fryer Tenders',
                    tag:   'Healthy Snacks and Appetizers',
                    time:  60,
                    rate:  0,
                    voted: 0,
                    img:   '/img/recipes/albondigas-soup.webp',
                },
            ];
        },
        async getHomeRecipes() {
            return [
                {
                    id:    '1',
                    title: 'Air Fryer Cauliflower Buffalo Wings',
                    tag:   'Healthy Air Fryer',
                    time:  40,
                    rate:  2.3,
                    voted: 14,
                    img:   '/img/recipes/Air-Fryer-Buffalo-Cauliflower.webp',
                },
                {
                    id:    '2',
                    title: 'Air Fryer Chicken Tenders',
                    tag:   'Kid-friendly',
                    time:  95,
                    rate:  4.3,
                    voted: 90,
                    img:   '/img/recipes/Air-Fryer-Chickpeas.webp',
                },
                {
                    id:    '3',
                    title: 'Sticky Chinese Rice with Lạp Xưởng, Dried Shrimp, and Fryed Shiitake Mushrooms, and Crispy Air Fryer Tenders',
                    tag:   'Healthy Snacks and Appetizers',
                    time:  60,
                    rate:  0,
                    voted: 0,
                    img:   '/img/recipes/albondigas-soup.webp',
                },
            ];
        },
    },
    modules:   {},
});
