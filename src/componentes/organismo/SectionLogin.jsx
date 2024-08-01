import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import Field from '../moleculas/Field';
import Button from '../atomos/Buton';
import LinkedList from '../../data/linkenlist';
import './SectionLogin.css';

function SectionLogin() {
  const List = useRef(new LinkedList());
  const [name, setName] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(0);

  const handlerClick = () => {
    const mat = { name, apellido, correo, contraseña };
    List.current.append(mat);
    console.log(List.current);
    Swal.fire({
      title: 'Material Registrado',
      html: `Nombre: ${name}<br/>
             Correo: ${correo}<br/>`,
      imageUrl: './1.jpeg',
      imageWidth: 400,
      imageHeight: 200,
    });

    console.log('Lista de materiales:');
    List.current.print();
    setUpdate(update + 1);
  };

  return (
    <div id="login_section">
      <Field type="text" placeholder="Nombre" text="Nombre" val={name} fnVal={setName}/>
      <Field type="text" placeholder="Apellido" text="Apellido" val={apellido} fnVal={setApellido}/>
      <Field type="text" placeholder="Correo" text="Correo" val={correo} fnVal={setCorreo}/>
      <Field type="password" placeholder="Contraseña" text="Contraseña" val={contraseña} fnVal={setContraseña}/>
      <Button id="button" title="Registrar Material" onclick={handlerClick}/>
      <Button title="Mostrar" onclick={() => setShow(true)} />
      {show && (
        <div id="imprimir">
          <ul>
            {List.current.toArray().map((material, index) => (
              <li key={index}>
                Nombre: {material.name}, Apellido: {material.apellido}, Correo: {material.correo},
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SectionLogin;
