import { Select, AutoComplete } from 'antd';
import { useEffect, useId, useState } from 'react';

const CmpFilterTask = ({ onChange, tasks }) => {
  const idSelectUser = useId();
  const [getFiltroBusq, setFiltroBusq] = useState({ idUser: '0', name: '' });
  const [options, setOptions] = useState([]);

  const { Option } = Select;

  useEffect(() => {
    const mappedOptions = tasks.map(task => ({
      label: task.name,
      value: task.name,
    }));
    setOptions(mappedOptions);
  }, [tasks]);

  const handleCbUser = value => {
    const name = getFiltroBusq.name;
    const newFiltroBusq = { idUser: value, name };
    setFiltroBusq(newFiltroBusq);
    onChange(newFiltroBusq);
  };

  const handleName = value => {
    const newFiltroBusq = { idUser: getFiltroBusq.idUser, name: value };
    setFiltroBusq(newFiltroBusq);
    onChange(newFiltroBusq);
  };

  return (
    <section className="filter">
      <AutoComplete
        placeholder="Buscar por nombre"
        options={options}
        onSearch={handleName}
        onSelect={handleName}
        value={getFiltroBusq.name}
      />
      <Select
        name="users"
        id={idSelectUser}
        value={getFiltroBusq.idUser}
        style={{
          borderColor: '#5e604b',
        }}
        dropdownStyle={{
          borderColor: '#5e604b',
        }}
        onChange={handleCbUser}
        showSearch
        optionFilterProp="children"
        placeholder=" Selecciona un usuario"
      >
        <Option value="0">Todos Los Usuarios</Option>
        <Option value="66720887f3d27a4d4c6c5e8d">POTRO</Option>
        <Option value="6675bce74e95d2fa340d9e3c">PABLO</Option>
        <Option value="66720867f3d27a4d4c6c5e8b">GOMEZ</Option>
        <Option value="66da50078e17e83dcdc2f7b5">DANI</Option>
      </Select>
    </section>
  );
};

export default CmpFilterTask;
