const client = require('./client-grpc');

client.list({}, (error, tasks) => {
  if (!error) {
    console.log('Lista de tarefas:');
    console.log(tasks);
  } else {
    console.error('Erro ao listar tarefas:', error);
  }
});
