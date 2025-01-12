import axios from "@/src/utils/axios.customize"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Platform } from "react-native"


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

export const getBookByIdAPI = (id: string) => {
    const url = `/api/v1/books/${id}`
    return axios.get<IBackendRes<IBook>>(url)
}


export const getURLBaseBackend = () => {
    const backend = Platform.OS === 'android'
        ? process.env.EXPO_PUBLIC_ANDROID_API_URL
        : process.env.EXPO_PUBLIC_IOS_API_URL
    return backend;
}

export const getCategoryAPI = () => {
    const url = `/api/v1/categories`
    return axios.get<IBackendRes<ICategories[]>>(url)
}

export const currencyFormatter = (value: any) => {
    const options = {
        significantDigits: 2,
        thousandsSeparator: '.',
        decimalSeparator: ',',
        symbol: 'đ'
    }
    if (typeof value !== 'number') value = 0.0
    value = value.toFixed(options.significantDigits)
    const [currency, decimal] = value.split('.')
    return `${currency.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        options.thousandsSeparator
    )} ${options.symbol}`
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
