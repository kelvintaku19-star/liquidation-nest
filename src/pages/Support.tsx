import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Mail, Phone, HelpCircle, Clock } from "lucide-react";

const faqs = [
  {
    question: "What is liquidation merchandise?",
    answer: "Liquidation merchandise includes customer returns, overstock items, shelf-pulls, and closeout inventory from major retailers. These products are sold at significant discounts compared to retail prices.",
  },
  {
    question: "How are pallets graded?",
    answer: "We grade pallets based on product condition: Grade A (like-new), Grade B (good with minor imperfections), Grade C (fair condition), and Mixed (assorted conditions). Each listing clearly indicates the grade.",
  },
  {
    question: "Can I see a manifest before buying?",
    answer: "Yes, manifests are available for most pallets when provided by the source. Manifests include estimated item counts and descriptions. Contact us to request a manifest for specific pallets.",
  },
  {
    question: "Do you offer returns or refunds?",
    answer: "Due to the nature of liquidation merchandise, all sales are final. We only process refunds for significantly misrepresented items or shipping damage reported within 48 hours with photos.",
  },
  {
    question: "How do I place an order?",
    answer: "You can order through our website order form, via our Telegram channel, WhatsApp, or email. Our team will confirm availability, provide a shipping quote, and process your payment.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, PayPal, and cash for local pickups. Full payment is required before shipping or pickup.",
  },
  {
    question: "How long does shipping take?",
    answer: "Delivery times vary by location: Metro areas (3-5 days), Regional areas (5-7 days), Remote areas (7-14 days). Orders are processed within 1-3 business days.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within Australia. Contact us for large orders and we may be able to arrange international freight.",
  },
];

const Support = () => {
  const openTawkTo = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-hero-gradient py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <HelpCircle className="h-16 w-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Center</h1>
              <p className="text-lg text-primary-foreground/90">
                We're here to help! Find answers or reach out to our team.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-12 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500/10 mb-4">
                    <MessageCircle className="h-7 w-7 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Live Chat</h3>
                  <p className="text-muted-foreground mb-4">Chat with our team in real-time for quick assistance.</p>
                  <Button onClick={openTawkTo} className="bg-green-500 hover:bg-green-600">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <Phone className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-4">Message us on WhatsApp for fast responses.</p>
                  <Button asChild variant="outline">
                    <a href="https://wa.me/61489979358" target="_blank" rel="noopener noreferrer">
                      +61 489 979 358
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                    <Mail className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground mb-4">Send us an email for detailed inquiries.</p>
                  <Button asChild variant="outline">
                    <a href="mailto:Palletliquidation764@gmail.com">
                      Send Email
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-xl mx-auto mt-8 text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span>Response time: Within 24 hours</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">Find quick answers to common questions.</p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Still Need Help */}
        <section className="py-12 bg-section-bg">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Still Need Help?</CardTitle>
                <CardDescription>
                  Can't find what you're looking for? Our team is ready to assist you.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={openTawkTo} size="lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Live Chat
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://t.me/palletliquidationdepot2" target="_blank" rel="noopener noreferrer">
                    Join Telegram
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
