import breakfast from '../breakfast.jpg'
import dessert from "../Dessert.jpg";
import dinner from "../Dinner.jpg";
import drinks from "../drinks.jpg";
import lunch from "../Lunch.jpg";
import sides from "../sides.jpg";
import all from "../all.jpg";
import snacks from "../snacks.jpg";

const categoryList = [
    
    {
        id: 1,
        name: "Breakfast",
        image: breakfast,
        href: "/categories/breakfast"
    },
    {
        id: 2,
        name: "Lunch",
        image: lunch,
        href: "/categories/lunch"
    },
    {
        id: 3,
        name: "Dinner",
        image: dinner,
        href: "/categories/dinner"
    },
    {
        id: 4,
        name: "Dessert",
        image: dessert,
        href: "/categories/dessert"
    },
    {
        id: 5,
        name: "Drinks",
        image: drinks,
        href: "/categories/drinks"
    },
    {
        id: 6,
        name: "Snacks",
        image: snacks,
        href: "/categories/sides"
    },
    {
        id: 7,
        name: "Sides",
        image: sides,
        href: "/categories/sides"
    },
    {
        id: 8,
        name: "Explore All",
        image: all,
        href: "/"
    }
];

export default categoryList;