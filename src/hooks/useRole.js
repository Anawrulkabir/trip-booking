// import { useState } from 'react'
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const useRole = () => {
  const axiosSecure = useAxiosSecure()
  const { user, loading } = useAuth()
  // const [role, setRole] = useState()

  const { data: role, isLoading } = useQuery({
    queryKey: ['role'],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/user/${user?.email}`)
      return data.role
    },
  })

  // fetch user info using logged in user email

  return [role, isLoading]
}

export default useRole
