export const shippingForm = (form) => {

    class UserForm {
        constructor() {
            this.name = form.name.value;
            this.email = form.email.value;
            this.mobile = form.mobile.value;
            this.street = form.street.value;
            this.city = form.city.value;
            this.state = form.state.value;
            this.pincode = form.pincode.value;
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
            } else if (!this.street && !this.city && !this.state) {
                return {
                    message: "Please fill your address",
                    status: false
                };
            } else if (this.pincode.length !== 6) {
                return {
                    message: "Please enter 6 digit pincode",
                    status: false
                };
            } else {
                return {
                    message: "Order placed",
                    status: true
                };
            }
        }
    }
    return new UserForm();
};