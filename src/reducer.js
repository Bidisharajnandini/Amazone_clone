export const initialState = {
  basket: [],
  user: null,
};

//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    // eslint-disable-next-line no-duplicate-case
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((basketItem) => basketItem.id);
      // eslint-disable-next-line no-unreachable
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
