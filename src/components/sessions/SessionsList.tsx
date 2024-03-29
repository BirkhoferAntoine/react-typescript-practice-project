import {type FC} from "react";
import SessionItem from './SessionItem.tsx';

type SessionsListProps = {
    sessionsList: SessionItemType[];
};

type SessionItemType = {
    id: string;
    title: string;
    summary: string;
    description: string;
    duration: number;
    date: string;
    image: string;
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