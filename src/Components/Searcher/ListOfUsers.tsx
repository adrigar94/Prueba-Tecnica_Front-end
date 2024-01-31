import { Link } from "react-router-dom";
import { UserList } from "../../types";

type Props = { users: UserList[] | undefined, loading: boolean }
function ListOfUsers({ users, loading }: Props) {
    return (
        <div>
            {users !== undefined && <h2>Users</h2>}
            <div>
                {users && users.length > 0 && !loading && (
                    users.map((user) => (
                        <div key={user.id}>
                            <Link to={`/user/${user.login}`}>{user.id} - {user.login}</Link>
                        </div>
                    ))
                )}
            </div>
            {users !== undefined && users.length == 0 && !loading && <span>No hay resultados para mostrar</span>}
            {loading && <span>Cargando...</span>}
        </div>
    );
}

export default ListOfUsers