import { useProducts } from '../hooks/useProducts'
import ProductsList from '../components/ProductsList';
import Loader from '../components/Loader';
import Error from '../components/Error';

export default function Home() {
  const { products , loading, error } = useProducts()

  if (loading) return <Loader />

  if (error) return <Error />
  
  return (
    <ProductsList products={products}/>
  )
}