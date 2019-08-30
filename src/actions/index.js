import { ADD_USER, UPDATE_USER, DELETE_USER } from "../constants";
import {uuid} from 'uuid';

let nextUserId = 0
export const addUser = (users) =>({
    type: ADD_USER,
    users: {id : ++nextUserId,
    users}
});

export const udateUser = (id,data) =>
{
    return {type:UPDATE_USER, data};
}

export const deleteUser = (id,data) =>
{
    return {type: DELETE_USER ,data};
}