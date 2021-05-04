import { ActionTypes } from "../context/actionTypes";
import { fakeRequestInterviews } from "../fakeDB/fakeRequest";
import { useStore } from "./hooks";

export const useInterviews = () => {
  const { state, dispatch } = useStore();
  const fetchInterviews = () => {
    fakeRequestInterviews.then((res) => {
      dispatch({
        type: ActionTypes.FETCH_INTERVIEWS,
        payload: JSON.parse(res),
      });
    });
  };

  const selectInterview = (id: number) => {
    dispatch({ type: ActionTypes.SELECT_INTERVIEW, id });
  };

  return {
    selectedInterview: state.selectedInterview,
    interviews: state.applicants,
    selectInterview,
    fetchInterviews,
  };
};