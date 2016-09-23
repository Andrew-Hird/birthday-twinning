import request from 'superagent'
import imageTemplate from '../views/result.hbs'
import formTemplate from '../views/index.hbs'

document.addEventListener('DOMContentLoaded', () => {
  const div = document.createElement('div')
  div.innerHTML = formTemplate({})
  document.body.appendChild(div)

  document.getElementById("submit").addEventListener("click", () => {
    let day = document.getElementById('day_id').value
    console.log(day)

    let month = document.getElementById('month_id').value
    console.log(month)

    const url = `https://daxeel-celebinfo-v1.p.mashape.com/date/${day}/${month}`
    console.log(url)

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

})
