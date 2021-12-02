// --------------------------------------
//        INTERFACES DE LOGIN 
// --------------------------------------
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

export interface UserData{
  clientId: number;
  email: string;
  fullName: string;
  address?: string;
  cellPhone?: string;
}
// --------------------------------------
//  INTERFACES DE DE SOLICITUD DE VIAJE
// --------------------------------------
export interface Request {
  clientId: number;
  mark: string;
  model: string;
  failure: string;
}

export interface RequestResponse {
  id: number;
  creationDate: string;
  lastStatusTravel: number,
  travelEquipmentDTOs: TravelEquipmentDTO[]
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
// --------------------------------------
//       INTERFACES DE EQUIPMENT
// --------------------------------------
export interface EquipmentResponse{
  equipmentId: number;
  mark?: string;
  model?: string;
  failure?: string;
  travelEquipmentDTOs: TravelEquipmentDTO[];
}

interface TravelEquipmentDTO {
  id: number;
  operationDate: string;
  observation?: string;
  cadete?: Cadete;
  operator: Cliente;
  equipment?: string;
  statusTravel: number;
}

interface Cadete {
  id: number;
  email: string;
  fullName: string;
  address: string;
  cellPhone: string;
}