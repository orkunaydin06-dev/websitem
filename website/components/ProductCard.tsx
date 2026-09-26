import Image from "next/image";
import { Card } from "./Card";
import { Button } from "./Button";

// Araç Kutusu ürün kartı. Ödeme (Stripe) ileride bağlanacak; şimdilik yalnızca link.
export function ProductCard({
  product,
}: {
  product: { title: string; description: string; image?: string; price: string; href: string };
}) {
  return (
    <Card as="article" className="flex flex-col !p-0">
      <div className="relative aspect-[4/3] border-b border-ink/85 bg-linen">
        {product.image && (
          <Image src={product.image} alt="" fill sizes="400px" className="object-cover" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="display text-xl font-medium">{product.title}</h3>
        <p className="mt-2 flex-1 text-[0.95rem] text-ink-2">{product.description}</p>
        <div className="mt-6 flex items-center justify-between">
          <span className="font-semibold">{product.price}</span>
          <Button href={product.href} size="sm" arrow>
            İncele
          </Button>
        </div>
      </div>
    </Card>
  );
}
