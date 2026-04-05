// To parse this data:
//
//   import { Convert } from "./file";
//
//   const vademecumPlantData = Convert.toVademecumPlantData(json);

export interface VademecumPlantData {
    nombreDeLaPlanta:                        string;
    nombreCientífico?:                       string;
    sinónimos?:                              string;
    nombresComunes?:                         string;
    parteUtilizada:                          string;
    usosTradicionales:                       string;
    principalesConstituyentes:               string;
    actividadFarmacológica:                  string;
    indicaciones:                            string;
    posología:                               string;
    contraindicacionesYPrecauciones?:        string;
    toxicidad?:                              string;
    formasFarmacéuticas?:                    string;
    bibliografía?:                           string;
    interacciónConOtrosMedicamentos?:        string;
    nombresCientíficos?:                     string;
    formasFarmacéuticasYOtrasPreparaciones?: string;
    bibliografia?:                           string;
    nombreComún?:                            string;
    contraindicaciones?:                     string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toVademecumPlantData(json: string): VademecumPlantData {
        return JSON.parse(json);
    }

    public static vademecumPlantDataToJson(value: VademecumPlantData): string {
        return JSON.stringify(value);
    }
}
