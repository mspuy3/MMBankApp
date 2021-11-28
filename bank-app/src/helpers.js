export function getCurrentDate() {
  let today = new Date();

  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  const h = today.getHours();
  const min = today.getMinutes();
  const ss = today.getSeconds();

  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }

  return `${mm}/${dd}/${yyyy} ${h}:${min}:${ss}`;
}
