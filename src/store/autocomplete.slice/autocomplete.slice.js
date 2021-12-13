import {createSlice} from "@reduxjs/toolkit";


const autocompleteSlice = createSlice({
        name: "autoComplete",
        initialState: {
            cities: [],
            status: "",
            LatLng: "",

        },
        reducers: {
            getLatLngFromLibrary(state, action) {
                state.LatLng = action.payload;
            },
            getSupposedCitiesFetch(state) {
                state.status = "loading";
            },
            getSupposedCitiesSuccess(state, action) {
                state.status = "success";
                state.cities = action.payload;
            },
            getSupposedCitiesError(state, action) {
                state.status = "error";
                console.log(action.payload);
            }

        }
    }
)

export const {getLatLngFromLibrary,getSupposedCitiesFetch, getSupposedCitiesSuccess, getSupposedCitiesError} = autocompleteSlice.actions;
export default autocompleteSlice.reducer;
