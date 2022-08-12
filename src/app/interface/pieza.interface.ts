export interface Pieza{
    titulo:string;
    largo:string;
    cuerpo:string;
    img: string;
    boquillas: string;
    num_parte:{
      parte1:string;
      parte2?:string;
      parte3?:string;
    };
    tipo:{
      tipo1:string;
      tipo2?:string;
      tipo3?:string;
    }
    sensor:{
      sensor1:string;
      sensor2:string;
      sensor3:string;
    }
    apli_vehicular:string;
    
  
  }