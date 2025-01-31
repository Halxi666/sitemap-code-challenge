import { useState } from 'react';
import { fetchNews } from '../services/newsApi';
import { Article } from '../models/Article';

export function useNewsViewModel() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query.trim()) {
      setError('Please enter a search term.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const { articles } = await fetchNews(query);
      setArticles(articles);
    } catch (err) {
      setError('Failed to fetch news.');
    } finally {
      setLoading(false);
    }
  };

  return { query, setQuery, articles, loading, error, handleSearch };
}
