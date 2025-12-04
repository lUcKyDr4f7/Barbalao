import { Banners0 } from './Banners0';
import { Banners1 } from './Banners1';
import axios from 'axios';
async function ABanners() {
  try {
    const response = await axios.get('https://back-end-barbalao-upgw.onrender.com/api/getProducts');
    let Banners = response.data;
  } catch (error) {
    
  }
}
/* export const AllBanners = [
  ...Banners0,
  ...Banners1.map((p, index) => ({ ...p, id: Banners0.length + index }))
]; */
export const AllBanners = [
];