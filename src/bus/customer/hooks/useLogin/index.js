import {useMutation} from '@apollo/react-hooks';
import {loader} from 'graphql.macro';
import {book} from "../../../../navigation/book";
import {useHistory} from "react-router-dom";

const login = loader('./gql/login.graphql');

export const useLogin = () => {
    const [_login, {error}] = useMutation(login);
    const history = useHistory();

    const authenticate = async (customer) => {
        const data = await _login({
            variables: {
                customer
            }
        });

        if (data) {
            history.push(book.tasks);
        }
    };

    return {
        authenticate,
        error
    }
};
