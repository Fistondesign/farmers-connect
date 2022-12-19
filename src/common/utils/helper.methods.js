export const setSignedUserData = (data) => {
    let user = {};
    if (data) {
        user.email = data.user.email;
        user.uid = data.user.uid;
        user.displayName = data.user.displayName ? data.displayName : "N/A";
        user.photoURL = data.user.photoURL;
        user.accessToken = data.user.accessToken;
        localStorage.setItem("user", JSON.stringify(user));
    }

    return user;
};
export const getSignedUserData = () => {
    let user = {};
    if (localStorage.getItem("user")) {
        user =JSON.parse(localStorage.getItem("user"));
    }
    return user;
};
export const clearOnSignout = () => {
    localStorage.removeItem("user");
};
export const getTheme = () => {
    let theme = "";
    if (localStorage.getItem("theme")) {
        theme = JSON.parse(localStorage.getItem("theme"));
    }
    return theme;
};
export const setTheme = (theme) => {
    if (theme !== undefined || null) {
        localStorage.setItem("theme", JSON.stringify(theme));
        return theme;
    }
};
