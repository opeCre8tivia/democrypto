
export const API_URL = "http://localhost:3000/api/"

export const AdminAuthHeaders = (): string => {
  let token = localStorage.getItem("_admin")
  return token ? token : ""
}
