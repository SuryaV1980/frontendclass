import '../index.css'
import Image from '../assets/images/picture/mark.avif'
const ProfileCard = () => {
  return (
    <>
    
    <div className='profilecard'>

      <div className='image'>
        <img className='imagemark' src={Image} alt="logo" />
      </div>


      <div className='context'>
        <p><strong>Name:</strong>  Mark zuckerberk</p>
        <p><strong>CEO:</strong>  Meta</p>

        <span className='follow'><button className='button'>Follow</button></span>
      </div>


    </div> 
    
    </>
  )
}

export default ProfileCard