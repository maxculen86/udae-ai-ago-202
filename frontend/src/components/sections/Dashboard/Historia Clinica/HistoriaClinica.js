import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ReactSearchBox from 'react-search-box';
import HistoriaClinicaForm from './HistoriaClinicaForm';
import Title from '../../../layout/Dashboard/Title'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  const data = [
    {
      key: '1',
      value: 'Paciente 1',
    },
    {
      key: '2',
      value: 'Paciente 2',
    },
    {
      key: '3',
      value: 'Paciente 3',
    },
    {
      key: '4',
      value: 'Paciente 4',
    },
    {
      key: '5',
      value: 'Paciente 5',
    },
  ]

  const [show, toggleShow] = React.useState(true);

  return (
    <>
        <Title>Historia Clinica</Title>
        <div className="divider" />
        <ReactSearchBox
        placeholder="Ingrese nombre de paciente"
        data={data}
        onSelect={() => toggleShow(!show)}
        onFocus={() => {
            console.log('This function is called when is focussed')
        }}
        onChange={value => console.log(value)}
        fuseConfigs={{
            threshold: 0.05,
        }}
        value=""
        />
        <div className="divider" />
        {!show && <HistoriaClinicaForm/>}
    </>
  )
}
