import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Leaf, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8">
          <Leaf className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-7xl font-extrabold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-3">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Oops! The page you're looking for doesn't exist. It might have been moved or removed.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button size="lg" className="gap-2 rounded-full px-8">
              <Home className="h-5 w-5" /> Go to Homepage
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 rounded-full px-8"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-5 w-5" /> Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
