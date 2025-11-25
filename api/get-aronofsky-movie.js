import { openai } from "../lib/openai.js";
import { supabase } from "../lib/supabase.js";

export default async function handler(request, response) {
    console.log("Request Body:", request.body); 
    const { favoriteMovie, timeframe, mood, actor  } = request.body;

    const query = generatePrompt(favoriteMovie, timeframe, mood, actor);

    try {
        const embeddingResponse = await openai.embeddings.create({
            model: "text-embedding-ada-002",
            input: query
        })
        const embedding = embeddingResponse.data[0].embedding;

        const { data, error } = await supabase.rpc('match_aronofsky_movies', {
            query_embedding: embedding,
            match_threshold: 0.5,
            match_count: 3
        });

        if (error) {
            console.error("Supabase RPC error:", error);
            return response.status(500).json({ error: "Failed to fetch movie recommendations" });
        }

        return response.status(200).json({ recommendations: data });
    } catch(error) {
        console.error("Error generating embedding:", error);
        return response.status(500).json({ error: "Failed to generate embedding" });    
    }
}

function generatePrompt(favoriteMovie, timeframe, mood, actor) {
    return `My favorite movie is ${favoriteMovie}. I want to find a ${timeframe} movie. The mood I'm looking for is ${mood}. One actor I really admire is ${actor}.`;
}