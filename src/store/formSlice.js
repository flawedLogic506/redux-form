import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  phone: '',
  jobTitle: '',
  reason: ''
}

export const FormSlice = createSlice({
  name: 'form',
  initialState: initialValues,
  reducers: {
    updateInput: (state, action) => {
      state[action.payload.type] = action.payload.value;
    },
    resetForm: (state, action) => {
      return initialValues
    }
  }
});

export const { updateInput, resetForm } = FormSlice.actions;

export default FormSlice.reducer