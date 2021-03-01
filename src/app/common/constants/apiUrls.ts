import { environment } from '../../../environments/environment';

const BASE_API_URL = environment.apiUrl;

export const apiUrls = {
  BASE_API_URL,
  AUTH: `${BASE_API_URL}/login`,
  GET_COURSES: `${BASE_API_URL}/courses/`,
};