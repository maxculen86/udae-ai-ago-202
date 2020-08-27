import React from 'react';
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
import { fetchUsers } from '../../../controller/apiMed.controller';

export default function MaterialTableDemo() {
  
  const requestUserData = async function(){

    let fetchUsersResult = await fetchUsers();
    if (fetchUsersResult.responseStatus === 0){
      return formatJsonGrid(fetchUsersResult.data);
    }
    if (fetchUsersResult.responseStatus === 1){
      alert(fetchUsersResult.mensaje);
    }
  }

  function formatJsonGrid (jsonObject) {
    var dataGrid = [];
    var i;
    for (i = 0; i < jsonObject.length; i++) {
      //console.log("dataI", dataGrid.data[i]);
      var newEntry = {"id" : i + 1,
                      "nombre" : jsonObject[i].name,
                      "apellido" :jsonObject[i].name,
                      "perfil":jsonObject[i].profile,
                      "fechaAlta":jsonObject[i].dateCreation,
                      "fechaBaja":jsonObject[i].dateDelete
      };
      dataGrid.push(newEntry);
    }
    return dataGrid;
  }

  var dataResult = [
    {
      id: '1',
      nombre: 'Admin',
      apellido: 'test',
      perfil: 1,
      fechaAlta: '01/02/2020',
      fechaBaja:''
    },
    {
      id: '2',
      nombre: 'Paciente 1',
      apellido: 'Test',
      perfil: 4,
      fechaAlta: '01/02/2020',
      fechaBaja:''
    },
    {
      id: '3',
      nombre: 'Medico 1',
      apellido: 'Test',
      perfil: 2,
      fechaAlta: '01/02/2020',
      fechaBaja:''
    },
    {
      id: '4',
      nombre: 'Secretaria',
      apellido: 'Test',
      perfil: 3,
      fechaAlta: '01/02/2020',
      fechaBaja:''
    },
    {
      id: '5',
      nombre: 'Paciente 2',
      apellido: 'Test',
      perfil: 4,
      fechaAlta: '01/02/2020',
      fechaBaja:''
    },
    {
      id: '6',
      nombre: 'Medico 2',
      apellido: 'Test',
      perfil: 2,
      fechaAlta: '01/02/2020',
      fechaBaja:''
    },
    {
      id: '7',
      nombre: 'Secretaria 2',
      apellido: 'Test',
      perfil: 3,
      fechaAlta: '01/02/2020',
      fechaBaja:''
    },
  ];
  
  let requestresult = requestUserData;

  console.log("DATARESUTL", dataResult);
  console.log("REQUESTRESUTL", requestresult);
  const [state, setState] = React.useState({
    columns: [
      { title: 'Id', field: 'id' },
      { title: 'Nombre', field: 'nombre' },
      { title: 'Apellido', field: 'apellido' },
      {
        title: 'Perfil',
        field: 'perfil',
        lookup: { 1: 'Administrador', 2: 'Medico', 3: 'Secretaria', 4: 'Paciente' },
      },
      { title: 'Fecha Alta', field: 'fechaAlta', type: 'date' },
      { title: 'Fecha Baja', field: 'fechaBaja', type: 'date' },
    ],
    data: [
      {
        id: '1',
        nombre: 'Cacho',
        apellido: 'Fontana',
        perfil: 1,
        fechaAlta: '01/02/2020',
        fechaBaja:''
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

//const data2 = requestUserData();
//state.data = data2;
console.log("stateDAta", state.data);

  return (

    <MaterialTable
      icons={tableIcons}
      title="Administracion de Usuarios"
      columns={state.columns}
      data={dataResult}
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
            addTooltip: 'Nuevo',
            deleteTooltip:'Eliminar',
            editTooltip:'Editar',
            emptyDataSourceMessage: 'Sin registros',
            filterRow: {
                filterTooltip: 'Filtros',
                filterPlaceHolder: 'Filtros'
            },
            editRow: {
              deleteText: 'Esta seguro de eliminar usuario?',
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
