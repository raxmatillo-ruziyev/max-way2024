// Your own photos (src/assets)
import lavash1 from '../../assets/lavash1.jpeg'
import lavash2 from '../../assets/lavash2.jpeg'
import lavash3 from '../../assets/lavash3.jpeg'
import lavash4 from '../../assets/lavash4.jpeg'
import lavash5 from '../../assets/lavash5.jpeg'
import lavash6 from '../../assets/lavash6.jpeg'
import lavash7 from '../../assets/lavash7.jpeg'


import burger1 from '../../assets/burger1.jpeg'
import burger2 from '../../assets/burger2.jpeg'
import burger3 from '../../assets/burger3.jpeg'
import burger4 from '../../assets/burger4.jpeg'
import burger5 from '../../assets/burger5.jpeg'
import burger6 from '../../assets/burger6.jpeg'
import burger7 from '../../assets/burger7.jpeg'


import pizza1 from '../../assets/pizza1.jpeg'
import pizza2 from '../../assets/pizza2.jpeg'
import pizza3 from '../../assets/pizza3.jpeg'
import pizza4 from '../../assets/pizza4.jpeg'
import pizza5 from '../../assets/pizza5.jpeg'
import pizza6 from '../../assets/pizza6.jpeg'

import combo1 from '../../assets/combo1.jpeg'
import combo2 from '../../assets/combo2.jpeg'
import combo3 from '../../assets/combo8.jpeg'
import combo4 from '../../assets/combo4.jpeg'
import combo5 from '../../assets/combo5.jpeg'
import combo6 from '../../assets/combo6.webp'
import combo7 from '../../assets/combo7.jpeg'
import combo8 from '../../assets/combo8.jpeg'


import desert1 from '../../assets/desert1.jpeg'
import desert2 from '../../assets/desert2.jpg'
import desert3 from '../../assets/desert3.jpeg'
import desert4 from '../../assets/desert4.jpg'
import desert5 from '../../assets/desert5.jpg'

// Drawn placeholders for categories that have no photos yet
import sidesImg from '../../assets/sides.svg'
import drinksImg from '../../assets/drinks.svg'

// The menu tabs. The first one is shown by default.
export const CATEGORIES = [
  { slug: 'lavash', label: 'Lavash' },
  { slug: 'burger', label: 'Burgers' },
  { slug: 'pizza', label: 'Pizza' },
  { slug: 'combo', label: 'Combo sets' },
  { slug: 'sides', label: 'Sides' },
  { slug: 'drinks', label: 'Drinks' },
  { slug: 'desserts', label: 'Desserts' },
]

// Helper: each row is [name, price in UZS, short description].
// `images` is a list. The dishes use these pictures in turn, so 6 photos
// are enough for 12 dishes. To give one dish its own photo, change the list order
// or add `image: yourPhoto` to that dish after make().
const make = (slug, images, rows) =>
  rows.map(([name, price, description], i) => ({
    id: `${slug}-${i + 1}`,
    name,
    price,
    description,
    image: images[i % images.length],
  }))

