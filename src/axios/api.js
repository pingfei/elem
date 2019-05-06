import service from './request'

export const getAddress = () => {
  return service({
    url: 'static/data/city_list.json'
  })
}
export const postAddress = (data) => {
  return service({
    url: 'static/data/city_list.json',
    method: 'post',
    data: data
  })
}
