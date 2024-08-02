import PropTypes from "prop-types";
import { createContext, useEffect, useReducer } from "react";
//import SHOP_DATA from "../../shopData";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => {},
});

export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES_MAP: "SET_CATEGORIES_MAP",
};

const INITIAL_STATE = {
  categoriesMap: {},
};

const categoriesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      throw new Error(`unhandled type ${type} in categoriesReducer`);
  }
};

export const CategoriesProvider = ({ children }) => {
  //const [categoriesMap, setCategoriesMap] = useState({});

  const [state, dispatch] = useReducer(categoriesReducer, INITIAL_STATE);
  const { categoriesMap } = state;

  const setCategoriesMap = (categoriesMap) => {
    dispatch({
      type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
      payload: categoriesMap,
    });
  };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
CategoriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
