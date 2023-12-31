import { useContext } from 'react'
import { AuthContext } from './../../contexts/auth.context'

const ProfilePage = () => {

    const { loggedUser } = useContext(AuthContext)

    return (
        <h1>Perfil de {loggedUser.username}</h1>
    )
}

export default ProfilePage