//INTERFACES DE LOGIN 
export interface User {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  address: string;
  cellPhone: string;
  creationDate: Date;
  email: string;
  fullName: string;
  observations: string;
  isAccepted: boolean;
  isDeleted: boolean;
  rol: {
    id: number;
    name: string;
  },
  vehicle: {
    id: number;
    name: string
  }

}

//INTERFACES DE DE SOLICITUD DE VIAJE
export interface Request {
  clientId: number;
  mark: string;
  model: string;
  failure: string;
}

export interface RequestResponse {
  id: number;
  creationDate: Date;
  lastStatusTravel: number,
  travelEquipmentDTOs: [
    {
      id: number,
      operationDate: Date,
      observation?: string,
      cadete?: string,
      operator: Cliente;
      equipment: Equipment;
      statusTravel: 1;
    }
  ]
}

interface Equipment{
  id: number,
  mark: string;
  model: string,
  failure: string,
  clientId: number,
  cliente: Cliente
}

interface Cliente {
  id: number,
  email?: string,
  fullName?: string,
  address?: string,
  cellPhone?: string;
}