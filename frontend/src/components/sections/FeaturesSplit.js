import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Clínica Médica',
    paragraph: 'El Servicio de Clínica Médica está compuesto por un equipo de profesionales que brinda asistencia médica a pacientes que consultan de manera ambulatoria (en consultorios externos), o que requieren internación por enfermedades agudas y crónicas (en sala general e internación transitoria), y realiza el seguimiento de aquellos enfermos, quirúrgicos y no quirúrgicos, que por su gravedad  o alto riesgo precisaron ingresar en cuidados críticos y resolvieron su cuadro.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Investigaciones Biomédicas
                  </div>
                <h3 className="mt-0 mb-12">
                  Departamento de Investigaciones Biomédicas (DIB)
                  </h3>
                <p className="m-0">
                  El DIB coordina la actividad de investigación institucional en forma centralizada, garantizando el cumplimiento de los aspectos regulatorios y normativos de toda investigación clínica, respetando los derechos de los voluntarios que participen en investigación. Dispone de herramientas tecnológicas de control de gestión y el personal altamente calificados para conducir y monitorear los estudios.                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/investigacionesBioMed.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Calidad y Seguridad
                  </div>
                <h3 className="mt-0 mb-12">
                  Indicadores de calidad y seguridad
                  </h3>
                <p className="m-0">
                  Definimos y monitoreamos el comportamiento de indicadores de calidad y seguridad.  Estos nos permiten medir en el tiempo la adherencia a los procesos de atención y la performance de los mismos.                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/indicadoresSeguridad.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Departamentos y Servicios Médicos
                  </div>
                <h3 className="mt-0 mb-12">
                  Especialidades
                  </h3>
                <p className="m-0">
                  Contamos en la actualidad con un total de tres Departamentos que integran Servicios de especialidades afines. Esta forma de organización busca optimizar la calidad en la atención de nuestros pacientes y su seguridad. Los mismos, desarrollan y aplican protocolos y guías diagnósticas y terapéuticas basadas en la evidencia científica.                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/especialidadesMedicas.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;