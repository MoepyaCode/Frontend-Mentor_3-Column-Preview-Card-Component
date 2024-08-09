import { assets } from './assets'
import { Container, Main, Wrapper } from './components'

export default function App() {
  type CarPropsType = {
    make: string,
    image: string,
    description: string,
    color: string,
  }
  const carProps: CarPropsType[] = [
    {
      image: assets.iconSedans,
      make: 'SEDANS',
      description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      color: '#E28625'
    },
    {
      image: assets.iconSuvs,
      make: 'SUVS',
      description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      color: '#006971'
    },
    {
      image: assets.iconLuxury,
      make: 'LUXURY',
      description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
      color: '#004140'
    }
  ]

  return (
    <Main className='bg-[#F2F2F2] grid place-items-center min-w-full px-[24px] py-[88px]'>
      <Container className='flex flex-col md:flex-row  rounded-[8px] overflow-hidden'>
        {
          carProps.map((car, index) => (
            <Wrapper
              style={{ backgroundColor: car.color }}
              key={index}
              className='w-full max-w-[307px] min-h-[442px] md:min-h-[500px] p-[48.5px] md:p-[47.5px] flex flex-col flex-nowrap gap-[25px] justify-between items-start font-lexend text-[15px]'
            >
              <img src={car.image} alt={car.make} className='object-contain' />
              <h2 className='font-big-shoulders font-bold text-[40px] text-white'>{car.make}</h2>
              <p className='text-white opacity-75'>{car.description}</p>
              <button style={{color: car.color}} onMouseLeave={e => e.currentTarget.style.color = car.color} onMouseOver={e => e.currentTarget.style.color = 'white'}  className='w-[146px] h-[48px] rounded-full bg-[#F2F2F2] border-2 border-white hover:bg-transparent transition-colors duration-300 md:mt-[calc(83px-25px)]' >
                Learn More
              </button>
            </Wrapper>
          ))
        }
      </Container>
    </Main>
  )
}
