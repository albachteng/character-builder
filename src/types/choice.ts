export interface choice {
    [key: string]: any, // can we rule out that the choices will have other fields? 
    choose: number,
    from: any[]; // !  
}