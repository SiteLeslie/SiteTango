/**
 * Injecte du JSON-LD (structured data Schema.org) dans le HTML.
 * Lu par Google pour enrichir les résultats (Knowledge Graph, rich snippets).
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
