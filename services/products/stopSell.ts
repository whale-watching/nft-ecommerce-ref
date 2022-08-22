// Services API
import api from "../api";

const stopSell = async (
    token: string,
    id: string,
    forSale:boolean,    
):Promise<string> => {
  let message = '';
  if (token !== undefined) {
    await api.put(`/products/update/${id}`, {
        forSale:forSale,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(function (response:any) {
        message = response.data;
    }).catch((error) => {
        console.log(error)
    })
  }
  return message;
}

export default stopSell;