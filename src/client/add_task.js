const client = require('./client-grpc');

const newTask = {
  id: '3',
  title: 'Nova Tarefa',
  content: 'novo content',
};

client.add(newTask, (error, addedTask) => {
  if (!error) {
    console.log('Nova tarefa adicionada:');
    console.log(addedTask);
  } else {
    console.error('Erro ao adicionar nova tarefa:', error);
  }
});
