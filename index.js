const config = require("config");
const sdk = require("matrix-js-sdk");
const CommandHandler = require("./src/CommandHandler");
const UnbanHandler = require("./src/UnbanHandler");
const matrixUtils = require("matrix-js-snippets");
const LogService = require("matrix-js-snippets").LogService

LogService.configure(config["logging"]);

const client = sdk.createClient({
    baseUrl: config['homeserverUrl'],
    accessToken: config['accessToken'],
    userId: config['userId']
});

matrixUtils.autoAcceptInvites(client);
CommandHandler.start(client);
UnbanHandler.start(client);

client.startClient({initialSyncLimit: 3});