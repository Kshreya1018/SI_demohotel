import axios from 'axios';

const API_BASE_URL = 'https://demohotelsapi.pythonanywhere.com/hotels/';

// Create an axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiService = {
  /**
   * Fetch all hotels with search, filter, sort, and pagination parameters
   * @param {Object} params
   */
  async getHotels(params = {}) {
    try {
      // API expects query params directly.
      const response = await apiClient.get('', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching hotels:', error);
      throw error;
    }
  },

  /**
   * Fetch a single hotel by ID
   * @param {number|string} id
   */
  async getHotelById(id) {
    try {
      const response = await apiClient.get(`${id}/`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching hotel with ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Create a new hotel
   * @param {Object} hotelData
   */
  async createHotel(hotelData) {
    try {
      const response = await apiClient.post('', hotelData);
      return response.data;
    } catch (error) {
      console.error('Error creating hotel:', error);
      throw error;
    }
  },

  /**
   * Update an existing hotel (PUT)
   * @param {number|string} id
   * @param {Object} hotelData
   */
  async updateHotel(id, hotelData) {
    try {
      const response = await apiClient.put(`${id}/`, hotelData);
      return response.data;
    } catch (error) {
      console.error(`Error updating hotel with ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Delete a hotel by ID
   * @param {number|string} id
   */
  async deleteHotel(id) {
    try {
      const response = await apiClient.delete(`${id}/`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting hotel with ID ${id}:`, error);
      throw error;
    }
  },
};

export default apiService;
