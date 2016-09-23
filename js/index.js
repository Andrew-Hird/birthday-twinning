import request from 'superagent'
import indexTemplate from '../views/index.hbs'
import loadingTemplate from '../views/loading.hbs'

document.addEventListener('DOMContentLoaded', () => {
  const resultDiv = document.getElementById('result')
  resultDiv.innerHTML = indexTemplate()

  document.getElementById("submit").addEventListener("click", () => {
    const loadingDiv = document.getElementById('loading')
    loadingDiv.innerHTML = loadingTemplate({loading: true})

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
          const result = JSON.parse(res.text).data
          console.log(result)
          const resultDiv = document.getElementById('result')
          resultDiv.innerHTML = indexTemplate({result: result})
        }

      })
  })
})
