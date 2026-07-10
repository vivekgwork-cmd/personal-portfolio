import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'var(--pad-x)',
        gap: '1.25rem',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(4rem, 14vw, 9rem)',
          lineHeight: 1,
          color: 'var(--dg-red)',
          letterSpacing: '-0.03em',
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
          letterSpacing: '-0.02em',
        }}
      >
        This page doesn't exist.
      </h1>
      <p style={{ color: 'var(--muted)', maxWidth: '36ch' }}>
        The URL you tried isn't part of this site.
      </p>
      <Link
        to="/"
        style={{
          marginTop: '0.5rem',
          padding: '0.75rem 1.25rem',
          border: '1px solid var(--divider)',
          borderRadius: '999px',
          fontSize: '0.95rem',
        }}
      >
        Back to home
      </Link>
    </main>
  );
}
