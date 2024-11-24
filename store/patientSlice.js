import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPatients = createAsyncThunk(
  'patients/fetchPatients',
  async () => {
    const response = await axios.get('http://localhost:8000/patient/patients') // Adjust URL if necessary
    return response.data
  }
)

export const addPatient = createAsyncThunk(
  'patients/addPatient',
  async (newPatient) => {
    const response = await axios.post(
      'http://localhost:8000/patient/patients',
      newPatient
    )
    return response.data
  }
)

const patientSlice = createSlice({
  name: 'patients',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatients.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.list = action.payload
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addPatient.fulfilled, (state, action) => {
        state.list.push(action.payload)
      })
  },
})

export default patientSlice.reducer
