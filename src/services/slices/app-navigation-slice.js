import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  mainPage: true,
  rulesButton: true,
  newsPage: false,
  shelterPage: false,
  dZonePage: false,
  volunteeringPage: false,
  rulesPage: false
};

const appNavigationSlice = createSlice({
  name: 'appNavigation',
  initialState,
  reducers: {
    openMainPage() {
      return { 
       ...initialState
      }
     },
    openNewsPage() {
     return { 
      ...initialState, 
      newsPage: true,
      mainPage: false,
      rulesButton: false
     }
    },
    openDZonePage() {
      return { 
       ...initialState, 
       dZonePage: true,
       mainPage: false,
       rulesButton: false
      }
     },
     openShelterPage() {
      return { 
       ...initialState, 
       shelterPage: true,
       mainPage: false,
       rulesButton: false
      }
     },
     openVolunteeringPage() {
      return { 
       ...initialState, 
       volunteeringPage: true,
       mainPage: false,
       rulesButton: false
      }
     },
     openRulesPage() {
      return { 
       ...initialState, 
       rulesPage: true,
       mainPage: false,
       rulesButton: false
      }
     }
  },
})

export default appNavigationSlice.reducer;
export const { openNewsPage, openDZonePage, openMainPage, openRulesPage, openShelterPage, openVolunteeringPage } = appNavigationSlice.actions;
