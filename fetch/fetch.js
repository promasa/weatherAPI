'use strict'
const APIURL = 'https://api.openweathermap.org/data/2.5/weather';//APIのURLを定数に定義
const appid = '4b5774e9f3d2a07b84f0f2f88e486224';//APPIDを定数に定義
const CITY = 'London';//情報の欲しい市を定義
// const URL = APIURL + '?' + APPID + '&q=' + CITY;//HttpsRequestに渡すURLを定義
const html_city = document.getElementById('city');
const html_weatehr = document.getElementById('weather');

const params = {
  APPID: appid,
  q: CITY
}

const qs = new URLSearchParams(params);

fetch(`${APIURL}?${qs}`)
.then(response => response.json()) //この関数のreturnがjsonで次のthanの引数
.then(json => {html_weatehr.textContent = json.weather[0].description }); 