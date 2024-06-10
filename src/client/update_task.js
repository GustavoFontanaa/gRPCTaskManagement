const client = require('./client-grpc');

const updatedTask = {
  id: '1',
  title: 'Tarefa Atualizada',
  content: 'Conteúdo da tarefa atualizada',
};

client.update(updatedTask, (error, updatedTask) => {
  if (error) {
    console.error('Erro ao atualizar tarefa:', error.details || error.message);
  } else {
    console.log('Tarefa atualizada com sucesso:');
    console.log(updatedTask);
  }
});
