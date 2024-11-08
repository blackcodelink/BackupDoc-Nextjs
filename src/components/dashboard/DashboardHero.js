import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/images/logo.jpeg'
import { Button } from '@/components/shared/Button'
import Modal from '@/components/shared/Modal'
import PatientList from '@/components/dashboard/PatientList'
import ImageDashboard from '@/components/dashboard/ImageDashboard'

export const DashboardHero = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [patients, setPatients] = useState([{ id: 1, name: 'Sample Patient' }]) // Sample patient data
  const [selectedPatient, setSelectedPatient] = useState(null)

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const addPatient = (patient) => {
    setPatients([...patients, patient])
    setIsModalOpen(false)
  }

  const selectPatient = (patient) => {
    setSelectedPatient(patient)
  }

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className='container mx-auto bg-[#e0e0ee]'>
      <div className='flex h-screen w-full'>
        {/* Left Section */}
        <div className='flex h-full w-1/4 flex-col rounded-lg border-4 border-gray-300 bg-[#e0e0ee]'>
          <div className='mb-1 flex items-center justify-center bg-[#310b37]'>
            <Image
              src={logo}
              alt='Company logo'
              className='h-16 w-auto rounded-full border-4 border-white bg-[#430d4b]'
            />
            <h1 className='ml-4 text-3xl font-bold text-white'>BackupDoc</h1>
          </div>
          {/* Patient List with Search Input */}
          <div className='search flex items-center border border-gray-500 bg-[#430d4b] p-4 shadow-inner'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-search mr-2 text-white'
              viewBox='0 0 16 16'
            >
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
            </svg>
            <input
              type='search'
              id='search-input'
              className='w-full rounded-md bg-transparent p-2 text-white placeholder-white outline-none'
              placeholder='Search'
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          {/* List of Patients */}
          <ul className='mt-4 space-y-3'>
            {filteredPatients.map((patient) => (
              <li
                key={patient.id}
                className='bg-[#7f1390] p-2 text-white transition hover:bg-[#430d4b]'
                onClick={() => selectPatient(patient)}
              >
                {patient.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className='flex h-full w-3/4 flex-col gap-2 rounded-lg border-4 border-gray-500 bg-[#c4c4d3]'>
          {!selectedPatient ? (
            <div className='flex justify-center p-64'>
              <button
                className='flex items-center justify-between p-6 text-xl text-black transition-all'
                onClick={openModal}
              >
                Create Patient List
                <span className='ml-4 flex h-full w-10 items-center justify-center rounded-md bg-black'>
                  {/* <Image
                    src='/media/Group.png'
                    alt='button'
                    width={20}
                    height={20}
                  /> */}
                </span>
              </button>
            </div>
          ) : (
            <div className='mt-8 rounded-lg border-4 border-[#430d4b] bg-[#2e2e2e] p-6 shadow-md'>
              <ImageDashboard patient={selectedPatient} />
            </div>
          )}
        </div>
      </div>

      {/* Modal for Creating Patient */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <PatientList onAddPatient={addPatient} />
        </Modal>
      )}
    </main>
  )
}
