import {Routes, Route} from 'react-router-dom'
import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category1 from '../category/Category1.jsx';
const ShopComponent = () => {;
  return (
    <div>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category1/>} />
     </Routes>
    </div>
  )
}

export default ShopComponent