import axios from "axios"
import * as types from "./actionType"

const getChartData = () => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST })
  return axios.get("https://rich-erin-sturgeon-suit.cyclic.app/project/dashboard").then((r) => {
    dispatch({ type: types.GET_DATA_SUCCESS, payload: r.data })

  }).catch((e) => {
    dispatch({ type: types.GET_DATA_FAILURE })
  })
}


export {getChartData}