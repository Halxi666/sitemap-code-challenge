import { Article } from '../models/Article';

const API_KEY = '183daca270264bad86fc5b72972fb82a';
const API_URL = 'https://newsapi.org/v2/everything';

export const fetchNews = async (
  query: string,
): Promise<{ articles: Article[]; error: string | null }> => {
  try {
    const response = await fetch(`${API_URL}?q=${query}&apiKey=${API_KEY}`);
    const data = await response.json();

    if (data.articles) {
      return { articles: data.articles, error: null };
    } else {
      return { articles: [], error: 'No articles found.' };
    }
  } catch (error) {
    return { articles: [], error: 'Failed to fetch news.' };
  }
};
