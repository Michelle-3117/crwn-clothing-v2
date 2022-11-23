import React from 'react'
import './category1.styles.scss'
import { useState, useContext, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/CategoriesContext'
import ProductCard from '../../components/product-card/ProductCard'

const Category1 = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
      <Fragment>
          <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category1-container'>
          { products &&
              products.map((product) => (
                  <ProductCard key={product.id} product={product} />
              ))
          }
    </div>      
      </Fragment>
  )
}

export default Category1