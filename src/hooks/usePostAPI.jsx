import getApiUrl from "../utils/getApi";
import usePostAxios from "./usePostAxios";

const usePostAPI = ({ url, headers = {} }) => {
  const hostname = getApiUrl();
  url = `${hostname}${url}`;
  return usePostAxios({ url, headers });
};

export default usePostAPI;
