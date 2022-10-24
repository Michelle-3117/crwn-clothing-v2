import './categories.styles.scss'
import Directory from './components/directory/Directory';
const App = () => {

  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl:
        "https://images.pexels.com/photos/10074978/pexels-photo-10074978.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl:
        "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl:
        "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Women",
      imageUrl:
        "https://images.pexels.com/photos/2657594/pexels-photo-2657594.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      title: "Men",
      imageUrl:
        "https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
   <Directory categories={categories}/>
  );
};

export default App;
