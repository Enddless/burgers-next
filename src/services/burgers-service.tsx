import { TBurgers } from '@/types/types';
import axios from 'axios';

const API_URL = 'https://testologia.site/burgers-data?extra=black';

class BurgersService {
  async getBurgersData() {
    const { data } = await axios.get<TBurgers[]>(`${API_URL}`);
    return data;
  }
}

const burgersService = new BurgersService();
export default burgersService;
