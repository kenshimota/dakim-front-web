import { useEffect } from "react";
import useGetAPI from "./useGetApi";

const useHasAdmin = () => {
  const { response, loading, request } = useGetAPI({ url: "/auth/has-admin" });

  const onSearch = () => request({});

  useEffect(() => {
    onSearch();
  }, []);

  return {
    hasAdmin: response === null ? null : response.hasAdmin,
    loading,
    reload: onSearch,
  };
};

export default useHasAdmin;
