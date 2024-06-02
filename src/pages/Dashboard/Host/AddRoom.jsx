import { useState } from 'react'
import AddRoomForm from '../../../components/Form/AddRoomForm'
import useAuth from '../../../hooks/useAuth'
// import { imageUpload } from '../../../api/utils/ index'
// import axios from 'axios'
import profileNotFound from '../../../../public/user-not-found.jpg'
import { imageUpload } from '../../../api/utils'
import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet-async'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useNavigate } from 'react-router-dom'

const AddRoom = () => {
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()
  const [imagePreview, setImagePreview] = useState()
  const [imageText, setImageText] = useState('')
  const [loading, setLoading] = useState(false)
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })

  // Date range handlert{
  const handleDates = (item) => {
    console.log(item)
    setDates(item.selection)
  }

  // post method using tanstack query
  const { mutateAsync } = useMutation({
    mutationFn: async (roomData) => {
      const { data } = await axiosSecure.post('/room', roomData)
      return data
    },
    onSuccess: () => {
      setLoading(false)
      toast.success('Room added successfully')
      console.log('data saved')
      navigate('/dashboard/my-listings')
    },
  })

  // form handler
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()

    const form = e.target
    const location = form.location.value
    const category = form.category.value
    const title = form.title.value
    const to = dates.endDate
    const from = dates.startDate
    const price = form.price.value
    const guests = form.total_guest.value
    const bathrooms = form.bathrooms.value
    const description = form.description.value
    const bedrooms = form.bedrooms.value
    const image = form.image.files[0]
    let image_url = profileNotFound
    console.log(image)
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    }

    const formData = new FormData()
    formData.append('image', image)

    try {
      // setLoading(true)
      image_url = await imageUpload(image)

      const roomData = {
        location,
        category,
        title,
        to,
        from,
        price,
        guests,
        bathrooms,
        bedrooms,
        description,
        image: image_url,
        host,
      }

      console.table(roomData)

      toast('Successfully added a new room.')

      if (roomData) {
        form.reset()
        setLoading(false)
        setImagePreview('')
        setImageText('')
      }

      // post request to server
      await mutateAsync(roomData)
    } catch (err) {
      console.log(err.message)
      setLoading(false)
      toast.error(err.message)
    }
  }

  // handle image change
  const handleImage = (image) => {
    setImagePreview(URL.createObjectURL(image))
    setImageText(image.name)

    console.log(imagePreview, imageText)
  }

  // handle cencel image upload button (not working right now )
  const cencelImage = () => {
    setImagePreview('')
    setImageText('')
    // console.log(imagePreview, imageText)
  }

  return (
    <div>
      <Helmet>
        <title>Add Room | Dashboard</title>
      </Helmet>

      {/* Form  */}
      <AddRoomForm
        dates={dates}
        handleDates={handleDates}
        handleSubmit={handleSubmit}
        imagePreview={imagePreview}
        handleImage={handleImage}
        imageText={imageText}
        cencelImage={cencelImage}
        loading={loading}
      />
    </div>
  )
}

export default AddRoom
