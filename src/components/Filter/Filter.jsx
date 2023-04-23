import { FilterForm, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from 'redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const handleChangeFilter = e => dispatch(setFilters(e.target.value));

  return (
    <FilterForm>
      <label htmlFor="filter">Find contacts by name</label>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </FilterForm>
  );
};

export default Filter;
