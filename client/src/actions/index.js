const signInAction = (data) => {
    return {
        type: "SIGN_IN",
        payload: data,
    }
}
const signOutAction = () => {
    return {
        type: "SIGN_OUT"
    }
}
export { signInAction, signOutAction }
