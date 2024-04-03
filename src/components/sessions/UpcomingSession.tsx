import {type FC} from "react";
import Button from '../UI/Button.tsx';
import { SessionType } from '../../context/sessions-context.tsx';

type UpcomingSessionProps = {
    onCancel: (id: string) => void;
    session: SessionType;
};

const UpcomingSession: FC<UpcomingSessionProps> = ({onCancel, session}) => {
    return (
        <article className={'upcoming-session'}>
            <div>

                <h3>{session.title}</h3>
                <p>{session.summary}</p>
                <time dateTime={new Date(session.date).toISOString()}>
                    {
                        new Date(session.date).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                        })
                    }
                </time>
            </div>
            <p className={'actions'}>
                <Button onClick={() => onCancel(session.id)} className={'button--text-only'}>
                    Cancel
                </Button>
            </p>
        </article>
    );
};

export default UpcomingSession;