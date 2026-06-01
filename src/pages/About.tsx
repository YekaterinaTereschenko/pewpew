import { useProducts } from '../hooks/useProducts'
import Loader from '../components/Loader';
import ContactForm from '../components/ContactForm';
import Error from '../components/Error';

export default function About() {
  // я кстати не знаю, наверное, тут не нужен useProducts, но вопрос, тогда надо новый лоадер? или что(
  const { loading, error } = useProducts()

  if (loading) return <Loader />

    if (error) return <Error />
  
  
  return (
    <div className='max-w-200 text-center flex flex-col gap-5 items-center m-auto'>
      <h3>Contact Us</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsum ducimus, deserunt voluptas reiciendis, quam debitis hic iste officiis odit sit. Optio voluptates libero saepe aperiam reiciendis deserunt earum maxime.</p>
      <ContactForm />
    </div>
  )
}
