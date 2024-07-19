import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import budgetSlice from "../feature/budgetSlice";




export const store = configureStore({
    reducer: {
        content: budgetSlice
    },
    devTools: true
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = useDispatch<AppDispatch>


// export const store = configureStore({
//     reducer: {
//         expenses: budgetSlice
//     },
//     devTools: true
// })

