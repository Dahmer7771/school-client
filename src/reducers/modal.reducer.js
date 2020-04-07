const initialState = {
    isModalOpen: false,
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
    case "SHOW_MODAL":
        return {
            isModalOpen: true,
        };
    case "HIDE_MODAL":
        return {
            isModalOpen: false,
        };
    default:
        return state;
    }
};

export default modalReducer;
