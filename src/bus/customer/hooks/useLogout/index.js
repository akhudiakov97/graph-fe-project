import {useMutation} from '@apollo/react-hooks';
import {loader} from 'graphql.macro';
import {useHistory} from "react-router-dom";
import {book} from "../../../../navigation/book";

const login = loader('./gql/logout.graphql');

export const useLogout = () => {
    const [_logout, {error}] = useMutation(login);
    const history = useHistory();

    const logout = async () => {
        await _logout();

        if (!error) {
            history.push(book.login);
        }
    };

    return {logout}
};
