import React from 'react';
import blogPosts from "@/data/blog";

const Category = () => {
  // Calculăm numărul de elemente pentru fiecare categorie
  const categoryCounts = blogPosts.reduce((acc, post) => {
    const tag = post.tag || "Uncategorized"; // Folosim "Uncategorized" pentru elementele fără tag
    if (acc[tag]) {
      acc[tag]++;
    } else {
      acc[tag] = 1;
    }
    return acc;
  }, {});

  // Conversia obiectului de categorii în array de obiecte cu name și count
  const categoryArray = Object.keys(categoryCounts).map((category) => ({
    name: category,
    count: categoryCounts[category],
  }));

  return (
    <ul className="style-none">
      {categoryArray.map((category, index) => (
        <li key={index}>
          <a href="#">
            {category.name}
            <span className="float-end">({category.count})</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Category;
