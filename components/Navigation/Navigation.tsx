import React from "react";
import Link from "next/link";
import { BellIcon } from "@heroicons/react/outline";

import styles from "./Navigation.module.scss";

type NavigationProps = {};

const navigation = [
  { name: "Docs", href: "#", current: true },
  { name: "Components", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
];

const Navigation = (props: NavigationProps) => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navInnerContainer}>
        <div className={styles.leftNav}>
          <div className={styles.logoContainer}>
            <svg
              width="140"
              height="30"
              viewBox="0 0 140 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4191 13.3713C22.0401 13.7526 21.7499 14.2128 21.569 14.719C21.3882 15.2253 21.3213 15.7652 21.373 16.3003L21.355 16.2823C21.4082 16.9122 21.3232 17.546 21.1061 18.1397C20.889 18.7333 20.5451 19.2724 20.0982 19.7194C19.6512 20.1663 19.112 20.5104 18.5183 20.7274C17.9247 20.9445 17.2908 21.0295 16.661 20.9763L16.6791 20.9943C15.9257 20.9242 15.1689 21.0881 14.512 21.4638C13.8552 21.8395 13.3302 22.4086 13.0087 23.0936C12.6872 23.7786 12.5847 24.546 12.7153 25.2914C12.846 26.0367 13.2033 26.7236 13.7386 27.2584C14.2739 27.7932 14.9611 28.1499 15.7065 28.2798C16.452 28.4097 17.2193 28.3066 17.904 27.9845C18.5887 27.6623 19.1573 27.1369 19.5324 26.4797C19.9075 25.8225 20.0708 25.0657 20 24.3123L20.019 24.3303C19.9658 23.7005 20.0507 23.0666 20.2678 22.4729C20.4849 21.8793 20.829 21.3402 21.2759 20.8932C21.7229 20.4463 22.262 20.1022 22.8556 19.8852C23.4494 19.6681 24.0831 19.5831 24.713 19.6363L24.694 19.6183C25.3095 19.6736 25.929 19.5727 26.4951 19.3249C27.0611 19.0771 27.5554 18.6904 27.9322 18.2007C28.309 17.711 28.5562 17.134 28.6507 16.5234C28.7451 15.9127 28.684 15.2881 28.4727 14.7073C28.2615 14.1266 27.9071 13.6086 27.4424 13.2013C26.9777 12.794 26.4178 12.5106 25.8144 12.3774C25.2109 12.2442 24.5837 12.2654 23.9907 12.4391C23.3976 12.6129 22.8582 12.9335 22.4221 13.3713H22.4191Z"
                fill="black"
              />
              <path
                d="M15.042 18.6362L15.023 18.6182C15.5583 18.6721 16.0989 18.6064 16.6058 18.4258C17.1126 18.2452 17.573 17.9543 17.9536 17.574C18.3341 17.1937 18.6255 16.7335 18.8064 16.2268C18.9874 15.7201 19.0535 15.1796 19 14.6442L19.019 14.6622C18.9658 14.0323 19.0508 13.3985 19.2678 12.8048C19.4849 12.2112 19.829 11.6721 20.2759 11.2251C20.7229 10.7782 21.262 10.4341 21.8556 10.2171C22.4493 10 23.0831 9.91507 23.713 9.96824L23.694 9.95024C24.4475 10.021 25.2044 9.8576 25.8616 9.48234C26.5189 9.10708 27.0443 8.53821 27.3663 7.85334C27.6883 7.16848 27.7912 6.40095 27.661 5.65544C27.5308 4.90993 27.1738 4.22275 26.6386 3.68761C26.1035 3.15248 25.4163 2.79544 24.6708 2.66522C23.9253 2.53499 23.1578 2.6379 22.4729 2.95992C21.788 3.28193 21.2192 3.80738 20.8439 4.46459C20.4686 5.12179 20.3052 5.87876 20.376 6.63224L20.358 6.61324C20.4113 7.24313 20.3265 7.87707 20.1095 8.47079C19.8925 9.06451 19.5484 9.6037 19.1015 10.0507C18.6545 10.4976 18.1153 10.8417 17.5216 11.0587C16.9278 11.2757 16.2939 11.3605 15.664 11.3072L15.682 11.3262C15.1467 11.2723 14.606 11.338 14.0992 11.5186C13.5924 11.6991 13.132 11.9901 12.7514 12.3704C12.3708 12.7507 12.0795 13.2109 11.8985 13.7176C11.7176 14.2243 11.6515 14.7648 11.705 15.3002L11.687 15.2822C11.74 15.912 11.6549 16.5458 11.4378 17.1394C11.2206 17.7329 10.8766 18.272 10.4297 18.7189C9.98279 19.1658 9.44375 19.5098 8.85019 19.727C8.25663 19.9441 7.62284 20.0292 6.99303 19.9762L7.01103 19.9942C6.25755 19.9234 5.50058 20.0868 4.84337 20.4621C4.18617 20.8374 3.66072 21.4062 3.33871 22.0911C3.01669 22.776 2.91377 23.5435 3.044 24.289C3.17423 25.0345 3.53127 25.7217 4.0664 26.2568C4.60154 26.792 5.28872 27.149 6.03423 27.2792C6.77974 27.4094 7.54727 27.3065 8.23214 26.9845C8.917 26.6625 9.48587 26.1371 9.86113 25.4799C10.2364 24.8226 10.3998 24.0657 10.329 23.3122L10.348 23.3302C10.2948 22.7003 10.3798 22.0665 10.5969 21.4728C10.8139 20.8792 11.158 20.3401 11.6049 19.8931C12.0519 19.4462 12.591 19.1021 13.1846 18.8851C13.7783 18.668 14.4121 18.583 15.042 18.6362Z"
                fill="black"
              />
              <path
                d="M8.33997 16.6289C8.71899 16.2477 9.00917 15.7875 9.18981 15.2812C9.37045 14.7749 9.43709 14.2349 9.38497 13.6999L9.40396 13.7179C9.35076 13.0879 9.43572 12.4538 9.65293 11.86C9.87014 11.2662 10.2144 10.727 10.6616 10.28C11.1088 9.83306 11.6481 9.48907 12.242 9.27212C12.8359 9.05516 13.47 8.97046 14.1 9.02394L14.081 9.00594C14.8342 9.07651 15.5909 8.91302 16.2478 8.53778C16.9047 8.16255 17.4298 7.59382 17.7517 6.90917C18.0735 6.22451 18.1763 5.45726 18.0461 4.71203C17.9159 3.9668 17.5589 3.27988 17.024 2.74494C16.4891 2.21 15.8021 1.85308 15.0569 1.72286C14.3117 1.59263 13.5444 1.69545 12.8598 2.01727C12.1751 2.33909 11.6064 2.86426 11.2312 3.52116C10.8559 4.17806 10.6924 4.93472 10.763 5.68794L10.745 5.66994C10.7982 6.29979 10.7132 6.93366 10.4961 7.5273C10.279 8.12094 9.93499 8.66005 9.48803 9.10701C9.04108 9.55397 8.50196 9.898 7.90832 10.115C7.31468 10.3321 6.68082 10.4171 6.05097 10.3639L6.06897 10.3819C5.45354 10.3267 4.83413 10.4278 4.26815 10.6757C3.70217 10.9236 3.20792 11.3104 2.83121 11.8002C2.4545 12.2899 2.20752 12.8669 2.11314 13.4775C2.01877 14.0882 2.08006 14.7128 2.29133 15.2934C2.5026 15.8741 2.85703 16.392 3.32176 16.7992C3.78649 17.2065 4.34649 17.4898 4.94987 17.623C5.55324 17.7561 6.18047 17.7348 6.77344 17.5611C7.3664 17.3873 7.9059 17.0667 8.34196 16.6289H8.33997Z"
                fill="black"
              />
              <path
                d="M39.317 6.65527H42.287V21.1083H39.317V6.65527Z"
                fill="black"
              />
              <path
                d="M43.969 16.1586C43.9649 15.12 44.2691 14.1034 44.8431 13.2378C45.4171 12.3722 46.2351 11.6964 47.1935 11.2961C48.1519 10.8957 49.2075 10.7888 50.2267 10.9889C51.2459 11.189 52.1828 11.687 52.9187 12.42C53.6546 13.1529 54.1564 14.0878 54.3606 15.1062C54.5648 16.1246 54.4621 17.1807 54.0656 18.1407C53.6691 19.1006 52.9966 19.9214 52.1333 20.4988C51.2699 21.0763 50.2547 21.3846 49.216 21.3846C48.5266 21.3925 47.8425 21.2628 47.2037 21.0032C46.5649 20.7436 45.9843 20.3593 45.4958 19.8728C45.0072 19.3862 44.6206 18.8071 44.3585 18.1694C44.0963 17.5317 43.9639 16.8481 43.969 16.1586ZM51.493 16.1586C51.4806 15.7109 51.3365 15.2768 51.0788 14.9105C50.821 14.5443 50.461 14.2621 50.0438 14.0994C49.6265 13.9366 49.1706 13.9004 48.7329 13.9954C48.2952 14.0904 47.8952 14.3122 47.5829 14.6333C47.2707 14.9543 47.0599 15.3603 46.9772 15.8005C46.8944 16.2406 46.9431 16.6954 47.1174 17.108C47.2917 17.5206 47.5837 17.8726 47.9569 18.1201C48.3302 18.3676 48.7682 18.4996 49.216 18.4996C49.5227 18.5078 49.8278 18.4523 50.1121 18.3367C50.3963 18.2211 50.6535 18.0479 50.8674 17.828C51.0813 17.608 51.2474 17.3461 51.355 17.0588C51.4627 16.7715 51.5097 16.465 51.493 16.1586Z"
                fill="black"
              />
              <path
                d="M66.3 11.2088V20.6088C66.3 23.9348 63.706 25.3408 61.073 25.3408C60.146 25.4102 59.2177 25.2229 58.39 24.7996C57.5624 24.3762 56.8673 23.7331 56.381 22.9408L58.915 21.4758C59.1194 21.8888 59.4451 22.2295 59.8484 22.4524C60.2518 22.6752 60.7136 22.7696 61.172 22.7228C61.465 22.7634 61.7634 22.7376 62.0451 22.6473C62.3267 22.557 62.5845 22.4045 62.7993 22.2012C63.0141 21.9978 63.1804 21.7488 63.286 21.4724C63.3915 21.1961 63.4335 20.8996 63.409 20.6048V19.6998C63.0612 20.1253 62.6186 20.4634 62.1165 20.6869C61.6144 20.9104 61.067 21.0131 60.518 20.9868C59.2118 20.9456 57.9729 20.3978 57.0635 19.4592C56.1541 18.5207 55.6456 17.2651 55.6456 15.9583C55.6456 14.6515 56.1541 13.3959 57.0635 12.4574C57.9729 11.5188 59.2118 10.971 60.518 10.9298C61.067 10.9035 61.6144 11.0062 62.1165 11.2297C62.6186 11.4532 63.0612 11.7913 63.409 12.2168V11.2068L66.3 11.2088ZM63.41 15.9598C63.43 15.4812 63.3062 15.0075 63.0547 14.5998C62.8032 14.192 62.4354 13.8689 61.9987 13.672C61.562 13.475 61.0764 13.4133 60.6043 13.4947C60.1322 13.5761 59.6953 13.7969 59.3497 14.1288C59.0042 14.4606 58.7659 14.8882 58.6654 15.3566C58.565 15.825 58.607 16.3128 58.7862 16.7571C58.9653 17.2014 59.2733 17.582 59.6705 17.8498C60.0677 18.1176 60.536 18.2604 61.015 18.2598C61.3271 18.2816 61.6402 18.2378 61.9343 18.1312C62.2284 18.0246 62.4969 17.8575 62.7225 17.6409C62.9481 17.4242 63.1259 17.1627 63.2443 16.8731C63.3627 16.5836 63.4192 16.2725 63.41 15.9598Z"
                fill="black"
              />
              <path
                d="M67.982 16.1586C67.9779 15.12 68.282 14.1034 68.8561 13.2378C69.4301 12.3722 70.248 11.6964 71.2064 11.2961C72.1648 10.8957 73.2205 10.7888 74.2397 10.9889C75.2589 11.189 76.1958 11.687 76.9317 12.42C77.6676 13.1529 78.1693 14.0878 78.3735 15.1062C78.5777 16.1246 78.475 17.1807 78.0785 18.1407C77.682 19.1006 77.0096 19.9214 76.1463 20.4988C75.2829 21.0763 74.2676 21.3846 73.2289 21.3846C72.5395 21.3925 71.8553 21.2628 71.2166 21.0032C70.5778 20.7436 69.9972 20.3593 69.5087 19.8728C69.0201 19.3862 68.6335 18.8071 68.3714 18.1694C68.1092 17.5317 67.9769 16.8481 67.982 16.1586ZM75.5059 16.1586C75.4935 15.7109 75.3494 15.2768 75.0917 14.9105C74.8339 14.5443 74.474 14.2621 74.0568 14.0994C73.6395 13.9366 73.1835 13.9004 72.7459 13.9954C72.3082 14.0904 71.9082 14.3122 71.5959 14.6333C71.2837 14.9543 71.0728 15.3603 70.99 15.8005C70.9072 16.2406 70.9561 16.6954 71.1304 17.108C71.3047 17.5206 71.5967 17.8726 71.9699 18.1201C72.3432 18.3676 72.781 18.4996 73.2289 18.4996C73.5356 18.5078 73.8408 18.4523 74.125 18.3367C74.4093 18.2211 74.6665 18.0479 74.8804 17.828C75.0943 17.608 75.2603 17.3461 75.3679 17.0588C75.4756 16.7715 75.5226 16.465 75.5059 16.1586Z"
                fill="black"
              />
              <path
                d="M79.861 8.55642C79.861 8.20397 79.9655 7.85944 80.1613 7.5664C80.3571 7.27335 80.6355 7.04494 80.9611 6.91007C81.2867 6.77519 81.645 6.7399 81.9907 6.80866C82.3363 6.87742 82.6539 7.04714 82.9031 7.29636C83.1523 7.54557 83.322 7.86309 83.3908 8.20877C83.4595 8.55444 83.4242 8.91274 83.2894 9.23836C83.1545 9.56398 82.9261 9.84229 82.633 10.0381C82.34 10.2339 81.9955 10.3384 81.643 10.3384C81.1719 10.3337 80.7213 10.1445 80.3881 9.8113C80.055 9.47812 79.8657 9.02758 79.861 8.55642ZM80.161 11.2094H83.132V21.1094H80.157L80.161 11.2094Z"
                fill="black"
              />
              <path
                d="M95.9561 16.1593C95.9904 16.8136 95.8951 17.4682 95.6755 18.0855C95.456 18.7028 95.1166 19.2706 94.6768 19.7563C94.2371 20.2419 93.7056 20.6359 93.1131 20.9155C92.5205 21.195 91.8786 21.3547 91.2241 21.3853C90.6737 21.4153 90.1236 21.3225 89.6135 21.1136C89.1034 20.9046 88.6463 20.5848 88.2751 20.1773V25.0683H85.3051V11.2093H88.2751V12.1393C88.6464 11.7321 89.1037 11.4125 89.6137 11.2038C90.1238 10.995 90.6738 10.9023 91.2241 10.9323C91.8787 10.9628 92.5208 11.1224 93.1135 11.402C93.7062 11.6816 94.2377 12.0756 94.6775 12.5614C95.1173 13.0472 95.4567 13.6152 95.6761 14.2327C95.8955 14.8501 95.9907 15.5049 95.9561 16.1593ZM92.9861 16.1593C92.9745 15.696 92.8265 15.2464 92.5606 14.8667C92.2947 14.4871 91.9228 14.1943 91.4914 14.0251C91.0599 13.8558 90.5881 13.8175 90.135 13.9151C89.6819 14.0126 89.2677 14.2416 88.9441 14.5734C88.6205 14.9053 88.402 15.3251 88.3159 15.7806C88.2298 16.236 88.2799 16.7066 88.46 17.1337C88.64 17.5608 88.9421 17.9252 89.3283 18.1815C89.7145 18.4377 90.1676 18.5744 90.6311 18.5743C90.9493 18.5885 91.2669 18.5352 91.5631 18.418C91.8592 18.3009 92.1273 18.1224 92.3496 17.8944C92.572 17.6663 92.7436 17.3939 92.8533 17.0949C92.963 16.7959 93.0083 16.477 92.9861 16.1593Z"
                fill="black"
              />
              <path
                d="M105.121 18.1379C105.121 20.4149 103.142 21.3849 101.004 21.3849C100.14 21.4631 99.2726 21.2805 98.5137 20.8604C97.7548 20.4404 97.1394 19.8024 96.7469 19.0289L99.3199 17.5639C99.424 17.9214 99.6476 18.2325 99.9533 18.445C100.259 18.6576 100.629 18.7589 101 18.7319C101.712 18.7319 102.069 18.5139 102.069 18.1189C102.069 17.0289 97.1979 17.6039 97.1979 14.1789C97.1979 12.0199 99.0199 10.9319 101.079 10.9319C101.853 10.9074 102.619 11.091 103.298 11.4635C103.977 11.8361 104.544 12.3839 104.939 13.0499L102.405 14.4159C102.294 14.1566 102.109 13.9357 101.873 13.7808C101.637 13.6259 101.361 13.5439 101.079 13.5449C100.564 13.5449 100.247 13.7449 100.247 14.0989C100.251 15.2279 105.121 14.4749 105.121 18.1379Z"
                fill="black"
              />
              <path
                d="M115.97 11.209V21.109H113V20.178C112.657 20.5888 112.222 20.9125 111.73 21.1225C111.238 21.3325 110.704 21.4228 110.17 21.386C108.17 21.386 106.47 19.961 106.47 17.286V11.209H109.44V16.851C109.415 17.0868 109.442 17.3252 109.519 17.5495C109.595 17.7739 109.72 17.9789 109.884 18.1502C110.048 18.3215 110.247 18.455 110.468 18.5415C110.688 18.628 110.925 18.6654 111.162 18.651C112.251 18.651 113.003 18.018 113.003 16.612V11.212L115.97 11.209Z"
                fill="black"
              />
              <path
                d="M133 15.0297V21.1077H130.03V15.2867C130.03 14.2967 129.555 13.6637 128.605 13.6637C127.615 13.6637 127.06 14.3567 127.06 15.5247V21.1077H124.091V15.2867C124.091 14.2967 123.616 13.6637 122.665 13.6637C121.675 13.6637 121.121 14.3567 121.121 15.5247V21.1077H118.151V11.2077H121.121V12.1177C121.429 11.714 121.833 11.3938 122.296 11.1865C122.76 10.9791 123.268 10.8912 123.774 10.9307C124.282 10.9058 124.788 11.0131 125.243 11.242C125.697 11.4708 126.084 11.8136 126.367 12.2367C126.696 11.794 127.132 11.442 127.634 11.2136C128.136 10.9852 128.688 10.8879 129.238 10.9307C131.511 10.9317 133 12.5547 133 15.0297Z"
                fill="black"
              />
              <path
                d="M135.512 11.1482C136.729 11.1482 137.716 10.1614 137.716 8.94423C137.716 7.72699 136.729 6.74023 135.512 6.74023C134.295 6.74023 133.308 7.72699 133.308 8.94423C133.308 10.1614 134.295 11.1482 135.512 11.1482Z"
                fill="black"
              />
            </svg>
            {/* <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4191 13.3713C22.0401 13.7526 21.7499 14.2128 21.569 14.719C21.3882 15.2253 21.3213 15.7652 21.373 16.3003L21.355 16.2823C21.4082 16.9122 21.3232 17.546 21.1061 18.1397C20.889 18.7333 20.5451 19.2724 20.0982 19.7194C19.6512 20.1663 19.112 20.5104 18.5183 20.7274C17.9247 20.9445 17.2908 21.0295 16.661 20.9763L16.6791 20.9943C15.9257 20.9242 15.1689 21.0881 14.512 21.4638C13.8552 21.8395 13.3302 22.4086 13.0087 23.0936C12.6872 23.7786 12.5847 24.546 12.7153 25.2914C12.846 26.0367 13.2033 26.7236 13.7386 27.2584C14.2739 27.7932 14.9611 28.1499 15.7065 28.2798C16.452 28.4097 17.2193 28.3066 17.904 27.9845C18.5887 27.6623 19.1573 27.1369 19.5324 26.4797C19.9075 25.8225 20.0708 25.0657 20 24.3123L20.019 24.3303C19.9658 23.7005 20.0507 23.0666 20.2678 22.4729C20.4849 21.8793 20.829 21.3402 21.2759 20.8932C21.7229 20.4463 22.262 20.1022 22.8556 19.8852C23.4494 19.6681 24.0831 19.5831 24.713 19.6363L24.694 19.6183C25.3095 19.6736 25.929 19.5727 26.4951 19.3249C27.0611 19.0771 27.5554 18.6904 27.9322 18.2007C28.309 17.711 28.5562 17.134 28.6507 16.5234C28.7451 15.9127 28.684 15.2881 28.4727 14.7073C28.2615 14.1266 27.9071 13.6086 27.4424 13.2013C26.9777 12.794 26.4178 12.5106 25.8144 12.3774C25.2109 12.2442 24.5837 12.2654 23.9907 12.4391C23.3976 12.6129 22.8582 12.9335 22.4221 13.3713H22.4191Z"
                fill="black"
              />
              <path
                d="M15.042 18.6362L15.023 18.6182C15.5583 18.6721 16.0989 18.6064 16.6058 18.4258C17.1126 18.2452 17.573 17.9543 17.9536 17.574C18.3341 17.1937 18.6255 16.7335 18.8064 16.2268C18.9874 15.7201 19.0535 15.1796 19 14.6442L19.019 14.6622C18.9658 14.0323 19.0508 13.3985 19.2678 12.8048C19.4849 12.2112 19.829 11.6721 20.2759 11.2251C20.7229 10.7782 21.262 10.4341 21.8556 10.2171C22.4493 10 23.0831 9.91507 23.713 9.96824L23.694 9.95024C24.4475 10.021 25.2044 9.8576 25.8616 9.48234C26.5189 9.10708 27.0443 8.53821 27.3663 7.85334C27.6883 7.16848 27.7912 6.40095 27.661 5.65544C27.5308 4.90993 27.1738 4.22275 26.6386 3.68761C26.1035 3.15248 25.4163 2.79544 24.6708 2.66522C23.9253 2.53499 23.1578 2.6379 22.4729 2.95992C21.788 3.28193 21.2192 3.80738 20.8439 4.46459C20.4686 5.12179 20.3052 5.87876 20.376 6.63224L20.358 6.61324C20.4113 7.24313 20.3265 7.87707 20.1095 8.47079C19.8925 9.06451 19.5484 9.6037 19.1015 10.0507C18.6545 10.4976 18.1153 10.8417 17.5216 11.0587C16.9278 11.2757 16.2939 11.3605 15.664 11.3072L15.682 11.3262C15.1467 11.2723 14.606 11.338 14.0992 11.5186C13.5924 11.6991 13.132 11.9901 12.7514 12.3704C12.3708 12.7507 12.0795 13.2109 11.8985 13.7176C11.7176 14.2243 11.6515 14.7648 11.705 15.3002L11.687 15.2822C11.74 15.912 11.6549 16.5458 11.4378 17.1394C11.2206 17.7329 10.8766 18.272 10.4297 18.7189C9.98279 19.1658 9.44375 19.5098 8.85019 19.727C8.25663 19.9441 7.62284 20.0292 6.99303 19.9762L7.01103 19.9942C6.25755 19.9234 5.50058 20.0868 4.84337 20.4621C4.18617 20.8374 3.66072 21.4062 3.33871 22.0911C3.01669 22.776 2.91377 23.5435 3.044 24.289C3.17423 25.0345 3.53127 25.7217 4.0664 26.2568C4.60154 26.792 5.28872 27.149 6.03423 27.2792C6.77974 27.4094 7.54727 27.3065 8.23214 26.9845C8.917 26.6625 9.48587 26.1371 9.86113 25.4799C10.2364 24.8226 10.3998 24.0657 10.329 23.3122L10.348 23.3302C10.2948 22.7003 10.3798 22.0665 10.5969 21.4728C10.8139 20.8792 11.158 20.3401 11.6049 19.8931C12.0519 19.4462 12.591 19.1021 13.1846 18.8851C13.7783 18.668 14.4121 18.583 15.042 18.6362Z"
                fill="black"
              />
              <path
                d="M8.33997 16.6289C8.71899 16.2477 9.00917 15.7875 9.18981 15.2812C9.37045 14.7749 9.43709 14.2349 9.38497 13.6999L9.40396 13.7179C9.35076 13.0879 9.43572 12.4538 9.65293 11.86C9.87014 11.2662 10.2144 10.727 10.6616 10.28C11.1088 9.83306 11.6481 9.48907 12.242 9.27212C12.8359 9.05516 13.47 8.97046 14.1 9.02394L14.081 9.00594C14.8342 9.07651 15.5909 8.91302 16.2478 8.53778C16.9047 8.16255 17.4298 7.59382 17.7517 6.90917C18.0735 6.22451 18.1763 5.45726 18.0461 4.71203C17.9159 3.9668 17.5589 3.27988 17.024 2.74494C16.4891 2.21 15.8021 1.85308 15.0569 1.72286C14.3117 1.59263 13.5444 1.69545 12.8598 2.01727C12.1751 2.33909 11.6064 2.86426 11.2312 3.52116C10.8559 4.17806 10.6924 4.93472 10.763 5.68794L10.745 5.66994C10.7982 6.29979 10.7132 6.93366 10.4961 7.5273C10.279 8.12094 9.93499 8.66005 9.48803 9.10701C9.04108 9.55397 8.50196 9.898 7.90832 10.115C7.31468 10.3321 6.68082 10.4171 6.05097 10.3639L6.06897 10.3819C5.45354 10.3267 4.83413 10.4278 4.26815 10.6757C3.70217 10.9236 3.20792 11.3104 2.83121 11.8002C2.4545 12.2899 2.20752 12.8669 2.11314 13.4775C2.01877 14.0882 2.08006 14.7128 2.29133 15.2934C2.5026 15.8741 2.85703 16.392 3.32176 16.7992C3.78649 17.2065 4.34649 17.4898 4.94987 17.623C5.55324 17.7561 6.18047 17.7348 6.77344 17.5611C7.3664 17.3873 7.9059 17.0667 8.34196 16.6289H8.33997Z"
                fill="black"
              />
            </svg> */}
          </div>
        </div>

        <div className={styles.rightNav}>
          <nav className={styles.navLinks}>
            {navigation.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={styles.link}
                  aria-current={link.current ? "page" : undefined}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </nav>

          <div className={styles.themeContainer}>
            <button type="button">
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;