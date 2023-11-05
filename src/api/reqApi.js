export default async function reqApi()  { 
    const api=await fetch("https://rickandmortyapi.com/api/character"); 
    const response=await api.json(); 
    return response.results; 
  }