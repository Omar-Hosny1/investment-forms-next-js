import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentForm: 0,
  detailsFormData: {},
  informationsFormData: {},
  certificationFormData: {},
  forms: [],
};
const FormSlice = createSlice({
  name: "form_slice",
  initialState,
  reducers: {
    goToDetailsFormData(state, _) {
      return { ...state, currentForm: 0 };
    },
    goToInformationsFormData(state, _) {
      return { ...state, currentForm: 1 };
    },
    goToCertificationFormData(state, _) {
      return { ...state, currentForm: 2 };
    },
    onSave(state, action) {},
    onCancel(state, action) {},
  },
});
export const {
  goToCertificationFormData,
  goToDetailsFormData,
  goToInformationsFormData,
} = FormSlice.actions;

export default FormSlice.reducer;
