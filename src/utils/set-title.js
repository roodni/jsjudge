export default function set_title(title) {
  const app_name = 'JSJudge';
  if (title === '') {
    document.title = app_name;
  } else {
    document.title = `${title} | ${app_name}`;
  }
}