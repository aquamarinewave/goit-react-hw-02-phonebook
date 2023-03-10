import { LabelFilter, InputFilter } from './Filter.styled'
import { nanoid } from 'nanoid';

const filterId = nanoid();

const Filter = ({ value, onChange }) => {
    
    return (
          <LabelFilter htmlFor={filterId}>
                Fined contscts by name
                <InputFilter
                    id={filterId}
                    type="text"
                    value={value}
                    onChange={onChange}
                />
        </LabelFilter>
)
}
export default Filter;