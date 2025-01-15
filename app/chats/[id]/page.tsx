type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const id = (await params).id;
  return <div>Chat {id}</div>;
}
