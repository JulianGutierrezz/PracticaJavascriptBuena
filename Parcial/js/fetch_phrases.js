
export default async function FetchPhrases(url){

    try{

        const resp = await fetch(url);
        const data = await resp.json();
        return data;
        
    }
    catch(err){
        throw new Error(err);
    }
}