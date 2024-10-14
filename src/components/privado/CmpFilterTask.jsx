import { Select, Input } from 'antd';
import { useId, useState } from 'react';

const CmpFilterTask = ({ onChange }) => {
  const idSelectUser = useId();
  const [getFiltroBusq, setFiltroBusq] = useState({ idUser: '0', name: '' });

  const { Option } = Select;

  const handleCbUser = value => {
    const name = getFiltroBusq.name;
    const newFiltroBusq = { idUser: value, name };
    setFiltroBusq(newFiltroBusq);
    onChange(newFiltroBusq);
  };

  const handleName = event => {
    const name = event.target.value;
    const newFiltroBusq = { idUser: getFiltroBusq.idUser, name };
    setFiltroBusq(newFiltroBusq);
    onChange(newFiltroBusq);
  };

  return (
    <section className="filter">
      <Input placeholder="Filtrar por nombre" onChange={handleName}></Input>
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
