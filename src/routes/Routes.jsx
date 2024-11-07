import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Account from "../pages/Admin/Account";
import AccounterList from "../pages/Admin/AccounterList";
import AddAuthorInfo from "../pages/Admin/AddAuthorInfo";
import AddCourse from "../pages/Admin/AddCourse";
import AddHomeWorks from "../pages/Admin/AddHomeWorks";
import AddminHomeworkList from "../pages/Admin/AddminHomeworkList";
import AddNotice from "../pages/Admin/AddNotice";
import AddProduct from "../pages/Admin/AddProduct";
import AdminAllCourse from "../pages/Admin/AdminAllCourse";
import AdminAllUserList from "../pages/Admin/AdminAllUserList";
import AdminCreateUser from "../pages/Admin/AdminCreateUser";
import AllStudent from "../pages/Admin/AllStudent";
import AuthorInfoList from "../pages/Admin/AuthorInfoList";
import CheckerList from "../pages/Admin/CheckerList";
import ControllerList from "../pages/Admin/ControllerList";
import CouncilorList from "../pages/Admin/CouncilorList";
import ManagerList from "../pages/Admin/ManagerList";
import NoticeList from "../pages/Admin/NoticeList";
import SeniorTeamList from "../pages/Admin/SeniorTeamList";
import TeacherList from "./../pages/Admin/TeacherList";
import TeamLeaderList from "../pages/Admin/TeamLeaderList";
import AllHomeworks from "./../pages/CheckerPages/AllHomeworks";
import ActiveStudentForController from "./../pages/Controler/ActiveStudentForController";
import CouncilorMappingStudent from "../pages/Controler/CouncilorMappingStudent";
import CouncilorMappingSystem from "../pages/Controler/CouncilorMappingSystem";
import MappingStudent from "../pages/Controler/MappingStudent";
import NotMappingStudent from "../pages/Controler/NotMappingStudent";
import SeniorTeamMappingMemr from "../pages/Controler/SeniorTeamMappingMemr";
import ActiveStudentMapping from "../pages/Councilor/ActiveStudentMapping";
import CouncilorActiveMember from "../pages/Councilor/CouncilorActiveMember";
import CouncilorInActiveStudent from "../pages/Councilor/CouncilorInActiveStudent";
import CreateSeniorTeamLeader from "../pages/Councilor/CreateSeniorTeamLeader";
import MappingMember from "../pages/Councilor/MappingMember";
import MessageDoneMember from "../pages/Councilor/MessageDoneMember";
import SendSms from "../pages/Councilor/SendSms";
import ActiveUser from "../pages/Manager/ActiveUser";
import InActiveUser from "../pages/Manager/InActiveUser";
import ManagerAllUserList from "../pages/Manager/ManagerAllUserList";
import SeniorActiveMember from "../pages/SeniorTeamLeader/SeniorActiveMember";
import SeniorForActiveStudent from "../pages/SeniorTeamLeader/SeniorForActiveStudent";
import SeniorInActiveMem from "../pages/SeniorTeamLeader/SeniorInActiveMem";
import TeamLeadedId from "../pages/SeniorTeamLeader/TeamLeadedId";
import TeamLeadedList from "../pages/SeniorTeamLeader/TeamLeadedList";
import TeamMember from "../pages/SeniorTeamLeader/TeamMember";
import AffliateMarketing from "../pages/Student/AffliateMarketing";
import Liveclass from "../pages/Student/liveclass";
import Mypassbook from "../pages/Student/mypassbook";
import NoticedDetails from "../pages/Student/NoticedDetails";
import PhotoGallary from "../pages/Student/PhotoGallary";
import Reference from "../pages/Student/Reference";
import StudentHomework from "../pages/Student/StudentHomework";
import UploadImage from "../pages/Student/UploadImage";
import Withdrawal from "../pages/Student/withdrawal";
import AddLiveClass from "../pages/TeacherPage/AddLiveClass";
import LiveClassList from "../pages/TeacherPage/LiveClassList";
import CreateTrainer from "../pages/TeamLeaderpage/CreateTrainer";
import MemberLeadData from "../pages/TeamLeaderpage/MemberLeadData";
import TeamLeaderActiveMem from "../pages/TeamLeaderpage/TeamLeaderActiveMem";
import TeamLeaderActiveStudent from "../pages/TeamLeaderpage/TeamLeaderActiveStudent";
import TeamLeaderInActiveMem from "../pages/TeamLeaderpage/TeamLeaderInActiveMem";
import TeamLeadermaptoTrainer from "../pages/TeamLeaderpage/TeamLeadermaptoTrainer";
import TeamLeaderMember from "../pages/TeamLeaderpage/TeamLeaderMember";
import TmLeaderTrainer from "../pages/TeamLeaderpage/TmLeaderTrainer";
import TrainerActiveMember from "../pages/Trainer/TrainerActiveMember";
import TrainerInActiveMem from "../pages/Trainer/TrainerInActiveMem";
import TrainerMappingStudent from "../pages/Trainer/TrainerMappingStudent";
import TrainerPassbook from "../pages/Trainer/TrainerPassbook";
import TrainerReferMember from "../pages/Trainer/TrainerReferMember";
import TrainerTeamMember from "./../pages/Trainer/TrainerTeamMember";
import Login from "../pages/Login/Login";
import Dashboard from "../layout/Dashboard";
import SignUp from "../pages/SignUp/SignUp";
import ProfilePage from "../pages/Student/ProfilePage";
import StudentAllCourse from "../pages/Student/StudentAllCourse";
import PendingFeeStudent from "../pages/Admin/PendingFeeStudent";
import NotPendingFeeStudent from "../pages/Admin/NotPendingFeeStudent";
import UsersBonusSystem from "../pages/Admin/UsersBonusSystem";
import TmTrainerList from "../pages/TeamLeaderpage/TmTrainerList";
import ProductList from "../pages/Admin/ProductList";
import OneStudentMapping from "../pages/Admin/OneStudentMapping";
import UserDetail from "../pages/UserDetails/UserDetail";
import AdminTrailerList from "../pages/Admin/AdminTrailerList";
import AdminActiveStudentMap from "../pages/Admin/AdminActiveStudentMap";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ControllerCouncilorList from "../pages/Controler/ControllerCouncilorList";
import ControllerInactiveStudent from "../pages/Controler/controllerInactiveStudent";
import MappedCouncilor from "../pages/Controler/MappedCouncilor";
import CouncilorSeniorLeaderList from "../pages/Councilor/CouncilorSeniorLeaderList";
import SeniorToSeniorMap from "../pages/Admin/SeniorToSeniorMap";
import SeniorTeamLeaderList from "../pages/SeniorTeamLeader/SeniorTeamLeaderList";
import ALlActiveForSeniorLeader from "../pages/SeniorTeamLeader/ALlActiveForSeniorLeader";
import MappedStudents from "../pages/SeniorTeamLeader/MappedStudents";
import SmsDoneStudent from "../pages/Controler/SmsDoneStudent";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard></Dashboard>
          </ProtectedRoute>
        ),
        children: [
          {
            path: "home",
            element: (
              <ProtectedRoute allowedRoles={["Student","Teacher","Team Leader", ""]}>
                <Home></Home>
              </ProtectedRoute>
            ),
          },
          // admin route
          {
            path: "accounterList ",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <AccounterList></AccounterList>
              </ProtectedRoute>
            ),
          },
          {
            path: "account",
            element: (
              <ProtectedRoute>
                <Account></Account>
              </ProtectedRoute>
            ),
          },
          {
            path: "authInfoList",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <AuthorInfoList></AuthorInfoList>
              </ProtectedRoute>
            ),
          },
          {
            path: "one-student-map",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <OneStudentMapping></OneStudentMapping>
              </ProtectedRoute>
            ),
          },
          {
            path: "addAuthInfo",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <AddAuthorInfo></AddAuthorInfo>
              </ProtectedRoute>
            ),
          },
          {
            path: "addCourse",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <AddCourse></AddCourse>
              </ProtectedRoute>
            ),
          },
          {
            path: "addHomework",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <AddHomeWorks></AddHomeWorks>
              </ProtectedRoute>
            ),
          },
          {
            path: "adminHomeworkList",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <AddminHomeworkList></AddminHomeworkList>
              </ProtectedRoute>
            ),
          },
          {
            path: "addnotice",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <AddNotice></AddNotice>
              </ProtectedRoute>
            ),
          },
          {
            path: "addProduct",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <AddProduct></AddProduct>
              </ProtectedRoute>
            ),
          },
          {
            path: "addminAllCourses",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <AdminAllCourse></AdminAllCourse>
              </ProtectedRoute>
            ),
          },
          {
            path: "adminAllUserlist",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <AdminAllUserList></AdminAllUserList>
              </ProtectedRoute>
            ),
          },
          {
            path: "adminCreateUser",
            element: (
              <ProtectedRoute allowedRoles={["Admin", "Manager", "Controller", "Councilor", "Senior Team Leader", "Team Leader"]}>
                <AdminCreateUser></AdminCreateUser>
              </ProtectedRoute>
            ),
          },
          {
            path: "allStudent",
            element: (
              <ProtectedRoute allowedRoles={["Admin", "Manager"]}>
                <AllStudent></AllStudent>
              </ProtectedRoute>
            ),
          },
          {
            path: "councilor-list",
            element: (
              <ProtectedRoute allowedRoles={["Controller"]}>
                <ControllerCouncilorList></ControllerCouncilorList>
              </ProtectedRoute>
            ),
          },
          {
            path: "controle-inactive-list",
            element: (
              <ProtectedRoute allowedRoles={["Controller"]}>
                <ControllerInactiveStudent></ControllerInactiveStudent>
              </ProtectedRoute>
            ),
          },
          {
            path: "userDetails/:id",
            element: (
              <ProtectedRoute allowedRoles={["Admin", "Manager"]}>
                <UserDetail></UserDetail>
              </ProtectedRoute>
            )
          },
          {
            path: "authorInfoList",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <AuthorInfoList></AuthorInfoList>
              </ProtectedRoute>
            ),
          },
          {
            path: "checkerList",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <CheckerList></CheckerList>
              </ProtectedRoute>
            ),
          },
          {
            path: "controllerList",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <ControllerList></ControllerList>
              </ProtectedRoute>
            ),
          },
          {
            path: "councilorList",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <CouncilorList></CouncilorList>
              </ProtectedRoute>
            ),
          },
          {
            path: "managerList",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <ManagerList></ManagerList>
              </ProtectedRoute>
            ),
          },
          {
            path: "noticeList",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <NoticeList></NoticeList>
              </ProtectedRoute>
            ),
          },
          {
            path: "productList",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <ProductList></ProductList>
              </ProtectedRoute>
            ),
          },
          {
            path: "seniorTeamLeaderList",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <SeniorTeamList></SeniorTeamList>
              </ProtectedRoute>
            ),
          },
          {
            path: "teacherList",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <TeacherList></TeacherList>
              </ProtectedRoute>
            ),
          },
          {
            path: "teamLeaderList",
            element: (
              <ProtectedRoute>
                <TeamLeaderList></TeamLeaderList>
              </ProtectedRoute>
            ),
          },
          {
            path: "allHomeworks",
            element: (
              <ProtectedRoute allowedRoles={["Manager", "Admin"]}>
                <AllHomeworks></AllHomeworks>
              </ProtectedRoute>
            ),
          },
          {
            path: "activeStudentForController",
            element: (
              <ProtectedRoute allowedRoles={["Controller"]}>
                <ActiveStudentForController></ActiveStudentForController>
              </ProtectedRoute>
            ),
          },
          // {
          //   path: "councilorMapping",
          //   element: (
          //     <ProtectedRoute>
          //       <CouncilorMapping></CouncilorMapping>
          //     </ProtectedRoute>
          //   ),
          // },
          {
            path: "councilorMappingStudent",
            element: (
              <ProtectedRoute allowedRoles={["Controller"]}>
                <CouncilorMappingStudent></CouncilorMappingStudent>
              </ProtectedRoute>
            ),
          },
          {
            path: "councilorMappingSyestem",
            element: (
              <ProtectedRoute allowedRoles={["Controller"]}>
                <CouncilorMappingSystem></CouncilorMappingSystem>
              </ProtectedRoute>
            ),
          },
          {
            path: "mapped-councilor",
            element: (
              <ProtectedRoute allowedRoles={["Controller"]}>
                <MappedCouncilor></MappedCouncilor>
              </ProtectedRoute>
            ),
          },
          {
            path: "mappingStudent",
            element: (
              <ProtectedRoute allowedRoles={["Controller"]}>
                {" "}
                <MappingStudent></MappingStudent>
              </ProtectedRoute>
            ),
          },
          {
            path: "notMappingStudent",
            element: (
              <ProtectedRoute allowedRoles={["Controller"]}>
                <NotMappingStudent></NotMappingStudent>{" "}
              </ProtectedRoute>
            ),
          },
          {
            path: "sms-done-with-student",
            element: (
              <ProtectedRoute allowedRoles={["Controller"]}>
                <SmsDoneStudent></SmsDoneStudent>
              </ProtectedRoute>
            ),
          },
          {
            path: "employee-passbook",
            element: <ProtectedRoute></ProtectedRoute>,
          },
          {
            path: "seniorTeamMappinMbr",
            element: (
              <ProtectedRoute>
                <SeniorTeamMappingMemr></SeniorTeamMappingMemr>
              </ProtectedRoute>
            ),
          },
          {
            path: "activeStudentMapping",
            element: (
              <ProtectedRoute>
                <ActiveStudentMapping></ActiveStudentMapping>
              </ProtectedRoute>
            ),
          },
          {
            path: "councilorActiveMember",
            element: (
              <ProtectedRoute>
                <CouncilorActiveMember></CouncilorActiveMember>
              </ProtectedRoute>
            ),
          },
          {
            path: "councilorInActiveStudent",
            element: (
              <ProtectedRoute>
                <CouncilorInActiveStudent></CouncilorInActiveStudent>
              </ProtectedRoute>
            ),
          },
          {
            path: "createSeniorTeamLeader",
            element: (
              <ProtectedRoute>
                <CreateSeniorTeamLeader></CreateSeniorTeamLeader>
              </ProtectedRoute>
            ),
          },
          {
            path: "mapped-inctive-student",
            element: (
              <ProtectedRoute>
                <MappingMember></MappingMember>
              </ProtectedRoute>
            ),
          },
          {
            path: "messageDoneMember",
            element: (
              <ProtectedRoute allowedRoles={["Councilor"]}>
                <MessageDoneMember></MessageDoneMember>
              </ProtectedRoute>
            ),
          },
          {
            path: "sendSms",
            element: (
              <ProtectedRoute allowedRoles={["Councilor"]}>
                <SendSms></SendSms>
              </ProtectedRoute>
            ),
          },
          {
            path: "councilor-senior-leader",
            element: (
              <ProtectedRoute allowedRoles={["Councilor"]}>
                <CouncilorSeniorLeaderList></CouncilorSeniorLeaderList>
              </ProtectedRoute>
            ),
          },
          {
            path: "activeUser",
            element: (
              <ProtectedRoute>
                <ActiveUser></ActiveUser>
              </ProtectedRoute>
            ),
          },
          // {
          //   path: "createUser",
          //   element: (
          //     <ProtectedRoute>
          //       <CreateUser></CreateUser>
          //     </ProtectedRoute>
          //   ),
          // },
          {
            path: "inActiveUser",
            element: (
              <ProtectedRoute>
                <InActiveUser></InActiveUser>
              </ProtectedRoute>
            ),
          },
          {
            path: "managerUserList",
            element: (
              <ProtectedRoute>
                <ManagerAllUserList></ManagerAllUserList>
              </ProtectedRoute>
            ),
          },
          {
            path: "seniorActiveMember",
            element: (
              <ProtectedRoute>
                <SeniorActiveMember></SeniorActiveMember>
              </ProtectedRoute>
            ),
          },
          {
            path: "seniorForActiveStudent",
            element: (
              <ProtectedRoute>
                <SeniorForActiveStudent></SeniorForActiveStudent>
              </ProtectedRoute>
            ),
          },
          {
            path: "seniorInActiveMember",
            element: (
              <ProtectedRoute>
                <SeniorInActiveMem></SeniorInActiveMem>
              </ProtectedRoute>
            ),
          },
          {
            path: "teamLeaderId",
            element: (
              <ProtectedRoute>
                <TeamLeadedId></TeamLeadedId>
              </ProtectedRoute>
            ),
          },
          {
            path: "teamLeaderList",
            element: (
              <ProtectedRoute >
                <TeamLeadedList></TeamLeadedList>
              </ProtectedRoute>
            ),
          },
          {
            path: "teamMember",
            element: (
              <ProtectedRoute>
                <TeamMember></TeamMember>{" "}
              </ProtectedRoute>
            ),
          },
          {
            path: "affliateMarketing",
            element: (
              <ProtectedRoute>
                <AffliateMarketing></AffliateMarketing>
              </ProtectedRoute>
            ),
          },
          {
            path: "liveClass",
            element: (
              <ProtectedRoute allowedRoles={["Student","Teacher"]}>
                <Liveclass></Liveclass>
              </ProtectedRoute>
            ),
          },
          {
            path: "myPassbook",
            element: (
              <ProtectedRoute allowedRoles={["Councilor", "Senior Team Leader", "Team Leader", "Student"]}>
                <Mypassbook></Mypassbook>
              </ProtectedRoute>
            ),
          },
          {
            path: "noticeDetails/:id",
            element: (
              <ProtectedRoute allowedRoles={["Student"]}>
                <NoticedDetails></NoticedDetails>
              </ProtectedRoute>
            ),
          },
          {
            path: "photoGallary",
            element: (
              <ProtectedRoute allowedRoles={["Student"]}>
                <PhotoGallary></PhotoGallary>
              </ProtectedRoute>
            ),
          },
          {
            path: "studentReference",
            element: (
              <ProtectedRoute allowedRoles={["Councilor", "Senior Team Leader", "Student","Team Leader"]}>
                <Reference></Reference>
              </ProtectedRoute>
            ),
          },
          {
            path: "studentHomwork",
            element: (
              <ProtectedRoute allowedRoles={["Student"]}>
                <StudentHomework></StudentHomework>
              </ProtectedRoute>
            ),
          },
          {
            path: "upLoadImage",
            element: (
              <ProtectedRoute allowedRoles={["Student"]}>
                <UploadImage></UploadImage>
              </ProtectedRoute>
            ),
          },
          {
            path: "withdraw",
            element: (
              <ProtectedRoute allowedRoles={["Councilor", "Senior Team Leader", "Student", "Team Leader"]}>
                <Withdrawal></Withdrawal>
              </ProtectedRoute>
            ),
          },
          {
            path: "addLiveClass",
            element: (
              <ProtectedRoute allowedRoles={["Teacher"]}>
                <AddLiveClass></AddLiveClass>
              </ProtectedRoute>
            ),
          },
          {
            path: "liveClassList",
            element: (
              <ProtectedRoute allowedRoles={["Teacher"]}>
                <LiveClassList></LiveClassList>
              </ProtectedRoute>
            ),
          },
          {
            path: "createTrainer",
            element: (
              <ProtectedRoute>
                <CreateTrainer></CreateTrainer>
              </ProtectedRoute>
            ),
          },
          {
            path: "memberLeadData",
            element: (
              <ProtectedRoute>
                <MemberLeadData></MemberLeadData>
              </ProtectedRoute>
            ),
          },
          {
            path: "teamLeaderActiveMember",
            element: (
              <ProtectedRoute>
                <TeamLeaderActiveMem></TeamLeaderActiveMem>
              </ProtectedRoute>
            ),
          },
          {
            path: "teamLeaderActiveStudent",
            element: (
              <ProtectedRoute>
                <TeamLeaderActiveStudent></TeamLeaderActiveStudent>
              </ProtectedRoute>
            ),
          },
          {
            path: "teamLeaderInactiveMember",
            element: (
              <ProtectedRoute>
                <TeamLeaderInActiveMem></TeamLeaderInActiveMem>
              </ProtectedRoute>
            ),
          },
          {
            path: "teamleaderMaptoTrainer",
            element: (
              <ProtectedRoute>
                <TeamLeadermaptoTrainer></TeamLeadermaptoTrainer>
              </ProtectedRoute>
            ),
          },
          {
            path: "teamLeaderMember",
            element: (
              <ProtectedRoute>
                <TeamLeaderMember></TeamLeaderMember>
              </ProtectedRoute>
            ),
          },
          {
            path: "teamleaderTrainer",
            element: (
              <ProtectedRoute>
                <TmLeaderTrainer></TmLeaderTrainer>
              </ProtectedRoute>
            ),
          },
          {
            path: "trainerActiveMember",
            element: (
              <ProtectedRoute>
                <TrainerActiveMember></TrainerActiveMember>
              </ProtectedRoute>
            ),
          },
          {
            path: "trainerInactiveMem",
            element: (
              <ProtectedRoute>
                <TrainerInActiveMem></TrainerInActiveMem>
              </ProtectedRoute>
            ),
          },
          {
            path: "trainerMappingStudent",
            element: (
              <ProtectedRoute>
                <TrainerMappingStudent></TrainerMappingStudent>
              </ProtectedRoute>
            ),
          },
          {
            path: "trainerPassbook",
            element: (
              <ProtectedRoute>
                <TrainerPassbook></TrainerPassbook>
              </ProtectedRoute>
            ),
          },
          {
            path: "trainerReferMember",
            element: (
              <ProtectedRoute>
                <TrainerReferMember></TrainerReferMember>{" "}
              </ProtectedRoute>
            ),
          },
          {
            path: "trainerTeamMem",
            element: (
              <ProtectedRoute>
                <TrainerTeamMember></TrainerTeamMember>
              </ProtectedRoute>
            ),
          },
          {
            path: "profile",
            element: (
              <ProtectedRoute allowedRoles={["Controller", "Councilor", "Senior Team Leader", "Student", "Admin", "Manager", "Team Leader", "Teacher"]}>
                <ProfilePage></ProfilePage>
              </ProtectedRoute>
            ),
          },
          {
            path: "studentAllCourse",
            element: (
              <ProtectedRoute allowedRoles={["Admin", "Manager", "Student"]}>
                <StudentAllCourse></StudentAllCourse>
              </ProtectedRoute>
            ),
          },
          {
            path: "pendingStudent",
            element: (
              <ProtectedRoute allowedRoles={["Admin", "Manager"]}>
                <PendingFeeStudent></PendingFeeStudent>
              </ProtectedRoute>
            ),
          },
          {
            path: "not-pending-Student",
            element: (
              <ProtectedRoute allowedRoles={["Admin", "Manager"]}>
                <NotPendingFeeStudent></NotPendingFeeStudent>
              </ProtectedRoute>
            ),
          },
          {
            path: "user-bonus-system",
            element: (
              <ProtectedRoute allowedRoles={["Admin", "Manager"]}>
                <UsersBonusSystem></UsersBonusSystem>
              </ProtectedRoute>
            ),
          },
          {
            path: "team-leader-trainer-list",
            element: (
              <ProtectedRoute>
                <TmTrainerList></TmTrainerList>
              </ProtectedRoute>
            ),
          },
          {
            path: "admin-trainer-list",
            element: (
              <ProtectedRoute allowedRoles={["Admin", "Manager"]}>
                <AdminTrailerList></AdminTrailerList>
              </ProtectedRoute>
            ),
          },
          {
            path: "admin-active-student-mapping",
            element: (
              <ProtectedRoute allowedRoles={["Admin", "Manager"]}>
                <AdminActiveStudentMap></AdminActiveStudentMap>
              </ProtectedRoute>
            ),
          },
          {
            path: "senior-senior",
            element: (
              <ProtectedRoute allowedRoles={["Admin", "Manager"]}>
                <SeniorToSeniorMap></SeniorToSeniorMap>
              </ProtectedRoute>
            ),
          },
          {
            path: "senior-leader-lists",
            element: (
              <ProtectedRoute allowedRoles={["Senior Team Leader"]}>
                <SeniorTeamLeaderList></SeniorTeamLeaderList>
              </ProtectedRoute>
            ),
          },
          {
            path: "senior-all-mapped-student",
            element: (
              <ProtectedRoute allowedRoles={["Senior Team Leader"]}>
                <ALlActiveForSeniorLeader></ALlActiveForSeniorLeader>
              </ProtectedRoute>
            ),
          },
          {
            path: "senior-mapped-student",
            element: (
              <ProtectedRoute allowedRoles={["Senior Team Leader"]}>
                <MappedStudents></MappedStudents>
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
]);
