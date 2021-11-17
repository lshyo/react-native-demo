interface actionType {
  type: string;
  payload: locationType;
}

export interface locationType {
  showLocation: boolean;
  weather: any;
}

const initState = {
  showLocation: false,
  weather: {
    type: 'test',
    statusCode: '000000',
    testHttpCode: 200,
    testResult: {
      headers: [
        {
          key: 'Server',
          value: 'nginx',
        },
        {
          key: 'Date',
          value: 'Wed, 17 Nov 2021 08:29:38 GMT',
        },
        {
          key: 'Content-Type',
          value: 'text/plain; charset=utf-8',
        },
        {
          key: 'Transfer-Encoding',
          value: 'chunked',
        },
        {
          key: 'Connection',
          value: 'keep-alive',
        },
        {
          key: 'Vary',
          value: 'Accept-Encoding',
        },
        {
          key: 'Access-Control-Allow-Origin',
          value: '*',
        },
      ],
      body: '{"statusCode":"000000","desc":"\u8bf7\u6c42\u6210\u529f","result":{"area":"\u53a6\u95e8","areaCode":"350200","areaid":"101230201","dayList":[{"area":"\u53a6\u95e8","areaCode":"350200","areaid":"101230201","day_air_temperature":"23","day_weather":"\u9634","day_weather_code":"02","day_weather_pic":"http://app1.showapi.com/weather/icon/day/02.png","day_wind_direction":"\u4e1c\u5317\u98ce","day_wind_power":"3-4\u7ea7","daytime":"20211117","night_air_temperature":"19","night_weather":"\u5c0f\u96e8","night_weather_code":"07","night_weather_pic":"http://app1.showapi.com/weather/icon/night/07.png","night_wind_direction":"\u65e0\u6301\u7eed\u98ce\u5411","night_wind_power":"0-3\u7ea7"},{"area":"\u53a6\u95e8","areaCode":"350200","areaid":"101230201","day_air_temperature":"22","day_weather":"\u9634","day_weather_code":"02","day_weather_pic":"http://app1.showapi.com/weather/icon/day/02.png","day_wind_direction":"\u65e0\u6301\u7eed\u98ce\u5411","day_wind_power":"0-3\u7ea7","daytime":"20211118","night_air_temperature":"18","night_weather":"\u591a\u4e91","night_weather_code":"01","night_weather_pic":"http://app1.showapi.com/weather/icon/night/01.png","night_wind_direction":"\u65e0\u6301\u7eed\u98ce\u5411","night_wind_power":"0-3\u7ea7"},{"area":"\u53a6\u95e8","areaCode":"350200","areaid":"101230201","day_air_temperature":"25","day_weather":"\u6674","day_weather_code":"00","day_weather_pic":"http://app1.showapi.com/weather/icon/day/00.png","day_wind_direction":"\u4e1c\u98ce","day_wind_power":"3-4\u7ea7","daytime":"20211119","night_air_temperature":"17","night_weather":"\u6674","night_weather_code":"00","night_weather_pic":"http://app1.showapi.com/weather/icon/night/00.png","night_wind_direction":"\u4e1c\u5317\u98ce","night_wind_power":"3-4\u7ea7"},{"area":"\u53a6\u95e8","areaCode":"350200","areaid":"101230201","day_air_temperature":"25","day_weather":"\u6674","day_weather_code":"00","day_weather_pic":"http://app1.showapi.com/weather/icon/day/00.png","day_wind_direction":"\u4e1c\u98ce","day_wind_power":"3-4\u7ea7","daytime":"20211120","night_air_temperature":"18","night_weather":"\u6674","night_weather_code":"00","night_weather_pic":"http://app1.showapi.com/weather/icon/night/00.png","night_wind_direction":"\u5317\u98ce","night_wind_power":"3-4\u7ea7"},{"area":"\u53a6\u95e8","areaCode":"350200","areaid":"101230201","day_air_temperature":"26","day_weather":"\u6674","day_weather_code":"00","day_weather_pic":"http://app1.showapi.com/weather/icon/day/00.png","day_wind_direction":"\u4e1c\u5357\u98ce","day_wind_power":"3-4\u7ea7","daytime":"20211121","night_air_temperature":"19","night_weather":"\u6674","night_weather_code":"00","night_weather_pic":"http://app1.showapi.com/weather/icon/night/00.png","night_wind_direction":"\u65e0\u6301\u7eed\u98ce\u5411","night_wind_power":"0-3\u7ea7"},{"area":"\u53a6\u95e8","areaCode":"350200","areaid":"101230201","day_air_temperature":"18","day_weather":"\u591a\u4e91","day_weather_code":"01","day_weather_pic":"http://app1.showapi.com/weather/icon/day/01.png","day_wind_direction":"\u65e0\u6301\u7eed\u98ce\u5411","day_wind_power":"0-3\u7ea7","daytime":"20211122","night_air_temperature":"13","night_weather":"\u5c0f\u96e8","night_weather_code":"07","night_weather_pic":"http://app1.showapi.com/weather/icon/night/07.png","night_wind_direction":"\u4e1c\u5317\u98ce","night_wind_power":"3-4\u7ea7"},{"area":"\u53a6\u95e8","areaCode":"350200","areaid":"101230201","day_air_temperature":"19","day_weather":"\u6674","day_weather_code":"00","day_weather_pic":"http://app1.showapi.com/weather/icon/day/00.png","day_wind_direction":"\u4e1c\u5317\u98ce","day_wind_power":"3-4\u7ea7","daytime":"20211123","night_air_temperature":"12","night_weather":"\u591a\u4e91","night_weather_code":"01","night_weather_pic":"http://app1.showapi.com/weather/icon/night/01.png","night_wind_direction":"\u4e1c\u5317\u98ce","night_wind_power":"3-4\u7ea7"},{"area":"\u53a6\u95e8","areaCode":"350200","areaid":"101230201","day_air_temperature":"16","day_weather":"\u591a\u4e91","day_weather_code":"01","day_weather_pic":"http://app1.showapi.com/weather/icon/day/01.png","day_wind_direction":"\u4e1c\u5317\u98ce","day_wind_power":"3-4\u7ea7","daytime":"20211124","night_air_temperature":"12","night_weather":"\u6674","night_weather_code":"00","night_weather_pic":"http://app1.showapi.com/weather/icon/night/00.png","night_wind_direction":"\u897f\u5317\u98ce","night_wind_power":"3-4\u7ea7"},{"area":"\u53a6\u95e8","areaCode":"350200","areaid":"101230201","day_air_temperature":"21","day_weather":"\u9634","day_weather_code":"02","day_weather_pic":"http://app1.showapi.com/weather/icon/day/02.png","day_wind_direction":"\u4e1c\u5317\u98ce","day_wind_power":"3-4\u7ea7","daytime":"20211125","night_air_temperature":"14","night_weather":"\u9634","night_weather_code":"02","night_weather_pic":"http://app1.showapi.com/weather/icon/night/02.png","night_wind_direction":"\u5317\u98ce","night_wind_power":"3-4\u7ea7"},{"area":"\u53a6\u95e8","areaCode":"350200","areaid":"101230201","day_air_temperature":"20","day_weather":"\u6674","day_weather_code":"00","day_weather_pic":"http://app1.showapi.com/weather/icon/day/00.png","day_wind_direction":"\u4e1c\u5317\u98ce","day_wind_power":"4-5\u7ea7","daytime":"20211126","night_air_temperature":"12","night_weather":"\u591a\u4e91","night_weather_code":"01","night_weather_pic":"http://app1.showapi.com/weather/icon/night/01.png","night_wind_direction":"\u4e1c\u5317\u98ce","night_wind_power":"3-4\u7ea7"},{"area":"\u53a6\u95e8","areaCode":"350200","areaid":"101230201","day_air_temperature":"18","day_weather":"\u591a\u4e91","day_weather_code":"01","day_weather_pic":"http://app1.showapi.com/weather/icon/day/01.png","day_wind_direction":"\u4e1c\u5317\u98ce","day_wind_power":"4-5\u7ea7","daytime":"20211127","night_air_temperature":"12","night_weather":"\u9634","night_weather_code":"02","night_weather_pic":"http://app1.showapi.com/weather/icon/night/02.png","night_wind_direction":"\u4e1c\u5317\u98ce","night_wind_power":"3-4\u7ea7"},{"area":"\u53a6\u95e8","areaCode":"350200","areaid":"101230201","day_air_temperature":"19","day_weather":"\u9634","day_weather_code":"02","day_weather_pic":"http://app1.showapi.com/weather/icon/day/02.png","day_wind_direction":"\u4e1c\u5317\u98ce","day_wind_power":"4-5\u7ea7","daytime":"20211128","night_air_temperature":"13","night_weather":"\u9634","night_weather_code":"02","night_weather_pic":"http://app1.showapi.com/weather/icon/night/02.png","night_wind_direction":"\u4e1c\u5317\u98ce","night_wind_power":"3-4\u7ea7"},{"area":"\u53a6\u95e8","areaCode":"350200","areaid":"101230201","day_air_temperature":"20","day_weather":"\u591a\u4e91","day_weather_code":"01","day_weather_pic":"http://app1.showapi.com/weather/icon/day/01.png","day_wind_direction":"\u4e1c\u98ce","day_wind_power":"3-4\u7ea7","daytime":"20211129","night_air_temperature":"14","night_weather":"\u591a\u4e91","night_weather_code":"01","night_weather_pic":"http://app1.showapi.com/weather/icon/night/01.png","night_wind_direction":"\u5317\u98ce","night_wind_power":"0-3\u7ea7"},{"area":"\u53a6\u95e8","areaCode":"350200","areaid":"101230201","day_air_temperature":"21","day_weather":"\u6674","day_weather_code":"00","day_weather_pic":"http://app1.showapi.com/weather/icon/day/00.png","day_wind_direction":"\u4e1c\u5317\u98ce","day_wind_power":"4-5\u7ea7","daytime":"20211130","night_air_temperature":"15","night_weather":"\u6674","night_weather_code":"00","night_weather_pic":"http://app1.showapi.com/weather/icon/night/00.png","night_wind_direction":"\u4e1c\u5317\u98ce","night_wind_power":"3-4\u7ea7"},{"area":"\u53a6\u95e8","areaCode":"350200","areaid":"101230201","day_air_temperature":"21","day_weather":"\u6674","day_weather_code":"00","day_weather_pic":"http://app1.showapi.com/weather/icon/day/00.png","day_wind_direction":"\u4e1c\u5317\u98ce","day_wind_power":"0-3\u7ea7","daytime":"20211201","night_air_temperature":"15","night_weather":"\u6674","night_weather_code":"00","night_weather_pic":"http://app1.showapi.com/weather/icon/night/00.png","night_wind_direction":"\u4e1c\u5317\u98ce","night_wind_power":"0-3\u7ea7"}],"ret_code":0}}',
    },
    testDeny: 93.682,
  },
};
const location = (state: locationType = initState, action: actionType) => {
  if (action.type === 'location') {
    return {...state, ...action.payload};
  }
  return state;
};
export default location;
