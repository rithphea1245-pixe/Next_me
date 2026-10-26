import Link from "next/link";

export default function HomePage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold">Welcome to My Website</h1>

      <p className="mb-8 text-muted-foreground">
        Learn Next.js App Router with TypeScript.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/product"
          className="rounded-lg bg-primary px-6 py-3 text-primary-foreground"
        >
          Explore Products
        </Link>

        <Link href="/register" className="rounded-lg border px-6 py-3">
          Create Account
        </Link>
      </div>
    </section>
  );
}
