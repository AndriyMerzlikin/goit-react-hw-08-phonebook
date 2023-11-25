export const Filter = ({ filter, onUpdateFilter }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        onChange={evt => onUpdateFilter(evt.target.value)}
        placeholder="find name"
      ></input>
    </div>
  );
};
