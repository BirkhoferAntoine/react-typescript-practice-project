import {type FC} from "react";
import Button from '../UI/Button.tsx';

type SessionItemProps = {
    id: string;
    title: string;
    summary: string;
    image: string;
};

const SessionItem: FC<SessionItemProps> = ({id, title, summary, image}) => {
    return (
        <article className={'session-item'}>
            <img src={image} alt={'Image describing the session'} />
            <div className={'session-data'}>
                <h3>{title}</h3>
                <p>{summary}</p>
                <div className={'actions'}>
                    <Button to={'/sessions/'+id}>Learn more</Button>
                </div>
            </div>
        </article>
    );
};

export default SessionItem;