import { useProducts } from '../../../entities/product/hooks/useProducts'
import Loader from '../../../shared/ui/Loader';
import ContactForm from '../../../features/contact-form/ui/ContactForm';
import Error from '../../../shared/ui/Error';

export default function About() {
  // я кстати не знаю, наверное, тут не нужен useProducts, но вопрос, тогда надо новый лоадер? или что(
  const { isPending, isError } = useProducts()

  if (isPending) return <Loader />

  if (isError) return <Error />
  
  
  return (
    <div className='max-w-200 text-center flex flex-col gap-5 items-center m-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'>
      <h3>Contact Us</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsum ducimus, deserunt voluptas reiciendis, quam debitis hic iste officiis odit sit. Optio voluptates libero saepe aperiam reiciendis deserunt earum maxime.</p>
      <ContactForm />
    </div>
  )
}
