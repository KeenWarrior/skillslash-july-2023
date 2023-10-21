import Dexie from "dexie";

const db = new Dexie("SSTask");

db.version(1).stores({
    todos : "++id, detail, completed"
});

db.open();

export default db;