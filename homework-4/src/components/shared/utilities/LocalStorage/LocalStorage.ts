export const setUserDataToLocalStorage = (response: any) => {
  const client = response.get('client');
  const accessToken = response.get('access-token');
  const uid = response.get('uid');

  const user = {
    client,
    accessToken,
    uid
  }
  
  if (client && accessToken && uid) {
    localStorage.setItem('user', JSON.stringify(user));
}}

export const clearLocalStorage = () => {
  localStorage.removeItem("user");
}