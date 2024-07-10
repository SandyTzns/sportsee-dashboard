import apiCall from "../data/apiCall";
import MockData from "../data/mockData";

let useDatafromAPI = "true";
const exportedAPI = useDatafromAPI == "true" ? apiCall : MockData;

export const getData = async (type, id) => {
  let data = [];

  switch (type) {
    case "USER_MAIN_DATA":
      data = await exportedAPI.getUser(id);
      break;
    case "USER_ACTIVITY":
      data = await exportedAPI.getActivity(id);
      break;
    case "USER_PERFORMANCE":
      data = await exportedAPI.getPerformance(id);
      break;
    case "USER_AVERAGE_SESSIONS":
      data = await exportedAPI.getAverageSessions(id);
      break;
  }
  return data;
};
