import request from 'superagent'
import imageTemplate from '../views/result.hbs'

document.addEventListener('DOMContentLoaded', () => {
  const url = 'https://daxeel-celebinfo-v1.p.mashape.com/date/23/september'
  let html = 'oh an error! ur bday dsnt exst'
  request
    .get(url)
    .set('X-Mashape-Key', 'K8PePus3J5mshL1PGPWADznQPwpcp1DrIJ1jsniD7KHEtKWsUT')
    .end((err, res) => {
      if(!err) {
        html = JSON.parse(res.text).data[0].age
        console.log(JSON.parse(res.text).data)
      }
        document.getElementById('result').innerHTML = html
    })
})
