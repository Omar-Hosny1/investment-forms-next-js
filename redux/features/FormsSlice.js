import { addForm, removeForm } from "@/service/forms-service";
import { convertProxyToObject } from "@/utils/helper_functions";
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
  isApprovedFormsShowed: true,
};
const FormSlice = createSlice({
  name: "form_slice",
  initialState,
  reducers: {
    setFormsStatusAsApproved(state) {
      // Set the state to show approved forms
      return { ...state, isApprovedFormsShowed: true };
    },
    setFormsStatusAsPending(state) {
      // Set the state to show pending forms
      return { ...state, isApprovedFormsShowed: false };
    },
    onSaveDetailsFormData(state, action) {
      // Save details form data to the state
      return {
        ...state,
        detailsFormData: action.payload,
      };
    },
    onSaveInformationFormData(state, action) {
      // Save information form data to the state
      return {
        ...state,
        informationsFormData: action.payload,
      };
    },
    onSaveCertificationFormData(state, action) {
      // Save certification form data to the state
      return {
        ...state,
        certificationFormData: action.payload,
      };
    },
    goToDetailsFormData(state, _) {
      // Set the current filling form to details form
      return { ...state, currentFillingForm: 0 };
    },
    goToInformationsFormData(state, _) {
      // Set the current filling form to information form
      return { ...state, currentFillingForm: 1 };
    },
    // reset the forms to the default values
    resetForms() {
      return { ...initialState };
    },
    goToCertificationFormData(state, _) {
      // Set the current filling form to certification form
      return { ...state, currentFillingForm: 2 };
    },
    onSave(state, _) {
      // Save the form data and reset the state
      const newForm = {
        detailsFormData: convertProxyToObject(state.detailsFormData),
        certificationFormData: convertProxyToObject(
          state.certificationFormData
        ),
        date: new Date(),
      };

      addForm(newForm);
      return { ...initialState };
    },
    setForms(state, action) {
      // Set the forms data to the state
      return { ...state, forms: [...state.forms, ...action.payload] };
    },
    onRemoveForm(state, action) {
      // Remove a form from the state and update the forms list
      const forms = convertProxyToObject(state.forms);
      const newItems = forms.filter((e) => e[0] !== action.payload.id);
      removeForm(action.payload.id);
      return { ...state, forms: newItems };
    },
    onCancel(state, _) {
      // Reset the state to initial values, keeping the forms list
      return { ...initialState };
    },
  },
});

export const {
  setForms,
  resetForms,
  onRemoveForm,
  setFormsStatusAsApproved,
  setFormsStatusAsPending,
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
