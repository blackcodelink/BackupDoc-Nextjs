export default function PatientList({ onClose }) {
  return (
    <div className='relative w-96 rounded-lg bg-gradient-to-r from-violet-200/5 to-violet-200/10 p-8 shadow-lg'>
      {/* Close button in the top-right corner */}
      <button
        onClick={onClose}
        className='absolute right-4 top-4 text-violet-100/75 hover:text-gray-900'
      >
        ✕
      </button>

      {/* Modal content */}
      <h2 className='mb-6 text-xl font-semibold'>Patient Details</h2>
      <form>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
            First Name:
          </label>
          <input
            type='text'
            className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Last Name:
          </label>
          <input
            type='text'
            className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Date of Birth:
          </label>
          <input
            type='date'
            className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Mobile Number:
          </label>
          <input
            type='text'
            className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-6'>
          <label className='block text-sm font-medium text-gray-700'>
            Gender:
          </label>
          <select className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </div>

        {/* Buttons */}
        <div className='mt-6 flex justify-between'>
          <button
            type='button'
            onClick={onClose}
            className='rounded-lg bg-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-400'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700'
          >
            Create Patient
          </button>
        </div>
      </form>
    </div>
  )
}
