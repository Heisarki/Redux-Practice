export const add = (person) => {
    return {
        type: "Add",
        payload: person
    }
}

export const remove = () => {
    return {
        type: "Remove"
    }
}