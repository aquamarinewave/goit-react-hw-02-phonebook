import {Header} from './Section.styled';

const Section = ({ title, children }) => {
    return (
        <div>
            <Header>{title}</Header>
            {children}
        </div>
    )
}

export default Section;