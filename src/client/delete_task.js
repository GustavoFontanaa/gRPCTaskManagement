const client = require('./client-grpc');

const taskId = { id: '1' };

client.delete(taskId, (error, response) => {
  if (error) {
    console.error('Erro ao deletar tarefa:', error.details || error.message);
  } else {
    console.log(`Tarefa com ID ${taskId.id} deletada com sucesso.`);
  }
});
