export const signIn = (data) => {
  localStorage.setItem("token", data.data.login.token);
  return { type: "AUTH_SIGNIN", payload: data.data.login.tokenExpiration };
};

export const signOut = () => {
  localStorage.removeItem("token");
  return { type: "AUTH_SIGNOUT" };
};
