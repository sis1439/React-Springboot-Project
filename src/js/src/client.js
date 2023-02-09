const checkStatus = response => {
  if(response.ok) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    response.json().then(e => {
      error.error = e
    });
    return Promise.reject(error);
  }
}

export const getAllCellphones = () => fetch('/cellphone').then(checkStatus);

export const addNewCellphones = cellphone => 
  fetch('/cellphone', {
    headers: {
      'Content-Type':'applivation/json'
    },
    method:'POST',
    body:JSON.stringify(cellphone)
  })
  .then(checkStatus);