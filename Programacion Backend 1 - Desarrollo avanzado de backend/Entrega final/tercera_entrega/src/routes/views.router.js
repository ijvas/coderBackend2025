import express  from "express";


const viewsRouter = express.Router();

viewsRouter.get('/' , (req, res) => {
    res.render('home');
})

viewsRouter.get('/realTimeProducts', (req , res) => {
    res.render('realTimeProducts');
})

export default viewsRouter;