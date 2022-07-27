import DirectoryItem from "../directory-item/directory-item.component";
import accessories from "../../images/categories/accessories-category.jpg";
import books from "../../images/categories/books-category.jpg";
import toys from "../../images/categories/toys-category.jpg";
import women from "../../images/categories/women-category.jpg";
import men from "../../images/categories/men-category.jpg";
import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "Книги",
    imageUrl: `${books}`,
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Игрушки",
    imageUrl: `${toys}`,
    route: "shop/sneackers",
  },
  {
    id: 3,
    title: "Аксессуары",
    imageUrl: `${accessories}`,
    route: "shop/jackets",
  },
  {
    id: 4,
    title: "Женщинам",
    imageUrl: `${women}`,
    route: "shop/jackets",
  },
  {
    id: 5,
    title: "Мужчинам",
    imageUrl: `${men}`,
    route: "shop/jackets",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;

// TODO: "изменить бд и заменить переходы в категории на нужные"