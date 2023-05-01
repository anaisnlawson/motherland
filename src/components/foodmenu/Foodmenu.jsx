import React, { useState, useEffect } from "react";
import './foodmenu.css'
import items from '../data';
import { MenuHeader } from "../../containers";
import Categories from "../categories/Categories";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Foodmenu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

 

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      //useEffect(()=>{ 
      //You need to use "useEffect" because it'll re-rendering infintely otherwise
      setMenuItems(items);
      //}, [])
      return;
    }
    const newItems = items.filter((item) => item.category === category);
      //useEffect(()=>{ 
      //You need to use "useEffect" because it'll re-rendering infintely otherwise
      setMenuItems(newItems);
      //}, [])
  };
  return (
    <>
   <div>
    <MenuHeader/>
   </div>
   <main>
   <section className="menu section">
   <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
    />
   <div className="section-center">
      {menuItems.map((item) => {
        const { id, title, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
    </section>
    </main>
    </>
  )
}
export default Foodmenu
/* 


const App = () => {
  return (
    
      
        <div className="title">
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        
        <Menu items={menuItems} />
    </main>
  );
};

export default App;*/