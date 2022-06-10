export const signupForm = (form) => {

    class UserSignup {
        constructor() {
            this.name = form.name.value;
            this.email = form.email.value;
            this.mobile = form.mobile.value;
            this.password = form.password.value;
        }

        isFilled() {
            if (this.name.length < 2) {
                return {
                    message: "Please fill your name",
                    status: false
                };
            } else if (this.email.length < 2) {
                return {
                    message: "Please fill your valid email",
                    status: false
                };
            } else if (this.mobile.length !== 10) {
                return {
                    message: "Please enter 10 digit mobile number",
                    status: false
                };
            } else if (this.password.length < 6) {
                return {
                    message: "Password length should be atleast 6 char",
                    status: false
                };
            } else {
                return {
                    message: "Signup Successful",
                    status: true
                };
            }
        }
    }
    return new UserSignup();
};