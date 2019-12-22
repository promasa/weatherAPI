'use strict'

const APIURL = 'https://api.openweathermap.org/data/2.5/weather';//APIのURLを定数に定義
const APPID = 'APPID=4b5774e9f3d2a07b84f0f2f88e486224';//APPIDを定数に定義
const CITY = 'London';//情報の欲しい市を定義
const URL = APIURL + '?' + APPID + '&q=' + CITY;//HttpsRequestに渡すURLを定義


const html_city = document.getElementById('city');
const html_weather = document.getElementById('weather');
const today = document.getElementById('today');


let xhr = new XMLHttpRequest(); //XMLHttpRequestのインスタンスを作成

let ajaxGet = () => {
  xhr.open('GET',URL);//Getメソッド、URL
  xhr.send(); //通信開始
  xhr.onreadystatechange =() => { //
    if(xhr.readyState === 4 && xhr.status === 200) { //通信が終了し、なおかつエラーがでていないか
      let respons = JSON.parse(xhr.responseText); //JSONに　デコード
      html_weather.textContent = respons.weather[0].description;
      html_city.textContent = CITY;
    }
  };
}
ajaxGet();

let getNow = () => {
let now = new Date();
let year = now.getFullYear();
let month =now.getMonth() + 1;
let day = now.getDate();
let get = `${year}年${month}月${day}日`
today.textContent = get ;
}
getNow();
