export default function getAgeFrom(birthDate) {

  if (!birthDate) {
    return '?'
  }

  const [birthYear, birthMonth, birthDay] = birthDate.split('-');
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();
  const age = todayYear - Number(birthYear, 10);

  if (Number(birthMonth, 10) > todayMonth) {
    return age - 1;
  }

  if (Number(birthMonth, 10) === todayMonth && Number(birthDay, 10) > todayDay) {
    return age - 1;
  }

  return age;
}