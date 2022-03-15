import axios from 'axios'
const baseUrl = '/article'

let globalConfig = {
    headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
    } 
}

async function getToken() {
    var token = `bearer ` + window.localStorage.getItem('token')
    return token
}
const getArticle = async (tupleObj) => {
    const token = await getToken()
    console.log('getschedule gettoken', token)
    const config = {
        ...globalConfig,
        headers: { Authorization: token },
        data: tupleObj
    }
    console.log('schedules service getSchedule', config)
    const response = await axios.get(`${baseUrl}`, config)
    console.log('schedules service getSchedule response', response)
    return response.data
}
const createArticle = async (tupleObj) => {
    const token = await getToken()
    console.log('getschedule gettoken', token)
    const config = {
        ...globalConfig,
        headers: { Authorization: token },
    }
    // const username = window.localStorage.getItem('username')
    const response = await axios.post(`${baseUrl}/create`, tupleObj, config)
    return response.data
}
const listArticle = async (tupleObj) => {
    const token = await getToken()
    console.log('getschedule gettoken', token)
    const config = {
        ...globalConfig,
        headers: { Authorization: token },
    }
    // const username = window.localStorage.getItem('username')
    console.log('tupleObj',tupleObj)
    const response = await axios.post(`${baseUrl}/list`, tupleObj, config)
    console.log('response',response)
    return response.data
}
const editArticle = async (tupleObj) => {
    const token = await getToken()
    console.log('getschedule gettoken', token)
    const config = {
        ...globalConfig,
        headers: { Authorization: token },
    }
    const username = window.localStorage.getItem('username')
    const old_id = tupleObj.old_id
    console.log('schedules service editSchedule', tupleObj)
    const response = await axios.put(`${baseUrl}/${old_id}`, tupleObj, config)
    console.log('schedules service editSchedule response', response)
    return response.data
}

const deleteArticle = async (tupleObj) => {
    const token = await getToken()
    console.log('getschedule gettoken', token)
    const config = {
        ...globalConfig,
        headers: { Authorization: token },
        data: tupleObj
    }
    const username = window.localStorage.getItem('username')
    const username_to_delete = tupleObj.username
    const schedule_id = tupleObj.schedule_id ? tupleObj.schedule_id : null
    console.log('schedules service deleteSchedule', schedule_id)
    console.log('schedules service deleteSchedule', tupleObj)
    var response
    if (schedule_id) {
        response = await axios.delete(`${baseUrl}/${schedule_id}`, config);
    }
    else {
        response = await axios.delete(`${baseUrl}`, config);
    }
    console.log('schedules service deleteSchedule response', response)
    return response.data
}

export default {
    getArticle,
    createArticle,
    listArticle,
    editArticle,
    deleteArticle,
    // setToken
}