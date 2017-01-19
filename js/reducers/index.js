import * as actions from './actions/index';
import store from './store';

store.dispatch(actions.addRepository('joe'));
console.log(store.getState()); // Logs [{ name: 'joe', rating: null}]


else if (action.type === actions.FETCH_DESCRIPTION_SUCCESS) {
        // Find the index of the matching repository
        const index = state.findIndex(repository =>
            repository.name === action.repository
        );

        if (index === -1) {
            throw new Error('Could not find repository');
        }

        const before = state.slice(0, index);
        const after = state.slice(index + 1);
        const newRepository = Object.assign({}, state[index], {
            description: action.description
        });
        return [...before, newRepository, ...after];
    }
    else if (action.type === actions.FETCH_DESCRIPTION_ERROR) {
        // Find the index of the matching repository
        const index = state.findIndex(repository =>
            repository.name === action.repository
        );

        if (index === -1) {
            throw new Error('Could not find repository');
        }

        const before = state.slice(0, index);
        const after = state.slice(index + 1);
        const newRepository = Object.assign({}, state[index], {
            description: 'N/A'
        });
        return [...before, newRepository, ...after];
    }

    return state;
}