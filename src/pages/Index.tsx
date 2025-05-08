
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/ui/Container";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6 py-16">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Welcome to Your New Project
            </h1>
            <p className="text-xl text-muted-foreground">
              This is a clean slate for you to build something amazing.
            </p>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Index;
