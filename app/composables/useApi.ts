export function useApi() {
  const { apiBase } = useRuntimeConfig().public;
  const token = useCookie<string | null>("absensi_token");

  const api = $fetch.create({
    baseURL: apiBase as string,
    onRequest({ options }) {
      const headers = new Headers(options.headers);
      if (token.value) {
        headers.set("Authorization", `Bearer ${token.value}`);
      }
      options.headers = headers;
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        token.value = null;
        navigateTo("/login");
      }
    },
  });

  return { api, token };
}
