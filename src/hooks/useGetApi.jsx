import useGetAxios from "./useGetAxios";
import getApiUrl from "../utils/getApi";
const useGetAPI = ({ url }) => {
  const hostname = getApiUrl();
  url = `${hostname}${url}`;
  return useGetAxios({ url });
};

export default useGetAPI;
