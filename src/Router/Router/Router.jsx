import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminLayout from "../../Layout/AdminLayout/AdminLayout";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import Assignments from "../../Pages/Assignments/Assignments";
import AddAssignment from "../../Pages/Add Assignment/AddAssignment";
import MyAssignments from "../../Pages/My Assignments/MyAssignments";
import UpdateAssignment from "../../Pages/Assignments/UpdateAssignment";
import ViewDetails from "../../Pages/Assignments/ViewDetails/ViewDetails";
import SubmittedAssignment from "../../Pages/SubmittedAssignment/SubmittedAssignment";
import MarkAssignment from "../../Pages/SubmittedAssignment/MarkAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "add-Assignment",
        element: (
          <PrivetRouter>
            <AddAssignment></AddAssignment>
          </PrivetRouter>
        ),
      },
      {
        path: "assignments",
        element: (
          <PrivetRouter>
            <Assignments></Assignments>
          </PrivetRouter>
        ),
        loader: () => fetch("https://fopor-baz-server.vercel.app/api/v1/assignmentCount"),
      },
      {
        path: "myAssignments",
        element: (
          <PrivetRouter>
            <MyAssignments></MyAssignments>
          </PrivetRouter>
        ),
      },
      {
        path: "submitted",
        element: (
          <PrivetRouter>
            <SubmittedAssignment></SubmittedAssignment>
          </PrivetRouter>
        ),
      },
      {
        path: "updateAssignment/:id",
        element: (
          <PrivetRouter>
            <UpdateAssignment></UpdateAssignment>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://fopor-baz-server.vercel.app/api/v1/assignments/${params.id}`),
      },
      {
        path: "markSubmit/:id",
        element: (
          <PrivetRouter>
            <MarkAssignment></MarkAssignment>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://fopor-baz-server.vercel.app/api/v1/submitted/${params.id}`),
      },
      {
        path: "viewAssignment/:id",
        element: (
          <PrivetRouter>
            <ViewDetails></ViewDetails>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://fopor-baz-server.vercel.app/api/v1/assignments/${params.id}`),
      },
    ],
  },

  {
    path: "/login",
    element: <Login></Login>,
  },

  {
    path: "/registration",
    element: <SignUp></SignUp>,
  },

  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
  },
]);
export default router;
