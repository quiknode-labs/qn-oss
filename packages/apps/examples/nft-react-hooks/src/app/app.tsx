import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div>
          <svg
            width="229"
            height="26"
            viewBox="0 0 229 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.8405 8.76628H31.7214V6.34491H28.8405V8.76628ZM31.686 9.72069H28.8581V19.0351H31.686V9.72069Z"
              fill="white"
            />
            <path
              d="M32.9373 14.3867C32.9373 17.2499 35.288 19.2295 38.54 19.2295C41.3149 19.2295 43.1 17.7095 43.6125 16.1895L41.1735 15.1114C40.8554 16.1011 39.901 16.9318 38.5223 16.9318C36.8963 16.9318 35.6944 15.9597 35.6944 14.3867C35.6944 12.796 36.8963 11.8416 38.5223 11.8416C39.901 11.8416 40.8554 12.6723 41.1735 13.6444L43.6125 12.6016C43.1177 11.064 41.3149 9.52628 38.54 9.52628C35.288 9.52628 32.9373 11.5058 32.9373 14.3867Z"
              fill="white"
            />
            <path
              d="M50.7554 19.4769L55.4744 9.72067H52.4874L49.5535 16.0481L46.6019 9.72067H43.4382L47.9452 18.77L47.8568 19.0351C47.521 19.8657 46.8847 20.0602 46.1777 20.0602C45.7005 20.0602 45.241 19.9188 44.8345 19.7067L44.3573 21.9337C44.7992 22.1281 45.7182 22.3225 46.4782 22.3225C48.5991 22.3225 49.748 21.5448 50.7554 19.4769Z"
              fill="white"
            />
            <path
              d="M54.4318 19.0351H57.6838V15.8714H54.4318V19.0351Z"
              fill="white"
            />
            <path
              d="M59.0578 16.0128C59.0578 18.2927 60.7368 19.1765 62.8401 19.1765C64.1479 19.1765 65.3148 18.9113 66.1102 18.6109L65.5973 16.3662C64.9789 16.5784 64.307 16.7551 63.5825 16.7551C62.3983 16.7551 61.8327 16.3839 61.8327 15.3765V12.0537H65.7036V9.72067H61.8327V7.14026H59.0578V9.72067H56.9369V12.0537H59.0578V16.0128Z"
              fill="white"
            />
            <path
              d="M72.0582 9.52628C68.9296 9.52628 66.5079 11.4528 66.5079 14.3867C66.5079 17.3206 68.9296 19.2295 72.0582 19.2295C75.1861 19.2295 77.6256 17.3206 77.6256 14.3867C77.6256 11.4528 75.1861 9.52628 72.0582 9.52628ZM72.0582 16.9318C70.5203 16.9318 69.2655 16.0128 69.2655 14.3867C69.2655 12.7783 70.5203 11.8416 72.0582 11.8416C73.6132 11.8416 74.8679 12.7783 74.8679 14.3867C74.8679 16.0128 73.6132 16.9318 72.0582 16.9318Z"
              fill="white"
            />
            <path
              d="M84.0015 9.52628C80.8736 9.52628 78.4519 11.4528 78.4519 14.3867C78.4519 17.3206 80.8736 19.2295 84.0015 19.2295C87.13 19.2295 89.5689 17.3206 89.5689 14.3867C89.5689 11.4528 87.13 9.52628 84.0015 9.52628ZM84.0015 16.9318C82.4642 16.9318 81.2095 16.0128 81.2095 14.3867C81.2095 12.7783 82.4642 11.8416 84.0015 11.8416C85.5572 11.8416 86.8119 12.7783 86.8119 14.3867C86.8119 16.0128 85.5572 16.9318 84.0015 16.9318Z"
              fill="white"
            />
            <path
              d="M93.6327 6.34491H90.8044V19.0351H93.6327V6.34491Z"
              fill="white"
            />
            <path
              d="M94.4414 17.4974C95.5199 18.5932 97.5878 19.2295 99.7441 19.2295C102.66 19.2295 104.852 18.169 104.852 15.9951C104.852 13.8741 102.766 13.4676 100.38 13.1849C98.3653 12.9551 97.7468 12.9021 97.7468 12.3895C97.7468 11.9123 98.3831 11.6119 99.585 11.6119C101.034 11.6119 102.289 12.0537 103.137 12.8313L104.605 11.1346C103.668 10.2332 101.918 9.52628 99.7263 9.52628C96.7746 9.52628 94.9542 10.7988 94.9542 12.7076C94.9542 14.7048 96.8102 15.1467 99.0372 15.4295C101.122 15.6769 102.006 15.6769 102.006 16.2955C102.006 16.8788 101.229 17.1263 99.956 17.1263C98.3653 17.1263 96.8987 16.6314 95.7852 15.6063L94.4414 17.4974Z"
              fill="white"
            />
            <path
              d="M12.2021 4.23985C12.2021 4.59665 12.4542 4.74235 12.7623 4.5642L16.0779 2.64645C16.386 2.46831 16.386 2.17564 16.0779 1.99749L12.7623 0.0760518C12.4542 -0.102349 12.2021 0.0441126 12.2021 0.400406V4.23985Z"
              fill="#00CEFF"
            />
            <path
              d="M17.9702 7.5796C17.9702 7.93585 18.2224 8.0822 18.5305 7.90378L21.8461 5.98415C22.1542 5.806 22.1542 5.51333 21.8461 5.33518L18.5305 3.41451C18.2224 3.23636 17.9702 3.38219 17.9702 3.73886V7.5796Z"
              fill="#00CEFF"
            />
            <path
              d="M17.8644 10.4807C17.6907 10.3928 17.4988 10.347 17.3041 10.347C17.1096 10.347 16.9177 10.3928 16.744 10.4807L13.4283 12.4003C13.1202 12.5785 13.1202 12.8712 13.4283 13.0493L16.744 14.969C16.9177 15.0569 17.1096 15.1027 17.3041 15.1027C17.4988 15.1027 17.6907 15.0569 17.8644 14.969L21.18 13.0493C21.4881 12.8712 21.4881 12.5785 21.18 12.4003L17.8644 10.4807Z"
              fill="#00CEFF"
            />
            <path
              d="M16.4735 16.5453C16.5708 16.7143 16.6272 16.9038 16.6382 17.0986V20.9382C16.6382 21.2948 16.386 21.4405 16.0779 21.2624L12.7623 19.3427C12.5996 19.2358 12.4641 19.0921 12.3668 18.9231C12.2695 18.7542 12.2131 18.5646 12.2021 18.3698V14.5303C12.2021 14.1736 12.4542 14.0277 12.7623 14.2059L16.0779 16.1257C16.2407 16.2326 16.3762 16.3763 16.4735 16.5453Z"
              fill="#00CEFF"
            />
            <path
              d="M16.6382 4.51126C16.6382 4.15498 16.386 4.00864 16.0779 4.18704L12.7623 6.1067C12.5996 6.21361 12.4641 6.35734 12.3668 6.52632C12.2695 6.69532 12.2131 6.8848 12.2021 7.07963V10.9192C12.2021 11.2755 12.4542 11.4218 12.7623 11.2435L16.0779 9.32377C16.2407 9.21687 16.3762 9.07314 16.4735 8.90414C16.5708 8.73515 16.6272 8.54567 16.6382 8.35084V4.51126Z"
              fill="#00CEFF"
            />
            <path
              d="M17.9702 17.8699C17.9702 17.5132 18.2224 17.3675 18.5305 17.5456L21.8461 19.4641C22.1542 19.6423 22.1542 19.935 21.8461 20.1131L18.5305 22.0338C18.2224 22.2121 17.9702 22.0657 17.9702 21.7094V17.8699Z"
              fill="#00CEFF"
            />
            <path
              d="M23.0724 7.46535C23.0724 7.10853 22.8202 6.96282 22.5121 7.14098L19.1964 9.05998C18.8883 9.23877 18.8883 9.53082 19.1964 9.70898L22.5121 11.6291C22.8202 11.8075 23.0724 11.6611 23.0724 11.3048V7.46535Z"
              fill="#00CEFF"
            />
            <path
              d="M22.5121 13.8203C22.8202 13.6422 23.0724 13.7879 23.0724 14.1447V17.9841C23.0724 18.3404 22.8202 18.4869 22.5121 18.3085L19.1964 16.3887C18.8883 16.2106 18.8883 15.9179 19.1964 15.7397L22.5121 13.8203Z"
              fill="#00CEFF"
            />
            <path
              d="M12.2021 21.2096C12.2021 20.8528 12.4542 20.7071 12.7623 20.8852L16.0779 22.8036C16.386 22.9818 16.386 23.2744 16.0779 23.4526L12.7623 25.3734C12.4542 25.5518 12.2021 25.4053 12.2021 25.049V21.2096Z"
              fill="#00CEFF"
            />
            <path
              d="M10.31 4.56419C10.6181 4.74234 10.8701 4.59664 10.8701 4.23984V0.400396C10.8701 0.043594 10.6181 -0.10185 10.31 0.0762968L6.99425 1.99774C6.68616 2.17588 6.68616 2.46856 6.99425 2.6467L10.31 4.56419Z"
              fill="#0075FF"
            />
            <path
              d="M10.31 14.2059C10.6181 14.0276 10.8701 14.1739 10.8701 14.5303V25.0505C10.8701 25.4074 10.6181 25.5531 10.31 25.3749L6.99425 23.4541C6.83149 23.3472 6.69597 23.2035 6.59868 23.0345C6.50139 22.8655 6.44508 22.676 6.4342 22.4812V17.0986C6.44508 16.9037 6.50146 16.7143 6.59868 16.5453C6.69597 16.3763 6.83149 16.2325 6.99425 16.1256L10.31 14.2059Z"
              fill="#0075FF"
            />
            <path
              d="M10.3101 11.2435C10.6181 11.4217 10.8701 11.2759 10.8701 10.9192V7.07963C10.8592 6.8848 10.8029 6.69525 10.7056 6.52626C10.6083 6.3573 10.4728 6.21358 10.3101 6.1067L5.66223 3.41567C5.48851 3.32777 5.29665 3.28198 5.10207 3.28198C4.9075 3.28198 4.71563 3.32777 4.54192 3.41567L1.22631 5.33546C0.918217 5.5136 0.918217 5.80627 1.22631 5.98442L10.3101 11.2435Z"
              fill="#0075FF"
            />
            <path
              d="M5.10213 17.8699C5.10213 17.5136 4.85 17.3672 4.54192 17.5456L1.22631 19.4653C0.918217 19.6434 0.918217 19.9361 1.22631 20.1143L4.54192 22.0349C4.85 22.2131 5.10213 22.0672 5.10213 21.7105V17.8699Z"
              fill="#0075FF"
            />
            <path
              d="M5.76807 10.3469C5.96265 10.3469 6.15453 10.3927 6.32822 10.4807L9.64356 12.4001C9.95164 12.5782 9.95164 12.8709 9.64356 13.0491L0.560216 18.3085C0.252129 18.4869 0 18.3404 0 17.9841V14.1447C0.0109429 13.9499 0.0673318 13.7603 0.164631 13.5913C0.261932 13.4223 0.397426 13.2785 0.560216 13.1716L5.20791 10.4807C5.38161 10.3927 5.57347 10.3469 5.76807 10.3469Z"
              fill="#0075FF"
            />
            <path
              d="M0.560216 7.14097C0.252129 6.96256 0 7.10852 0 7.46534V11.3049C0 11.6612 0.252129 11.8075 0.560216 11.6291L3.87583 9.70897C4.18392 9.53081 4.18392 9.23813 3.87583 9.05997L0.560216 7.14097Z"
              fill="#0075FF"
            />
            <path
              d="M169.643 12.7269C169.643 13.2024 169.593 13.6584 169.495 14.0947C169.396 14.5261 169.254 14.9305 169.066 15.308C168.884 15.6855 168.66 16.0335 168.394 16.3522C168.128 16.6659 167.826 16.9429 167.486 17.1831L170.197 20.1246H168.557C168.32 20.1246 168.106 20.0927 167.914 20.029C167.727 19.9652 167.555 19.8476 167.397 19.676L165.831 17.9553C165.58 18.0239 165.322 18.0754 165.056 18.1097C164.795 18.144 164.521 18.1612 164.236 18.1612C163.428 18.1612 162.689 18.0263 162.02 17.7567C161.355 17.4822 160.784 17.1023 160.306 16.6169C159.833 16.1316 159.466 15.558 159.205 14.8962C158.944 14.2295 158.814 13.5064 158.814 12.7269C158.814 11.9474 158.944 11.2268 159.205 10.565C159.466 9.89826 159.833 9.32224 160.306 8.8369C160.784 8.35157 161.355 7.97409 162.02 7.70446C162.689 7.42993 163.428 7.29267 164.236 7.29267C165.043 7.29267 165.779 7.42993 166.444 7.70446C167.109 7.97899 167.678 8.35892 168.151 8.84426C168.623 9.32469 168.99 9.89826 169.251 10.565C169.512 11.2268 169.643 11.9474 169.643 12.7269ZM167.604 12.7269C167.604 12.1435 167.525 11.6214 167.368 11.1606C167.215 10.6949 166.993 10.3003 166.703 9.9767C166.412 9.65314 166.058 9.40557 165.639 9.23399C165.225 9.06241 164.758 8.97662 164.236 8.97662C163.714 8.97662 163.243 9.06241 162.825 9.23399C162.406 9.40557 162.049 9.65314 161.754 9.9767C161.463 10.3003 161.239 10.6949 161.082 11.1606C160.924 11.6214 160.845 12.1435 160.845 12.7269C160.845 13.3103 160.924 13.8348 161.082 14.3006C161.239 14.7614 161.463 15.1536 161.754 15.4771C162.049 15.7958 162.406 16.0409 162.825 16.2125C163.243 16.3841 163.714 16.4699 164.236 16.4699C164.758 16.4699 165.225 16.3841 165.639 16.2125C166.058 16.0409 166.412 15.7958 166.703 15.4771C166.993 15.1536 167.215 14.7614 167.368 14.3006C167.525 13.8348 167.604 13.3103 167.604 12.7269Z"
              fill="white"
            />
            <path
              d="M172.188 10.4988V15.2933C172.188 15.7541 172.294 16.112 172.506 16.3669C172.722 16.6169 173.045 16.7419 173.473 16.7419C173.789 16.7419 174.084 16.6733 174.36 16.536C174.636 16.3939 174.897 16.2002 175.143 15.9551V10.4988H176.967V18.0435H175.852C175.615 18.0435 175.46 17.9332 175.386 17.7126L175.261 17.1096C175.103 17.2665 174.941 17.4111 174.773 17.5435C174.606 17.6709 174.426 17.7812 174.234 17.8744C174.047 17.9626 173.843 18.0312 173.621 18.0803C173.404 18.1342 173.171 18.1612 172.919 18.1612C172.506 18.1612 172.139 18.0925 171.819 17.9553C171.504 17.8131 171.238 17.6145 171.021 17.3596C170.804 17.1047 170.639 16.8032 170.526 16.4551C170.418 16.1022 170.364 15.7149 170.364 15.2933V10.4988H172.188Z"
              fill="white"
            />
            <path
              d="M180.267 10.4988V18.0435H178.442V10.4988H180.267ZM180.54 8.3001C180.54 8.45697 180.508 8.60404 180.444 8.74131C180.38 8.87857 180.294 8.99868 180.186 9.10163C180.082 9.20458 179.959 9.28792 179.816 9.35165C179.674 9.41048 179.521 9.43989 179.358 9.43989C179.201 9.43989 179.051 9.41048 178.908 9.35165C178.77 9.28792 178.649 9.20458 178.546 9.10163C178.442 8.99868 178.359 8.87857 178.295 8.74131C178.236 8.60404 178.206 8.45697 178.206 8.3001C178.206 8.13832 178.236 7.98635 178.295 7.84418C178.359 7.70201 178.442 7.57945 178.546 7.4765C178.649 7.37355 178.77 7.29266 178.908 7.23384C179.051 7.17011 179.201 7.13824 179.358 7.13824C179.521 7.13824 179.674 7.17011 179.816 7.23384C179.959 7.29266 180.082 7.37355 180.186 7.4765C180.294 7.57945 180.38 7.70201 180.444 7.84418C180.508 7.98635 180.54 8.13832 180.54 8.3001Z"
              fill="white"
            />
            <path
              d="M187.07 12.0945C187.016 12.1631 186.961 12.2171 186.907 12.2563C186.858 12.2955 186.784 12.3151 186.686 12.3151C186.592 12.3151 186.501 12.2882 186.412 12.2342C186.324 12.1754 186.218 12.1117 186.095 12.043C185.972 11.9695 185.824 11.9058 185.651 11.8518C185.484 11.793 185.275 11.7636 185.024 11.7636C184.704 11.7636 184.423 11.8224 184.182 11.9401C183.94 12.0528 183.738 12.2171 183.576 12.4328C183.418 12.6485 183.3 12.9108 183.221 13.2196C183.143 13.5235 183.103 13.8692 183.103 14.2564C183.103 14.6584 183.145 15.0163 183.229 15.3301C183.317 15.6438 183.443 15.9085 183.605 16.1242C183.768 16.335 183.965 16.4968 184.196 16.6096C184.428 16.7174 184.689 16.7713 184.979 16.7713C185.27 16.7713 185.504 16.737 185.681 16.6684C185.863 16.5949 186.016 16.5164 186.139 16.4331C186.262 16.3448 186.368 16.2664 186.457 16.1978C186.55 16.1242 186.654 16.0875 186.767 16.0875C186.915 16.0875 187.025 16.1438 187.099 16.2566L187.624 16.9184C187.422 17.1537 187.203 17.3523 186.966 17.5141C186.73 17.6709 186.484 17.7984 186.228 17.8964C185.976 17.9896 185.715 18.0558 185.445 18.095C185.174 18.1342 184.905 18.1538 184.64 18.1538C184.172 18.1538 183.731 18.068 183.317 17.8964C182.904 17.72 182.542 17.465 182.232 17.1317C181.926 16.7983 181.682 16.3914 181.5 15.911C181.323 15.4257 181.234 14.8741 181.234 14.2564C181.234 13.7025 181.313 13.1902 181.471 12.7196C181.633 12.244 181.87 11.8347 182.18 11.4915C182.49 11.1435 182.874 10.8714 183.332 10.6753C183.79 10.4792 184.317 10.3811 184.913 10.3811C185.479 10.3811 185.974 10.4718 186.398 10.6532C186.826 10.8346 187.21 11.0944 187.55 11.4327L187.07 12.0945Z"
              fill="white"
            />
            <path
              d="M190.04 7.11618V13.374H190.38C190.503 13.374 190.599 13.3569 190.668 13.3225C190.737 13.2882 190.811 13.2245 190.889 13.1314L192.773 10.815C192.857 10.717 192.945 10.641 193.039 10.587C193.133 10.5282 193.256 10.4988 193.408 10.4988H195.078L192.721 13.3005C192.638 13.4034 192.551 13.499 192.463 13.5873C192.374 13.6706 192.278 13.7441 192.175 13.8079C192.278 13.8814 192.369 13.9672 192.448 14.0653C192.527 14.1633 192.606 14.2687 192.684 14.3815L195.211 18.0435H193.563C193.421 18.0435 193.3 18.019 193.201 17.97C193.103 17.9209 193.014 17.8376 192.936 17.72L191.008 14.8594C190.934 14.7467 190.86 14.6731 190.786 14.6388C190.712 14.6045 190.601 14.5874 190.454 14.5874H190.04V18.0435H188.216V7.11618H190.04Z"
              fill="white"
            />
            <path
              d="M196.899 7.41032C196.987 7.41032 197.061 7.41522 197.12 7.42503C197.179 7.42993 197.231 7.44464 197.275 7.46915C197.324 7.48876 197.371 7.52062 197.416 7.56474C197.46 7.60396 197.509 7.65789 197.563 7.72652L203.17 14.8374C203.15 14.6658 203.135 14.4991 203.125 14.3373C203.12 14.1707 203.118 14.0162 203.118 13.8741V7.41032H204.869V18.0435H203.842C203.684 18.0435 203.554 18.019 203.45 17.97C203.347 17.9209 203.246 17.8327 203.148 17.7052L197.563 10.6238C197.578 10.7807 197.588 10.9376 197.593 11.0944C197.603 11.2464 197.608 11.3861 197.608 11.5136V18.0435H195.857V7.41032H196.899Z"
              fill="white"
            />
            <path
              d="M209.564 10.3811C210.131 10.3811 210.643 10.4718 211.101 10.6532C211.564 10.8346 211.958 11.092 212.283 11.4253C212.608 11.7587 212.859 12.1656 213.036 12.646C213.213 13.1265 213.302 13.6633 213.302 14.2564C213.302 14.8545 213.213 15.3938 213.036 15.8742C212.859 16.3546 212.608 16.764 212.283 17.1023C211.958 17.4405 211.564 17.7003 211.101 17.8817C210.643 18.0631 210.131 18.1538 209.564 18.1538C208.998 18.1538 208.483 18.0631 208.021 17.8817C207.558 17.7003 207.161 17.4405 206.831 17.1023C206.506 16.764 206.253 16.3546 206.071 15.8742C205.893 15.3938 205.805 14.8545 205.805 14.2564C205.805 13.6633 205.893 13.1265 206.071 12.646C206.253 12.1656 206.506 11.7587 206.831 11.4253C207.161 11.092 207.558 10.8346 208.021 10.6532C208.483 10.4718 208.998 10.3811 209.564 10.3811ZM209.564 16.7566C210.195 16.7566 210.66 16.5458 210.96 16.1242C211.266 15.7026 211.418 15.0849 211.418 14.2712C211.418 13.4574 211.266 12.8372 210.96 12.4107C210.66 11.9842 210.195 11.771 209.564 11.771C208.924 11.771 208.451 11.9867 208.146 12.4181C207.841 12.8446 207.688 13.4623 207.688 14.2712C207.688 15.08 207.841 15.6977 208.146 16.1242C208.451 16.5458 208.924 16.7566 209.564 16.7566Z"
              fill="white"
            />
            <path
              d="M219.468 18.0435C219.231 18.0435 219.076 17.9332 219.002 17.7126L218.855 16.9846C218.697 17.1611 218.532 17.3204 218.36 17.4626C218.187 17.6047 218 17.7273 217.798 17.8303C217.601 17.9332 217.387 18.0116 217.156 18.0656C216.929 18.1244 216.683 18.1538 216.417 18.1538C216.003 18.1538 215.624 18.068 215.279 17.8964C214.935 17.7249 214.637 17.4773 214.386 17.1537C214.139 16.8253 213.947 16.4208 213.81 15.9404C213.677 15.46 213.61 14.9109 213.61 14.2932C213.61 13.7343 213.686 13.2147 213.839 12.7343C213.992 12.2538 214.211 11.8371 214.497 11.4842C214.782 11.1312 215.124 10.8567 215.523 10.6606C215.922 10.4596 216.37 10.3591 216.868 10.3591C217.291 10.3591 217.653 10.4277 217.953 10.565C218.254 10.6973 218.522 10.8763 218.759 11.1018V7.11618H220.583V18.0435H219.468ZM217.037 16.7125C217.417 16.7125 217.739 16.6341 218.005 16.4772C218.271 16.3203 218.522 16.0973 218.759 15.808V12.4254C218.552 12.1754 218.325 11.9989 218.079 11.896C217.838 11.793 217.577 11.7415 217.296 11.7415C217.02 11.7415 216.769 11.793 216.543 11.896C216.321 11.9989 216.131 12.1558 215.974 12.3666C215.821 12.5725 215.703 12.8372 215.619 13.1608C215.536 13.4794 215.494 13.8569 215.494 14.2932C215.494 14.7344 215.528 15.1095 215.597 15.4183C215.671 15.7222 215.774 15.9723 215.907 16.1684C216.04 16.3595 216.203 16.4993 216.395 16.5875C216.587 16.6708 216.801 16.7125 217.037 16.7125Z"
              fill="white"
            />
            <path
              d="M225.101 10.3811C225.578 10.3811 226.017 10.4571 226.416 10.6091C226.819 10.7611 227.167 10.9841 227.457 11.2783C227.748 11.5675 227.974 11.9254 228.137 12.3519C228.299 12.7735 228.38 13.2564 228.38 13.8005C228.38 13.9378 228.373 14.053 228.358 14.1461C228.348 14.2344 228.326 14.3055 228.292 14.3594C228.262 14.4084 228.22 14.4452 228.166 14.4697C228.112 14.4893 228.043 14.4991 227.959 14.4991H223.276C223.331 15.2737 223.54 15.8424 223.904 16.2051C224.269 16.5679 224.751 16.7493 225.352 16.7493C225.647 16.7493 225.901 16.715 226.113 16.6463C226.329 16.5777 226.517 16.5017 226.674 16.4184C226.837 16.335 226.977 16.2591 227.095 16.1904C227.218 16.1218 227.336 16.0875 227.45 16.0875C227.524 16.0875 227.588 16.1022 227.642 16.1316C227.696 16.161 227.743 16.2027 227.782 16.2566L228.314 16.9184C228.112 17.1537 227.886 17.3523 227.634 17.5141C227.383 17.6709 227.12 17.7984 226.844 17.8964C226.573 17.9896 226.295 18.0558 226.009 18.095C225.729 18.1342 225.455 18.1538 225.189 18.1538C224.663 18.1538 224.173 18.068 223.72 17.8964C223.267 17.72 222.873 17.4626 222.538 17.1243C222.203 16.7812 221.939 16.3596 221.747 15.8595C221.555 15.3546 221.459 14.7712 221.459 14.1094C221.459 13.5946 221.543 13.1117 221.71 12.6607C221.878 12.2048 222.117 11.8102 222.427 11.4768C222.742 11.1386 223.124 10.8714 223.572 10.6753C224.025 10.4792 224.535 10.3811 225.101 10.3811ZM225.138 11.6827C224.606 11.6827 224.19 11.8322 223.889 12.1313C223.589 12.4303 223.397 12.8544 223.313 13.4034H226.741C226.741 13.1681 226.709 12.9475 226.645 12.7416C226.581 12.5308 226.482 12.347 226.349 12.1901C226.216 12.0332 226.049 11.9107 225.847 11.8224C225.645 11.7293 225.409 11.6827 225.138 11.6827Z"
              fill="white"
            />
            <path
              d="M139.726 20.6791C141.886 20.6791 143.845 19.8176 145.279 18.4194C145.318 18.3811 145.381 18.381 145.42 18.4198L152.153 25.1534C152.228 25.2275 152.151 25.3512 152.052 25.318L146.579 23.4936C146.55 23.4842 146.519 23.488 146.494 23.5039C144.533 24.7376 142.213 25.4512 139.726 25.4512C132.697 25.4512 127 19.7537 127 12.7256C127 5.69744 132.697 0 139.726 0C146.754 0 152.451 5.69744 152.451 12.7256C152.451 15.7274 151.412 18.4865 149.673 20.6626C149.636 20.7086 149.568 20.7121 149.526 20.6704L142.807 13.9513C142.733 13.8771 142.809 13.7535 142.909 13.7867L147.179 15.2099C147.231 15.2273 147.287 15.1992 147.304 15.1469C147.548 14.3834 147.679 13.5699 147.679 12.7256C147.679 8.33299 144.118 4.77209 139.726 4.77209C135.333 4.77209 131.772 8.33299 131.772 12.7256C131.772 17.1182 135.333 20.6791 139.726 20.6791Z"
              fill="#00A4D6"
            />
          </svg>
        </div>
        <div className="links">
          <Link to="/wallets">Wallet</Link>
          <Link to="/collections">Collections</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
