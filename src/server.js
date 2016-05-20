import Server from 'socket.io';

export default function startServer(store) {
  const io = new Server().attach(8090);

  store.subscribe(
    () => {
    	io.emit('state', JSON.stringify(store.getState()));
    }
  );

  io.on('connection', (socket) => {
  	//console.log(JSON.stringify(store.getState().toJS()));
    socket.emit('state', JSON.stringify(store.getState()));
    socket.on('action', store.dispatch.bind(store));
  });
}
