import axios from "@/src/utils/axios.customize"
import AsyncStorage from "@react-native-async-storage/async-storage"


export const registerAPI = (username: string, email: string, password: string, phone: string) => {

    const url = `/api/v1/auth/register`
    return axios.post<IBackendRes<IRegister>>(url, { username, email, password, phone })
}

export const loginAPI = (email: string, password: string) => {

    const url = `/api/v1/auth/login`
    return axios.post<IBackendRes<IUserLogin>>(url, { username: email, password }, {
        headers: {
            'Authorization': ''
        }
    })
}

export const getAccountAPI = () => {

    const url = `/api/v1/auth/account`
    return axios.get<IBackendRes<IUserLogin>>(url)
}

export const getBooksAPI = (refAPI: string) => {
    const url = `/api/v1/books?page=1&size=10${refAPI}`
    return axios.get<IBackendRes<any>>(url)
}

export const printAsyncStorage = () => {
    AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys!, (error, stores) => {
            let asyncStorage: any = {}
            stores?.map((result, i, store) => {
                asyncStorage[store[i][0]] = store[i][1]
            });
            console.log(JSON.stringify(asyncStorage, null, 2));
        });
    });
};
