import io from 'socket.io-client';
import config from '../configs/network';

let socket;

export const initiateSocket = (room) => {
    socket = io(config.SERVER);
    if (socket && room) {
        socket.emit('join-room', room);
    }
}

export const disconnectSocket = () => {
    console.log('Disconnecting socket...');
    if(socket) socket.disconnect();
}

export const subscribeToAddOrder= (cb) => {
    if (!socket) return true;
    socket.on('add-order', (order) => {
        return cb(null, order);
    });
}

export const subscribeToPlacedOrder = (cb) => {
    if (!socket) return true;
    socket.on('place-order', (orders) => {
        return cb(null, orders);
    });
}

export const subscribeToRemoveOrder = (cb) => {
    if (!socket) return true;
    socket.on('remove-order', () => {
        return cb(null);
    });
}

export const subscribeToCancelOrder = (cb) => {
    if (!socket) return true;
    socket.on('cancel-order', () => {
        return cb(null);
    });
}

export const subscribeToUpdateStatusOrder = (cb) => {
    if (!socket) return true;
    socket.on('update-status-order', (order) => {
        return cb(null, order);
    });
}

export const subscribeToCheckBill = (cb) => {
    if (!socket) return true;
    socket.on('check-bill', (billing) => {
        return cb(null, billing);
    });
}