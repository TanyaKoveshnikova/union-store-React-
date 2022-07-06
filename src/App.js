import "./categories.styles.scss";
import accessories from "./images/categories/accessories-category.jpg";
import books from "./images/categories/books-category.jpg";
import toys from "./images/categories/toys-category.jpg";
import women from "./images/categories/women-category.jpg";
import men from "./images/categories/men-category.jpg";
import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Книги",
      imageUrl: `${books}`,
    },
    {
      id: 2,
      title: "Игрушки",
      imageUrl: `${toys}`,
    },
    {
      id: 3,
      title: "Аксессуары",
      imageUrl: `${accessories}`,
    },
    {
      id: 4,
      title: "Женщинам",
      imageUrl: `${women}`,
    },
    {
      id: 5,
      title: "Мужчинам",
      imageUrl: `${men}`,
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
