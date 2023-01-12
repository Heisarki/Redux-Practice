const counter = (state = 0, { type, payload }) => {
    switch (type) {
        case "Withdraw":
            return state - payload;
        case "Deposit":
            return state + payload;
        default:
            return state;
    }
}

export default counter;