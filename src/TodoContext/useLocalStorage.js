import React from 'react';


function useLocalStorage(itemName, initialValue) {//no se puede poner initial value entre corchetes es un prop
    
    /*
    - Se asigna el initialvalue como valor inicial y es para preguntar si
    si el array esta vacio porque es el estado inicial o está vacío por
    que está cargando los componentes.
    - Por eso crearemos un estado de carga y ademas un estado de error
    */
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true); //El estado inicial es cargando
    const [error, setError] = React.useState(false); //El estado inicial es que no hay error
    
    React.useEffect(() => {
        /*
        - Para simular que esto se demora un poco y para eliminar el bucle infinito que se estaba ejecutando
        - Error de máximun update depth es el que sale multiples veces
        */
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
        
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                parsedItem = JSON.parse(localStorageItem)
                //Si habia algo distinto con el initial value o no se cumple el if de arriba
                setItem(parsedItem)
                }
        
                setLoading(false)
                } catch (error) {//Es mejor enviar algo descriptivo al usuario a que le mandemos algun tipo de error
                    setLoading(false);
                    setError(true);
                }
        }, 2000); 
   }, [initialValue, itemName]);
  
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    };
  //cuando devolvemos más de un elemento debemos devolverlo como un objeto
    return  {
        item,
        saveItem,
        loading,
        error
    };
  }

  export { useLocalStorage }