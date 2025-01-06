import getEnv from "./getEnv";

const getApiUrl = () => {
  const apiUrl = getEnv("VITE_HOSTNAME_API");

  if (!apiUrl) {
    throw new Error("VITE_HOSTNAME_API environment variable not found.");
  }

  return apiUrl;
};

export default getApiUrl;
