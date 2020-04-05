import {useMutation} from '@apollo/react-hooks';
import {loader} from 'graphql.macro';

const mutationRemoveTask = loader('./gql/removeTask.graphql');

export const useRemoveTask = () => {
    const [_removeTask] = useMutation(mutationRemoveTask);


    const removeTask = (id, refetch) => {
        _removeTask({
            variables: {
                id
            }
        });

        if (refetch) {
            refetch();
        }
    };

    return {removeTask}
};
