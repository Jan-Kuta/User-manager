import {User} from "../../types/userTypes";

export type UsersState = {
    loading: boolean
    data: User[]
    error: string | null
}
