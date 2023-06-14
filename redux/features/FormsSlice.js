"use client";
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
  isApprovedFormsShowed: false,
};
const FormSlice = createSlice({
  name: "form_slice",
  initialState,
  reducers: {
    setFormsStatusAsApproved(state) {
      return { ...state, isApprovedFormsShowed: true };
    },
    setFormsStatusAsPending(state) {
      return { ...state, isApprovedFormsShowed: false };
    },
    onSaveDetailsFormData(state, action) {
      return {
        ...state,
        detailsFormData: action.payload,
      };
    },
    onSaveInformationFormData(state, action) {
      return {
        ...state,
        informationsFormData: action.payload,
      };
    },
    onSaveCertificationFormData(state, action) {
      return {
        ...state,
        certificationFormData: action.payload,
      };
    },
    goToDetailsFormData(state, _) {
      return { ...state, currentFillingForm: 0 };
    },
    goToInformationsFormData(state, _) {
      return { ...state, currentFillingForm: 1 };
    },
    goToCertificationFormData(state, _) {
      return { ...state, currentFillingForm: 2 };
    },
    onSave(state, action) {
      const newForm = {
        informationsFormData: convertProxyToObject(state.informationsFormData),
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
      return { ...state, forms: [...state.forms, ...action.payload] };
    },
    onRemoveForm(state, action) {
      const forms = convertProxyToObject(state.forms);
      for (let i = 0; i < forms.length; i++) {
        const item = forms[i];
        if (item[0] === action.payload.id) {
          delete forms[i];
          break;
        }
      }
      return { ...state, forms: forms };
      // removeForm(action.payload);
    },
    onCancel(state, _) {
      return { ...initialState, forms: state.forms };
    },
  },
});
export const {
  setForms,
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
