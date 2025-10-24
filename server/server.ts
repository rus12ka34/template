import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
});

const PORT = process.env.PORT || 4444;

io.on('connection', () => {
    console.log('Сокет коннект');
});

server.listen(PORT, () => {
    console.log('Сервер запущен');
})