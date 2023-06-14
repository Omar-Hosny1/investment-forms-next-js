import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // shows the current form that the user filling.
  currentFillingForm: 0,
  // The Details Form Data Saved Here
  detailsFormData: {},
  // The Information Form Data Saved Here
  informationsFormData: {},
  // The Certification Form Data Saved Here
  certificationFormData: {},
  // used to shows the all forms in the table grid
  forms: [],
};
const FormSlice = createSlice({
  name: "form_slice",
  initialState,
  reducers: {
    onSaveDetailsFormData(state, action) {
      console.log("CALLL");
      return { ...state, detailsFormData: action.payload };
    },
    onSaveInformationFormData(state, action) {
      console.log("onSaveInformationFormData EXC");
      console.log(action.payload);
      return { ...state, informationsFormData: action.payload };
    },
    onSaveCertificationFormData(state, action) {
      return { ...state, certificationFormData: action.payload };
    },
    goToDetailsFormData(state, _) {
      return { ...state, currentFillingForm: 0 };
    },
    goToInformationsFormData(state, _) {
      console.log(JSON.stringify({ ...state, currentFillingForm: 1 }));
      return { ...state, currentFillingForm: 1 };
    },
    goToCertificationFormData(state, _) {
      console.log("goToCertificationFormData EXC");
      return { ...state, currentFillingForm: 2 };
    },
    onSave(state, _) {
      console.log(JSON.stringify("...state.informationsFormData"));
      console.log(JSON.stringify({ ...state.informationsFormData }));
      console.log(JSON.stringify("{ ...state.detailsFormData }"));
      console.log(JSON.stringify({ ...state.detailsFormData }));
      console.log(JSON.stringify(`...state.certificationFormData`));
      console.log(JSON.stringify({ ...state.certificationFormData }));
    },
    onCancel(state, _) {
      return { ...initialState, forms: state.forms };
    },
  },
});
export const {
  goToCertificationFormData,
  goToDetailsFormData,
  goToInformationsFormData,
  onCancel,
  onSave,
  onSaveCertificationFormData,
  onSaveDetailsFormData,
  onSaveInformationFormData,
} = FormSlice.actions;

export default FormSlice.reducer;
