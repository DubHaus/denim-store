const isProd = process.env.NODE_ENV === 'production';
const SERVER_BASE_URL = isProd ? 'https://denim-store.herokuapp.com' : 'http://localhost:3000';

export {
  SERVER_BASE_URL
}