import { ActionType } from '../action-types';

/* const reducer 부분에서 action 을 any 에서 Action으로 변경함  */
/* interface Action {
    type: string;
    payload?: any;
}
 */

interface SearchRepositoriesAction {
    /* type: 'search_repositories'; */
    type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
    /* type: 'search_repositories_success'; */
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}
interface SearchRepositoriesErrorAction {
    /* type: 'search_repositories_error'; */
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;

}

export type Action =
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction;
