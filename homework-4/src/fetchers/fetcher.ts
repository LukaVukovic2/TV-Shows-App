export async function fetcher<T>(input: string | URL | globalThis.Request, init?: RequestInit): Promise<T> {
  try {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const headers = {
      ...init?.headers,
      uid: user.uid,
      client: user.client,
      'access-token': user.accessToken
    };
    const response = await fetch(input, { ...init, headers });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    if(response.status === 204) return {} as T;
    return await response.json();
  } catch (error) {
    throw new Error(`Response status: ${error}`);
  }
}
