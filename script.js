const tag = document.querySelector('.tag-input'),
  buttonTag = document.querySelector('.tag-button');

const TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImRjYjM2Y2Y1LTNkZDEtNDZlZC1iMGFlLTE0YTFhM2I1MTUxNSIsImlhdCI6MTY0ODEyOTA3NSwic3ViIjoiZGV2ZWxvcGVyLzBkZjZiN2RjLWNhNzItOGYxMi01MWQ5LWRiNjIzNDUwOWNiNCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiODcuMTE3LjE4NS43NyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.1ig4i0wCNnkhpySQkBSLM1KP1ZMFF3FGvBjw3NXVutU75JkOJ7ekTMJ-ahf3OykBgSIG3j7igad6dcxnYY1GCA';

// buttonTag.addEventListener('click', () => {
//   if (tag.value !== '' && tag.value.length >= 6) {
//     console.log('#' + tag.value);
//   } else {
//     console.log('хуйня');
//   }
// });
async function getInfo() {
  const resp = await fetch(`https://api.brawlstars.com/v1/players/%232GVUL2VY2`);
  const data = resp.json();
  return await data.trophies;
}

let info = '';
let test = getInfo().then((res) => {
  info = res;
  console.log(res);
});
