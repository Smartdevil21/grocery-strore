export const auth = (router) => {
  const authState = localStorage.getItem("auth");
  if (authState !== "signedIn") {
    router.push("/login");
  }
};
