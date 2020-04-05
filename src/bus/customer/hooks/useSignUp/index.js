import {useMutation} from '@apollo/react-hooks';
import {loader} from 'graphql.macro';

const mutationSignUp = loader('./gql/signUp.graphql');

export const useSignUp = () => {
    const [_saveCustomer, {data, error}] = useMutation(mutationSignUp);


    const saveCustomer = (customer) => {
        _saveCustomer({
            variables: {
                customer
            }
        })
    };

    const createdCustomer = data && data.signUp;

    return {
        saveCustomer,
        createdCustomer,
        error
    }
};
