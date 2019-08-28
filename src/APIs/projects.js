import axios from 'axios';

//Airtable Link: https://airtable.com/tblrGDHK6W7pc5HJp/viwQ35OeVtd7X0BRk?blocks=hide
let source = `https://api.airtable.com/v0/app5RqXptwoi7d656/Projects%20Content?api_key=`;
let key = process.env.REACT_APP_AT_KEY;

const getData = async () => {
  console.log(process.env);
  let response = await axios.get(`${source}${key}`);
  return response.data.records.sort((a, b) => {
    return a.fields.index - b.fields.index;
  })
}

export default getData;
