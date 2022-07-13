const axiosServerConfig = {
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API_SSL}://${process.env.NEXT_PUBLIC_BACKEND_API_HOST}:${process.env.NEXT_PUBLIC_BACKEND_API_PORT}/${process.env.NEXT_PUBLIC_BACKEND_API_VERSION}`,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};
const axiosClientConfig = {
    baseURL: "/api/",
    withCredentials: true,

    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

export { axiosClientConfig, axiosServerConfig };
