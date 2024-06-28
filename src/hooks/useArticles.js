import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { normContent } from '../services/normContent';
import { parseArticleTitles } from '../services/xmlParser';

export const useArticles = () => {
  const { idNorma } = useParams();
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [articleTitles, setArticleTitles] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await normContent(idNorma);
        setContent(data);
        setArticleTitles(parseArticleTitles(data));
      } catch (error) {
        setError(error.message);
      }
    };

    if (idNorma) {
      fetchContent();
    }
  }, [idNorma]);

  return { content, error, articleTitles };
};
