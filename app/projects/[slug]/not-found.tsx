import Link from "next/link";
import Typography from "../../components/ui/Typography";
import Button from "../../components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <main className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="text-6xl mb-6">🔍</div>
          <Typography
            variant="h1"
            as="h1"
            className="text-gray-900 mb-4"
          >
            Project Not Found
          </Typography>
          <Typography
            variant="body-large"
            as="p"
            className="text-gray-600 mb-8"
          >
            Sorry, the project you&apos;re looking for doesn&apos;t exist or may have been moved.
          </Typography>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#projects">
            <Button
              size="lg"
              variant="primary"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </Button>
          </Link>
          <Link href="/">
            <Button
              size="lg"
              variant="secondary"
            >
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
