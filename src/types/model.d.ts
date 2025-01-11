

export { };
declare global {
    interface IBackendRes<T> {
        error?: string | string[];
        message: string | string[];
        status: number | string;
        data?: T;
    }

    interface IRegister {
        email: string;
        username: string;
        createdAt: string;
    }

    interface IUserLogin {
        account: {
            id: number,
            email: string,
            name: string,
            avatar: any,
            phone: string,
            role: string,
            customer: any
        };
        access_token: string
    }

    interface IBooks {
        id: number,
        thumbnail: string,
        mainText: string,
        author: string,
        price: number,
        sold: number,
        quantity: number,
        createdAt: string,
        updatedAt: string,
        createdBy: string,
        updatedBy: string,
        category: {
            id: number,
            name: string
        },
        bookImages: string[]

    }
}
