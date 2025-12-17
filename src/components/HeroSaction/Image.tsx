import img1 from '../../../public/image copy.png'
import img2 from '../../../public/image.png'

const Image = () => {
  return (
      <div className='bg-transparent w-96 h-96'>
          <img src={img1} alt="" />
    </div>
  )
}
export const Image2 = () => {
  return (
      <div className='bg-transparent w-96 h-96'>
          <img src={img2} alt="" />
    </div>
  )
}

export default Image