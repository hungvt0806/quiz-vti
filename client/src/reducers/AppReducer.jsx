
export default function AppReducer( state, action ) {

    switch (action.type) {
      case "CURRENT_USER":
            return { ...state,user: action.payload };
      case "GET_ALL_QUIZZES":
            return { ...state,user: action.payload };
      case "GET_ALL_MY_QUIZZES":
          return { ...state,user: action.payload };
      case "GET_DETAILS_ONE_QUIZ":
          return { ...state,quizzes: action.payload };
      case "GET_RESULT_BY_SCORE_ID":
          return { ...state,quizzes: action.payload };
      case "ADD_COMMENT":
          return { ...state,quizzes: action.payload };
      case "ADD_LIKE":
          return { ...state,quizzes: action.payload };
      case "ADD_RESULT":
          return { ...state,quizzes: action.payload };
      case "CREATE_ONE_QUIZ":
          return { ...state,quizzes:[...state.quizzes, action.payload] };
      case "UPDATE_ONE_QUIZ":
          return { 
              ...state,
              quizzes: state.quizzes.map((quiz) =>
              quiz._id === action.payload._id
              ? {...quiz,...action.payload}
              :quiz
              ),
          };
      case "DELETE_ONE_QUIZ":
          return {
               ...state,
               quizzes: state.quizzes.filter((quiz)=> quiz._id !== action.payload._id),
          };
  
    default:
      return state
    }
  }
  