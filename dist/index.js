"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pubSubManager_1 = require("./utils/pubSubManager");
setInterval(() => {
    pubSubManager_1.PubSubManager.getInstance().userSubscribe("banti", "APPL");
}, 5000);
pubSubManager_1.PubSubManager.getInstance().userUnSubscribe("banti", "APPL");
