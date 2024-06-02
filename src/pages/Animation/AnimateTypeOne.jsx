import { Button } from '@headlessui/react'
import { motion } from 'framer-motion'

const AnimateTypeOne = () => {
  const list = { hidden: { opacity: 0 } }
  const item = { hidden: { x: -10, opacity: 0 } }
  return (
    <>
      <motion.div
        animate={{ x: 10, y: 10, rotate: 0 }}
        //   whileHover={{ scale: 1.1 }}
        //   whileTap={{ scale: 1.5 }}
        dragConstraints={{ left: -100, right: 100 }}
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        className="flex items-center justify-center flex-col gap-20 p-5 rounded-lg border m-3"
      >
        <p className="">
          Lorem ipsum dolor s it amet consectetur adipisicing elit. Esse
          doloremque dolore eum ad, quod recusandae maxime distinctio illo
          officiis, alias ut repellat. Magnam?
        </p>
        <Button className="flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Click Here
        </Button>
      </motion.div>

      <div className="mx-10 mt-10">
        <motion.ul className="space-y-3" animate="hidden">
          <motion.li variants={item}>
            <div
              className="border rounded-lg px-3 py-1 flex flex-row items-center justify-between
            "
            >
              <p className="text-xl font-bold">this is a list</p>
              <Button className="flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                Click Here
              </Button>
            </div>
          </motion.li>
          <motion.li variants={item}>
            <div
              className="border rounded-lg px-3 py-1 flex flex-row items-center justify-between
            "
            >
              <p className="text-xl font-bold">this is a list</p>
              <Button className="flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                Click Here
              </Button>
            </div>
          </motion.li>
          <motion.li variants={item}>
            <div
              className="border rounded-lg px-3 py-1 flex flex-row items-center justify-between
            "
            >
              <p className="text-xl font-bold">this is a list</p>
              <Button className="flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                Click Here
              </Button>
            </div>
          </motion.li>
          <motion.li variants={item}>
            <div
              className="border rounded-lg px-3 py-1 flex flex-row items-center justify-between
            "
            >
              <p className="text-xl font-bold">this is a list</p>
              <Button className="flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                Click Here
              </Button>
            </div>
          </motion.li>
          <motion.li variants={item}>
            <div
              className="border rounded-lg px-3 py-1 flex flex-row items-center justify-between
            "
            >
              <p className="text-xl font-bold">this is a list</p>
              <Button className="flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                Click Here
              </Button>
            </div>
          </motion.li>
          <motion.li variants={item}>
            <div
              className="border rounded-lg px-3 py-1 flex flex-row items-center justify-between
            "
            >
              <p className="text-xl font-bold">this is a list</p>
              <Button className="flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                Click Here
              </Button>
            </div>
          </motion.li>
          <motion.li variants={item}>
            <div
              className="border rounded-lg px-3 py-1 flex flex-row items-center justify-between
            "
            >
              <p className="text-xl font-bold">this is a list</p>
              <Button className="flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                Click Here
              </Button>
            </div>
          </motion.li>
          <motion.li variants={item}>
            <div
              className="border rounded-lg px-3 py-1 flex flex-row items-center justify-between
            "
            >
              <p className="text-xl font-bold">this is a list</p>
              <Button className="flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                Click Here
              </Button>
            </div>
          </motion.li>
        </motion.ul>
      </div>
    </>
  )
}

export default AnimateTypeOne
