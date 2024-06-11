import { RecipeType } from "../types/RecipeTypes"

const Recipes: RecipeType[] = [
    {
        id: "jian-bing",
        ingredients: [{
            title: "For the crackers",
            content: [{
                title: "ready-made wonton wrappers",
                amount: 16,
                type: { measure: "" },
            }, {
                title: "cooking oil",
                amount: 50,
                type: { measure: "ml" },
            }]
        }, {
            title: "For the batter",
            content: [{
                title: "all-purpose flour",
                amount: 70,
                type: { measure: "g" },
            }, {
                title: "wholemeal flour",
                amount: 40,
                type: { measure: "g" },
            }, {
                title: "water",
                amount: 300,
                type: { measure: "ml" },
            }]
        }, {
            title: "For the crepes",
            content: [{
                title: "egg",
                amount: 4,
                type: { measure: "" },
            }, {
                title: "toasted sesame seeds",
                amount: 4,
                type: { measure: "ts" },
            }, {
                title: "finely chopped scallions",
                amount: 4,
                type: { measure: "ts" },
            }]
        }, {
            title: "For the sauce",
            content: [{
                title: "soybean paste",
                amount: 4,
                type: { measure: "ts" },
            }, {
                title: "chilli garlic sauce",
                amount: 4,
                type: { measure: "ts" },
            }]
        }
        ],
        directions: [{
            title: "Fry the crackers",
            content: ["Brush a thin layer of water on a wonton wrapper. Stick another one on the top then using a rolling pin to press tight. Cut two lines in th middles. Repeat to make another 7 pairs.",
                "Heat up oil in a wok/pot. When the temperature reaches 180°C/360°F, start frying.",
                "Gently slide in wonton wrappers. Flip over to fry the other side.",
                "Pick out when they’re lightly brown (Do not overcook). Transfer to a plate lined with kitchen paper to absorb any excess oil."
            ]
        }, {
            title: "Mix the batter",
            content: ["Put all-purpose flour and wholemeal flour into a mixing bowl. Pour in the water. Stir to combine until smooth."]
        }, {
            title: "Make the crepes",
            content: ["Heat a non-stick frying pan over medium-low heat (I use a 28cm/11inch pan). When it’s warm to touch (not burning), pour in ¼ part of the batter. Move the pan to allow the batter to evenly cover the entire surface.",
                "When there is no runny batter can be seen, crack an egg on top. Use the back of a spoon to break the yolk and spread",
                "Sprinkle with sesame seeds and scallions.",
                "When the crepe becomes firm and slides easily in the pan, it’s time to flip it over. To avoid tearing, slide the crepe onto the inner side of a large lid then put it back to the pan."
            ]
        }, {
            title: "Assemble the dish",
            content: ["Turn off the heat after flipping (the remaining heat will cook through the egg). Brush soybean paste and chilli garlic sauce over the crepe",
                "Add coriander and lettuce leaves if using. Place two pieces of fried crackers in the middle.",
                "Fold the crepe to wrapper everything. Serve immediately."
            ]
        }],
        time: 30,
        image: "https://redhousespice.com/wp-content/uploads/2020/06/Jian-Bing-Chinese-Crepes-3-scaled.jpg",
        title: "JIAN BING CHINESE CREPES-煎饼"
    },

]

export default Recipes