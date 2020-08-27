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
import FileUpload from '@boomi/react-file-upload';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Id', field: 'id', type:'text' },
      { title: 'Destinatario', field: 'destinatario', type: 'text' },
      { title: 'Conepto', field: 'concepto', type: 'text' },
      { title: 'Descripcion', field: 'descripcion', type: 'text' },
      { title: 'Fecha Carga', field: 'fechaCarga', type: 'date' },
      { title: 'Valido Hasta', field: 'validoHasta', type: 'date' },
      { title: 'Archivo', field: 'archivo', type: 'file' },
    ],
    data: [
      {
        id: '1',
        destinatario:'Paciente 1',
        concepto:'Novedad',
        descripcion:'Actualizar por favor datos personales',
        fechaCarga: '01/02/2020',
        validoHasta:'01/03/2020'
      },
      {
        id: '2',
        destinatario:'Todos',
        concepto:'Novedad',
        descripcion:'Regularizar cuenta',
        fechaCarga: '01/02/2020',
        validoHasta:'01/03/2020'
      },
      {
        id: '1',
        destinatario:'Secretaria 1',
        concepto:'Novedad',
        descripcion:'Acudir',
        fechaCarga: '01/02/2020',
        validoHasta:'01/03/2020'
      },
      {
        id: '1',
        destinatario:'Medico 1',
        concepto:'Novedad',
        descripcion:'Actualizar por favor datos personales',
        fechaCarga: '01/02/2020',
        validoHasta:'01/03/2020'
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

const uploadFile = () => (
<input type="file" id="fileInput"></input>
  )


const actions = [
    {
      icon: tableIcons.Add,
      tooltip: 'Adjuntar archivo',
      onClick: uploadFile,
      position: "row"
    }
];

  return (
    
    <MaterialTable
      actions={actions}
      
      icons={tableIcons}
      title="Novedades"
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
            addTooltip: 'Nueva novedad',
            deleteTooltip:'Eliminar',
            editTooltip:'Editar',
            emptyDataSourceMessage: 'Sin registros',
            filterRow: {
                filterTooltip: 'Filtros',
                filterPlaceHolder: 'Filtros'
            },
            editRow: {
              deleteText: 'Esta seguro de eliminar novedad?',
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
