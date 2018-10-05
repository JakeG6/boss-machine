const express = require('express');
const apiRouter = express.Router();

import {
    createMeeting, 
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
     } from './db.js';

//MINION ROUTES
apiRouter.get('/minions', (req, res, next) => {
    res.status(200).send(getAllFromDatabase('minions'));  
});

apiRouter.post('/minions', (req, res, next) => {
    console.log(req.body);
    addToDatabase('minions', {name: minionName, title: minionTitle, salary: minionSalary});
    res.send(minionArray);  
});

apiRouter.get('/minions/:minionId', (req, res, next) => {
    const returnedMinion = getFromDatabaseById('minions', req.params.minionId);
    res.send(returnedMinion);  
});

apiRouter.put('/minions/:minionId', (req, res, next) => {
    updateInstanceInDatabase('minions', {id: req.params.minionId, name: minionName, title: minionTitle, salary: minionSalary});

});

apiRouter.delete('/minions/:minionId', (req, res, next) => {
    deleteFromDatabasebyId('minions', req.params.minionId);
});

//IDEAS ROUTES
apiRouter.get('/ideas', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
});

apiRouter.post('/ideas', (req, res, next) => {
    console.log(req.body);
    addToDatabase('ideas', {name: ideaName, description: ideaDescription, numWeeks: ideaNumWeeks, weeklyRevenue: ideaWeeklyRevenue});  

});

apiRouter.get('/ideas/:ideaId', (req, res, next) => {
    const returnedIdea = getFromDatabaseById('ideas', req.params.ideaId);
    res.send(returnedIdea);  
});

apiRouter.put('/ideas/:ideaId', (req, res, next) => {
    updateInstanceInDatabase('ideas', {id: req.params.ideaId, name: ideaName, description: ideaDescription, numWeeks: ideaNumWeeks, weeklyRevenue: ideaWeeklyRevenue});
});

apiRouter.delete('/ideas/:ideaId', (req, res, next) => {
    deleteFromDatabasebyId('ideas', req.params.ideaId);
});

//MEETINGS
apiRouter.get('/meetings', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
});

apiRouter.post('/meetings', (req, res, next) => {
    addToDatabase('meetings', createMeeting());
});

module.exports = apiRouter;