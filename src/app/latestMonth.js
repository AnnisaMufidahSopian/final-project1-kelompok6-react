export default function getPreviousMonth() {
  const date = new Date();
  const year = date.getFullYear();
  const previousMonth = date.getMonth();
  const day = date.getDate();

  const joinDate = [year, previousMonth, day].join("-");
  return joinDate;
}
