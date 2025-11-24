import movies from "../data/movies.js";
import { openai } from "../lib/openai.js";
import { supabase } from "../lib/supabase.js";
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters'


/*
    Split movies into text chunks
    Return LangChain's "output" - the array of Document objects
*/
async function splitText(text) {

}

/*
    Create an embedding from each text chunk.
    Store all embeddings and corresponding text in Supabase
*/
async function createAndStoreEmbeddings() {
    const movieContent = movies
        .map((movie) => movie.content)
        .join("\n");
    console.log(movieContent)
}

await createAndStoreEmbeddings()


