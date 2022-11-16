import { IOrder } from "../interface/orders";
import { ordersList } from "../../../sample_data";

const getAll = (): IOrder[] => {
    /* fetch data here by connecting the Database */
    return ordersList;
}

const getOrderById = (orderId: string): IOrder | undefined => {
    /* fetch data here by connecting the Database */
    // OrderId is unique so find using here otherwise can use filter
    return ordersList.find((order: IOrder) => order.id === orderId);
}

const insertOrder = (orderDetails: IOrder) => {
    /* fetch data here by connecting the Database */
    return ordersList.push(orderDetails);
}


export { getAll, getOrderById, insertOrder }
