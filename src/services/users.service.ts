import { IUser } from "../interface/users";

const getAll = async (): Promise<IUser[]> => {
    /* fetch data here by connecting the Database */
    /* Currently I'm using external API to fetch data */
    const usersListResponse: Response = await fetch("https://run.mocky.io/v3/01deeac6-91f7-489c-a436-c77f5df9f8f6").catch((e)=> {
        throw new Error(e)
    });
    return usersListResponse.json();
}

const getById = async (userId: string): Promise<IUser> => {
    /* fetch data here */
    //e9a67193-9463-4775-bcae-c3ec5fc11af5

    const userResponse: Response = await fetch(`https://run.mocky.io/v3/${userId}`).catch((e)=> {
       throw new Error(e)
    });
    return userResponse.json();
}

export { getAll, getById }
