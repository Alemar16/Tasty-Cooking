import {
  GET_ALL_RECIPE,
  ORDER_BY_NAME,
  GET_ALL_DIET,
  ORDER_BY_SCORE,
  PAGINADO,
  RECIPE_DETAILS,
  FILTER_BY_DIET,
  SEARCH_NAME_RECYPE,
  POST_ADD_RECIPES,
  FILTER_DB_OR_API,
  SET_ERROR,
} from "../actions/actions";
const initialState = {
  recipes: [],
  /* recipesfiterdit: [], */ //copia de recipes
  allrecipes: [], //recipes
  diets: [],
  details: [],
  page: 1,
  error: undefined,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPE: {
      return {
        ...state,
        recipes: action.payload,
        allrecipes: action.payload,
        page: state.page < action.payload.length ? state.page : 1,
        error: undefined,
      };
    }
    case POST_ADD_RECIPES: {
      return {
        ...state,
      };
    }
    case RECIPE_DETAILS: {
      return {
        ...state,
        details: action.payload,
      };
    }

    case SEARCH_NAME_RECYPE: {
      return {
        ...state,
        recipes: action.payload,
        error: undefined,
        page: state.page < action.payload.length ? state.page : 1,
      };
    }
    case FILTER_BY_DIET: {
      const allrecipesDiets = state.allrecipes;
      const recipesFilterdiet =
        action.payload === "all"
          ? allrecipesDiets
          : allrecipesDiets.filter((el) => {
              let names = el.diets.map((d) => d);
              if (names.includes(action.payload)) return el;
            });

      return {
        ...state,
        recipes: recipesFilterdiet,
        page: state.page < recipesFilterdiet.length ? state.page : 1,
      };
    }

    case ORDER_BY_NAME:
    
      let sortArray = [...state.recipes].sort((a, b) => {
        if (a.name > b.name) return action.payload === "asc" ? 1 : -1;
        if (a.name < b.name) return action.payload === "des" ? 1 : -1;
        else return 0;
      });
      

      return {
        ...state,
        recipes: sortArray,
        page: 1,
      };
    case GET_ALL_DIET: {
      return {
        ...state,
        diets: action.payload,
      };
    }
    case ORDER_BY_SCORE: {
      let sortscore = [...state.recipes].sort((a, b) => {
        if (a.healthScore > b.healthScore)
          return action.payload === "asc" ? 1 : -1;
        if (a.healthScore < b.healthScore)
          return action.payload === "des" ? 1 : -1;
        else return 0;
      });

  

      return {
        ...state,
        recipes: sortscore,
        page: 1,
      };
    }
    case PAGINADO: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case FILTER_DB_OR_API: {
      const allcreated = state.allrecipes;
      const createFilter =
        action.payload === "created"
          ? allcreated.filter((el) => el.createIndb === true)
          : allcreated.filter((el) => el.createIndb === undefined);

      return {
        ...state,
        recipes: action.payload === "all" ? state.allrecipes : createFilter,
        page: 1,
      };
    }

    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
        recipes: [],
        allrecipes: [],
      };
    }

    default:
      return state;
  }
};

export default Reducer;
