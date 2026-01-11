import { PubSubManager } from "./utils/pubSubManager";

setInterval(() => {
    PubSubManager.getInstance().userSubscribe("banti", "APPL");
}, 5000)

PubSubManager.getInstance().userUnSubscribe("banti" , "APPL")