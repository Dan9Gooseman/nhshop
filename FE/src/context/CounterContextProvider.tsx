// import { ReactNode, createContext, useReducer } from "react";
// const initialState = {
//   value: 0,
// };

// const reducer = (state: any, action: any) => {
//   console.log("action: ", action);
//   switch (action) {
//     case "INCREMENT":
//       state.value + 1;
//       break;
//     case "DECREMENT":
//       state.value - 1;
//       break;
//     case "INCREASE":
//       state.value + action.payload;
//       return;
//     default:
//       return state;
//   }
// };
// type Props = {
//   children: ReactNode;
// };

// export const CounterContext = createContext(
//   {} as { count: number; dispatch: any }
// );

// const CounterContextProvider = ({ children }: Props) => {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   //action = {type: "INCREAMENT"}
//   return (
//     <div>
//       <CounterContext.Provider value={{ count, dispatch }}>
//         {children}
//       </CounterContext.Provider>
//     </div>
//   );
// };

// export default CounterContextProvider;
