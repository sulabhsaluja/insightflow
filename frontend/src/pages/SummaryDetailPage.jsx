import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Same custom renderers used on the Upload page, so a summary looks
// identical whether it's viewed right after generation or from History.
const markdownComponents = {
  h1: ({ children }) => <h3 className="summary-md-heading">{children}</h3>,
  h2: ({ children }) => <h3 className="summary-md-heading">{children}</h3>,
  h3: ({ children }) => <h4 className="summary-md-subheading">{children}</h4>,
  p: ({ children }) => <p className="summary-md-paragraph">{children}</p>,
  strong: ({ children }) => <strong className="summary-md-strong">{children}</strong>,
  ul: ({ children }) => <ul className="summary-md-list">{children}</ul>,
  ol: ({ children }) => <ol className="summary-md-list summary-md-list-ordered">{children}</ol>,
  li: ({ children }) => <li className="summary-md-list-item">{children}</li>,
  hr: () => <hr className="summary-md-divider" />,
};

const SummaryDetailPage = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'}/summaries/${id}`, {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        const data = await res.json();
        
        if (!res.ok) throw new Error(data.message || 'Failed to fetch summary');
        
        setSummary(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (user && id) {
      fetchSummary();
    }
  }, [id, user]);

  if (!user) return <div className="page-container">Please log in to view this summary.</div>;
  if (loading) return <div className="page-container" style={{ textAlign: 'center', padding: '4rem' }}>Loading summary details...</div>;
  if (error) return <div className="page-container text-error">{error}</div>;
  if (!summary) return <div className="page-container">Summary not found.</div>;

  return (
    <div className="page-container">
      <div className="flex justify-between items-center mb-8">
        <div>
          <Link to="/history" className="mb-4" style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>&larr; Back to History</Link>
          <h1 className="mb-2">{summary.fileId?.originalName} insights</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Generated on {new Date(summary.createdAt).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="bento-grid">
        <div className="card" style={{ gridColumn: 'span 12' }}>
          <h3 className="mb-4">Executive Summary</h3>
          <div className="summary-markdown">
            <ReactMarkdown components={markdownComponents} remarkPlugins={[remarkGfm]}>
              {summary.summaryText}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryDetailPage;