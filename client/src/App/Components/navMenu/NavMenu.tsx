import React from "react";
import {
  NavMenuLinkNavigate,
  LogoNav,
  NavMenuItem,
  NavMenuList,
  LogOutBtn,
  NavMenuContainer,
} from "./NavMenu.styled";
import { useCurrentUserQuery } from "../../redux/auth/auth";
export const NavMenu: React.FC = () => {
  const {data}:{data:{user:{_id:string}}} = useCurrentUserQuery()
  const {_id:id} = data.user
  return (
    <NavMenuContainer>
      <nav>
        <LogoNav to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M25.3501 15.5327C25.3453 14.0653 25.1794 12.6023 24.855 11.1673H29C28.7865 10.5688 28.5288 9.9853 28.2286 9.42118H24.3714C23.6463 7.12504 22.5217 4.95984 21.0439 3.01496C20.0998 2.63866 19.1153 2.36056 18.1079 2.18553C20.1324 4.24735 21.6606 6.70119 22.5868 9.37753H16.3808V2H14.6537V9.38844H8.44776C9.37586 6.70726 10.9081 4.24949 12.9382 2.18553C11.935 2.35764 10.9545 2.63207 10.0136 3.00404C8.53003 4.94078 7.39765 7.09852 6.66311 9.38844H2.78294C2.47733 9.96286 2.21567 10.5574 2 11.1673H6.17953C5.85517 12.6023 5.68925 14.0653 5.68444 15.5327C5.68762 17.1379 5.88072 18.7376 6.26013 20.3019H2.18422C2.42242 20.9137 2.70718 21.5082 3.03625 22.0808H6.75522C7.46011 24.1716 8.50511 26.1453 9.85245 27.9305C10.8173 28.3227 11.8252 28.6119 12.8576 28.7926C10.9784 26.8498 9.53324 24.5667 8.60896 22.0808H14.6652V29H16.3923V22.0808H22.4256C21.4982 24.5678 20.049 26.8509 18.1655 28.7926C19.2027 28.6057 20.2145 28.3091 21.1821 27.9087C22.5273 26.1302 23.5722 24.164 24.2793 22.0808H27.9638C28.2913 21.5188 28.5761 20.9352 28.8158 20.3347H24.7284C25.1258 18.7614 25.3344 17.1505 25.3501 15.5327V15.5327ZM14.6537 20.3019H8.04478C7.23417 17.2984 7.19862 14.1539 7.94115 11.1346H14.6537V20.3019ZM22.9898 20.3019H16.3808V11.1673H23.0934C23.4241 12.6011 23.5863 14.0651 23.577 15.5327C23.5863 17.1392 23.3891 18.7407 22.9898 20.3019V20.3019Z"
              fill="white"
            />
            <path
              d="M15.5556 0C12.479 0 9.47146 0.912317 6.91336 2.62158C4.35526 4.33085 2.36147 6.7603 1.1841 9.6027C0.00673993 12.4451 -0.301312 15.5728 0.298903 18.5903C0.899117 21.6078 2.38064 24.3795 4.55612 26.555C6.73161 28.7305 9.50334 30.212 12.5208 30.8122C15.5383 31.4124 18.666 31.1044 21.5084 29.927C24.3508 28.7497 26.7803 26.7559 28.4895 24.1978C30.1988 21.6397 31.1111 18.6322 31.1111 15.5556C31.1111 11.43 29.4722 7.47335 26.555 4.55612C23.6378 1.63888 19.6812 0 15.5556 0V0ZM15.5556 29.1667C12.8635 29.1667 10.232 28.3684 7.99363 26.8728C5.7553 25.3772 4.01073 23.2514 2.98054 20.7643C1.95034 18.2772 1.6808 15.5405 2.20599 12.9002C2.73117 10.2599 4.02751 7.83459 5.93105 5.93105C7.8346 4.0275 10.2599 2.73117 12.9002 2.20598C15.5405 1.68079 18.2772 1.95034 20.7643 2.98053C23.2514 4.01072 25.3772 5.75529 26.8728 7.99363C28.3684 10.232 29.1667 12.8635 29.1667 15.5556C29.1667 19.1654 27.7327 22.6275 25.1801 25.1801C22.6275 27.7326 19.1655 29.1667 15.5556 29.1667Z"
              fill="white"
            />
          </svg>
          TEAMDER
        </LogoNav>
        <NavMenuList>
          <NavMenuItem>
            <NavMenuLinkNavigate to="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.9206 0.0957275L22.6665 5.89788C23.0537 6.10848 23.1983 6.59243 22.9898 6.97853C22.7803 7.3657 22.2953 7.50716 21.9081 7.30188L21.0381 6.83175L19.3086 19.053C19.0767 20.3708 17.9142 21.2728 16.4761 21.2728H6.60342C5.16751 21.2728 4.00389 20.3719 3.77627 19.0795L2.04361 6.83388L1.17674 7.30188C1.05655 7.3657 0.925722 7.3976 0.798085 7.3976C0.515157 7.3976 0.239675 7.2455 0.0960839 6.9796C-0.113453 6.59137 0.031202 6.10741 0.418366 5.89788L11.1622 0.0957275C11.3994 -0.0319092 11.6834 -0.0319092 11.9206 0.0957275ZM16.4782 19.6773C16.9856 19.6773 17.6195 19.4476 17.7333 18.803L19.5415 6.02338L11.5408 1.70501L3.54227 6.02551L5.35258 18.8285C5.46214 19.4476 6.095 19.6773 6.60555 19.6773H16.4782ZM11.5413 14.826C9.32362 14.826 7.52075 13.0221 7.52075 10.8055C7.52075 8.58887 9.32362 6.78494 11.5413 6.78494C13.759 6.78494 15.5619 8.58887 15.5619 10.8055C15.5619 13.0221 13.759 14.826 11.5413 14.826ZM11.5413 13.2306C12.8794 13.2306 13.9664 12.1435 13.9664 10.8055C13.9664 9.46743 12.8794 8.38039 11.5413 8.38039C10.2032 8.38039 9.11621 9.46743 9.11621 10.8055C9.11621 12.1435 10.2032 13.2306 11.5413 13.2306Z"
                  fill="#F2F2F2"
                />
              </svg>
              Home
            </NavMenuLinkNavigate>
          </NavMenuItem>
          <NavMenuItem>
            <NavMenuLinkNavigate to="friends">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
              >
                <path
                  d="M20.4752 16.9023C19.7556 16.1821 18.9148 15.5943 17.9913 15.1659C19.2936 14.1108 20.1245 12.5008 20.1245 10.6954C20.1245 7.50995 17.4681 4.89666 14.2827 4.94553C11.1461 4.9944 8.61907 7.5502 8.61907 10.6954C8.61907 12.5008 9.45279 14.1108 10.7523 15.1659C9.82856 15.594 8.98769 16.1819 8.26833 16.9023C6.69863 18.4749 5.8074 20.5506 5.7499 22.7643C5.74914 22.7949 5.75452 22.8255 5.76573 22.854C5.77695 22.8826 5.79377 22.9086 5.8152 22.9306C5.83663 22.9526 5.86225 22.97 5.89053 22.982C5.91882 22.9939 5.9492 23 5.9799 23H7.58985C7.71347 23 7.81697 22.9023 7.81984 22.7786C7.87447 21.1112 8.55007 19.5501 9.73741 18.3656C10.345 17.7548 11.0677 17.2706 11.8637 16.9409C12.6597 16.6113 13.5131 16.4428 14.3747 16.4452C16.1255 16.4452 17.7728 17.1265 19.0119 18.3656C20.1964 19.5501 20.872 21.1112 20.9295 22.7786C20.9323 22.9023 21.0358 23 21.1595 23H22.7694C22.8001 23 22.8305 22.9939 22.8588 22.982C22.8871 22.97 22.9127 22.9526 22.9341 22.9306C22.9555 22.9086 22.9724 22.8826 22.9836 22.854C22.9948 22.8255 23.0002 22.7949 22.9994 22.7643C22.9419 20.5506 22.0507 18.4749 20.4752 16.9023ZM14.3747 14.3753C13.3914 14.3753 12.4657 13.9929 11.7729 13.2972C11.4251 12.9522 11.1505 12.5407 10.9653 12.0873C10.78 11.6338 10.688 11.1477 10.6948 10.658C10.7034 9.71502 11.08 8.80367 11.7384 8.12806C12.4283 7.42083 13.3512 7.02697 14.3373 7.01547C15.3119 7.00684 16.2577 7.38633 16.9535 8.06769C17.6664 8.76629 18.0574 9.70064 18.0574 10.6954C18.0574 11.6786 17.6751 12.6014 16.9793 13.2972C16.638 13.6401 16.232 13.912 15.785 14.0971C15.3379 14.2821 14.8585 14.3767 14.3747 14.3753ZM7.17299 11.4543C7.14711 11.2042 7.13274 10.9512 7.13274 10.6954C7.13274 10.2383 7.17586 9.79264 7.25636 9.35853C7.27648 9.25503 7.22186 9.14866 7.12699 9.10553C6.736 8.93016 6.37663 8.68867 6.06614 8.38393C5.70028 8.02919 5.41238 7.60207 5.22082 7.12984C5.02925 6.65761 4.93823 6.15064 4.95355 5.64126C4.97943 4.71841 5.35029 3.84156 5.99715 3.18033C6.70725 2.45298 7.66172 2.05624 8.67657 2.06774C9.59367 2.07636 10.4791 2.42998 11.149 3.05671C11.3761 3.26945 11.5716 3.5052 11.7355 3.75819C11.793 3.84731 11.9051 3.88469 12.0028 3.85019C12.5088 3.67482 13.0436 3.5512 13.5927 3.4937C13.7537 3.47645 13.8457 3.30395 13.7738 3.16021C12.8394 1.31164 10.9305 0.0351736 8.72257 0.000674563C5.53428 -0.048199 2.87786 2.5651 2.87786 5.74763C2.87786 7.55308 3.70871 9.16303 5.01105 10.2181C4.09683 10.6407 3.25448 11.2243 2.52425 11.9546C0.948794 13.5272 0.0575702 15.6028 7.18901e-05 17.8194C-0.000695439 17.8501 0.00468648 17.8806 0.0159007 17.9092C0.0271149 17.9378 0.0439344 17.9638 0.0653681 17.9858C0.0868019 18.0077 0.112416 18.0252 0.140702 18.0371C0.168988 18.049 0.199372 18.0552 0.230065 18.0551H1.84289C1.96651 18.0551 2.07001 17.9574 2.07289 17.8338C2.12751 16.1663 2.80311 14.6052 3.99045 13.4208C4.83568 12.5756 5.87065 11.9891 7.00049 11.7045C7.11261 11.6757 7.18736 11.5693 7.17299 11.4543V11.4543Z"
                  fill="#F2F2F2"
                />
              </svg>
              My friends
            </NavMenuLinkNavigate>
          </NavMenuItem>
          <NavMenuItem>
            <NavMenuLinkNavigate to="chat">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
              >
                <path
                  d="M18.975 0H3.025C1.3563 0 0 1.37111 0 3.05778V16.9411C0 18.6278 1.3563 20 3.025 20H18.975C20.6437 20 22 18.6278 22 16.9411V3.05778C22 1.37111 20.6437 0 18.975 0ZM3.025 1.66667H18.975C19.734 1.66667 20.35 2.28889 20.35 3.05556V3.84889L11.495 9.81222C11.1947 10.0122 10.8064 10.0144 10.505 9.81L1.65 3.84889V3.05556C1.65 2.28889 2.266 1.66667 3.025 1.66667V1.66667ZM18.975 18.3311H3.025C2.266 18.3311 1.65 17.7089 1.65 16.9422V5.80222L9.614 11.1689C10.0353 11.4533 10.5182 11.5956 11 11.5956C11.484 11.5956 11.9647 11.4533 12.386 11.17L20.35 5.80333V16.9389C20.35 17.7056 19.734 18.3278 18.975 18.3278V18.3311Z"
                  fill="#F2F2F2"
                />
              </svg>
              Chat
            </NavMenuLinkNavigate>
          </NavMenuItem>
          <NavMenuItem>
            <NavMenuLinkNavigate to={`profile/${id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="23"
                viewBox="0 0 19 23"
                fill="none"
              >
                <path
                  d="M9.50012 11.4887C11.0416 11.4887 12.7673 11.3191 13.8685 10.0684C14.7945 9.01681 15.0949 7.39076 14.7854 5.10206C14.3531 1.90762 12.3771 0 9.50012 0C6.62312 0 4.6471 1.90762 4.2148 5.10433C3.90538 7.39076 4.2057 9.01681 5.13171 10.0684C6.23292 11.3202 7.95866 11.4887 9.50012 11.4887V11.4887ZM5.90529 5.32822C6.08958 3.97129 6.80058 1.69617 9.50012 1.69617C12.1997 1.69617 12.9107 3.97242 13.095 5.32822C13.3304 7.08092 13.1598 8.29877 12.583 8.95236C12.0654 9.54036 11.1428 9.79253 9.50012 9.79253C7.85742 9.79253 6.93482 9.54036 6.41721 8.95236C5.84044 8.29877 5.6698 7.07979 5.90529 5.32822ZM18.9195 19.8791C17.9218 15.8919 14.0483 13.1057 9.50012 13.1057C4.95197 13.1057 1.07843 15.8919 0.0807466 19.8791C-0.114921 20.6616 0.0488934 21.4621 0.5301 22.0728C0.994243 22.6608 1.71321 23 2.50157 23H16.4987C17.287 23 18.006 22.6608 18.4701 22.0728C18.9525 21.4621 19.1152 20.6627 18.9184 19.8791H18.9195ZM17.1266 21.0279C16.9833 21.2088 16.7671 21.3061 16.4987 21.3061H2.50157C2.23423 21.3061 2.01695 21.21 1.87361 21.0279C1.71776 20.8312 1.66884 20.562 1.7371 20.2884C2.5448 17.06 5.73806 14.8041 9.50012 14.8041C13.2622 14.8041 16.4554 17.0589 17.2631 20.2884C17.3314 20.562 17.2825 20.8312 17.1266 21.0279V21.0279Z"
                  fill="#F2F2F2"
                />
              </svg>
              Profile
            </NavMenuLinkNavigate>
          </NavMenuItem>
        </NavMenuList>
      </nav>
      <LogOutBtn>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M2.55233 10.6682H13.9938V9.33483H2.55233L5.67954 6.20762V6.20758L4.73671 5.26483L0 10.0015L4.16438e-05 10.0015H0L4.73671 14.7382L5.67954 13.7955V13.7954L2.55233 10.6682Z"
            fill="black"
          />
          <path
            d="M6.0047 0V1.33333H18.6714V18.6667H6.0047V20H20.0047V0H6.0047Z"
            fill="black"
          />
        </svg>{" "}
        Log out
      </LogOutBtn>
    </NavMenuContainer>
  );
};
