export const findArray = (data: any, dataType: string[]) => {
    if (data) {
        let output = data; 
        dataType.forEach((type) => {
            if (output[type]) output = output[type];
        });
        return output;
    }
};