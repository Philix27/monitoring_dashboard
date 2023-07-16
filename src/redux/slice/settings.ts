import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ISettings {
  isSidebarOpen: boolean;
  isDarkTheme: boolean;
}

const initialState: ISettings = {
  isSidebarOpen: true,
  isDarkTheme: true,
};

export const Settings = createSlice({
  name: "SETTINGS",
  initialState,
  reducers: {
    sidebar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    theme: (state, action: PayloadAction<boolean>) => {
      state.isDarkTheme = !action.payload;
    },
  },
});

export const SettingsActions = Settings.actions;
const SettingsReducer = Settings.actions;
export default Settings.reducer;
