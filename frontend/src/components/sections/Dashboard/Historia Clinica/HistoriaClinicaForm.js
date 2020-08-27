import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Title from '../Title'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ConsultasTable from './ConsultasTable'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    personales: {},
    fisicos:{},
    enfermedades: {base:{}},
    habitos: {},
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <ConsultasTable/>
      <div>
        <Title>Datos Personales</Title>
        <TextField
          label="Nro. Socio"
          id="nroSocio"
          value={values.personales.nroId}
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">Nro</InputAdornment>,
          }}
        />
        <TextField
          label="Nombre"
          id="formNombre"
          value={values.personales.nombre}
          className={clsx(classes.margin, classes.textField)}
        />
        <TextField
          label="Apellido"
          id="formApellido"
          value={values.apellido}
          className={clsx(classes.margin, classes.textField)}
        />
        <TextField
          label="Edad"
          id="formEdad"
          value={values.personales.edad}
          className={clsx(classes.margin, classes.textField)}
        />
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel shrink id="select-nacionalidad">Nacionalidad</InputLabel>
          <Select
            labelId="select-nacionalidad-label"
            id="select-nacionalidad-label"
            value={values.personales.nacionalidad}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
          <MenuItem value="">
            <em>Sin datos</em>
          </MenuItem>
          <MenuItem value={1}>Argentina</MenuItem>
          <MenuItem value={2}>Rusia</MenuItem>
          <MenuItem value={3}>Alemania</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Domicilio"
          id="formDomicilio"
          value={values.personales.domicilio}
          className={clsx(classes.margin, classes.textField)}
        />
        <TextField
          label="Telefono"
          id="telefono"
          value={values.personales.telefono}
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">#</InputAdornment>,
          }}
        />
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel shrink id="select-sexo">Sexo</InputLabel>
          <Select
            labelId="select-sexo-label"
            id="select-sexo-label"
            value={values.personales.sexo}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
          <MenuItem value="">
            <em>Sin datos</em>
          </MenuItem>
          <MenuItem value={1}>Masculino</MenuItem>
          <MenuItem value={2}>Femenino</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel shrink id="select-sexo">Estado civil</InputLabel>
          <Select
            labelId="select-estadoCivil-label"
            id="select-estadoCivil-label"
            value={values.personales.estadoCivil}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
          <MenuItem value="">
            <em>Sin datos</em>
          </MenuItem>
          <MenuItem value={1}>Soltero</MenuItem>
          <MenuItem value={2}>Casado</MenuItem>
          <MenuItem value={3}>Viudo</MenuItem>
          <MenuItem value={4}>Divorciado</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel shrink id="select-sexo">Obra Social</InputLabel>
          <Select
            labelId="select-obraSocial-label"
            id="select-obraSocial-label"
            value={values.personales.obraSocial}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
          <MenuItem value="">
            <em>Sin datos</em>
          </MenuItem>
          <MenuItem value={1}>OSDE</MenuItem>
          <MenuItem value={2}>Swiss Medical</MenuItem>
          <MenuItem value={3}>Sancor</MenuItem>
          <MenuItem value={4}>Union Personal</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Ocupacion"
          id="formOcupacion"
          value={values.personales.ocupacion}
          className={clsx(classes.margin, classes.textField)}
        />
        <TextField
          label="Religion"
          id="formReligion"
          value={values.personales.religion}
          className={clsx(classes.margin, classes.textField)}
        />
      </div>
      <div>
        <Title>Datos fisicos</Title>
        <TextField
          label="Peso"
          id="formPeso"
          value={values.fisicos.peso}
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="finish">Kg</InputAdornment>,
          }}
        />
        <TextField
          label="Altura"
          id="formAltura"
          value={values.personales.nombre}
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="finish">cm</InputAdornment>,
          }}
        />
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel shrink id="select-dieta">Dieta</InputLabel>
          <Select
            labelId="select-dieta-label"
            id="select-dieta-label"
            value={values.fisicos.dieta}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
          <MenuItem value="">
            <em>Sin datos</em>
          </MenuItem>
          <MenuItem value={1}>Omnivoro</MenuItem>
          <MenuItem value={2}>Vegano</MenuItem>
          <MenuItem value={3}>Carnivoro</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel shrink id="select-apetito">Apetito</InputLabel>
          <Select
            labelId="select-apetito-label"
            id="select-apetito-label"
            value={values.fisicos.apetito}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
          <MenuItem value="">
            <em>Sin datos</em>
          </MenuItem>
          <MenuItem value={1}>Normal</MenuItem>
          <MenuItem value={2}>Excesivo</MenuItem>
          <MenuItem value={2}>Escaso</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel shrink id="select-sueño">Sueño</InputLabel>
          <Select
            labelId="select-sueño-label"
            id="select-sueño-label"
            value={values.fisicos.sueño}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
          <MenuItem value="">
            <em>Sin datos</em>
          </MenuItem>
          <MenuItem value={1}>Bueno</MenuItem>
          <MenuItem value={2}>Regular</MenuItem>
          <MenuItem value={3}>Malo</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel shrink id="select-sexo">Obra Social</InputLabel>
          <Select
            labelId="select-obraSocial-label"
            id="select-obraSocial-label"
            value={values.personales.obraSocial}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
          <MenuItem value="">
            <em>Sin datos</em>
          </MenuItem>
          <MenuItem value={1}>OSDE</MenuItem>
          <MenuItem value={2}>Swiss Medical</MenuItem>
          <MenuItem value={3}>Sancor</MenuItem>
          <MenuItem value={4}>Union Personal</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Ocupacion"
          id="formOcupacion"
          value={values.personales.ocupacion}
          className={clsx(classes.margin, classes.textField)}
        />
        <TextField
          label="Religion"
          id="formReligion"
          value={values.personales.religion}
          className={clsx(classes.margin, classes.textField)}
        />
      </div>
      <div>
      <Title>Habitos</Title>
      <h4>Seleccione los habitos correspondientes</h4>
      <FormControlLabel
        control={<Checkbox checked={values.habitos.alcohol} onChange={handleChange} name="Deportes" />}
        label="Deportes"
      />
      <FormControlLabel
        control={<Checkbox checked={values.habitos.alcohol} onChange={handleChange} name="Alcohol" />}
        label="Alchohol"
      />
      <FormControlLabel
        control={<Checkbox checked={values.habitos.drogas} onChange={handleChange} name="Drogas" />}
        label="Drogas"
      />
      <FormControlLabel
        control={<Checkbox checked={values.habitos.medicamentos} onChange={handleChange} name="Medicamentos" />}
        label="Medicamentos"
      />
      <FormControlLabel
        control={<Checkbox checked={values.habitos.cigarrillo} onChange={handleChange} name="Cigarrillo" />}
        label="Cigarrillo"
      />
      <FormControlLabel
        control={<Checkbox checked={values.habitos.otras} onChange={handleChange} name="Otras" />}
        label="Otras"
      />
      </div>
      <div>
      <Title>Antencedentes Medicos</Title>
      <h4>Ha padecido algunas de estas enfermedades?</h4>
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.varicela} onChange={handleChange} name="Varicela" />}
        label="Varicela"
      />
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.hepatitis} onChange={handleChange} name="Hepatitis" />}
        label="Hepatitis"
      />
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.sarampeon} onChange={handleChange} name="Sarampeon" />}
        label="Sarampeon"
      />
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.chagas} onChange={handleChange} name="Chagas" />}
        label="Chagas"
      />
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.covid} onChange={handleChange} name="Covid" />}
        label="Covid"
      />
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.otras} onChange={handleChange} name="Otras" />}
        label="Otras"
      />
      </div>
      <div>
      <h4>Presenta algunas de las siguientes enfermedades de base?</h4>
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.base.hipertension} onChange={handleChange} name="Hipertension" />}
        label="Hipertension"
      />
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.base.cardiovasculares} onChange={handleChange} name="Cardiovasculares" />}
        label="Cardiovasculares"
      />
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.base.cerebrovasculares} onChange={handleChange} name="Cerebrovasculares" />}
        label="Cerebrovasculares"
      />
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.base.diabetes} onChange={handleChange} name="Diabetes" />}
        label="Diabetes"
      />
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.base.asma} onChange={handleChange} name="Asma" />}
        label="Asma"
      />
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.base.tabaquismo} onChange={handleChange} name="Tabaquismo" />}
        label="Tabaquismo"
      />
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.base.cancer} onChange={handleChange} name="Cancer" />}
        label="Cancer"
      />
      </div>
      <div>
      <h4>Alergias</h4>
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.base.hipertension} onChange={handleChange} name="Hipertension" />}
        label="Medicamentos"
      />
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.base.cardiovasculares} onChange={handleChange} name="Cardiovasculares" />}
        label="Insectos"
      />
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.base.cerebrovasculares} onChange={handleChange} name="Cerebrovasculares" />}
        label="Quimicos"
      />
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.base.diabetes} onChange={handleChange} name="Diabetes" />}
        label="Alimentos"
      />
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.base.asma} onChange={handleChange} name="Asma" />}
        label="Clima"
      />
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.base.tabaquismo} onChange={handleChange} name="Tabaquismo" />}
        label="Polen"
      />
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.base.cancer} onChange={handleChange} name="Cancer" />}
        label="Polvo"
      />
      <FormControlLabel
        control={<Checkbox checked={values.enfermedades.base.cancer} onChange={handleChange} name="Cancer" />}
        label="Otros"
      />
      </div>
    </div>
  );
}
