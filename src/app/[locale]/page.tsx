import MaxLayout from "@/components/layout/MaxLayout";

export default async function Home() {
  return (
    <MaxLayout>
      <div className="grid grid-cols-8">
        {/* <p>Crafting exclusive lifestyle products that inspire.</p>
        <p>Simply exceptional.</p>
        <p>Since 2012</p> */}
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>

        {/* 아래 4개 */}
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
    </MaxLayout>
  );
}
