import {RootState} from "../../../redux/rootReducer";
import {UserState} from "../../../types/userTypes";

export const userList = [
    {
        id: 'u1',
        firstName: 'Jan',
        lastName: 'Kuta',
        state: UserState.NEW,
        email: 'jan.kuta@email.cz',
        username: 'Kuticzech',
        phone: '+420 775 246 369',
        permanentAddress: {
            street: 'Žežická 39',
            city: 'Ústí nad Labem',
            zip: '400 07'
        },
        contactAddress: {
            street: 'Kollárova 964',
            city: 'Nejdek',
            zip: '362 21'
        }
    },
    {
        id: 'u2',
        firstName: 'Huggo',
        lastName: 'Tester',
        state: UserState.VALIDATED,
        email: 'huggo.tester@gmail.com',
        username: 'Huggo',
        phone: '+420 777 246 369',
        permanentAddress: {
            street: 'Vymyšlená 39',
            city: 'Kamenice',
            zip: '100 01'
        }
    },
    {
        id: 'u3',
        firstName: 'Jana',
        lastName: 'Kutová',
        state: UserState.VIP,
        email: 'jana.kutova@email.cz',
        username: 'Janciii',
        phone: '+420 775 246 369',
        permanentAddress: {
            street: 'Kollárova 964',
            city: 'Nejdek',
            zip: '362 21'
        }
    },
];

export const MockApplicationState: RootState = {
    users: {
        loading: false,
        data: userList,
        error: ''
    },
    router: {
        push: jest.fn(),
        replace: jest.fn(),
        go: jest.fn(),
        createHref: jest.fn(),
        createLocation: jest.fn(),
        isActive: jest.fn(),
        matcher: {
            match: jest.fn(),
            getRoutes: jest.fn(),
            isActive: jest.fn(),
            format: jest.fn()
        },
        addTransitionHook: jest.fn()
    }
};
