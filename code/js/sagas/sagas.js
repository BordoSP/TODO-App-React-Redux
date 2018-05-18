import {delay} from "redux-saga"
import {takeEvery, put} from "redux-saga/effects"
import {LoadDataFromFile} from "../actions/index"


export default function* loadDataWatcher() {
    yield takeEvery("LOAD_DATA", loadDataJson);
}


export function* loadDataJson(action) {
    var jsonFile  = require("../../../src/myOwnData.json");
    yield put({type: "LOAD_DATA_DELAY_SWITCH"});
    yield delay(3000);
    yield put({type: "LOAD_DATA_DELAY", payload: jsonFile});
    yield put({type: "LOAD_DATA_DELAY_SWITCH"});
    
}