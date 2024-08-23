import { DeveloperDetail } from "./types";
import { API_URL } from "./constants";
import { axiosConfig } from "./axios";

export const getAdvocateDetails = async (id: string): Promise<DeveloperDetail> =>  {
    const response = await axiosConfig.get(`${API_URL}/advocates/${id}`);
    return response.data;
};

export const getAdvocates = async (searchTerm?: string): Promise<DeveloperDetail[]> => {
    // Format url to make the query
    const endpoint = searchTerm ? `${API_URL}/advocates?query=${searchTerm}` : `${API_URL}/advocates`;

    const response = await axiosConfig.get(endpoint);
    return response.data;
};