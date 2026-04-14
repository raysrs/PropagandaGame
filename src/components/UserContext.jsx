import { createContext, useReducer } from "react";

//central, accessable instance data getter & setter
export const UserContext = createContext(null);
export const UserDispatchContext = createContext(null);

export function UserProvider({children}) {
  const [user, dispatch] = useReducer(
    userReducer,
    {levelNum:0, lineNum:0, isPrompted:false, likes:0, levelLikes:0, levelCorrectAnswers:0}
  );

  return(
    <UserContext value={user}>
      <UserDispatchContext value={dispatch}>
        {children}
      </UserDispatchContext>
    </UserContext>
  );
};

function userReducer(user, action) {
  switch (action.type) {
    case "nextLevel": return {...user, levelNum:user.levelNum+1, lineNum:0, levelLikes:0, levelCorrectAnswers:0};
    case "nextLine": return {...user, lineNum:user.lineNum+1};
    case "userPrompted": return {...user, isPrompted:true}
    case "addLikes": return {...user, isPrompted:false, likes:user.likes+action.likes};
    case "addLevelStats": return {
      ...user,
      levelLikes:user.levelLikes + action.likes,
      levelCorrectAnswers:user.levelCorrectAnswers + action.correctAnswers
    }
    default: throw Error("Unknown action: " + action);
  }
}