export const parsePublishedAt = (date) => {
    let newDate = new Date(Date.parse(date));
    newDate = `${newDate.toLocaleTimeString('it-IT', {  hour: '2-digit', minute: '2-digit'})}  
               ${String(newDate.getDate()).padStart(2, '0')} 
               ${String(newDate.getMonth()).padStart(2, '0')} 
               ${newDate.getFullYear()}`;
    return newDate;
}