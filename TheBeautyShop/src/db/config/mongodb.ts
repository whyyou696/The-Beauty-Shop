const { MongoClient, ServerApiVersion } = require("mongodb");
const uri="mongodb+srv://wahyuramadhan:uuCv6EquRhCNaiPB@gc01.mihudax.mongodb.net/";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

export const database = client.db("gc02")