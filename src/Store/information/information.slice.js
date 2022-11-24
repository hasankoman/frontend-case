import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInformation: {},
  educationInformation: {},
  certificateInformation: {},
  specializationAreas: [],
  categoriesPrices: {},
  about: {},
  contract: {},
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
    setEducationInformation: (state, action) => {
      state.educationInformation = action.payload;
    },
    setCertificateInformation: (state, action) => {
      state.certificateInformation = action.payload;
    },
    setSpecializationAreas: (state, action) => {
      state.specializationAreas = action.payload;
    },
    setCategoriesPrices: (state, action) => {
      state.categoriesPrices = action.payload;
    },
    setAbout: (state, action) => {
      state.about = action.payload;
    },
    setContract: (state, action) => {
      state.contract = action.payload;
    },
    setFormValidations: (state, action) => {
      state.formValidations = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPersonalInformation,
  setEducationInformation,
  setSpecializationAreas,
  setCategoriesPrices,
  setAbout,
  formValidations,
  setFormValidations,
  certificateInformation,
  setCertificateInformation,
  setContract,
  contract,
} = informationSlice.actions;

export default informationSlice.reducer;
