export const isLogin = (form, userData) => {

    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
        return { status: 'Empty' };
    }

    for (let item of userData) {
        if (email === item.email && password === item.password) {
            return { user: item, status: true };
        }
    }
    return { status: false };
}