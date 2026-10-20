export default defineNuxtRouteMiddleware(() => {
  const token = useCookie<string | null>("absensi_token");
  if (!token.value) {
    return navigateTo("/login");
  }
});
