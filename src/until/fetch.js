import axios from 'axios'

const getAddress = axios.get('static/data/city_list.json')
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })

module.exports = {
  getAddress
}
