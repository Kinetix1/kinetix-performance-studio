import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, HeadContent, createRootRoute, useRouter } from "@tanstack/react-router";
import { Header, MobileCallBar } from "../components/header";
import { Footer } from "../components/footer";

const queryClient = new QueryClient();

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="mono-label text-blue-glow">404</p>
        <h1 className="display skew-cut mt-4 text-[40px]">Wrong turn.</h1>
        <p className="mt-3 text-white/70">Let's get you back to the floor.</p>
        <div className="mt-6">
          <Link
            to="/"
            className="mono-label inline-flex items-center justify-center rounded-[2px] bg-orange px-6 py-3 text-white transition-colors hover:bg-amber"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4">
      <div className="max-w-md text-center">
        <p className="mono-label text-orange">Error</p>
        <h1 className="display skew-cut mt-4 text-[40px]">Something broke.</h1>
        <p className="mt-3 text-white/70">
          Something went wrong. Try again or head back to the floor.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="mono-label inline-flex items-center justify-center rounded-[2px] bg-orange px-6 py-3 text-white transition-colors hover:bg-amber"
          >
            Try again
          </button>
          <a
            href="/"
            className="mono-label inline-flex items-center justify-center rounded-[2px] border border-navy-line px-6 py-3 text-white/80 transition-colors hover:border-blue-glow"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileCallBar />
    </QueryClientProvider>
  );
}
