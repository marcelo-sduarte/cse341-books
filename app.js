import Express from "express";



const app = Express();
app.use(Express.json());
app.get('/', (req, res) => {
 return res.status(200).json({ message: 'Server is running' });
});

export default app;