const mongoose = require('mongoose')
const shortid = require('short-id');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const passwordLib = require('./../libs/generatePasswordLib');
const token = require('../libs/tokenLib');
const nodeMailer = require('../libs/mailTriggered');
const setRouter = require('./../routes/user');
const express = require('express')
const app = express();

const UserModel = mongoose.model('User');
const AuthModel = mongoose.model('Auth');
const TeamModel = mongoose.model('Team');

let createTeam=(req,res)=>{
    let newTeam = new TeamModel({
        teamId :req.body.teamId,
        teamName:req.body.teamName,
        teamList:req.body.teamList
    });
    newTeam.save((err,teamDetails)=>{
        if(err){
            console.log(err);
            logger.error(err.message,'userrController:addMeeting()',7);
            apiResponse=response.generate(true,'failed to create team',500,null)
            res.send(apiResponse)
        }
        else{
            let apiResponse = response.generate(false, 'Team  created successfully', 200, teamDetails);
            res.send(apiResponse);
        }

    });
}


module.exports={
    createTeam: createTeam

}