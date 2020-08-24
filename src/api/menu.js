import axios from 'axios';
import config from '../configs/network';

const MENU_URL = `${config.SERVER}/menu`;

const createQuery = (businessID, groupID, userID) => {
    return `?groupId=${groupID}&userId=${userID}&businessId=${businessID}`
}

export default {

    getProducts: async (business, groupID, userID) => {
        let res = await axios.get(`${MENU_URL}/${createQuery(business, groupID, userID)}`);
        return res.data
    },

    getOrders: async (business, groupID, userID, status) => {
        let res = await axios.get(`${MENU_URL}/orders/${createQuery(business, groupID, userID)}&status=${status}`)
        return res.data
    },

    placeOrders: async (business, groupID, userID) => {
        let res = await axios.post(`${MENU_URL}/orders/place${createQuery(business, groupID, userID)}`)
        return res.data
    },

    addOrder: async (business, groupID, userID, productID, quantity) => {
        let order = { product: productID, quantity }
        let res = await axios.post(`${MENU_URL}/orders/${createQuery(business, groupID, userID)}`, order)
        return res.data
    },

    removeOrCancelOrder: async (business, groupID, userID, orderID) => {
        let res = await axios.delete(`${MENU_URL}/orders/${orderID}/${createQuery(business, groupID, userID)}`)
        return res.data
    },

    getBilling: async (business, groupID, userID) => {
        let res = await axios.get(`${MENU_URL}/bills/${createQuery(business, groupID, userID)}`);
        return res.data
    },

    checkBill: async (business, groupID, userID) => {
        let res = await axios.post(`${MENU_URL}/bills/${createQuery(business, groupID, userID)}`);
        return res.data
    },

    addUser: async (name) => {
        let res = await axios.post(`${config.SERVER}/users`, {name})
        return res.data
    },

    getUser: async (userId) => {
        let res = await axios.get(`${config.SERVER}/users/${userId}`)
        return res.data
    }

}