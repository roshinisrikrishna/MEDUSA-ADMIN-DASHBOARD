import { lazy, Suspense } from "react"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"
import Spinner from "./components/atoms/spinner"

const NotFound = lazy(() => import("./pages/404"))
const Dashboard = lazy(() => import("./pages/a"))
const IndexPage = lazy(() => import("./pages/index"))
const InvitePage = lazy(() => import("./pages/invite"))
const LoginPage = lazy(() => import("./pages/login"))
const ResetPasswordPage = lazy(() => import("./pages/reset-password"))

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="admin/" element={<IndexPage />} />
      <Route path="admin/*" element={<Dashboard />} />
      <Route path="admin/invite" element={<InvitePage />} />
      <Route path="admin/login" element={<LoginPage />} />
      <Route path="admin/reset-password" element={<ResetPasswordPage />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
)

const Loading = () => (
  <div className="flex w-full h-screen justify-center items-center bg-grey-5 text-grey-90">
    <Spinner variant="secondary" />
  </div>
)

const App = () => (
  <Suspense fallback={<Loading />}>
    <RouterProvider router={router} />
  </Suspense>
)

export default App
