import axios from 'axios'


export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer PsswIU2NuEzA9zPpz84JfX3fjix6AwWZhb_DYtpVbkhO4Mf6UOKVEKBk1QwrojLVs_teuXCfoqdJ0ZRHd9H6gag4H88D5rY6EE2Qv_-T4ajC4j6__EBP2RXMAnwOXnYx'
  }
})