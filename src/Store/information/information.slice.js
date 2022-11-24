import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInformation: {},
  educationInformation: {},
  certificateInformation: {},
  specializationAreas: [],
  categoriesPrices: {},
  about: {},
  formValidations: {
    personalInformationValidation: false,
    educationInformationValidation: false,
    certificateInformationValidation: false,
    specializationAreasValidation: false,
    categoriesPricesValidation: false,
    aboutValidation: false,
    contractValidation: false,
  },
};

export const informationSlice = createSlice({
  name: "information",
  initialState,
  reducers: {
    setPersonalInformation: (state, action) => {
      state.personalInformation = action.payload;
    },
    updatePersonalInformation: (state, action) => {},
    setEducationInformation: (state, action) => {
      state.educationInformation = action.payload;
    },
    updateEducationInformation: (state, action) => {},
    setCertificateInformation: (state, action) => {
      state.certificateInformation = action.payload;
    },
    setSpecializationAreas: (state, action) => {
      state.specializationAreas = action.payload;
    },
    updateSpecializationAreas: (state, action) => {},
    setCategoriesPrices: (state, action) => {
      state.categoriesPrices = action.payload;
    },
    updateCategoriesPrices: (state, action) => {},

    setAbout: (state, action) => {
      state.about = action.payload;
    },
    updateAbout: (state, action) => {},
    setFormValidations: (state, action) => {
      console.log(action.payload);
      state.formValidations = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPersonalInformation,
  updatePersonalInformation,
  setEducationInformation,
  updateEducationInformation,
  setSpecializationAreas,
  updateSpecializationAreas,
  setCategoriesPrices,
  updateCategoriesPrices,
  setAbout,
  updateAbout,
  formValidations,
  setFormValidations,
  certificateInformation,
  setCertificateInformation,
} = informationSlice.actions;

export default informationSlice.reducer;
