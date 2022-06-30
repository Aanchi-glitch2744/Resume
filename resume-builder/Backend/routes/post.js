const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const path = require('path')
// const requireLogin = require('../middleware/requireLogin')
// const { route } = require('./auth')
const User = mongoose.model("User")

router.get('/allDetails',(req,res)=>{
    User.find()
    .then(details=>{
        res.json({details})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.put('/editDetails/:email', (req, res)=>{
    User.updateOne({email:req.params.email},{$set:req.body})
    .then(details=>{
        res.json({details})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.post('/addDetails',(req,res)=>{
    const {Name,
        Title,
        linkedin,
        github,
        email,
        phone,
        company,
        certificateLink,
        location,
        startDate,
        endDate,
        workExperience,
        projectTitle,
        overview,
        deploymentLink,
        githubLink,
        courseName,
        college,
        startDateCollege,
        endDateCollege,
        achievement1,
        achievement2,
        achievement3,
        achievement4,
        skill1,
        skill2,
        skill3,
        skill4,
        language1,
        language2,
        language3,
        language4,
        professionalSumamry,
        resumeType} = req.body
    if(!Name || !email || !phone){
        return res.status(422).json({error:"Please add all the mandatory fields"})
    }
    // User.findOne({email:email})
    // .then(savedUser=>{
    //     if(savedUser){
    //         return res.status(422).json({error:"User with given email already exists"})
    //     }
    const data = new User({
        Name,
        Title,
        linkedin,
        github,
        email,
        phone,
        company,
        certificateLink,
        location,
        startDate,
        endDate,
        workExperience,
        projectTitle,
        overview,
        deploymentLink,
        githubLink,
        courseName,
        college,
        startDateCollege,
        endDateCollege,
        achievement1,
        achievement2,
        achievement3,
        achievement4,
        skill1,
        skill2,
        skill3,
        skill4,
        language1,
        language2,
        language3,
        language4,
        professionalSumamry,
        resumeType
    })
    // {
    //     "Name": "",
    //     "Title": "",
    //     "linkedin": "",
    //     "github": "",
    //     "email": "",
    //     "phone": "",
    //     "company": "",
    //     "certificateLink": "",
    //     "location": "",
    //     "startDate": "",
    //     "endDate": "",
    //     "workExperience": "",
    //     "projectTitle": "",
    //     "overview": "",
    //     "deploymentLink": "",
    //     "githubLink": "",
    //     "courseName": "",
    //     "college": "",
    //     "startDate": "",
    //     "endDate": "",
    //     "achievement1": "",
    //     "achievement2": "",
    //     "achievement3": "",
    //     "achievement4": "",
    //     "skill1": "",
    //     "skill2": "",
    //     "skill3": "",
    //     "skill4": "",
    //     "language1": "",
    //     "language2": "",
    //     "language3": "",
    //     "language4": "",
    //     "professionalSumamry": "",
    //     "resumeType": ""
    // }
    data.save().then(result=>{
        res.json({details:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/myDetails/:email',(req,res)=>{
    User.find({"email":req.params.email})
    .then(details=>{
        res.json({details})
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports = router