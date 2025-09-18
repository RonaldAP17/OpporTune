function JobListItem(props) {

    let estiloEstado = " ";

    if (props.estado === "Entrevista") {
    estiloEstado =
        "inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800";
    } else if (props.estado === "Aplicado") {
    estiloEstado =
        "inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800";
    } else if (props.estado === "Rechazado") {
    estiloEstado =
        "inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800";
    }

  return (
    <div className="job-cards-container space-y-4 m-auto">
      <div className="p-6 w-100 bg-slate-200 rounded-lg shadow-md hover:shadow-lg flex flex-row items-center space-x-4">
        <div className="shrink-0">
          <img
            className="h-12 w-12"
            src="https://via.placeholder.com/150"
            alt="Logo"
          />
        </div>
        <div className="space-y-2">
          <p className="text-gray-900">
            <span className="font-bold">Empresa: </span>{props.empresa}
          </p>
          <p className="text-gray-900">
            <span className="font-bold">Rol: </span>{props.rol}
          </p>
          <p className="text-gray-900">
            <span className="font-bold">Fecha: </span>{props.fecha}
          </p>
          <p className="text-gray-900">
            <span className={estiloEstado}>
              {props.estado}
            </span>
          </p>
          <div className="space-x-4">
            <a
              className="font-medium text-indigo-600 hover:text-indigo-900"
              href=""
            >
              Editar
            </a>
            <a
              className="font-medium text-indigo-600 hover:text-indigo-900"
              href=""
            >
              Eliminar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobListItem;
