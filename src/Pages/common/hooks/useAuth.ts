import {useCallback, useEffect, useState} from 'react'

interface UserType {
    id: number
    name: string
    isAdmin: boolean
    email: string
    password: string
}

// HARDCODED
const users: UserType[] = [
    {
        "id": 0,
        "name": "John",
        "isAdmin": false,
        "email": "root",
        "password": "root"
    },
    {
        "id": 1,
        "name": "Dani",
        "isAdmin": true,
        "email": "dani@email.com",
        "password": "1234"
    }
]

interface ReturnType {
    user: UserType | undefined
    login: (email: UserType['email'], password: UserType['password']) => boolean
    logout: () => void
}

const useAuth = (): ReturnType => {
    const [currentUser, setCurrentUser] = useState<UserType | undefined>()

    const loadCachedUser = useCallback(() => {
        const cachedUser = localStorage.getItem('user');

        if (cachedUser) {
            setCurrentUser(JSON.parse(cachedUser) as UserType);
        }
    }, [setCurrentUser])

    useEffect(() => {
        loadCachedUser()
    }, [loadCachedUser])

    const login = useCallback((email, password): boolean => {
        // Check utente se è corretto
        const currentLocalUser = users.filter(user => user.email === email && user.password === password)[0]
        if(currentLocalUser) {
            // Login successo
            localStorage.setItem('user', JSON.stringify(currentLocalUser))
            setCurrentUser(currentLocalUser)

            return true
        }
        else {
            // Login error
            return false
        }
    }, [setCurrentUser])

    const logout = useCallback(() => {setCurrentUser(undefined)}, [setCurrentUser])

    const getCurrentUser = useCallback(() => { return currentUser }, []);

    return {
        user: currentUser,
        login,
        logout,
    }
}

export default useAuth
