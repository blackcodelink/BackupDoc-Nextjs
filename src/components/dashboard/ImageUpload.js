import { useState } from 'react'

export default function ImageUpload({ onImageUpload, onClose, isModalOpen }) {
  const [imageFile, setImageFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const file = e.dataTransfer.files[0]
    if (file) {
      setImageFile(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  // Handle file selection via input
  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImageFile(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  // Trigger the file input click event
  const triggerFileInput = () => {
    document.getElementById('file-input').click()
  }

  // Handle file upload
  const handleUpload = () => {
    if (imageFile) {
      onImageUpload(imageFile)
      onClose()
    } else {
      alert('Please select an image to upload')
    }
  }

  return (
    <>
      {isModalOpen && (
        <div
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
          onClick={onClose}
        >
          <div
            className='modal-dialog' // Removed modal-lg class
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing on click inside
          >
            <div className='modal-content w-full max-w-6xl bg-white'>
              {' '}
              {/* Increased max width */}
              <div className='modal-header border-b p-4'>
                <h1 className='modal-title fs-5' id='staticBackdropLabel'>
                  X-Ray Uploader
                </h1>
                <button
                  type='button'
                  className='btn-close'
                  onClick={onClose}
                  aria-label='Close'
                ></button>
              </div>
              <div className='modal-body p-6'>
                {' '}
                {/* Increased padding */}
                {/* Drag & Drop Area */}
                <div
                  className='upload-area mb-3 cursor-pointer border-2 border-dashed border-gray-300 p-6 text-center'
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()} // Allow dropping
                  onClick={triggerFileInput}
                >
                  <p>Drag & Drop Files Here or Click to Select</p>
                  <input
                    type='file'
                    id='file-input'
                    className='hidden'
                    onChange={handleFileSelect}
                    accept='image/*'
                  />
                </div>
                {/* Preview Area */}
                {previewUrl && (
                  <div className='preview-area row mt-3'>
                    <div className='col-12'>
                      <img
                        src={previewUrl}
                        alt='Uploaded Preview'
                        className='h-auto max-h-60 w-full object-cover'
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className='modal-footer gap-4 border-t p-4'>
                <button className='rounded-lg bg-blue-950 px-4 py-2 text-black'>
                  Close
                </button>
                <button
                  type='button'
                  className='rounded-lg bg-blue-950 px-4 py-2 text-black'
                  onClick={handleUpload}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
