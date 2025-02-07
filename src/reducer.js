export const initialState = {
    basket : [],
    user: null
};
export const getBasketTotal = (basket) => {
    const totalPrice = basket?.reduce((amount,item) => item.price + amount,0);
    return totalPrice;
}
const reducer = (state,action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET' : 
            return {
                ...state,
                basket: [...state.basket,action.item]
            };  
        case 'SET_USER' :
            return {
                ...state,
                user: action.user
            }

        case 'REMOVE_FROM_BASKET' :
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if(index >= 0){
                newBasket.splice(index, 1);
            }
            else{
                console.warn(`Can't remove product (id: ${action.id}) as it's not in basket!`)
            }

            return {
                ...state,
                basket: newBasket
            }
        default: 
        return state;
    }
};

export default reducer;