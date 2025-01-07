import axios from "@/src/utils/axios.customize"


export const registerAPI = (username: string, email: string, password: string, phone: string) => {

    const url = `/api/v1/auth/register`
    return axios.post<IBackendRes<IRegister>>(url, { username, email, password, phone })
}