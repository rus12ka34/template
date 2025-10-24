import type { SocketOptions } from 'socket.io-client';
import { io } from 'socket.io-client';

const options: SocketOptions = {
    ackTimeout: 10000,
};

const socket = io("http://localhost:4444", options);

export default socket;