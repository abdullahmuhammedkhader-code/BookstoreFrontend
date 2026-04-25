import React from 'react'
import Header from "../../user/components/Header";
import Footer from "../../components/Footer";
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <Header />
      {/* hero section */}
      <div style={{height:"500px"}} className='flex flex-col  justify-center items-center bg-[url(/landing.png)] bg-cover bg-center text-white'>
      <div style={{height:"500px", backgroundColor:"rgb(0,0,0,0.3)"}} className='w-full flex flex-col justify-center items-center'>
        <h1 className='text-6xl font-bold '>wonderful gift </h1>
        <p> gift your family and friends a books</p>
       <div className='mt-9 flex items-center'>
          <input placeholder='search a book ' type="text" className='bg-white p-2 rounded-2xl w-100 text-black' />
          <FaSearch className='text-gray-500 cursor-pointer' style={{marginLeft:"-40px"}}/>
       </div>
      </div>

      </div>
         {/* new arrivals */}
         <section className='md:px-40 my-5  p-5 flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold'> new arrivals</h1>
          <h2 className='text-4xl my-2'> explore our lastest collections</h2>
          {/* duplicate according to book  */}
          <div className='shadow rounded p-3 m-4 md:my-0' >
            <img width={'100%'} height={'300px'} src="https://tse4.mm.bing.net/th/id/OIP.TH8Jj3_oRNQrf4gkHjeUkwHaLH?pid=Api&P=0&h=180" alt="books" />
            <div className='flex flex-col justify-center items-center mt-4'>
              <h2 className='text-blue-700 font-bold text'></h2>
            </div>
          </div>
          <div className="text-center my-10">
            <Link to={'/books'} className='bg-black p-3 text-white font-bold'> explore more ....</Link>
          </div>
          
         </section>
         {/* authors*/}
         <section className='md:grid grid-cols-2 items-center gap-10 p-5 md:px-40 '>
          <div className='text-center'>
            <h2 className='text-xl font-bold'>FEATURED AUTHORS</h2>
            <h3 className='text-xl'>Captivates with every word</h3>
            <p className='my-5 text-justify'>Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>
            <p className='my-5 text-justify'>Our Author Features include:</p>
            <p className='my-5 text-justify'>✨ Author Profiles : Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.</p>
            <p className='my-5 text-justify'>📖 Published Works : Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.</p>
            <p className='my-5 text-justify'>🎤 Interviews & Insights : Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author’s creative world.</p>
          </div>
          {/* Right Image */}
          <div className='p-5 flex items-center justify-center'>
            <img src="https://tse4.mm.bing.net/th/id/OIP.O_onBdFvJVFTHBueM0Vp0QHaE8?pid=Api&P=0&h=180" alt="autor" />
          </div>
         </section>
           {/* testimonials*/}
           <section className='md:px-40 my-5 p-5 flex flex-col justify-center items-center'>
            <h1 className='text-xl font-bold'>testimonials </h1>
            <h1 className='text-xl my-2'></h1>
            <div className='my-5 flex flex-col justify-center items-center'>
              <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="" />
              <h3 className='my-3'>luthur king</h3>
              <p className='text-justify'>This bookstore has completely changed the way I discover new books. The recommendations are always spot-on, and the delivery is super fast. I love the clean interface and the huge collection! The user experience is amazing! Easy navigation, great deals, and beautifully organized categories. I appreciate how quickly customer support responds too</p>
            </div>
           </section>
              <Footer />
    </>
  )
}

export default Home