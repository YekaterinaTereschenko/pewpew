import ContactForm from '../../../features/contact-form/ui/ContactForm';
import { usePageLoading } from '../../../shared/hooks/usePageLoading';
import Loader from '../../../shared/ui/Loader';

export default function About() {
  const { isPending } = usePageLoading()

  if (isPending) return <Loader />

  return (
    <div className='min-h-screen w-full py-5 text-center flex flex-col gap-5 items-center m-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'>
      <h3>Contact Us</h3>
      <p className='px-5 max-w-[900px]'>Welcome to our store, where quality, style, and customer satisfaction come together. We carefully select every product to ensure it meets the highest standards and provides real value to our customers. Our mission is to make shopping simple, enjoyable, and accessible for everyone. Whether you are looking for everyday essentials or something special, you will find a wide range of thoughtfully chosen items. We are committed to delivering excellent service and a seamless shopping experience from start to finish. Our team is always working to bring you the latest trends, reliable products, and competitive prices. Thank you for choosing us and being a part of our growing community.</p>
      <ContactForm />
    </div>
  )
}
