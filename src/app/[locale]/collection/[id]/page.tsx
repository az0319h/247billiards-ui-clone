import IntroSection from "@/components/pages/collection/IntroSection";
import NotFoundPage from "../../not-found";

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const collections = [
    {
      id: "billiards",
      title: "A new dimension in billiards.",
      subTitle: "247 Billiard Table by Studio F. A. Porsche",
    },
    {
      id: "ping-pong",
      title: "Table Tennis — redefined.",
      subTitle: "Designer Ping Pong Table",
    },
    {
      id: "dumbbells",
      title: "Workout — with Style.",
      subTitle: "Premium Dumbbell Set",
    },
  ];

  const collection = collections.find((item) => item.id === id);

  if (!collection) {
    return <NotFoundPage />;
  }

  return (
    <>
      <IntroSection title={collection.title} subTitle={collection.subTitle} />
    </>
  );
}
