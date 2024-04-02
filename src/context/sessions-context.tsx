import { createContext, ReactNode, useContext, useReducer, useState } from 'react';

type SessionsContextProps = {
    children: ReactNode;
}

export type SessionType = {
    id: string;
    title: string;
    summary: string;
    description: string;
    duration: number;
    date: string;
    image: string;
};

type SessionState = {
    bookedSessions: SessionType[];
}

type SessionContextValue = SessionState & {
    addSession: (sessionData: SessionType) => void;
    removeSession: (id: string) => void;
}

type AddSessionAction = {
    type: 'ADD_SESSION';
    session: SessionType;
}

type RemoveSessionAction = {
    type: 'REMOVE_SESSION';
    id: string;
}

type SessionAction = AddSessionAction | RemoveSessionAction;

function sessionReducer(state: SessionState, action: SessionAction) {

    if (action.type === 'ADD_SESSION') {
        if(state.bookedSessions.some(value => value.id === action.session.id)) {
            return state;
        }
        return {
            ...state,
            sessions: state.bookedSessions.concat(action.session)
        }
    }

    if (action.type === 'REMOVE_SESSION') {
        return {
            ...state,
            sessions: state.bookedSessions.filter(value => value.id !== action.id)
        }
    }

    return state;
}


const SessionsContext = createContext<SessionContextValue | null>(null);
export function useSessionsContext() {
    const sessionsCtx = useContext(SessionsContext);

    if (sessionsCtx === null) throw new Error('Something went wrong! Sessions Context is null');

    return sessionsCtx;
}
const SessionsContextProvider = ({children}: SessionsContextProps) => {

    const [sessionsState, dispatch] = useReducer(sessionReducer, {bookedSessions: []});

    function addSession(sessionData: SessionType) {
        dispatch({type: 'ADD_SESSION', session: sessionData});
    }

    function removeSession(id: string) {
        dispatch({type: 'REMOVE_SESSION', id});
    }

    const ctx = {
        bookedSessions: sessionsState.bookedSessions,
        addSession, removeSession
    }
    return (
        <SessionsContext.Provider value={ctx}>
            {children}
        </SessionsContext.Provider>
    );
};

export default SessionsContextProvider;

