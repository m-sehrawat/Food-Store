const couponCodes = {
    FOODSTORE5: 5,
    FOODSTORE10: 10,
    FOODSTORE15: 15,
    FOODSTORE20: 20,
    FOODSTORE25: 25,
    FOODSTORE30: 30
};


export const getCoupon = (coupon) => {

    return couponCodes[coupon];
};