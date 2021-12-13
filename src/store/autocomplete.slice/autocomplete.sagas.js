import {call, put, takeEvery} from 'redux-saga/effects'
import axios from "axios";
import {
    getLatLngFromLibrary,
    getSupposedCitiesError,
    getSupposedCitiesSuccess
} from "./autocomplete.slice";

function* workFetchForecastByLanLng(action) {
    try {

        const autoCompleteData = yield call(() => axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${action.payload.lat}&lon=${action.payload.lng}&exclude={part}&appid=68ed3e5f8b3f2f49f60d8fb52e794c62`));
        console.log(autoCompleteData.data);
        yield put(getSupposedCitiesSuccess(autoCompleteData.data));
    } catch (error) {
        yield put(getSupposedCitiesError(error));
    }

    }
function* autoCompleteSaga() {
    yield takeEvery(getLatLngFromLibrary, workFetchForecastByLanLng);
}

export default autoCompleteSaga;

/*
http://autocomplete.travelpayouts.com/places2?term=${action.payload}&locale=ru&types[]=airport*/
