const client = require('./client-grpc');

const newTask = {
  title: 'Nova Tarefa',
  content: 'Conteudo da tarefa',
  dueDate: '2024-06-25',
  completionDate: '',
  priority: 'Baixa',
  status: 'Pendente',
};

client.add(newTask, (error, addedTask) => {
  if (!error) {
    console.log('Nova tarefa adicionada:');
    console.log(addedTask);
  } else {
    console.error('Erro ao adicionar nova tarefa:', error);
  }
});
