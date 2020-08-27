import React, { useRef } from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

export default function ConsultasTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Id', field: 'id', type:'number' },
      {
        title: 'Paciente',
        field: 'paciente',
        lookup: { 1: 'Paciente 1', 2: 'bryan', 3: 'jeny', 4: 'william' },
      },
      {
        title: 'Medico',
        field: 'medico',
        lookup: { 1: 'Dr. One', 2: 'Dr. Two', 3: 'Dr. favaloro', 4: 'Dr. strange' },
      },
      { title: 'Fecha', field: 'fechaCarga', type: 'date' },
      { title: 'Resumen', field: 'resumen'},
    ],
    data: [
      {
        id: '1',
        paciente: 1,
        medico: 2,
        fechaCarga: '01/02/2020',
        resumen:'Se encuentra con fiebre alta y dolor de garganta'
      },
      {
        id: '2',
        paciente: 1,
        medico: 2,
        fechaCarga: '01/02/2020',
        resumen:'Consulta dolor estomacal'
      },
      {
        id: '3',
        paciente: 1,
        medico: 3,
        fechaCarga: '01/02/2020',
        resumen:'Consulta dolor de oidos'
      },
      {
        id: '4',
        paciente: 1,
        medico: 4,
        fechaCarga: '01/02/2020',
        resumen:'Migraña'
      },
    ],
    
  });

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const inputFile = useRef(null);

const onButtonClick = () => {
  // `current` points to the mounted file input element
 inputFile.current.click();
};

const actions = [
    {
      icon: tableIcons.Add,
      tooltip: 'Adjuntar archivo',
      onClick: {onButtonClick},
      position: "row"
    }
];

  return (
    
    <MaterialTable
      actions={actions}
      icons={tableIcons}
      title="Consultas"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
      localization={{
        pagination: {
            labelDisplayedRows: '{from}-{to} de {count}'
        },
        toolbar: {
            nRowsSelected: '{0} fila(s) seleccionadas',
            searchTooltip: 'Buscar',
            searchPlaceholder:'Ingrese dato a buscar'
        },
        header: {
            actions: 'Acciones'
        },
        body: {
            addTooltip: 'Nueva consulta',
            deleteTooltip:'Eliminar',
            editTooltip:'Editar',
            emptyDataSourceMessage: 'Sin registros',
            filterRow: {
                filterTooltip: 'Filtros',
                filterPlaceHolder: 'Filtros'
            },
            editRow: {
              deleteText: 'Esta seguro de eliminar consulta?',
              cancelTooltip: 'Cancelar',
              saveTooltip:'Guardar'
          }
        }
    }}
    options={{
      filtering: true,
      actionsColumnIndex: -1,
      selection: true
    }}
    />
  );
}
