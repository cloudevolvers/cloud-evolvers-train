// Debug page to check environment variables
export default function DebugPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Environment Variables Debug</h1>
      <h2>Next.js Public Variables:</h2>
      <pre>
        NEXT_PUBLIC_CLOUD_EVOLVERS: {JSON.stringify(process.env.NEXT_PUBLIC_CLOUD_EVOLVERS)}
        CLOUD_EVOLVERS: {JSON.stringify(process.env.CLOUD_EVOLVERS)}
        NODE_ENV: {JSON.stringify(process.env.NODE_ENV)}
      </pre>
      
      <h2>Brand Configuration Test:</h2>
      <pre>
        {JSON.stringify({
          envVar: process.env.NEXT_PUBLIC_CLOUD_EVOLVERS,
          isCloudEvolvers: process.env.NEXT_PUBLIC_CLOUD_EVOLVERS === '1',
          typeof: typeof process.env.NEXT_PUBLIC_CLOUD_EVOLVERS
        }, null, 2)}
      </pre>
      
      <h2>All Process.env (Client-side accessible):</h2>
      <pre>
        {JSON.stringify(
          Object.keys(process.env)
            .filter(key => key.startsWith('NEXT_PUBLIC_'))
            .reduce((obj, key) => ({ ...obj, [key]: process.env[key] }), {}),
          null,
          2
        )}
      </pre>
    </div>
  );
}
