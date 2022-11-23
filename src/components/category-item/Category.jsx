import {BackgroundImage, Body, DirectoryItemContainer} from'./category.styles.jsx'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Category = ({ category }) => {
  const { title, imageUrl, route } = category
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default Category