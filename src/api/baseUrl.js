export default function getBaseUrl() {
  //const inDevelopment = window.location.hostname === "localhost";
  //return inDevelopment ? "http://localhost:3001/" : "/";
  var url = getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://mysterious-dawn-16770.herokuapp.com/';
  return url;
  //return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://mysterious-dawn-16770.herokuapp.com/';
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  //var res = decodeURIComponent(results[2].replace(/\+/g, " "));
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
