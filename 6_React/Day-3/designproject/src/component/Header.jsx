import myLogo from '../assets/images/logo/Mitsubishi_logo.svg.webp'
import '../index.css'
const Header = () => {
  return (
    <>
    <div className='navbar'>
      <div className='logo'>
          <img src={myLogo} alt="logo" width={50}/>
      </div>

      <div className='navLink'>
        <a href="/" style={{textDecoration: "none", color:"black"}}>Home</a>
        <a href="/about" style={{textDecoration: "none", color:"black"}}>About</a>
        <a href="/shop" style={{textDecoration: "none", color:"black"}}>Shop</a>
        <a href="/contact" style={{textDecoration: "none", color:"black"}}>Contact</a>
      </div>
    </div>
    </>
  )
}

export default Header