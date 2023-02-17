import axios from 'axios'
import humps from 'humps'

const API_URL = import.meta.env.VITE_API_URL
const CORE_URL = `${API_URL}/core`

const GET_MEMBERSHIP_LEVELS_URL = `${CORE_URL}/getmembershiplevels/`

export const getMembershipLevels = () => {
  return axios.get(`${GET_MEMBERSHIP_LEVELS_URL}`).then((d) => humps.camelizeKeys(d.data))
}
