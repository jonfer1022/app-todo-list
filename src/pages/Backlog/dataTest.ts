type IUser = {
  user: string,
  requested: { id: number, title: string, description: string }[],
  inProgress: { id: number, title: string, description: string }[],
  done: { id: number, title: string, description: string }[]
};

const user:IUser[] = [
  { 
    user: "jonathan",
    requested: [
      { id: 1, title: "uno", description: `Alguna descripción de la tarea` },
      { id: 2, title: "dos", description: `Alguna descripción de la tarea` },
      { id: 3, title: "tres", description: `Alguna descripción de la tarea` },
      { id: 4, title: "cuatro", description: `Alguna descripción de la tarea` },
      { id: 5, title: "cinco", description: `Alguna descripción de la tarea` },
    ],
    inProgress: [
      { id: 6, title: "seis", description: `Alguna descripción de la tarea` },
      { id: 7, title: "siete", description: `Alguna descripción de la tarea` },
      { id: 8, title: "ocho", description: `Alguna descripción de la tarea` },
      { id: 9, title: "nueve", description: `Alguna descripción de la tarea` },
      { id: 10, title: "diez", description: `Alguna descripción de la tarea` },
    ],
    done: [
      { id: 11, title: "once", description: `Alguna descripción de la tarea` },
      { id: 12, title: "doce", description: `Alguna descripción de la tarea` },
      { id: 13, title: "trece", description: `Alguna descripción de la tarea` },
      { id: 14, title: "catorce", description: `Alguna descripción de la tarea` },
      { id: 15, title: "quince", description: `Alguna descripción de la tarea` },
    ]
  },
  { 
    user: "fernando",
    requested: [
      { id: 1, title: "uno", description: `Alguna descripción de la tarea` },
      { id: 2, title: "dos", description: `Alguna descripción de la tarea` },
      { id: 3, title: "tres", description: `Alguna descripción de la tarea` },
      { id: 4, title: "cuatro", description: `Alguna descripción de la tarea` },
      { id: 5, title: "cinco", description: `Alguna descripción de la tarea` },
    ],
    inProgress: [
      { id: 6, title: "seis", description: `Alguna descripción de la tarea` },
      { id: 7, title: "siete", description: `Alguna descripción de la tarea` },
      { id: 8, title: "ocho", description: `Alguna descripción de la tarea` },
      { id: 9, title: "nueve", description: `Alguna descripción de la tarea` },
      { id: 10, title: "diez", description: `Alguna descripción de la tarea` },
    ],
    done: [
      { id: 11, title: "once", description: `Alguna descripción de la tarea` },
      { id: 12, title: "doce", description: `Alguna descripción de la tarea` },
      { id: 13, title: "trece", description: `Alguna descripción de la tarea` },
      { id: 14, title: "catorce", description: `Alguna descripción de la tarea` },
      { id: 15, title: "quince", description: `Alguna descripción de la tarea` },
    ]
  }
]

export default user;