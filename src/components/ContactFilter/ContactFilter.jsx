import { useSelector, useDispatch } from 'react-redux';

import { selectFilter } from 'redux/contacts/selectors';
import { filtered } from 'redux/contacts/filterSlice';

import { Filter, Label, Input } from './ContactFilter.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = ({ target }) => dispatch(filtered(target.value));

  return (
    <Filter>
      <Label>
        Filter
        <Input
          type="text"
          name="filter"
          placeholder="Enter name"
          value={filter}
          onChange={handleFilter}
        />
      </Label>
    </Filter>
  );
};
