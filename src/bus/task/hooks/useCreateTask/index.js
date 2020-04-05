import {useMutation} from '@apollo/react-hooks';
import {loader} from 'graphql.macro';

const mutationCreateTask = loader('./gql/createTask.graphql');

export const useTaskCreator = () => {
    const [_addTask, {error}] = useMutation(mutationCreateTask);


    const addTask = (task, refetch) => {
        _addTask({
            variables: {
                task
            }
        });

        if (refetch) {
            refetch();
        }
    };

    return {addTask, error}
};
