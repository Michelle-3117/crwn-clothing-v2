import React from 'react'
import Category from '../category-item/Category';
import './directory-styles.scss'

const categories = [
  {
    id: 1,
    title: 'Hats',
    imageUrl:
      'https://images.pexels.com/photos/10074978/pexels-photo-10074978.jpeg?auto=compress&cs=tinysrgb&w=600',
    route: 'shop/hats'
  },
  {
    id: 2,
    title: 'Jackets',
    imageUrl:
      'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600',
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: 'Sneakers',
    imageUrl:
      'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600',
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: 'Women',
    imageUrl:
      'https://images.pexels.com/photos/2657594/pexels-photo-2657594.jpeg?auto=compress&cs=tinysrgb&w=600',
    route: 'shop/women'
  },
  {
    id: 5,
    title: 'Men',
    imageUrl:
      'https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&w=600',
    route: 'shop/men'
  }
];
const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Directory