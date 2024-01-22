// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.



export const sortData = (data, sortBy, sortOrder) => {

  const orderData= data.toSorted((a, b) => {
    if(sortOrder === 'asc'){
     if(a[sortBy] === b[sortBy]){
      return 0;
     }
     if(a[sortBy] < b[sortBy]){
      return -1;
     }
     return 1;
    }});
  
    console.log(orderData);
    return orderData;

  };
  