// Sample menu: names, prices and descriptions are placeholders. Edit freely.
export const PRODUCTS = {
  lavash: make('lavash', [lavash1, lavash2, lavash3, lavash4, lavash5, lavash6,lavash7], [
    ['Classic Beef Lavash', 32000, 'Grilled beef, fresh vegetables and garlic sauce.'],
    ['Chicken Lavash', 29000, 'Juicy chicken, crisp lettuce and creamy sauce.'],
    ['Cheese Lavash', 34000, 'Beef, melted cheese and tomatoes in a warm wrap.'],
    ['Spicy Lavash', 33000, 'Beef with jalapeño, pickles and hot sauce.'],
    ['Mini Lavash', 22000, 'A smaller wrap with chicken and vegetables.'],
    ['Double Meat Lavash', 42000, 'Twice the beef for a really hungry day.'],
    ['Lavash with Fries', 36000, 'Chicken lavash with fries tucked inside.'],
    ['Veggie Lavash', 26000, 'Grilled vegetables, hummus and fresh herbs.'],
    ['Kebab Lavash', 38000, 'Seasoned kebab, onion and tomato sauce.'],
    ['BBQ Chicken Lavash', 35000, 'Chicken in smoky barbecue sauce with coleslaw.'],
    ['Mushroom Lavash', 31000, 'Fried mushrooms, cheese and garlic sauce.'],
    ['Lavash XL', 45000, 'Our biggest wrap with beef, cheese and fries.'],
  ]),

  burger: make('burger', [ burger1, burger2, burger3,burger4, burger5, burger6,burger7], [
    ['Classic Burger', 28000, 'Beef patty, lettuce, tomato and house sauce.'],
    ['Cheeseburger', 31000, 'Classic burger with melted cheddar.'],
    ['Double Cheeseburger', 42000, 'Two beef patties and double cheddar.'],
    ['Chicken Burger', 27000, 'Crispy chicken fillet with fresh lettuce.'],
    ['Spicy Chicken Burger', 29000, 'Hot crispy chicken with spicy mayo.'],
    ['BBQ Burger', 38000, 'Beef, onion rings and smoky barbecue sauce.'],
    ['Mushroom Burger', 33000, 'Beef patty with fried mushrooms and cheese.'],
    ['Fish Burger', 30000, 'Crispy fish fillet with tartar sauce.'],
    ['Veggie Burger', 26000, 'Vegetable patty, avocado-style sauce and greens.'],
    ['Mega Burger', 52000, 'Three patties, cheese, pickles and sauce.'],
    ['Junior Burger', 19000, 'A small burger, just the right size for kids.'],
    ['Crispy Burger', 29000, 'Crunchy chicken, cabbage slaw and sweet chili.'],
  ]),

  pizza: make('pizza', [pizza1, pizza2, pizza3,pizza4, pizza5, pizza6], [
    ['Margherita', 52000, 'Tomato sauce, mozzarella and fresh basil.'],
    ['Pepperoni', 62000, 'Spicy beef pepperoni and plenty of cheese.'],
    ['Four Cheese', 68000, 'Mozzarella, cheddar, parmesan and cream cheese.'],
    ['Chicken BBQ', 64000, 'Chicken, red onion and barbecue sauce.'],
    ['Meat Lovers', 72000, 'Beef, sausage, chicken and mozzarella.'],
    ['Vegetarian', 55000, 'Peppers, mushrooms, olives and tomatoes.'],
    ['Mushroom', 58000, 'Fried mushrooms, mozzarella and herbs.'],
    ['Spicy Pizza', 63000, 'Jalapeño, spicy sausage and hot sauce.'],
    ['Mini Pizza', 32000, 'A personal pizza with cheese and tomato.'],
    ['Chicken Ranch', 66000, 'Chicken, tomatoes and creamy ranch sauce.'],
    ['Sausage Pizza', 60000, 'Smoked sausage, onion and mozzarella.'],
    ['Tuna Pizza', 65000, 'Tuna, red onion, olives and cheese.'],
  ]),

  combo: make('combo', [combo1, combo2, combo3, combo4, combo5, combo6, combo7,combo8], [
    ['Burger Combo', 45000, 'Classic burger, fries and a cold drink.'],
    ['Lavash Combo', 48000, 'Beef lavash, fries and a drink.'],
    ['Double Burger Combo', 62000, 'Double cheeseburger, large fries and a drink.'],
    ['Family Set', 180000, 'Four burgers, big fries and four drinks.'],
    ['Kids Set', 35000, 'Junior burger, small fries, juice and a surprise.'],
    ['Pizza Combo', 85000, 'Medium pizza, fries and two drinks.'],
    ['Chicken Combo', 52000, 'Chicken burger, nuggets, fries and a drink.'],
    ['Student Set', 38000, 'Burger, fries and a drink at a friendly price.'],
    ['Duo Set', 95000, 'Two lavash wraps, fries and two drinks.'],
    ['Party Box', 240000, 'Eight burgers, nuggets, fries and sauces.'],
    ['Wrap & Fries Set', 44000, 'Chicken lavash, fries and a drink.'],
    ['Mega Set', 120000, 'Two burgers, a lavash, fries and drinks.'],
  ]),

  sides: make('sides', [sidesImg], [
    ['French Fries S', 12000, 'Golden and crispy, small portion.'],
    ['French Fries M', 16000, 'Golden and crispy, medium portion.'],
    ['French Fries L', 20000, 'Golden and crispy, large portion.'],
    ['Country Potatoes', 18000, 'Seasoned potato wedges with herbs.'],
    ['Onion Rings', 17000, 'Crunchy battered rings with dipping sauce.'],
    ['Chicken Nuggets 6 pcs', 22000, 'Tender chicken in a crispy coating.'],
    ['Chicken Nuggets 12 pcs', 40000, 'A sharing box of crispy nuggets.'],
    ['Coleslaw', 10000, 'Fresh cabbage and carrot in a light dressing.'],
    ['Fresh Salad', 15000, 'Tomato, cucumber, lettuce and olive oil.'],
    ['Garlic Sauce', 4000, 'Creamy garlic dip.'],
    ['Cheese Sauce', 5000, 'Warm melted cheese dip.'],
    ['BBQ Sauce', 4000, 'Sweet and smoky barbecue dip.'],
  ]),

  drinks: make('drinks', [drinksImg], [
    ['Cola 0.5 L', 9000, 'Ice-cold sparkling cola.'],
    ['Orange Soda 0.5 L', 9000, 'Sparkling orange soda.'],
    ['Lemon Iced Tea', 12000, 'Cold black tea with lemon.'],
    ['Peach Iced Tea', 12000, 'Cold black tea with peach.'],
    ['Still Water 0.5 L', 4000, 'Natural drinking water.'],
    ['Sparkling Water 0.5 L', 5000, 'Refreshing sparkling water.'],
    ['Fresh Orange Juice', 20000, 'Squeezed to order from ripe oranges.'],
    ['Lemonade', 14000, 'Homemade lemonade with mint and ice.'],
    ['Vanilla Milkshake', 22000, 'Thick and creamy, made with ice cream.'],
    ['Chocolate Milkshake', 22000, 'Rich chocolate shake with whipped cream.'],
    ['Americano', 15000, 'Classic black coffee.'],
    ['Cappuccino', 18000, 'Espresso with silky milk foam.'],
  ]),

  desserts: make('desserts', [desert1, desert2, desert3, desert4, desert5], [
    ['Vanilla Ice Cream', 12000, 'Creamy vanilla in a waffle cone.'],
    ['Chocolate Ice Cream', 12000, 'Rich chocolate in a waffle cone.'],
    ['Strawberry Sundae', 18000, 'Vanilla ice cream with strawberry sauce.'],
    ['Cheesecake', 24000, 'Soft cream cheese on a buttery base.'],
    ['Chocolate Cake', 22000, 'Moist chocolate sponge with ganache.'],
    ['Apple Pie', 14000, 'Warm pastry filled with cinnamon apples.'],
    ['Glazed Donut', 10000, 'Soft and sweet with a sugar glaze.'],
    ['Churros', 16000, 'Crispy sticks with chocolate dip.'],
    ['Brownie', 17000, 'Fudgy chocolate brownie with nuts.'],
    ['Honey Waffle', 19000, 'Warm waffle with honey and cream.'],
    ['Pancakes', 21000, 'Three fluffy pancakes with maple syrup.'],
    ['Fruit Cup', 16000, 'Seasonal fresh fruit pieces.'],
  ]),
}