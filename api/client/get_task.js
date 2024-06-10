const client = require('./client-grpc');

const taskId = { id: '2' };

client.get(taskId, (error, task) => {
    if (error) {
        console.error('Erro ao obter tarefa:', error.details || error.message);
    } else {
        console.log('Tarefa obtida com sucesso:');
        console.log(task);
    }
});
