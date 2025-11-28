import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-hero-gradient py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
              <p className="text-lg text-primary-foreground/90">
                Please read these terms carefully before placing an order.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>1. General Terms</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                  <p>
                    By placing an order with Pallet Liquidation Depot, you agree to be bound by these Terms of Service. These terms govern all transactions between you and our company.
                  </p>
                  <p>
                    All products sold are liquidation merchandise, which may include customer returns, overstock items, and shelf-pulls. Product conditions vary and are graded accordingly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Product Conditions & Grading</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Grade A:</strong> Like-new condition with original packaging, minimal to no signs of use.</li>
                    <li><strong>Grade B:</strong> Good condition with minor cosmetic imperfections, fully functional.</li>
                    <li><strong>Grade C:</strong> Fair condition with visible wear, may require minor repairs.</li>
                    <li><strong>Mixed:</strong> Assorted conditions within a single pallet, may include Grade A through C items.</li>
                  </ul>
                  <p>
                    Product manifests (when available) provide estimated quantities and item descriptions. Actual contents may vary slightly from manifests.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Orders & Payment</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>All orders require full payment before shipment or pickup.</li>
                    <li>Accepted payment methods: Bank transfer, PayPal, or cash on pickup.</li>
                    <li>Prices are subject to change without notice until order is confirmed.</li>
                    <li>A deposit may be required to hold inventory for large orders.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Returns & Refunds</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                  <p>
                    Due to the nature of liquidation merchandise, all sales are final. We do not accept returns or provide refunds unless:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>The order was significantly misrepresented in the product description.</li>
                    <li>Items were damaged during shipping (damage must be reported within 48 hours of delivery with photos).</li>
                  </ul>
                  <p>
                    We encourage customers to inspect pallets upon delivery and note any concerns immediately.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                  <p>
                    Pallet Liquidation Depot is not responsible for any indirect, incidental, or consequential damages arising from the purchase or use of our products. Our liability is limited to the purchase price of the products.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                  <p>If you have any questions about these Terms of Service, please contact us:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Email: Palletliquidation764@gmail.com</li>
                    <li>WhatsApp: +61 489 979 358</li>
                    <li>Telegram: @palletliquidationdepot2</li>
                  </ul>
                </CardContent>
              </Card>

              <p className="text-sm text-muted-foreground text-center pt-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
