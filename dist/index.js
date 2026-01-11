"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pubSubManager_1 = require("./utils/pubSubManager");
setInterval(() => {
    pubSubManager_1.PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000);
