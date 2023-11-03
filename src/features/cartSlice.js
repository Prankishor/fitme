import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';


const initialState = {
    cartItems: localStorage.getItem("fitmeCartItems") ?
        JSON.parse(localStorage.getItem("fitmeCartItems")) :
        [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        //Making and action creator and reducer at the same time (Power of RTK)



        addToCart(state, action) {
            //product will be coming from payload
            //findIndex returns an index of the item if it exist
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            )
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`Added to cart again`,
                    {
                        position: "bottom-left",
                    })
            }
            else {
                let tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
                console.log(state.cartItems)
                toast.success(`Added to cart`,
                    {
                        position: "bottom-left",
                    })
            }

            localStorage.setItem("fitmeCartItems", JSON.stringify(state.cartItems))
        },

        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )

            state.cartItems = nextCartItems
            localStorage.setItem("fitmeCartItems", JSON.stringify(state.cartItems))

            toast.error(`Removed from cart`,
                {
                    position: "bottom-left",
                })
        },

        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1

                toast.info(`Decreased item quantity`,
                    {
                        position: "bottom-left",
                    })
            }

            else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )

                state.cartItems = nextCartItems
                toast.error(`Removed from cart`,
                    {
                        position: "bottom-left",
                    })
            }
            localStorage.setItem("fitmeCartItems", JSON.stringify(state.cartItems))
        },

        clearCart(state, action) {
            state.cartItems = [];
            toast.error(`Cart Cleared`,
                {
                    position: "bottom-left",
                })
            localStorage.setItem("fitmeCartItems", JSON.stringify(state.cartItems));
        },

        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                //default values of arguements
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },

    },
});

//auto created action, exporting for uses
export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions;

export default cartSlice.reducer;