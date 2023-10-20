import { GET_BRANDS, GET_SINGLEBRAND } from "shared/constants/ActionTypes";

export const VIEW_TYPE = Object.freeze({LIST: 1, GRID: 2});

const initialState={
    brandList:[],
    singleBrand:null
}


const catalogReducer=(state=initialState, action) =>{
    switch(action.type){
        case GET_BRANDS:{
            return{
                ...state,
                brandList:action.payload
            }
        }
        case GET_SINGLEBRAND:{
            return{
                ...state,
                singleBrand:action.payload
            }
        }
        default:
            return state;
        }
    }



export default catalogReducer;