import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Field, Form } from "../types";

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
  initialState: initialValues as Form,
  reducers: {
    updateInput: (state, action) => {
      state[action.payload.type as keyof Object] = action.payload.value;
    },
    resetForm: (state, action: PayloadAction<boolean>) => {
      return initialValues
    }
  }
});

export const { updateInput, resetForm } = FormSlice.actions;

export default FormSlice.reducer