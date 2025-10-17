import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Router from "./Router/index.js"


const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={Router}/>
  </QueryClientProvider>
)
