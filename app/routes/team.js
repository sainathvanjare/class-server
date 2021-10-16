const express = require('express');
const router = express.Router();
const  teamController = require("./../../app/controllers/teamController");
const appConfig = require("./../../config/appConfig")


setRouter=(app)=>{

    let baseUrl = `${appConfig.apiVersion}/team`;

    // app.get(`${baseUrl}/getAllEvents`,meetingController.getAllEvents);
        
    app.post(`${baseUrl}/createTeam`,teamController.createTeam);
    
    // app.post(`${baseUrl}/deleteMeeting`,meetingController.deleteMeeting);

    // app.put(`${baseUrl}/updateMeeting`,meetingController.updateMeeting);

}

module.exports = {
    setRouter
}