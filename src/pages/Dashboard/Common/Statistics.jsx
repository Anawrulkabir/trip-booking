import useRole from '../../../hooks/useRole'
import AdminStatistics from '../Admin/AdminStatistics'
import GuestStatistics from '../Guest/GuestStatistics'
import HostStatistics from '../Host/HostStatistics'

const Statistics = () => {
  const [role] = useRole()

  return (
    <div>
      {role === 'admin' && <AdminStatistics />}
      {role === 'host' && <HostStatistics />}
      {role === 'guest' && <GuestStatistics />}
    </div>
  )
}

export default Statistics
