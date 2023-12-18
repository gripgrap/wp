import { createWebHistory, createRouter } from "vue-router";

import IndexComp from "../components/IndexComp";

import IntroductionComp from "../components/IntroductionComp";
import ResumeComp from "../components/ResumeComp";
import SelfIntroComp from "../components/SelfIntroComp";

import CheckComp from "../components/CheckComp";

import ProjectComp from "../components/ProjectComp";
import ProjComp1 from "../components/ProjComp1";
import ProjComp2 from "../components/ProjComp2";
import ProjComp3 from "../components/ProjComp3";

import PartnerComp1 from "../components/PartnerComp1";
import PartnerComp2 from "../components/PartnerComp2";
import PartnerComp3 from "../components/PartnerComp3";

import ContestComp from "../components/ContestComp";
import ContestComp1 from "../components/ContestComp1";
import ContestComp2 from "../components/ContestComp2";
import ContestComp3 from "../components/ContestComp3";

import ExperienceComp from "../components/ExperienceComp";
import ExpComp1 from "../components/ExpComp1";
import ExpComp2 from "../components/ExpComp2";
import ExpComp3 from "../components/ExpComp3";

import ContactComp from "../components/ContactComp";

import NotFoundComp from "../components/NotFoundComp";


const routes = [
      {
        path: "/",
        component: IndexComp,
      },
      {
        path: "/introduction",
        component: IntroductionComp,
        children: [
          {
            path: "resume",
            component: ResumeComp,
          },
          {
            path: "selfintro",
            component: SelfIntroComp,
          },
        ],
      },
      {
        path: "/check",
        component: CheckComp,
      },
      {
        path: "/project",
        component: ProjectComp,
        children: [
          {
            path: "proj1",
            component: ProjComp1,
            children: [
                {
                    path: "partner1",
                    component: PartnerComp1,
                },
            ],
          },
          {
            path: "proj2",
            component: ProjComp2,
            children: [
                {
                    path: "partner2",
                    component: PartnerComp2,
                },
            ],
          },
          {
            path: "proj3",
            component: ProjComp3,
            children: [
                {
                    path: "partner3",
                    component: PartnerComp3,
                },
            ],
          },
        ],
      },
      {
        path: "/contest",
        component: ContestComp,
        children: [
          {
            path: "contest1",
            component: ContestComp1,
          },
          {
            path: "contest2",
            component: ContestComp2,
          },
          {
            path: "contest3",
            component: ContestComp3,
          },
        ],
      },
      {
        path: "/experience",
        component: ExperienceComp,
        children: [
          {
            path: "exp1",
            component: ExpComp1,
          },
          {
            path: "exp2",
            component: ExpComp2,
          },
          {
            path: "exp3",
            component: ExpComp3,
          },
        ],
      },
      {
        path: "/contact",
        component: ContactComp,
      },
      {
        path: "/:pathMatch(.*)*",
        component: NotFoundComp,
      },
];
const router = createRouter({
    // 라우트 생성
    history: createWebHashHistory(),
    routes,
});
export default router;

    
        
    
