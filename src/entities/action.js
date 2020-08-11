import * as actionTypes from "./actionTypes";
import axios from "axios"
import response from "../response";


export const login =  (data) => {
    // console.log(data)
    return async (dispatch) => {
        dispatch({
            type:actionTypes.LOGIN_INIT
        })
        try{
            const myresponse = await fetch('http://13.234.61.196:2222/login',{
                method:'post',
                headers:{
                    'Content-Type':'application/json'
                  },
                body:JSON.stringify({email:data.email,password:data.password})

            })
            const myjson = await myresponse.json();
            console.log("myresponse",myjson)

            dispatch({
                type:actionTypes.LOGIN,
                payload: myjson,
                payload1:myjson.ack,
                payload2:myjson.msg
            })
        }catch(err) {
            throw err
        }
    }
}
export const forgotpassword =  (data) => {
    // console.log(data)
    return async (dispatch) => {
        dispatch({
            type:actionTypes.FORGOTPASS_INIT
        })
        try{
            const myresponse2 = await fetch('http://13.234.61.196:2222/forgotPassword',{
                method:'post',
                headers:{
                    'Content-Type':'application/json'
                  },
                body:JSON.stringify({email:data})

            })
            const myjson2 = await myresponse2.json();
            console.log("myresponse",myjson2)

            dispatch({
                type:actionTypes.FORGOTPASS,
                payload3: myjson2.ack,
                payload4:myjson2.msg,
                
            })
        }catch(err) {
            throw err
        }
    }
}
export const updateProfile =  (data) => {
    console.log(data)
    return async (dispatch) => {
        dispatch({
            type:actionTypes.UPDATEPROFILE_INIT
        })
        try{
            const myresponse3 = await fetch('http://13.234.61.196:2222/updateProfile',{
                method:'put',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': data.st
                  },
                body:JSON.stringify({email:data.email,first_name:data.fname,last_name:data.lname})

            })
            const myjson3 = await myresponse3.json();
            console.log("myresponse",myjson3)

            dispatch({
                type:actionTypes.UPDATEPROFILE,
                // payload3: myjson2.ack,
                // payload4:myjson2.msg,
                
            })
        }catch(err) {
            throw err
        }
    }
}
export const getcontent =  (data) => {
    console.log(data)
    return async (dispatch) => {
        dispatch({
            type:actionTypes.GETCONTENT_INIT,
            myloading:true
        })
        try{
            const myresponse4 = await fetch('http://13.234.61.196:2222/getStudyContent',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': data.st
                  }
               

            })
            const myjson4 = await myresponse4.json();
            console.log("myresponse",myjson4)

            dispatch({
                type:actionTypes.GETCONTENT,
                payloadContent:myjson4,
                myloading:false

                
            })
        }catch(err) {
            throw err
        }
    }
}
export const changepassword =  (data) => {
    console.log(data)
    return async (dispatch) => {
        dispatch({
            type:actionTypes.CHANGEPASS_INIT
        })
        try{
            const myresponse5 = await fetch('http://13.234.61.196:2222/changePassword',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': data.st
                  },
                  body:JSON.stringify({oldPass:data.oldpass,newPass:data.newpass,confirmPass:data.confirmpass})


            })
            const myjson5 = await myresponse5.json();
            console.log("myresponse",myjson5)

            dispatch({
                type:actionTypes.CHANGEPASS,
                payloadChangepassword:myjson5

                
            })
        }catch(err) {
            throw err
        }
    }
}
//online content path use