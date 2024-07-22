import IFormData from "@/typings/form";

export async function mutator(url: string, { arg }: { arg: IFormData }) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${arg}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(arg)
  })
  
  const user = {
    client: response.headers.get('client'),
    accessToken: response.headers.get('access-token'),
    uid: response.headers.get('uid')
  }

  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  if (!response.ok) {
    throw new Error(`Failed to mutate on ${url}`);
  }

  return response.json();
}
