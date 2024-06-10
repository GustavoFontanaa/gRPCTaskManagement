const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = '../tasks.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const tasksProto = grpc.loadPackageDefinition(packageDefinition);
const TaskService = tasksProto.TaskService;

const client = new TaskService('localhost:3000', grpc.credentials.createInsecure());

module.exports = client;
