import Title from './HeaderTitle'
import Data from '../ArticleData'

const Articles = () => {
  return (
    <section id='articles' className='py-24 md:py-40 px-16 sm:px-32 md:px-16 lg:px-38 bg-drop'>
      <div className='flex flex-col items-center'>
        <Title titleText={'LATEST ARTICLES'} style={"border-t-2 md:border-t-4 border-primary w-16 md:mt-6 mt-3"} />
        <div className='grid grid-cols-1111 gap-8 mx-7 sm:mx-14 lg:mx-14 mt-20 '>
          {
            Data.map(({ image, title, id }) => {
              return (
                <div key={id} className='grid grid-rows-subgrid row-span-3 bg-white shadow-lg'>
                  <img src={image} alt='DRONE' className='h-full' />
                  <div className='mx-auto border-t-2 md:border-t-3 md:border-primary border-primary w-10 lg:w-12 mt-3'></div>
                  <p className='text-center sm:text-lg md:text-lg px-8 sm:px-20 lg:px-16 xl:px-10 pt-2 pb-14 lg:pb-20'>{title}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Articles