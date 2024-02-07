// export const baseURL = 'http://localhost:8080'
export const baseURL = `http://${
  process.env.BACKEND_HOST ? process.env.BACKEND_HOST : "localhost"
}:8080`;
