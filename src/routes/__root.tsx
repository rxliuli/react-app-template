import { Outlet, HeadContent, Scripts, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ReactQueryProvider } from '../integrations/tanstack-query/root-provider.tsx'
import type { QueryClient } from '@tanstack/react-query'
import { ThemeProvider, ThemeScript } from '@/integrations/theme'
import { Header } from '../components/Header'
import { Footer } from '@/components/Footer.tsx'
import appCss from '../styles.css?url'
import { NotFound } from '@/components/NotFound.tsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  notFoundComponent: NotFound,
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  component: () => {
    return (
      <RootDocument>
        <ReactQueryProvider>
          <ThemeProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1 container mx-auto px-4 py-2 md:py-8">
                <Outlet />
              </main>
              <Footer />
            </div>

            <TanStackRouterDevtools />
            <ReactQueryDevtools />
          </ThemeProvider>
        </ReactQueryProvider>
      </RootDocument>
    )
  },
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: ThemeScript }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
