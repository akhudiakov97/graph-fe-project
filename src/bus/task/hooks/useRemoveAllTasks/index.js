import {useMutation} from '@apollo/react-hooks';
import {loader} from 'graphql.macro';

const mutationRemoveTasks = loader('./gql/cleanTasks.graphql');

export const useTasksCleaner = () => {
    const [removeAllTasks] = useMutation(mutationRemoveTasks);

    return {removeAllTasks}
};
