import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
// import CustomBackground from '../components/Shared/CustomBackgrond/CustomBackground'
const Main = () => {
  return (
    <div>
      {/* <CustomBackground></CustomBackground> */}
      <Navbar />
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
