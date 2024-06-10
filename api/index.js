const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Load the protobuf file
const tasksProto = grpc.loadPackageDefinition(
  protoLoader.loadSync('./tasks.proto')
);

//adiciojar atributo data de finalização
const tasks = [
  { id: '1', title: 'Tarefa 1', content: 'Conteudo 1' },
  { id: '2', title: 'Tarefa 2', content: 'Conteudo 2' },
];

// Define the service methods
const server = new grpc.Server();

server.addService(tasksProto.TaskService.service, {
  list: (_, callback) => {
    callback(null, { tasks: tasks });
  },

  add: (call, callback) => {
    const task = call.request;
    tasks.push(task);
    callback(null, task);
  },

  get: (call, callback) => {
    const taskId = call.request.id;
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      callback(null, task);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: 'Tarefa não encontrada!',
      });
    }
  },

  update: (call, callback) => {
    const updatedTask = call.request;
    const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id);
    if (taskIndex !== -1) {
      tasks[taskIndex] = updatedTask;
      callback(null, updatedTask);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: 'Tarefa não encontrada!',
      });
    }
  },

  delete: (call, callback) => {
    const taskId = call.request.id;
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      callback(null, {});
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: 'Tarefa não encontrada!',
      });
    }
  },
});

// Start the gRPC server
server.bindAsync(
  '127.0.0.1:3000',
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error('Falha na ligação do servidor:', err);
    } else {
      console.log('Servidor vinculado à porta:', port);
    }
  }
);
