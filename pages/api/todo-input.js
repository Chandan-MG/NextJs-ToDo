import { MongoClient } from 'mongodb';

async function inputHandler(req, res) {
    if (req.method === 'POST') {
        try {
            const data = req.body;

            const client = await MongoClient.connect('mongodb+srv://todo:todolist@cluster0.yoyirzr.mongodb.net/todo-data?retryWrites=true&w=majority&appName=Cluster0');
            const db = client.db();

            const todoCollection = db.collection('todo-input');

            const result = await todoCollection.insertOne(data);

            console.log(result);

            client.close();
            res.status(201).json({ message: 'ToDo data inserted!' });
        } catch (error) {
            console.error('Error inserting todo data:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

export default inputHandler;
