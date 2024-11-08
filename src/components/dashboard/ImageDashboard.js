import { useState } from 'react'
import Image from 'next/image'
import ImageUpload from '@/components/dashboard/ImageUpload'
export default function ImageDashboard({
  patientXrayImages = [],
  userCredits = 0,
}) {
  const [search, setSearch] = useState('')
  const [isModalOpen, setModalOpen] = useState(false)
  const [imageFile, setImageFile] = useState(null)
  const [isImageUploaded, setIsImageUploaded] = useState(false)

  // Handle search input change
  const handleSearchChange = (e) => setSearch(e.target.value)

  // Toggle modal visibility
  const toggleModal = () => setModalOpen(!isModalOpen)

  // Handle image file upload (passed down to ImageUpload component)
  const handleImageUpload = (file) => {
    setImageFile(file)
    setIsImageUploaded(true) // Set flag to true once an image is uploaded
    setModalOpen(false) // Close modal once image is uploaded
  }

  // Handle analysis (you can replace this with actual analysis logic)
  const handleAnalyze = () => {
    if (imageFile) {
      alert('Analyzing the uploaded image: ' + imageFile.name)
      // Here, you would trigger your image analysis function
    } else {
      alert('No image uploaded to analyze')
    }
  }

  return (
    <div className='flex bg-[#c4c4d3]'>
      {/* Left Side - Patient List and Search */}
      <div className='border-r-1 w-1/4 border-gray-300 p-4'>
        {/* Patient Images or Content here */}
        <h2>Preview Images</h2>
        <div className='overflow-y-auto'>
          {/* Display patient X-ray images here */}
          {patientXrayImages
            .filter((image) =>
              image.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((image, index) => (
              <div key={index} className='my-2 flex items-center'>
                <Image
                  src={image.url}
                  alt={image.name}
                  width={50}
                  height={50}
                />
                <span className='ml-2'>{image.name}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Right Side - Analyzer and Credits */}
      <div className='relative flex h-screen w-3/4 flex-col bg-gray-200 p-4'>
        {/* Top section for Credits and Buttons */}
        <div className='absolute left-0 right-0 top-0 bg-white p-4 shadow-lg'>
          <div className='flex items-center justify-between'>
            <div className='flex gap-2'>
              <div className='text-black-100 rounded-lg border border-black px-2 py-1'>
                Credits: {userCredits}
              </div>
              <button className='rounded-lg bg-blue-950 px-4 py-2 text-black'>
                Upgrade
              </button>
            </div>
            <button
              className='mt-2 rounded-lg bg-blue-100 px-4 py-2 text-black'
              onClick={toggleModal} // Open modal to upload image
            >
              + Upload Image
            </button>
          </div>
        </div>

        {/* Image Analysis Section */}
        <div className='mt-24 flex-1 overflow-y-auto bg-gray-300'>
          <h2>Analysis Results</h2>
          {/* Add your analysis content here */}
          {/* Example placeholder for analysis section */}
          {isImageUploaded && (
            <div>
              <h3>Uploaded Image: {imageFile?.name}</h3>
              {/* You can display the uploaded image here if needed */}
            </div>
          )}
        </div>

        {/* Fixed Analyze Button */}
        <div className='absolute bottom-4 right-4'>
          <button
            className='rounded-lg bg-blue-950 px-4 py-2 text-white'
            onClick={handleAnalyze} // Trigger analyze
          >
            Analyze
          </button>
        </div>
      </div>

      {/* Image Upload Modal */}
      <ImageUpload
        onImageUpload={handleImageUpload} // Pass function to handle uploaded image
        onClose={toggleModal} // Close modal when the close button is clicked
        isModalOpen={isModalOpen} // Pass modal state to control visibility
      />
    </div>
  )
}
