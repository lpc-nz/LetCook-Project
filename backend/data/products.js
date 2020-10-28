

const products = [

    {

        name: 'Egg Fried Rice',
        image: '/FoodPictures/Pic01.jpg',
        ingredients: [
            '01 Egg',
            'Sesame oil',
            'Long-grain rice',
            'Peas and Carrots',
            'Salt',
            'Onion'
        ],
        time: '30 mins',
        nutritional: [
            '519 kcal',
            '18g protein',
            '18g fat',
            '1.8g salt',
        ],
        serving: '2 people',
        description: [
            'Step 1: In a saucepan bring water, salt and soy sauce to a boil. Add rice and stir. Remove from heat, cover and let stand 5 minutes.',
            'Step 2: Heat oil in a medium skillet or wok over medium heat. Saute onions and green beans for 2 to 3 minutes. Pour in egg and fry for 2 minutes, scrambling egg while it cooks. ',
            'Step 3: Stir in the cooked rice, mix well and sprinkle with pepper.',
        ],
            
            
        category: 'Fast Meals',
        rating: 4.0,
        numReviews: 4,
    },
    {

        name: 'Fired Noodles',
        image: '/FoodPictures/Pic02.jpg',
        ingredients: [
            '1 packages Oriental flavored ramen noodles',
            'i3 eggs, beaten',
            'ivegetable oil',
            '4 green onions, thinly sliced',
            '1 small carrot, peeled and grated',
            'soy sauce',
        ],
        time: '25 mins',
        nutritional: [
            '500 kcal',
            '18g protein',
            '20g fat'
        ],
        serving: '2 people',
        description: [
            'Step 1: Boil ramen noodles for 3 minutes, or until softened, without flavor packets. Reserve flavor packets. Drain noodles, and set aside. ',
            'Step 2: Heat 1 tablespoon oil in a small skillet. Scramble eggs in a bowl. Cook and stir in hot oil until firm. Set aside. ',
            'Step 3: In a separate skillet, heat 1 teaspoon of oil over medium heat. Cook and stir green onions in oil for 2 to 3 minutes, or until softened. Transfer to a separate dish, and set aside. Heat another teaspoon of cooking oil in the same skillet. Cook and stir the the carrots, peas, and bell peppers separately in the same manner, setting each aside when done. ',
            'Step 4: Combine 2 tablespoons sesame oil with 1 tablespoon of vegetable oil in a separate skillet or wok. Fry noodles in oil for 3 to 5 minutes over medium heat, turning regularly. Sprinkle soy sauce, sesame oil, and desired amount of reserved ramen seasoning packets over noodles, and toss to coat. Add vegetables, and continue cooking, turning frequently, for another 5 minutes.',
        ],
            
        category: 'Fast Meals',
        rating: 3.5,
        numReviews: 1,
    },
    {

        name: 'Pasta Sauce',
        image: '/FoodPictures/Pic03.jpg',
        ingredients: [
            '1 cans tomato sauce',
            '2 cloves garlic, crushed',
            'Minced onion',
            'Salt',
            'Beef mince'
        ],
        time: '60 mins',
        nutritional: [
            '200 kcal',
            '50g protein',
            '15g fat',
            '1.8g salt'
        ],
        serving: '2 people',
        description: [
            'Step 1: In a large pot or Dutch oven over medium heat, cook the sausage, beef, onion, and garlic until well browned; drain fat.',
            'Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Mix in sugar and season with basil, fennel seed, Italian seasoning, salt, and pepper. ',
            'Reduce heat to low, cover, and simmer 1 1/2 hours, stirring occasionally.',
        ],
        category: 'Medium Meals',
        rating: 4.0,
        numReviews: 2,
    },
    {

        name: 'Pork Noodle Bowl',
        image: '/FoodPictures/Pic04.jpg',
        ingredients: [
            '1 pound pork sirloin steak, cut into strips',
            '1 cup Asian toasted sesame dressing',
            '4 teaspoons vegetable oil',
            '2 tablespoons teriyaki sauce',
        ],
        time: '39 mins',
        nutritional: [
            '1055 kcal',
            '40g protein',
            '56g fat'
        ],
        serving: '2 people',
        description: [
            'Step 1: Bring a large pot of lightly salted water to a boil. Cook linguine until firm to the bite, about 9 minutes. Add broccoli and carrots; cook until linguine is tender, about 2 minutes more. Drain. ',
            'Step 2: Heat oil in a large nonstick skillet or wok. Add steak slices; cook and stir until browned on all sides, about 4 minutes. Stir in sesame dressing and teriyaki sauce. Cook until sauce is thickened, about 2 minutes.',
            'Step 3: Stir linguine, broccoli, and carrots into the sauce. Increase heat to high and cook until noodles are slightly browned, 2 to 3 minutes. ',
        ],
            
        category: 'FastMeals',
        rating: 4.0,
        numReviews: 1,
    },
    {

        name: 'Beef Steak',
        image: '/FoodPictures/Pic05.jpg',
        ingredients: [
            'Steak seasoning to taste',
            '2 cup barbeque sauce',
            'Black pepper',
            '10 ounces Beef sirloin steak'
        ],
        time: '35 mins',
        nutritional: [
            '1219 Kcal',
            '50g protein',
            '97g fat'
        ],
        serving: '2 people',
        description: [
            'Step 1: In a medium bowl, mix soy sauce, Italian-style salad dressing, barbeque sauce, vegetable oil, garlic, steak seasoning, seasoning salt, salt and ground black pepper. Place steak in the mixture. Cover and marinate in the refrigerator 12 hours, or overnight. Turn the steak once during marination. ',
            'Step 2: Preheat an outdoor grill for medium to high heat and lightly oil grate. ',
            'Step 3: Cook steak on the prepared grill 5 to 7 minutes per side, or to desired doneness.',
        ],
            
        category: 'Premium Meals',
        rating: 4.0,
        numReviews: 1,
    },
    {

        name: 'Asian Beef Noodle Bowls',
        image: '/FoodPictures/Pic06.jpg',
        ingredients: [
            '1 pound ground beef',
            '1 package ramen noodles',
            '1/2 package frozen Asian vegetable medley',
            '1 teaspoon green onion, white part only, thinly sliced'
        ],
        time: '30 mins',
        nutritional: [
            '345 kcal',
            '48g protein',
            '16.5g fat'
        ],
        serving: '2 people',
        description: [
            'Step 1: Cook ground beef and white part of green onions in a large skillet over medium-high heat until meat is no longer pink and onions are soft and translucent, about 5 minutes. Remove from pan, drain, and set aside. ',
            'Step 2: Add water, ramen noodles, and frozen vegetables to the same skillet. Bring to a boil and cook until noodles are tender, 3 to 5 minutes.',
            'Step 3: Meanwhile, combine hoisin sauce, soy sauce, Sriracha sauce, brown sugar, cilantro, Chinese five-spice, and ginger in a small bowl; stir until sauce is well combined. ',
            'Step 4: Return meat to the skillet, add sauce, and and stir until heated through, about 2 minutes. Serve topped with green onions and sesame seeds.',
        ],
            
        category: 'FastMeals',
        rating: 3.5,
        numReviews: 1,
    },

]

export default products