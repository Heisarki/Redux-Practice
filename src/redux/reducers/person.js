const person = (state = [{name: "Sasha", age: 44}], {type, payload}) => {
    switch (type) {
        case "Add":
            return [...state, payload];
        case "Remove":
            return [];
    
        default:
            return state;
    }
}

export default person;