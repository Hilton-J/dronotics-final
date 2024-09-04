import Title from './HeaderTitle'
import Data from '../articleData'

const Articles = () => {
  return (
    <section className='py-16 px-32 bg-drop'>
      <div className='flex flex-col items-center'>
        <Title titleText={'LATEST ARTICLES'} style={"border-t-2 md:border-t-4 border-primary w-16 md:mt-6 mt-3"} />
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 '>
          {
            Data.map(({ image, title, id }) => {
              return (
                <article key={id} className='grid grid-rows-subgrid row-span-3 bg-white shadow-lg'>
                  <img src={image} alt='DRONE' className='size-full' />
                  <div className='mx-auto border-t-2 md:border-t-4 md:border-primary border-primary w-10 mt-3'></div>
                  <p className='text-center text-sm md:text-lg px-8 pt-2 pb-14'>{title}</p>
                </article>
              )
            })
          }
        </div>

      </div>
    </section>
  )
}

export default Articles