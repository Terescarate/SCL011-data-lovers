const sortData = (data, sortBy, sortOrder) => {
  let arrOrder = [];
  /* ordenado alfabeticamente */
  if (sortBy === 'name') {
    if (sortOrder === 'A-Z') {
      arrOrder = data.sort(function(abc, bcd) {
        if (abc.name > bcd.name) return 1;
        if (abc.name === bcd.name) return 0;
        return -1;
      });
    } else {
      arrOrder = data.sort(function(abc, bcd) {
        if (bcd.name > abc.name) return 1;
        if (bcd.name === abc.name) return 0;
        return -1;
      });
    }

  /* ordenado por id */
  } else if (sortBy === 'number') {
    if (sortOrder === 'asc') {
      arrOrder = data.sort(function(abc, bcd) {
        if (abc.id > bcd.id) return 1;
        if (abc.id === bcd.id) return 0;
        return -1;
      });
    } else {
      arrOrder = data.sort(function(abc, bcd) {
        if (bcd.id > abc.id) return 1;
        if (bcd.id === abc.id) return 0;
        return -1;
      });
    }
  } 
  return arrOrder;
};

const filterData = (data, condition) => {
  let arrType = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].type.length; x++) {
      if (data[i].type[x] === condition) {
        arrType.push(data[i]);  
      }
    }  
  }
  return arrType;
};



window.POKE = {
  sortData,
  filterData,
  
};