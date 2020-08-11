import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    loading: false,
    error: false,
    userData: {} ,
    ack:'',
    msg:'',
    ack2:'',
    msg2:'',
    contentresponse:{},
    loading2:false,
    changepass:{}

}

const reducer = (state = INITIAL_STATE, action) => {
  
    switch (action.type) {
        case actionTypes.LOGIN_INIT:
          return {...state,loading:true}
        case actionTypes.LOGIN:
          return { ...state, ack:action.payload1, msg:action.payload2,userData:action.payload
        }
        case actionTypes.FORGOTPASS_INIT:
          return { ...state, loading:true
        }
        case actionTypes.FORGOTPASS:
          return { ...state, ack2:action.payload3, msg2:action.payload4
        }
        case actionTypes.GETCONTENT_INIT:
          return { ...state, loading2:action.myloading
        }
        case actionTypes.GETCONTENT:
          return { ...state, contentresponse:action.payloadContent,loading2:action.myloading
        }
        case actionTypes.CHANGEPASS_INIT:
          return { ...state,loading:true
        }
        case actionTypes.CHANGEPASS:
          return { ...state, changepass:action.payloadChangepassword
        }
        default:
          return state
      }
}

export default reducer