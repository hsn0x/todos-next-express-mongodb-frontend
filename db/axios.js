import Axios from "axios";
import { axiosClientConfig, axiosServerConfig } from "../config/";

const axiosClient = Axios.create(axiosClientConfig);
const axiosServer = Axios.create(axiosServerConfig);

export { axiosClient, axiosServer };
