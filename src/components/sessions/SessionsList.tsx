import {type FC} from "react";
import SessionItem from './SessionItem.tsx';
import { SessionType } from '../../context/sessions-context.tsx';

type SessionsListProps = {
    sessionsList: SessionType[];
};


const SessionsList: FC<SessionsListProps> = ({sessionsList}) => {
    return (
        <ul id={'sessions-list'}>
            {sessionsList.map((session) => {
                return <li>
                    <SessionItem {...session} key={'session-' + session.id} />
                </li>;
            })}
        </ul>
    )
};

export default SessionsList;