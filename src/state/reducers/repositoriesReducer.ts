import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: [],

};

const reducer = (
    state: RepositoriesState = initialState,
    action: Action
): RepositoriesState => {
    /*  action
 
     if (action.type === 'search_repositories_success') {
         // 100% certaionty that 'action' satsifies the
         //  SearchRepositoriesSuccessAction interface
 
         action.payload
     }
  */
    switch (action.type) {
        case /* 'search_repositories' */
            ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] };

        case /* 'search_repositories_success' */
            ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        // 100% certain that 'action' is SearchRepositoriesSuccessAction

        case /* 'search_repositories_error' */
            ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};

export default reducer;  // ../reducers/index.ts 로
