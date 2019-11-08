
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {id: 1, ingredients_id: 1, recipe_id: 1, quantity: 2, amount: 'each'},
        {id: 2, ingredients_id: 2, recipe_id: 1, quantity: 12, amount: 'oz'},
        {id: 3, ingredients_id: 3, recipe_id: 1, quantity: 2, amount: 'each'},
        {id: 4, ingredients_id: 4, recipe_id: 1, quantity: 3, amount: 'each'},
        {id: 5, ingredients_id: 5, recipe_id: 1, quantity: 2, amount: 'each'}
      ])
    })
}


// exports.seed = function(knex) {
//  return knex('ingredients').del()
//  .then(function () {
//    // Inserts seed entries
//    return knex('ingredients').insert([
//      {id: 1, name: 'bun'},
//      {id: 2, name: 'patty'},
//      {id: 3, name: 'cheese'},
//      {id: 4, name: 'lettuce'},
//      {id: 5, name: 'tomato'}
//    ]);
//  });
// };

// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('recipes').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('recipes').insert([
//         {id: 1, name: 'burger'},
//         {id: 2, name: 'pizza'},
//         {id: 3, name: 'spaghetti'},
//         {id: 4, name: 'wings'}
//       ]);
//     });
//  };
