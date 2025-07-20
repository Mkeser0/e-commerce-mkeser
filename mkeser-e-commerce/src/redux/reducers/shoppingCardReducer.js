import {
  SET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_CART,
  SET_PAYMENT,
  SET_ADDRESS,
} from "../actions/shoppingCardAction";

/*

      Kullanım Örnekleri
// sepete ürün ekleme
dispatch(addToCart(product));

// ürün miktarını artırma
dispatch(increaseQuantity(product.id));

// adres kaydetme
dispatch(setAddress({ city: "İzmir", street: "123. Sokak" }));

// ödeme bilgisi ekleme
dispatch(setPayment({ method: "Credit Card", cardNumber: "**** ****" }));

*/

const initialState = {
  cart: [],
  payment: null,
  address: null,
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case ADD_TO_CART: {
      const existingItem = state.cart.find(
        (item) => item.product.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { product: action.payload, count: 1 }],
        };
      }
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, count: item.count + 1 }
            : item
        ),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.product.id === action.payload
              ? { ...item, count: item.count - 1 }
              : item
          )
          .filter((item) => item.count > 0),
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };

    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;
