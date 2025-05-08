
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="py-4 border-b">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-semibold text-xl">
          My Project
        </Link>
        <nav>
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
