"use client";

export default function Page({ params }: { params: { search: string } }) {
  return (
    <section>
      <h1 className="text-primary">{params.search}</h1>
    </section>
  );
}
