import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }
};

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      <motion.section
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="giant-text-bg"
        >
          INSIGHT
        </motion.div>

        <div className="hero-content">
          <motion.div variants={slideLeft} className="section-kicker">
            Dataset intelligence
          </motion.div>
          <motion.h1 variants={slideLeft}>
            Turn raw rows<br />into <span>clear answers.</span>
          </motion.h1>
          <motion.p variants={slideLeft}>
            Upload CSVs and Excel files to surface the signals, anomalies, and stories hidden in your data — without the spreadsheet chaos.
          </motion.p>
          <motion.div variants={slideUp} className="hero-actions">
            <Link to="/signup" className="btn-primary">Get started</Link>
            <Link to="/upload" className="btn-secondary">Analyze data</Link>
          </motion.div>
        </div>

        <motion.aside variants={slideRight} className="hero-panel">
          <div className="panel-header">
            <span>Dataset</span>
            <span>live</span>
          </div>

          <div className="panel-body">
            <div className="panel-row">
              <span className="panel-label">Rows parsed</span>
              <span className="panel-value">124,500</span>
            </div>
            <div className="panel-row">
              <span className="panel-label">Missing values</span>
              <span className="panel-chip">2.4%</span>
            </div>
            <div className="panel-row">
              <span className="panel-label">Trend score</span>
              <span className="panel-value">89 / 100</span>
            </div>
            <div className="panel-row">
              <span className="panel-label">Status</span>
              <span className="panel-chip">Ready</span>
            </div>
          </div>
        </motion.aside>
      </motion.section>

      <motion.section
        className="ledger-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={slideUp} className="ledger-card">
          <div className="metric-value">500</div>
          <h3>Pattern review</h3>
          <p>Large datasets are filtered into the most relevant signals without losing the story behind the numbers.</p>
        </motion.div>

        <motion.div variants={slideUp} className="ledger-card">
          <div className="metric-value">10x</div>
          <h3>Faster insight</h3>
          <p>From raw rows to readable analysis in a single flow, with the context preserved for follow-up questions.</p>
        </motion.div>

        <motion.div variants={slideUp} className="ledger-card">
          <div className="metric-value">∞</div>
          <h3>Context-aware</h3>
          <p>Ask for anomalies, summaries, or next-step recommendations and keep the analysis grounded in the file itself.</p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default LandingPage;